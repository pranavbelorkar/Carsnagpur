import { useState } from 'react'

const deals = [
  {
    type: "Buy Car",
    title: "Get up to",
    subtitle: "₹1.8 lakhs Off",
    description: "on selected cars",
    cta: "View offers",
    bgColor: "bg-blue-100",
    image: "/placeholder.svg?height=150&width=150"
  },
  {
    type: "Buy Car",
    title: "Opt for",
    subtitle: "EMI offers",
    description: "save up to ₹2,500/m",
    cta: "View offers",
    bgColor: "bg-pink-100",
    image: "/placeholder.svg?height=150&width=150"
  },
  {
    type: "Buy Car",
    title: "Exchange",
    subtitle: "your car",
    description: "Get up to ₹20000 OFF",
    cta: "View offers",
    bgColor: "bg-orange-100",
    image: "/placeholder.svg?height=150&width=150"
  },
  {
    type: "AUTOPILOT",
    title: "Flat 100",
    subtitle: "₹OFF",
    description: "on your first ride",
    cta: "Book ride",
    bgColor: "bg-gray-800",
    image: "/placeholder.svg?height=150&width=150"
  }
]

const services = [
  {
    title: 'Car loan',
    description: 'Low rates, fast approval',
    image: './src/Img/carserve2.png',
  },
  {
    title: 'Hire driver',
    description: 'Expert drivers on demand',
    image: './src/Img/driver.png',
  },
  {
    title: 'New car',
    description: 'Discover the newest cars',
    image: './src/Img/buycar.png',
  },
  {
    title: 'Pay charges',
    description: 'Settle charges easily',
    image: './src/Img/paycharge.png',
  },
]

const cards = [
  {
    title: 'BUY',
    subtitle: 'Drive home your dream car',
    image: './src/Img/paycharge.png',
    color: 'bg-blue-700',
    features: [
      { text: '140 quality checks', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
      { text: '7-day returns', icon: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
      { text: 'Finance it your way', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    ],
    cta: 'View all cars',
  },
  {
    title: 'LOANS24',
    subtitle: 'Make your dreams real with a personal loan',
    image: './src/Img/paycharge.png',
    color: 'bg-blue-500',
    features: [
      { text: 'Attractive interest rates', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
      { text: 'Disbursal in 5 mins', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
      { text: 'Get upto Rs. 10 Lakhs', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    ],
    cta: 'Apply now',
  },
  {
    title: 'SELL',
    subtitle: 'Trust us to sell your car',
    image: './src/Img/paycharge.png',
    color: 'bg-orange-500',
    features: [
      { text: 'Great price', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
      { text: 'Instant payment', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
      { text: 'Hassle-free documentation', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    ],
    cta: 'Get car price',
  },
]

const carBrands = [
  { name: 'Honda', logo: './src/Img/hlogo.png' },
  { name: 'MG', logo: './src/Img/hlogo.png' },
  { name: 'Skoda', logo: './src/Img/hlogo.png' },
  { name: 'Jeep', logo: './src/Img/hlogo.png' },
  { name: 'Renault', logo: './src/Img/hlogo.png' },
  { name: 'Nissan', logo: './src/Img/hlogo.png' },
]

const reviews = [
  {
    name: 'Rabi Barnwal',
    image: '/placeholder.svg?height=60&width=60',
    review: 'I had a wonderful experience buying my car from CARS24. The advisors are very polite and co-operative.',
    date: '1 Aug 2024'
  },
  {
    name: 'Arjun',
    image: '/placeholder.svg?height=60&width=60',
    review: 'Most recommended place for buying a pre owned car. Very easy finance with zero downpayment and one day loan process.',
    date: '1 Aug 2024'
  },
  {
    name: 'Akash Kumar',
    image: '/placeholder.svg?height=60&width=60',
    review: 'I am very happy that I got my favourite car from CARS24. Thanks to the incredible sales team & easy finance processes.',
    date: '1 Aug 2024'
  },
  {
    name: 'Salih Md',
    image: '/placeholder.svg?height=60&width=60',
    review: 'Purchased my first car from CARS24, and I am very happy with their finance process & the team’s efforts to make it happen.',
    date: '1 Aug 2024'
  }
]

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  const nextSld = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % carBrands.length);
  };

  const prevSld = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + carBrands.length) % carBrands.length);
  };

  return (
    <>
      {/* Our Services Section */}
      <div className="container-fluid mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-6"></h2>
        <div className="relative">
          <div className="flex overflow-hidden">
            {services.map((service, index) => (
              <div
                key={index}
                className={`w-full flex-shrink-0 transition-transform duration-300 ease-in-out ${
                  index === currentIndex ? 'translate-x-0' : 'translate-x-full'
                }`}
                style={{ transform: `translateX(-${currentIndex * 100}%) `}}
              >
                <div className="bg-white rounded-lg shadow-md p-6 m-2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[500px] object-cover rounded-md mb-4"
                  />
                  <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="bg-orange-100 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-200 transition-colors">
                    Know more →
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            {/* ChevronLeftIcon */}
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            {/* ChevronRightIcon */}
          </button>
        </div>
      </div>

      {/* Driveway Deals Section */}
      <div className="relative">
        <h2 className="text-3xl font-bold mb-8 text-white-900">Driveway deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal, index) => (
            <div key={index} className={`${deal.bgColor} rounded-lg overflow-hidden shadow-lg`}>
              <div className="p-6">
                <p className="text-sm font-semibold text-gray-600">{deal.type}</p>
                <h3 className="text-xl font-bold mt-2">{deal.title}</h3>
                <p className="text-2xl font-bold">{deal.subtitle}</p>
                <p className="text-sm mt-2">{deal.description}</p>
                <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300">
                  {deal.cta}
                </button>
              </div>
              <div className="h-32 bg-cover bg-center" style={{ backgroundImage: `url(${deal.image})` }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Brands Section */}
      <div className="w-full max-w-8xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Popular brands</h2>
        <div className="relative">
          <button
            onClick={prevSld}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
          >
            {/* ChevronLeftIcon */}
          </button>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${startIndex * (100 / 5)}%)` }}
            >
              {carBrands.map((brand, index) => (
                <div key={brand.name} className="w-40 h-40 p-2">
                  <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={nextSld}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
          >
            {/* ChevronRightIcon */}
          </button>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              <p className="text-gray-700">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;