import React, { useState } from "react";
// import "./ContactPage.css";

export default function Contact() {
  const initial = {
    name: "Vishal Chauhan",
    email: "vishalchauhan2109@gmail.com",
    topic: "Order issue",
    orderId: "",
    message: "",
  };

  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const topics = [
    "Order issue",
    "Payment & refund",
    "Account & login",
    "Feedback & feature request",
    "Partner inquiry",
    "Other"
  ];

  const validate = (vals) => {
    const e = {};
    if (!vals.name.trim() || vals.name.trim().length < 2) e.name = "Enter your full name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(vals.email)) e.email = "Valid email required";
    if (vals.message.trim().length < 10) e.message = "Message too short";
    if ((vals.topic === "Order issue" || vals.topic === "Payment & refund") && !vals.orderId.trim())
      e.orderId = "Order ID helps us respond faster";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate(form);
    if (Object.keys(v).length) { setErrors(v); setSubmitted(false); return; }
    await new Promise(r => setTimeout(r, 300));
    setSubmitted(true);
    setForm((prev) => ({ ...prev, message: "", orderId: "" }));
  };

  return (
    <div className="page">
     
      <main className="main">
        {submitted && <div className="success">Thanks, {form.name}! Your message was sent.</div>}
        <form onSubmit={handleSubmit} className="contact-form">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className={errors.name ? 'error' : ''} />
          {errors.name && <span className="error-text">{errors.name}</span>}
          
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" className={errors.email ? 'error' : ''} />
          {errors.email && <span className="error-text">{errors.email}</span>}
          
          <select name="topic" value={form.topic} onChange={handleChange}>
            {topics.map(t => <option key={t} value={t}>{t}</option>)}
          </select>

          {(form.topic === "Order issue" || form.topic === "Payment & refund") && (
            <>
              <input name="orderId" value={form.orderId} onChange={handleChange} placeholder="Order ID" className={errors.orderId ? 'error' : ''} />
              {errors.orderId && <span className="error-text">{errors.orderId}</span>}
            </>
          )}
          
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message" className={errors.message ? 'error' : ''} />
          {errors.message && <span className="error-text">{errors.message}</span>}

          <button type="submit">Send Message</button>
        </form>
      </main>
    </div>
  );
}
