import ServiceCard from "./service-card";

interface ServicesInterface {
    serviceName: string,
    serviceIcon: string,
    serviceDescription: string
};

export default function Services() {
    const serviceList = [
        {
            serviceName: "Brakes",
            serviceDescription: "Issues, pads, rotors, inspection",
            serviceIcon: "appointment-services/brakes.png",
        },
        {
            serviceName: "Oil Change",
            serviceDescription: "Oil change, filters, lube",
            serviceIcon: "appointment-services/car-oil.png",
        },
        {
            serviceName: "Vehicle Inspection",
            serviceDescription: "State, emissions, safety",
            serviceIcon: "appointment-services/inspection.png",
        },
        {
            serviceName: "Tires",
            serviceDescription: "Replacement, rotations, alignments",
            serviceIcon: "appointment-services/wheel.png",
        },
        {
            serviceName: "Battery",
            serviceDescription: "Battery replacement, testing, starter",
            serviceIcon: "appointment-services/car-battery.png",
        },
        {
            serviceName: "Engine & Transmission",
            serviceDescription: "Issue diagnosis, fluids, drivetrain",
            serviceIcon: "appointment-services/car-engine.png",
        },
        {
            serviceName: "Heat or A/C",
            serviceDescription: "No heat, no AC, intermittent issues",
            serviceIcon: "appointment-services/air-conditioner.png",
        },
        {
            serviceName: "Scheduled Maintenance",
            serviceDescription: "Services recommended at specific mileage",
            serviceIcon: "appointment-services/calendar.png",
        },
        {
            serviceName: "Lighting & Bulbs",
            serviceDescription: "Headlights, brake lights, interior bulbs",
            serviceIcon: "appointment-services/lightbulb.png",
        },
    ];

    const isOddCount = serviceList.length % 2 !== 0;

    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Popular Services</h2>

            <div
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-3"
            >
                {serviceList.map((service: ServicesInterface, index) => {
                    const isLastItem = index === serviceList.length - 1;
                    const isCentered = isLastItem && isOddCount;

                    return (
                        <div
                            key={service.serviceName}
                            className={isCentered ? " sm:col-start-2 col-span-2" : "col-span-2"}
                        >
                            <ServiceCard
                                serviceName={service.serviceName}
                                serviceDescription={service.serviceDescription}
                                serviceIcon={service.serviceIcon}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}