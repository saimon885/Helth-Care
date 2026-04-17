import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-base-100 py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl text-secondary font-bold mb-4">
            <span className="text-primary">About </span>
            Home Care
          </h2>
          <p className="text-accent">
            Home Care is a trusted caregiving platform where users can easily
            find and book reliable care services for their family members.
            Through our platform, families can access Baby Care, Elderly Care,
            and Sick Care services with confidence.
          </p>
          <p className="text-accent mt-4">
            Our goal is to make caregiving services simple, safe, and accessible
            for everyone. With just a few steps, users can select the service
            they need and book a professional caregiver for their loved ones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600">
              Our mission is to provide safe, reliable, and professional care
              services for families. We aim to simplify caregiving by connecting
              families with trusted caregivers who can provide compassionate
              support for children, elderly members, and patients at home.
            </p>
          </div>

          <div className="bg-base-200 p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Why Choose Us</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✔ Trusted and verified caregivers</li>
              <li>✔ Easy and fast booking system</li>
              <li>✔ Flexible service duration</li>
              <li>✔ Safe and secure caregiving service</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-secondary  text-center mb-10">
            <span className="text-primary">It Works </span>
             How
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-base-200 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold mb-3">1️⃣</div>
              <h4 className="font-semibold mb-2">Select Service</h4>
              <p className="text-gray-600 text-sm">
                Choose the type of care service you need such as Baby Care,
                Elderly Care, or Sick Care.
              </p>
            </div>

            <div className="bg-base-200 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold mb-3">2️⃣</div>
              <h4 className="font-semibold mb-2">Fill Booking Details</h4>
              <p className="text-gray-600 text-sm">
                Provide the necessary booking information including location,
                service time, and requirements.
              </p>
            </div>

            <div className="bg-base-200 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold mb-3">3️⃣</div>
              <h4 className="font-semibold mb-2">Confirm Caregiver</h4>
              <p className="text-gray-600 text-sm">
                A professional caregiver will be assigned to provide the
                requested service at your home.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="bg-base-200 p-6 rounded-xl">
            <h4 className="text-3xl font-bold text-primary">500+</h4>
            <p className="text-gray-600">Happy Families</p>
          </div>

          <div className="bg-base-200 p-6 rounded-xl">
            <h4 className="text-3xl font-bold text-primary">100+</h4>
            <p className="text-gray-600">Caregivers</p>
          </div>

          <div className="bg-base-200 p-6 rounded-xl col-span-2 md:col-span-1">
            <h4 className="text-3xl font-bold text-primary">1000+</h4>
            <p className="text-gray-600">Successful Bookings</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
