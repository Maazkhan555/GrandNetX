import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Z from "zod";

// Validation schema
const contactFormSchema = Z.object({
  name: Z.string().nonempty("Name is required"),
  email: Z.string().email("Invalid email").nonempty("Email is required"),
  subject: Z.string().nonempty("Subject is required"),
  message: Z.string().nonempty("Message is required"),
});

const initialValues = { name: "", email: "", subject: "", message: "" };

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data) => {
    setLoading(true);
    // Show all form data in an alert
    alert(
      `Form Submitted!\n\nName: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\nMessage: ${data.message}`
    );
    reset(initialValues);
    setLoading(false);
  };

  return (
    <section id="contact" className="p-6 md:p-20 flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl flex flex-col gap-7 text-[#a7a7a7]"
      >
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-white md:text-2xl font-semibold mb-2"
          >
            Name
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            placeholder="Tommy"
            className="w-full px-4 py-4 font-light md:text-base text-sm placeholder:text-[#fafafa50] bg-black-300 rounded-md"
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block md:text-2xl font-semibold mb-2"
          >
            Email address
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            placeholder="hello@gmail.com"
            className="w-full px-4 py-4 font-light md:text-base text-sm placeholder:text-[#fafafa50] bg-black-300 rounded-md"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block md:text-2xl font-semibold mb-2"
          >
            Subject
          </label>
          <input
            {...register("subject")}
            id="subject"
            type="text"
            placeholder="Enter your subject"
            className="w-full px-4 py-4 font-light md:text-base text-sm placeholder:text-[#fafafa50] bg-black-300 rounded-md"
          />
          {errors.subject && (
            <span className="text-red-500">{errors.subject.message}</span>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block md:text-2xl font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            {...register("message")}
            id="message"
            placeholder="Enter your message"
            rows="5"
            className="w-full px-4 py-4 font-light md:text-base text-sm placeholder:text-[#fafafa50] bg-black-300 rounded-md"
          />
          {errors.message && (
            <span className="text-red-500">{errors.message.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 bg-blue-50 text-white-50 font-semibold rounded-md hover:bg-blue-600 transition duration-300"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
