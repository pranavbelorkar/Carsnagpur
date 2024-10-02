import React, { useState } from "react";
import Cars from "./Cars";
import AllCars from "./AllCars";
<<<<<<< HEAD
=======
import { X, MessageCircle, Mail, HelpCircle, PhoneCall } from 'lucide-react'    //for need help
>>>>>>> 8bd3effddf24d554a52e4af66187d4c9d07d64cd

function UsedCars({ onFilterChange }) {
  //need help start
  const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => setIsOpen(!isOpen)

  const sections = [
    {
      title: 'WhatsApp',
      icon: <MessageCircle className="w-6 h-6" />,
      content: 'Chat with us on WhatsApp',
      action: () => window.open('https://wa.me/09975288300', '_blank')
    },
    {
      title: 'Email',
      icon: <Mail className="w-6 h-6" />,
      content: 'Send us an email',
      action: () => window.location.href = 'mailto:carsnagpur8@gmail.com'
    },
    {
      title: 'FAQs',
      icon: <HelpCircle className="w-6 h-6" />,
      content: 'Check our frequently asked questions',
      action: () => window.location.href = '/faqs'
    },
    {
      title: 'Request a Call Back',
      icon: <PhoneCall className="w-6 h-6" />,
      content: 'We\'ll call you back',
      action: () => window.location.href = '/request-callback'
    }
  ]

//need help end

  const [budget, setBudget] = useState([150000, 2500000]);
  const [makes, setMakes] = useState({
    Tata: false,
    "Maruti Suzuki": false,
    Hyundai: false,
    Honda: false,
    Mahindra: false,
    Renault: false,
    KIA: false,
    Ford: false,
    Nisan: false,
    Toyota: false,
    Volkswagen: false,
    Datsun: false,
    MG: false,
    Jeep: false,
    Skoda: false,
  });

  const handleBudgetChange = (e, index) => {
    const newBudget = [...budget];
    newBudget[index] = parseInt(e.target.value);
    setBudget(newBudget);
    onFilterChange({ budget: newBudget, makes });
  };

  const handleMakeChange = (make) => {
    const updatedMakes = { ...makes, [make]: !makes[make] };
    setMakes(updatedMakes);
    onFilterChange({ budget, makes: updatedMakes });
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Left side (Filter section) */}
        <div
          className="bg-white rounded-lg shadow-md p-4 col-span-1 lg:sticky lg:top-4 h-fit"
        >
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Budget</h3>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="150000"
                max="2500000"
                step="50000"
                value={budget[0]}
                onChange={(e) => handleBudgetChange(e, 0)}
                className="w-full"
              />
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>₹{(budget[0] / 100000).toFixed(2)}L</span>
              <span>₹{(budget[1] / 100000).toFixed(2)}L</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Make</h3>
            {Object.keys(makes).map((make) => (
              <div key={make} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={make}
                  checked={makes[make]}
                  onChange={() => handleMakeChange(make)}
                  className="mr-2"
                />
                <label htmlFor={make} className="text-sm text-gray-700">
                  {make}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Right side (Cars display section) */}
        <div className="col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(() => {
            const carsArray = [];
            for (let index = 0; index < 21; index++) {
              carsArray.push(<Cars key={index} />);
            }
            return carsArray;
          })()}
        </div>
      </div>


      {/* Need Help */}
      <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={togglePopup}
        className="bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300"
      >
        Need Help?
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-orange-500 text-white p-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold">How can we help?</h3>
            <button onClick={togglePopup} className="text-white hover:text-gray-200">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="p-4 space-y-4">
            {sections.map((section, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors duration-300"
                onClick={section.action}
              >
                <div className="bg-blue-100 p-2 rounded-full">
                  {section.icon}
                </div>
                <div>
                  <h4 className="font-semibold">{section.title}</h4>
                  <p className="text-sm text-gray-600">{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
   {/* need help end */}

    </div>
  );
}

export default UsedCars;
