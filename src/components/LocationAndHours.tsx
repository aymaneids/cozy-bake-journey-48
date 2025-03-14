
import { Clock, MapPin, Phone } from 'lucide-react';

const LOCATIONS = [
  {
    id: 1,
    name: "Logan Square",
    address: "2051 N California Ave, Chicago, IL 60647",
    phone: "(773) 276-8888",
    hours: [
      { day: "Monday - Friday", time: "7am - 3pm" },
      { day: "Saturday - Sunday", time: "8am - 4pm" }
    ],
    mapUrl: "https://maps.google.com/?q=2051+N+California+Ave,+Chicago,+IL+60647"
  },
  {
    id: 2,
    name: "Ravenswood",
    address: "4947 N Damen Ave, Chicago, IL 60625",
    phone: "(773) 530-9020",
    hours: [
      { day: "Monday - Friday", time: "7am - 3pm" },
      { day: "Saturday - Sunday", time: "8am - 4pm" }
    ],
    mapUrl: "https://maps.google.com/?q=4947+N+Damen+Ave,+Chicago,+IL+60625"
  }
];

const LocationAndHours = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Find Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop by for a slice of pie, a warm biscuit, and a cup of coffee.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {LOCATIONS.map((location) => (
            <div key={location.id} className="bg-bakery-cream p-8 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4">{location.name}</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-bakery-brown mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Address:</p>
                    <p className="text-muted-foreground">{location.address}</p>
                    <a 
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-bakery-brown hover:underline mt-1 inline-block"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-bakery-brown mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Phone:</p>
                    <a 
                      href={`tel:${location.phone.replace(/[^0-9]/g, '')}`}
                      className="text-muted-foreground hover:text-bakery-brown transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-bakery-brown mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Hours:</p>
                    <div className="text-muted-foreground">
                      {location.hours.map((hour, index) => (
                        <div key={index} className="flex justify-between max-w-xs">
                          <span>{hour.day}</span>
                          <span>{hour.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationAndHours;
