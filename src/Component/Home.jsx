import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiContractLeftFill, RiContractRightFill } from "react-icons/ri";

const services = [
  {
    title: 'Car loan',
    description: 'Low rates, fast approval',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    title: 'Hire driver',
    description: 'Expert drivers on demand',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    title: 'New car',
    description: 'Discover the newest cars',
    image: '/assets/tata.jpg?height=200&width=300', // Fixed extension from .jp to .jpg
  },
  {
    title: 'Pay charges',
    description: 'Settle charges easily',
    image: '/placeholder.svg?height=200&width=300',
  },
];

const DrivewayDeals = () => {
  const deals = [
    {
      type: 'Buy Car',
      title: 'Get up to',
      subtitle: '₹1.8 lakhs Off',
      description: 'on selected cars',
      cta: 'View offers',
      bgColor: 'bg-blue-100',
      image: '/placeholder.svg?height=150&width=150',
    },
    {
      type: 'Buy Car',
      title: 'Opt for',
      subtitle: 'EMI offers',
      description: 'save up to ₹2,500/m',
      cta: 'View offers',
      bgColor: 'bg-pink-100',
      image: '/placeholder.svg?height=150&width=150',
    },
    {
      type: 'Buy Car',
      title: 'Exchange',
      subtitle: 'your car',
      description: 'Get up to ₹20000 OFF',
      cta: 'View offers',
      bgColor: 'bg-orange-100',
      image: '/placeholder.svg?height=150&width=150',
    },
    {
      type: 'AUTOPILOT',
      title: 'Flat 100',
      subtitle: '₹OFF',
      description: 'on your first ride',
      cta: 'Book ride',
      bgColor: 'bg-gray-800',
      image: '/placeholder.svg?height=150&width=150',
    },
  ];

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-3xl font-bold mb-6">Driveway deals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {deals.map((deal, index) => (
          <div
            key={index}
            className={`${deal.bgColor} rounded-lg overflow-hidden shadow-md flex flex-col justify-between`}
          >
            <div className="p-4">
              <p className="text-sm font-semibold mb-2">{deal.type}</p>
              <h3 className="text-xl font-bold mb-1">{deal.title}</h3>
              <p className="text-2xl font-bold mb-2">{deal.subtitle}</p>
              <p className="text-sm mb-4">{deal.description}</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300">
                {deal.cta} →
              </button>
            </div>
            <div className="mt-auto">
              <img src={deal.image} alt="" className="w-full h-auto" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  return (
    <><section className="relative bg-gray-800 text-white h-[450px]">

      <div className="absolute inset-0 bg-cover bg-center opacity-40 mt-2 h-[440px]"
        style={{ backgroundImage: 'url("./src/Img/car.jpeg")' }}>
      </div>
      <div className="relative container mx-auto px-6 py-16 flex flex-col items-center text-center z-10">
        <h1 className="text-5xl font-bold mb-6">Your all-in-one car universe</h1>
        <p className="text-xl mb-8">Buy, sell, finance, and more—everything at one place.</p>


        <div className="relative w-full max-w-lg mb-8">
          <input
            type="text"
            placeholder="Search cars by fuel"
            className="w-full py-3 px-4 rounded-full bg-white text-black placeholder-gray-500 focus:outline-none" />
        </div>


        <div className="flex space-x-4">
          <Link to="/usedcars" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full">
            Buy used car
          </Link>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full">
            Sell car
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-full">
            New car
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-6">Our services</h2>
        <div className="relative">
          <div className="flex overflow-hidden">
            {services.map((service, index) => (
              <div
                key={index}
                className={`w-full flex-shrink-0 transition-transform duration-300 ease-in-out`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="bg-white rounded-lg shadow-md p-6 m-2">
                  <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-md mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="bg-orange-100 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-200 transition-colors">
                    Know more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section><section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Special Offers</h2>
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentAd * 100}%)` }}>
              {advertisements.map((ad, index) => (
                <div key={ad.id} className="w-full flex-shrink-0">
                  <img
                    src={ad.image}
                    alt={ad.title}
                    className="w-full h-[450px] object-cover rounded-lg" />
                  <div className="absolute inset-0 bg-gradient-to-r opacity-75 flex items-center justify-center rounded-lg">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">{ad.title}</h3>
                      <p className="text-lg">{ad.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section><section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold italic text-center mb-8">Curated for You</h2>
          <div className="relative">

            <button
              onClick={() => scrollSection('left', curatedServicesRef)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 z-10 hover:bg-gray-200 transition duration-300"
            >
              <RiContractLeftFill className="w-6 h-6" />
            </button>


            <div ref={curatedServicesRef} className="flex space-x-6 overflow-x-scroll scrollbar-hide">
              {curatedServices.map((service, index) => (
                <motion.div
                  key={index}
                  className={`${service.color} text-white rounded-2xl h-[500px] shadow-md p-6 w-[320px] flex-shrink-0`}
                  whileHover={{
                    scale: 1.05, // Slightly increase size on hover
                    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)', // Add shadow effect
                  }}
                  transition={{ duration: 0.3 }} // Animation timing
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-[250px] h-[200px] mb-4 rounded-lg object-cover" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="mb-4">{service.description}</p>
                  <ul className="mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center mb-2">
                        <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-white text-gray-800 py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
                    {service.cta}
                  </button>
                </motion.div>
              ))}
            </div>


            <button
              onClick={() => scrollSection('right', curatedServicesRef)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 z-10 hover:bg-gray-200 transition duration-300"
            >
              <RiContractRightFill className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section></>
  )
}

export default Home;
