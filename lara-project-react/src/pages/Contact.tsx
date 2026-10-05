import { useState } from "react";
import { defaultContact } from "../interfaces/Contact";

export default function Contact() {
  const [contact, setContact] = useState(defaultContact);

  const handleSubmit = () => {
      console.log(contact);
  }
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Name" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} /><br /><br />
        <input type="text" placeholder="Email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} /><br /><br />
        <textarea placeholder="Your message" value={contact.message} onChange={(e) => setContact({ ...contact, message: e.target.value })}></textarea><br /><br />
        <button className="bg-amber-400 p-2" onClick={handleSubmit} type="button">Submit</button>
      </form>
    </div>
  );
}
