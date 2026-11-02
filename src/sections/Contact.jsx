import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/ContactExperience";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="relative md:px-0 px-5 bg-[#fafafa] py-24 md:py-32">
      <div className="container mx-auto">
        <TitleHeader title="Contact Us" number="09" text="Let's build something great together" />
        <div className="mt-16 md:mt-20">
          <div className="grid grid-cols-12">
            <div className="md:col-span-5 col-span-12 md:order-none order-1 relative z-10">
              <ContactForm />
            </div>
            <div className="md:col-span-7 col-span-12">
              <div className="w-full md:h-full h-80 md:absolute top-0 md:left-96 left-0 md:m-0 -mt-24">
                <ContactExperience />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
