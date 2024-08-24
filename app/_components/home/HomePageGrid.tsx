import { Star, Home, CheckCircle, Clock, Shield, User } from 'lucide-react'; // Import icons from Lucide React

// Define your color variables
const primaryColor = "text-primary"; 
const secondaryColor = "text-gray-500"; 
const iconColor = "text-green-500"; 

// Define your arrays with their respective icons
const iconSize = 40;

const showOff = [
  {
    label: "1 lakh+ Beds",
    description: "Book the one perfect for you",
    icon: <Home size={iconSize} className={iconColor} />,
  },
  {
    label: "35+ DU Colleges",
    description: "Search the best accommodation by your college",
    icon: <User size={iconSize} className={iconColor} />,
  },
  {
    label: "4.8+ Rating",
    description: "This is what our students think about us",
    icon: <Star size={iconSize} className={iconColor} />,
  }
];

const perfectAccomodationShowOff = [
  {
    label: "One click, hassle free bookings",
    description: "Book your perfect accommodation instantly",
    icon: <CheckCircle size={iconSize} className={iconColor} />,
  },
  {
    label: "Lowest Price guaranteed",
    description: "Find a lower price and we will match it. No questions asked",
    icon: <Shield size={iconSize} className={iconColor} />,
  },
  {
    label: "24/7 Customer Support",
    description: "Each and every query will be answered instantly",
    icon: <Clock size={iconSize} className={iconColor} />,
  },
  {
    label: "100% Verified Properties",
    description: "We only list the properties after proper research",
    icon: <CheckCircle size={iconSize} className={iconColor} />,
  }
];

export default function HomePageGrid() {
  return (
    <div className="mt-16 flex flex-col gap-32 px-4 overflow-y-scroll">
      {/* Rendering showOff array */}
      <div className='flex flex-col gap-12'>
        <h2 className="text-xl font-bold">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {showOff.map((item, index) => (
            <div key={index} className="flex flex-col items-start gap-6 p-6 rounded-lg bg-white shadow-lg">
              <div className="flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className={`text-md font-semibold ${primaryColor} mb-1`}>{item.label}</h3>
                <p className={`text-xs ${secondaryColor}`}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rendering perfectAccomodationShowOff array */}
      <div className='flex flex-col gap-12'>
        <h2 className="text-xl font-bold mb-4">Perfect Accommodation ShowOff</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perfectAccomodationShowOff.map((item, index) => (
            <div key={index} className="flex flex-col gap-6 p-6 rounded-lg bg-white shadow-lg">
              <div className="flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className={`text-md font-semibold ${primaryColor} mb-1`}>{item.label}</h3>
                <p className={`text-xs ${secondaryColor}`}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      shit
    </div>
  );
}
