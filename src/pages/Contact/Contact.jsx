import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import toast from "react-hot-toast";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      toast.error("Please fill all fields");
      return;
    }

    toast.success("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100 py-16">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="text-center mb-14">

            <h1 className="text-4xl lg:text-5xl font-bold">
              Contact Us
            </h1>

            <p className="text-gray-500 mt-4">
              We'd love to hear from you. Fill out the form below and we'll get back to you soon.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            <div className="bg-white rounded-2xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-8">
                Send a Message
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
                >
                  Send Message
                </button>

              </form>

            </div>

            {/* Contact Information */}

            <div className="bg-white rounded-2xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">

                <div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-blue-600" />
                    <h3 className="font-semibold text-lg">
                      Email
                    </h3>
                  </div>

                  <p className="text-gray-600 mt-2">
                    support@luxora.com
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-green-600" />
                    <h3 className="font-semibold text-lg">
                      Phone
                    </h3>
                  </div>

                  <p className="text-gray-600 mt-2">
                    +91 98765 43210
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-red-600" />
                    <h3 className="font-semibold text-lg">
                      Address
                    </h3>
                  </div>

                  <p className="text-gray-600 mt-2 leading-7">
                    LUXORA Fashion Store
                    <br />
                    Gorakhpur, Uttar Pradesh
                    <br />
                    India
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <FaClock className="text-orange-500" />
                    <h3 className="font-semibold text-lg">
                      Business Hours
                    </h3>
                  </div>

                  <p className="text-gray-600">
                    Monday - Saturday
                  </p>

                  <p className="text-gray-600">
                    10:00 AM - 8:00 PM
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default Contact;