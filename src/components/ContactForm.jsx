import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import * as Z from "zod";

const contactFormSchema = Z.object({
  from_name: Z.string().min(1, "Name is required"),
  from_email: Z.string().email("Invalid email").min(1, "Email is required"),
  from_phone: Z.string().min(1, "Phone number is required"),
  subject: Z.string().min(1, "Subject is required"),
  message: Z.string().min(1, "Message is required"),
});

const initialValues = { from_name: "", from_email: "", from_phone: "", subject: "", message: "" };

const SERVICE_ID = "service_kohxfqe";
const TEMPLATE_ID = "template_e9u1u8j";
const PUBLIC_KEY = "f30W-I8KJaxffRDZ6";

const ContactForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async () => {
    setLoading(true);
    setSuccess(false);
    setError(false);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setSuccess(true);
      reset(initialValues);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3.5 font-light md:text-base text-sm placeholder:text-black/20 bg-white rounded-xl border border-black/10 focus:border-black/35 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all duration-200 text-black";

  const labelClass = "block text-black/70 text-sm font-medium mb-1.5 tracking-wide";

  return (
    <section className="p-5 md:p-10 flex justify-center">
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl flex flex-col gap-5 text-black"
      >
        {/* Name + Email row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className={labelClass}>Full Name</label>
            <input {...register("from_name")} id="name" type="text" placeholder="John Doe" className={inputClass} />
            {errors.from_name && <span className="text-red-400 text-xs mt-1 block">{errors.from_name.message}</span>}
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>Email Address</label>
            <input {...register("from_email")} id="email" type="email" placeholder="hello@gmail.com" className={inputClass} />
            {errors.from_email && <span className="text-red-400 text-xs mt-1 block">{errors.from_email.message}</span>}
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>Phone / WhatsApp</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30 text-sm select-none">+</span>
            <input
              {...register("from_phone")}
              id="phone"
              type="tel"
              placeholder="923001234567"
              className={`${inputClass} pl-7`}
            />
          </div>
          {errors.from_phone && <span className="text-red-400 text-xs mt-1 block">{errors.from_phone.message}</span>}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className={labelClass}>Subject</label>
          <input {...register("subject")} id="subject" type="text" placeholder="e.g. Mobile App Development" className={inputClass} />
          {errors.subject && <span className="text-red-400 text-xs mt-1 block">{errors.subject.message}</span>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelClass}>Message</label>
          <textarea
            {...register("message")}
            id="message"
            placeholder="Tell us about your project..."
            rows="5"
            className={`${inputClass} resize-none`}
          />
          {errors.message && <span className="text-red-400 text-xs mt-1 block">{errors.message.message}</span>}
        </div>

        {/* Feedback */}
        {success && (
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-black/4 border border-black/8 text-black/60 text-sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 flex-shrink-0 text-black">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            Message sent! We&apos;ll get back to you within 24 hours.
          </div>
        )}
        {error && (
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-50 border border-red-100 text-red-500 text-sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 flex-shrink-0">
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            Something went wrong. Please try again or contact us on WhatsApp.
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-black text-white font-semibold rounded-xl hover:bg-black/85 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
              Sending...
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Send Message
            </>
          )}
        </button>

        {/* WhatsApp */}
        <p className="text-center text-black/25 text-sm">
          Or reach us on{" "}
          <a href="https://wa.me/923103581426" target="_blank" rel="noreferrer"
            className="text-black/60 font-medium hover:text-black underline underline-offset-2 transition-colors">
            WhatsApp +92 310 3581426
          </a>
        </p>
      </form>
    </section>
  );
};

export default ContactForm;
