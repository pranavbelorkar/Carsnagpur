<<<<<<< HEAD
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Search } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const carouselImages = [
  'https://i.pinimg.com/564x/38/46/1e/38461e0ecb8fb2e38e16b7bb124a849c.jpg',
  'https://i.pinimg.com/736x/d5/c0/7f/d5c07f94967a17669435253d259c1a8b.jpg',
  'https://i.pinimg.com/564x/f7/1a/db/f71adba018cee51c84720113ff6a7dea.jpg',
]

const specializedServices = [
  { name: 'Schedule maintenance', icon: '🔧' },
  { name: 'Wheel care', icon: '🚗' },
  { name: 'AC service & repair', icon: '❄' },
  { name: 'Car inspection', icon: '🔍' },
  { name: 'Denting and painting', icon: '🎨' },
  { name: 'Suspension repair', icon: '🔩' },
  { name: 'Steering repair', icon: '🚘' },
  { name: 'Transmission', icon: '⚙' },
  { name: 'Brakes maintenance', icon: '🛑' },
  { name: 'Car detailing', icon: '✨' },
  { name: 'Car cleaning', icon: '🧼' },
  { name: 'Car shine', icon: '🌟' },
]

const maintenancePackages = [
  {
    name: 'Essential Service Package',
    description: 'Engine oil replacement, Oil filter replacement',
    image:'https://i.pinimg.com/564x/de/f7/75/def77519e5e546eaf2cd43d6fdb0d9f4.jpg'
  },
  {
    name: 'Max Service Package',
    description: 'Engine oil replacement, Wheel Alignment/Balance',
    image: 'https://i.pinimg.com/564x/ea/1d/f7/ea1df7e71b4d4f119aeaa1698e88b2cf.jpg'
  },
  {
    name: 'Luxury Service Basic',
    description: 'Engine Oil Replacement, Oil Filter Replacement',
    image: 'https://i.pinimg.com/564x/56/af/7e/56af7e9ba82de76ddaf25c829c41ffb8.jpg'
  },
  {
    name: 'Luxury Service Premium',
    description: 'Engine oil replacement, Cabin air filter replacement',
    image: 'https://i.pinimg.com/736x/a1/f0/e2/a1f0e2bd40ab56513aa3d52d89abc213.jpg'
  },
]

const acServices = [
  {
    name: 'Regular AC Service',
    description: 'Thorough AC inspection • Takes 60 mins • Includes 5 activities',
    image: 'https://media.fourdoor.com/fourdoor-images/package-pdp-images/718-x-428/regular-ac-service.jpg?h=238&w=400'
  },
  {
    name: 'Detailed AC Service',
    description: 'Thorough AC inspection • Takes 4 hours • Includes 9 activities',
    image: 'https://i.pinimg.com/564x/70/4d/aa/704daa789a9c361bccf483d9b9b73646.jpg',
    recommended: true,
  },
  {
    name: 'Radiator Flush & Cleaning',
    description: 'Enhances engine cooling • Takes 2 hours • Includes 5 activities',
    image: 'https://i.pinimg.com/564x/88/1d/f5/881df58166dc2eb5fa6d197e8103f1c3.jpg',
    new: true,
  },
]

export  function Services() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section with Carousel and Search Bar */}
      <section className="relative h-[600px] overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentSlide}
            src={carouselImages[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="absolute inset-0 w-full h-full object-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-white mb-4">Welcome to Our Car Service Center</h1>
            <div className="flex justify-center">
              <motion.input
                type="text"
                placeholder="Search for services..."
                className="px-4 py-2 w-64 rounded-l-md focus:outline-none"
                whileFocus={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <motion.button
                className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Search className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
        <motion.button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6 text-blue-600" />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6 text-blue-600" />
        </motion.button>
      </section>

      {/* Explore Car Services Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-8 text-blue-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Explore Car Services
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {specializedServices.map((service, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-4 bg-gray-100 rounded-lg cursor-pointer"
                whileHover={{ scale: 1.05, backgroundColor: '#FEF3C7' }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-4xl mb-2">{service.icon}</span>
                <span className="text-center text-sm">{service.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service & Maintenance Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-8 text-blue-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Service & Maintenance
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {maintenancePackages.map((pkg, index) => (
      <motion.div
        key={index}
        className="bg-white rounded-lg shadow-md overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
      >
        <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">{pkg.name}</h3>
          <p className="text-gray-600 text-sm">{pkg.description}</p>
          <motion.button
            className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add car
          </motion.button>
        </div>
      </motion.div>
    ))}
  </div>
        </div>
      </section>

      {/* AC Service & Repair Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-8 text-blue-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            AC Service & Repair
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {acServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 rounded-lg shadow-md overflow-hidden relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                  <motion.button
                    className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add car to view price
                  </motion.button>
                </div>
                {service.recommended && (
                  <motion.span
                    className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    RECOMMENDED
                  </motion.span>
                )}
                {service.new && (
                  <motion.span
                    className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    NEW
                  </motion.span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}export default Services
=======
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
>>>>>>> 8bd3effddf24d554a52e4af66187d4c9d07d64cd
