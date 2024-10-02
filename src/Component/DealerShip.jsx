import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Award, Truck, Tag, BarChart2 } from 'lucide-react'

function DealerShip() {
  // Arrays for cities and cars
  const cities = [
    "Burdi",
    "Manewada",
    "Dighori",
    "vardhyaman nagar",
    "Somalwada",
    "Friends colony",  
     "Sadar",
    "Katolnaka",
    "Jaripatka",
    "Itwari",
    "Dharampeth",
    "Hudkeshwar",
  ];
  
  const dealers = [
    { name: 'Citizen Carz', image: '/images/citizen-carz.jpg' },
    { name: 'Chennai Motorss', image: '/images/chennai-motors.jpg' },
    { name: 'Broker Dalal', image: '/images/broker-dalal.jpg' },
    { name: 'Luxury Wheels', image: '/images/luxury-wheels.jpg' }, // Add more dealer items as needed
  ];

  const cars = [
    { name: "Hyundai i20", price: "₹ 2,49,000", image: "https://www.hyundai.com/content/dam/hyundai/in/en/data/vehicle-thumbnail/Thumbnail/creta-suvpc.png" },
    { name: "Hyundai Grand i10", price: "₹ 3,40,930", image: "https://imgd.aeplcdn.com/1056x594/n/t4frrua_1559467.jpg?q=80" },
    { name: "Maruti Baleno", price: "₹ 5,00,000", image: "https://imgd.aeplcdn.com/1200x900/cw/ec/37710/Maruti-Suzuki-Baleno-Right-Front-Three-Quarter-147420.jpg?wm=0&q=80" },
    { name: "Hyundai Creta", price: "₹ 8,01,000", image: "https://imgd-ct.aeplcdn.com/664x415/n/1ihrrua_1559469.jpg?q=80" },
  ];


  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      title: "FINANCING MADE EASY",
      description: "Our stress-free finance department that can find financial solutions to save you money."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "WIDE RANGE OF BRANDS",
      description: "With a robust selection of popular vehicles on hand, as well as leading vehicles from BMW and Ford."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "TRUSTED BY THOUSANDS",
      description: "10 new offers every day. 350 offers on site, trusted by a community of thousands of users."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "CAR SERVICE & MAINTENANCE",
      description: "Our service department maintain your car to stay safe on the road for many more years."
    }
  ]

  const feature = [
    {
      icon: Award,
      title: "India's #1",
      subtitle: "Largest Auto portal"
    },
    {
      icon: Truck,
      title: "Car Sold",
      subtitle: "Every 4 minute"
    },
    {
      icon: Tag,
      title: "Offers",
      subtitle: "Stay updated pay less"
    },
    {
      icon: BarChart2,
      title: "Compare",
      subtitle: "Decode the right car"
    }
  ]

  return (
    <div className="relative bg-white">
      {/* Background image with overlay */}
      <div className="relative h-[630px]">
        <img
          src="./public/Img/delership.png" // Background image
          alt="Car background"
          className="w-full h-[630px] object-cover"
        />
        <div className="absolute inset-0 bg-gray-600 h-[630px] bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-[630px] flex flex-col justify-center items-center space-y-8">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
          Helping you connect to <br /> the right used car dealers
        </h1>

        {/* Search box */}
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Nagpur"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          />
          <input
            type="text"
            placeholder="Select Locality"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          />
          <button className="px-6 py-2 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600">
            Search
          </button>
        </div>
      </div>

      {/* Main Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-8">Used Car Showrooms in Nagpur</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Popular Cities */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Used Car Dealer in Popular Areas</h2>
              <input
                type="text"
                placeholder="🔍 Search your city"
                className="px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* City Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <img src={city.image} className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full"/>
                  <p className="text-lg font-semibold">{city.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Popular Used Cars */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Popular Used Cars in Nagpur</h2>
            <div className="space-y-4">
              {cars.map((car, index) => (
                <div
                  key={index}
                  className="flex items-center border p-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-16 h-16 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{car.name}</h3>
                    <p className="text-gray-600">{car.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

{/* Used Luxury Cars Dealership */}
{/* Used Luxury Cars Dealership with Swiper Carousel */}
      
        <h2 className="text-2xl font-bold mb-4">Used Luxury Cars Dealership</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {dealers.map((dealer) => (
            <SwiperSlide key={dealer.name}>
              <div className="w-72 border rounded-lg shadow hover:shadow-lg transition-shadow">
                <img
                  src={dealer.image}
                  alt={dealer.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-center">{dealer.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    

{/* For Your Further Research */}
<section className="p-6 bg-gray-50 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-6">For Your Further Research</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-center space-x-4 p-4 border rounded-lg shadow">
            <img src="/images/icon1.png" alt="Used Cars Icon" className="w-10 h-10" />
            <div>
              <p className="font-semibold">Used Cars In Gurgaon</p>
              <a href="#" className="text-blue-500 hover:underline">View All (2445)</a>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 border rounded-lg shadow">
            <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/150603/i20-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80" alt="Sell Car Icon" className="w-10 h-10" />
            <div>
              <p className="font-semibold">Sell Your Car For Free</p>
              <a href="#" className="text-blue-500 hover:underline">Upload Car</a>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 border rounded-lg shadow">
            <img src="https://www.hyundai.com/content/dam/hyundai/in/en/data/vehicle-thumbnail/Thumbnail/creta-suvpc.png" alt="Price Valuation Icon" className="w-10 h-10" />
            <div>
              <p className="font-semibold">Get The True Price Of Your Car</p>
              <a href="#" className="text-blue-500 hover:underline">Start Valuation</a>
            </div>
          </div>
        </div>
      </section>


      
{/*  last 2nd portion*/}

<div className="bg-gray-100 py-4 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          {feature.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3 py-2">
              <feature.icon className="h-8 w-8 text-orange-500" strokeWidth={1.5} />
              <div>
                <h3 className="text-sm font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-xs text-gray-500">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>

    
  );
}

export default DealerShip;