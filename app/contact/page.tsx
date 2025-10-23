import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Spark Games for game support, business inquiries, or any questions. Commercial name of Naolito Games SL.",
};

export default function Contact() {
  return (
    <>
      {/* Hidden server-rendered form for Netlify detection */}
      <form name="contact" method="POST" data-netlify="true" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="subject" />
        <textarea name="message"></textarea>
      </form>

      <ContactContent />
    </>
  );
}
