import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Spark Games for game support, business inquiries, or any questions. Commercial name of Naolito Games SL.",
};

export default function Contact() {
  return <ContactContent />;
}
