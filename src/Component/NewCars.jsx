import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Search, Star, Car, Fuel, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const carouselItems = [
    {
      id: 1,
      title: "Unlock your dream ride!",
      image: "https://i.pinimg.com/564x/ca/fe/8a/cafe8ae0da4cb351639d840879fae263.jpg",
    },
    {
      id: 2,
      title: "Find your perfect match!",
      image: "https://i.pinimg.com/564x/c8/8f/be/c88fbe77a159916b106a7b7701dceaa9.jpg",
    },
    {
      id: 3,
      title: "Drive into luxury!",
      image: "https://i.pinimg.com/564x/fb/45/8b/fb458b377c9b8b8026d507cbfc88460f.jpg",
    },
    {
      id: 4,
      title: "Unique Cars for Unique Individuals!",
      image: "https://i.pinimg.com/564x/99/b3/6f/99b36f188456d5803af49264c373e23d.jpg",
    },
  ]
  
  const logos = [
   
    { name: 'Maruti Suzuki', logo: 'https://i.pinimg.com/564x/80/0d/e2/800de2b4b41959f70be86e6c7454272c.jpg' },
    { name: 'Hyundai', logo: 'https://i.pinimg.com/564x/33/65/c3/3365c399f3e4eb2ff4232e091ec9e0af.jpg' },
    { name: 'Tata', logo: 'https://i.pinimg.com/736x/df/e2/44/dfe2441b35550e8ccebe349b96bb52b9.jpg' },
    { name: 'Mahindra', logo: 'https://i.pinimg.com/564x/be/d8/95/bed895c865a5c777452f22528da075ad.jpg' },
    { name: 'Toyota', logo: 'https://i.pinimg.com/564x/ba/1d/ea/ba1dea815dc4003fdc9ff954cb02c87e.jpg' },
    { name: 'Kia', logo: 'https://i.pinimg.com/736x/24/1d/19/241d19b5aa4473c0eeb17338807cb1a5.jpg' },
    { name: 'Honda', logo: 'https://i.pinimg.com/736x/4f/c4/1c/4fc41cd20e7c214003602eeaeb5e01f6.jpg' },
    { name: 'MG', logo: 'https://i.pinimg.com/564x/4f/4e/44/4f4e449638357ea884a2c65ffed2f486.jpg' },
    { name: 'Renault', logo: 'https://i.pinimg.com/564x/02/6f/df/026fdf71cc622aa695c633803b9fe4a7.jpg' },
    { name: 'Volkswagen', logo: 'https://i.pinimg.com/564x/bb/15/29/bb152936c727e607711d7ea276cbc6d3.jpg' },
    { name: 'Skoda', logo: 'https://i.pinimg.com/564x/ee/03/b8/ee03b8035e76b8d8d5465b91057a797d.jpg' },
    { name: 'Nissan', logo: 'https://i.pinimg.com/564x/d9/3a/e4/d93ae4c990f9b91391060feb9c01e151.jpg' },
    { name: 'Citroen', logo: 'https://i.pinimg.com/736x/d5/61/2d/d5612d399cc4a9ccf65dab3589aaf34d.jpg' },
    { name: 'Jeep', logo: 'https://i.pinimg.com/564x/73/ce/c1/73cec10db0311207b5028b25e194b80c.jpg' },
    { name: 'Aston Martin', logo: 'https://i.pinimg.com/564x/8c/1e/5f/8c1e5f4340f124d095541636e4dcb5c9.jpg' },
    { name: 'Audi', logo: 'https://i.pinimg.com/564x/4c/34/ee/4c34eefba221546293d1032ae967eddc.jpg' },
  ]
  
  
  const carData = {
    SUV: [
      { name: 'Mahindra Thar ROXX', price: '₹ 12.99 - 22.49 Lakh*', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar-ROXX/8438/1723692413550/front-left-side-47.jpg', link: '/deals/defender' },
      { name: 'Tata Nexon', price: '₹ 8 - 15.50 Lakh', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon/11104/1697698470038/front-left-side-47.jpg', link: '/deals/rangerover' },
      { name: 'Mahindra Thar', price: ' ₹ 11.35 - 17.60 Lakh*', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar/10745/1697697308167/front-left-side-47.jpg', link: '/deals/defender' },
      { name: 'Tata Curvv', price: '₹ 10 - 19 Lakh*', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Curvv/9578/1723033064164/front-left-side-47.jpg' }
    ],
    Luxury: [
      { name: 'Mercedes-Benz GLA', price: '₹ 51.75 - 58.15 Lakh', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/GLA-2024/9731/1679039244149/front-left-side-47.jpg', link: '/deals/gla' },
      { name: 'Kia EV6', price: '₹ 60.97 - 65.97 Lakh', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/EV6/8947/1654159762071/front-left-side-47.jpg', link: '/deals/ev6' },
      { name: 'Land Rover Defender', price: '₹ 1.04 - 1.57 Cr*', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Land-Rover/Defender/9081/Land-Rover-Defender-3.0-Diesel-110-X-Dynamic-HSE/1720674556929/front-left-side-47.jpg', link: '/deals/gla' },
      { name: 'Land Rover Range Rover', price: ' ₹ 2.36 - 4.98 Cr*', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Land-Rover/Range-Rover/11540/1719037980777/front-left-side-47.jpg', link: '/deals/ev6' }
      
    ],
    // XUV: [
    //   { name: 'Mercedes-Benz GLA', price: '₹ 51.75 - 58.15 Lakh', image: '/images/gla.jpg', link: '/deals/gla' },
    //   { name: 'Kia EV6', price: '₹ 60.97 - 65.97 Lakh', image: '/images/ev6.jpg', link: '/deals/ev6' },
    //   { name: 'Mercedes-Benz GLA', price: '₹ 51.75 - 58.15 Lakh', image: '/images/gla.jpg', link: '/deals/gla' },
    //   { name: 'Kia EV6', price: '₹ 60.97 - 65.97 Lakh', image: '/images/ev6.jpg', link: '/deals/ev6' }
    // ],
    MUV: [
      { name: 'Maruti Ertiga', price: 'Rs8.69 - 13.03 Lakh*', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Ertiga/10293/1697697779799/front-left-side-47.jpg', link: '/deals/gla' },
      { name: 'Toyota Innova Crysta', price: 'Rs19.99 - 26.30 Lakh*', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Innova-Crysta/9612/1697698611076/front-left-side-47.jpg', link: '/deals/ev6' },
      { name: 'Renault Triber', price: '₹ Rs6 - 8.97 Lakh*', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Triber/10066/1717586026066/front-left-side-47.jpg', link: '/deals/gla' },
      { name: 'Maruti XL6', price: '₹ 11.61 - 14.77 Lakh*', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/XL6/10384/1688385191052/front-left-side-47.jpg', link: '/deals/ev6' }
    ]
    // Add more categories (Sedan, Hatchback) with cars as needed
  };
  

function NewCars() {
    const [visibleBrands, setVisibleBrands] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('Luxury');

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleBrands((prev) => {
        if (prev.length < logos.length) {
          return [...prev, logos[prev.length]]
        }
        return prev
      })
    }, 200)

    return () => clearInterval(timer)
  }, [])

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1))
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])


  return (
    <>
    <div className="relative h-screen overflow-hidden">
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">{item.title}</h1>
            <div className="w-full max-w-3xl mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Explore by brand, model or budget"
                  className="w-full py-3 px-4 pr-12 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 rounded-full">
                  <Search className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-4">Browse cars by</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { icon: Star, text: 'Brands' },
                  { icon: Car, text: 'Body Type' },
                  { icon: Fuel, text: 'Fuel Type' },
                  { icon: Users, text: 'Seating Capacity' },
                ].map((button, index) => (
                  <button
                    key={index}
                    className="flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
                  >
                    {React.createElement(button.icon, { className: 'w-5 h-5 mr-2' })}
                    {button.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

     
    </div>
   
<section className="w-full py-12 md:py-24 lg:py-32 bg-slate-100">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="text-3xl font-bold text-center mb-12">Brands in the Spotlight</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
      {logos.map((logo, index) => (
        <motion.div
          key={logo.name}
          initial={isMounted ? { opacity: 0, y: 20 } : false}
          animate={isMounted ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={logo.logo} 
            alt={`${logo.name} logo`}
            className="w-20 h-16 object-contain mb-2 hover:filter hover:grayscale transition-all duration-300"
          />
          <p className="text-sm font-medium text-center">{logo.name}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


{/* ================================================ */}

<div className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Find Right Cars by Body Type</h2>

      {/* Tab Navigation */}
      <div className="flex justify-center space-x-6 mb-6">
        {Object.keys(carData).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`text-lg font-semibold px-4 py-2 ${
              selectedCategory === category
                ? 'text-orange-600 border-b-4 border-orange-600'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Car Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {carData[selectedCategory].map((car, index) => (
          <div
            key={index}
            className="bg-slate-200 p-4 rounded-lg shadow-xl hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold">{car.name}</h3>
              <p className="text-gray-600">{car.price}</p>
              <a
                href={car.link}
                className="inline-block mt-4 px-4 py-2 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-600 hover:text-white transition-colors duration-300"
              >
                Contact Dealer
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

  </>

  )
}

export default NewCars
