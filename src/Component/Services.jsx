import React, { useState, useEffect } from "react";

function Services() {
  // Sample testimonials
  const testimonials = [
    {
      name: "Sanjana Kashimkar",
      feedback: "Amazing service! My car feels brand new.",
      rating: 5,
    },
    {
      name: "Muskan Burde",
      feedback: "Friendly staff and prompt service. Highly recommended!",
      rating: 4.5,
    },
  ];

  // Sample services
  const services = [
    { name: "Routine Maintenance", description: "Engine checks, tire rotation, and more.", icon: "🛠" },
    { name: "Oil Change", description: "High-quality oil and filters.", icon: "🛢" },
    { name: "Brake Services", description: "Brake inspection and repairs.", icon: "🚗" },
    { name: "Tire Services", description: "Tire replacement and alignment.", icon: "🔧" },
    { name: "Battery Services", description: "Battery checks and replacement.", icon: "🔋" },
  ];

  // Booking form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted!");
  };

  // Carousel images
  const heroImages = [
    {
        src: "https://i.pinimg.com/564x/5e/bb/bc/5ebbbc5f5bf1342f3ecb073ecf6b886f.jpg", // Replace with your actual image paths
        title: "Professional Car Service Center",
        subtitle: "Reliable, Fast, and Affordable Car Services",
      },
      {
        src: "https://i.pinimg.com/564x/4f/d0/37/4fd0370c94d2d3de2a07756097322fca.jpg", // Another image
        title: "Expert Technicians at Your Service",
        subtitle: "Certified Professionals for Every Job",
      },
      {
        src: "https://i.pinimg.com/564x/68/84/22/688422d96074a73360e567763e187866.jpg", // Another image
        title: "Customer Satisfaction Guaranteed",
        subtitle: "We Ensure Your Vehicle Gets the Best Care",
      }, 
  ];

  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === heroImages.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Manually change slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === heroImages.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? heroImages.length - 1 : prevSlide - 1
    );
  };

  return (
    <div>
      {/* Hero Section with Carousel */}
      <div className="relative h-[500px] overflow-hidden">
        {/* Carousel Images */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="relative bg-cover bg-center h-full flex items-center justify-center"
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative z-10 text-center">
                <h1 className="text-4xl font-bold text-white mb-4">
                  {image.title}
                </h1>
                <p className="text-white text-lg mb-6">{image.subtitle}</p>
                <a
                  href="#booking"
                  className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                  Book a Service
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
        >
          &#10095;
        </button>
      </div>

      {/* Services List */}
      <div className="container mx-auto py-12" id="services">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <div className="text-4xl">{service.icon}</div>
              <h3 className="text-2xl font-bold mt-4">{service.name}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose Our Service Center?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">Certified Technicians</h3>
              <p className="text-gray-600 mt-2">
                Our experts are fully certified to provide high-quality services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">Genuine Parts</h3>
              <p className="text-gray-600 mt-2">
                We use only manufacturer-approved parts for your car.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">Customer Satisfaction</h3>
              <p className="text-gray-600 mt-2">
                Our services are designed to ensure you leave satisfied.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form with Background Image */}
      <div
        id="booking"
        className="bg-cover bg-center p-8 rounded-lg shadow-md mt-12 container mx-auto"
        style={{
          backgroundImage: `url('https://i.pinimg.com/564x/65/87/d2/6587d23aedb356208c38c6b265661acd.jpg')`, // Replace with your image path
        }}
      >
        <div className="bg-white bg-opacity-60 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Book a Service</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded"
              required
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded"
              required
            >
              <option value="">Select Service</option>
              <option value="Routine Maintenance">Routine Maintenance</option>
              <option value="Oil Change">Oil Change</option>
              <option value="Brake Services">Brake Services</option>
              <option value="Tire Services">Tire Services</option>
            </select>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded"
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition"
            >
              Submit Booking
            </button>
          </form>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">{testimonial.name}</h3>
              <p className="text-gray-600 mt-2">"{testimonial.feedback}"</p>
              <p className="text-yellow-500 mt-2">
                Rating: {testimonial.rating} / 5
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;