import React from "react";
import "../styles/contact.scss";

function Contact() {
  return (
    <div className="contact">
      <main>
        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Name here" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" required placeholder="email here" />
          </div>
          
          <div>
            <label>Contact </label>
            <input type="tel" required placeholder=" contact no " />
          </div>

          <div>
            <label>Your Query</label>
            <textarea placeholder="Enter Your Query Here" />
          </div>

          <div className="button">
            <input type="submit" />
          </div>
        </form>
      </main>
    </div>
  );
}

export default Contact;
