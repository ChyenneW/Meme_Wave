import ContactForm from "~/components/contact/ContactForm";
import ContactGreeting from "~/components/contact/ContactGreeting";

export default function Report() {
  return (
    <div className="flex h-full flex-grow gap-2 p-4">
      <ContactGreeting />
      <ContactForm />
    </div>
  );
}
