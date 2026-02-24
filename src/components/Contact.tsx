import React, { useState, useMemo } from 'react';
import { TerminalWindow, type ContactFormState } from './TerminalWindow';
import { Send, Mail, Phone, Check } from 'lucide-react';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isFilled = formData.name.trim() !== '' && formData.email.trim() !== '' && formData.message.trim() !== '';
  const formState: ContactFormState = useMemo(() => {
    if (submitted) return 'submitted';
    if (isFilled) return 'filled';
    return 'empty';
  }, [submitted, isFilled]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFilled || loading || submitted) return;
    setError(null);
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || `Request failed (${res.status})`);
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send. Try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="flex flex-col justify-center gap-8">
          <div>
            <h3 className="text-4xl font-bebas text-white mb-2">
              VISIT THE <span className="text-challenger-orange">GARAGE</span>
            </h3>
            <p className="font-rajdhani text-gray-400">
              Ready to tune up your next project? Drop a line and let's discuss
              the specs.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-zinc-900 border border-zinc-700 flex items-center justify-center group-hover:border-challenger-orange transition-colors">
                <Mail className="text-white group-hover:text-challenger-orange transition-colors" />
              </div>
              <div>
                <div className="font-tech text-xs text-muted-metal">EMAIL</div>
                <div className="text-xl text-white">
                  mir.saif.ali2004@gmail.com
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-zinc-900 border border-zinc-700 flex items-center justify-center group-hover:border-challenger-orange transition-colors">
                <Phone className="text-white group-hover:text-challenger-orange transition-colors" />
              </div>
              <div>
                <div className="font-tech text-xs text-muted-metal">PHONE</div>
                <div className="font-bebas text-xl text-white">
                  +91-8649806002
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <TerminalWindow title="CONTACT_FORM.EXE" formState={formState}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-bebas text-white mb-1 tracking-wide">
                DRIVER NAME
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value
                })
                }
                className="w-full bg-black border-b-2 border-zinc-700 p-3 text-white font-rajdhani focus:outline-none focus:border-challenger-orange transition-colors placeholder-zinc-700"
                placeholder="ENTER NAME..." />

            </div>

            <div>
              <label className="block font-bebas text-white mb-1 tracking-wide">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value
                })
                }
                className="w-full bg-black border-b-2 border-zinc-700 p-3 text-white font-rajdhani focus:outline-none focus:border-challenger-orange transition-colors placeholder-zinc-700"
                placeholder="ENTER EMAIL..." />

            </div>

            <div>
              <label className="block font-bebas text-white mb-1 tracking-wide">
                MESSAGE SPECS
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value
                })
                }
                className="w-full bg-black border-b-2 border-zinc-700 p-3 text-white font-rajdhani focus:outline-none focus:border-challenger-orange transition-colors placeholder-zinc-700 resize-none"
                placeholder="ENTER DETAILS..." />

            </div>

            {error && (
              <p className="font-tech text-brake-red text-sm" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={!isFilled || submitted || loading}
              className={`w-full text-white font-bebas text-xl py-3 tracking-widest transition-all duration-500 flex items-center justify-center gap-2 group ${
                formState === 'empty' ? 'bg-brake-red hover:bg-red-700' :
                formState === 'filled' ? 'bg-form-yellow hover:bg-yellow-600' :
                'bg-form-green cursor-default'
              }`}>

              {loading ? 'SENDING...' : submitted ? 'SENT' : 'SEND IT'}{' '}
              {submitted ? (
                <Check size={18} className="text-white" />
              ) : (
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              )}

            </button>
          </form>
        </TerminalWindow>
      </div>
    </section>);

}