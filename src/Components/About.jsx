import React from "react";

export default function AboutPage() {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1><u>GOOD-FOOD</u></h1>
      </header>
      <section className="about-content">
        <p>
           GOOD-FOOD  is your friendly neighbourhood food delivery app—delivering delicious meals
          swiftly, fresh, and with love! Whether you're craving spicy biryani or light salads,
          we have you covered.
        </p>
        <p>
          Our mission is to bring joy, taste, and convenience to your doorstep. We partner
          with trusted chefs and restaurants to ensure every bite is a delight.
        </p>
      </section>
      <section className="about-team">
        <h2>Our Story</h2>
        <p>
          Started by food lovers, for food lovers. We believe that great food should be shared,
          savoured, and celebrated — every day.
        </p>
      </section>
      <footer className="about-footer">
        <p>Stay hungry. Stay happy.</p>
      </footer>
    </div>
  );
}
