import ServiceCard from "./service-card";
interface ServicesInterface {
    serviceName: string,
    serviceImageName: string
};

export default function Services() {
    const serviceList: ServicesInterface[] = [
        {serviceName: "Auto A/C Repair", serviceImageName: "a_c_repair"},
        {serviceName: "Lube and Oil", serviceImageName: "oil_change"},
        {serviceName: "Engine Repair", serviceImageName: "engine_repair"},
        {serviceName: "Exhaust", serviceImageName: "exhaust"},
        {serviceName: "Tune Ups", serviceImageName: "tune_ups"},
        {serviceName: "Suspension", serviceImageName: "suspension"},
        {serviceName: "Radiator", serviceImageName: "radiator"},
        {serviceName: "Brakes", serviceImageName: "brakes"},
        {serviceName: "Transmission", serviceImageName: "transmission"},
        {serviceName: "Tire Inspection", serviceImageName: "tire_inspection"},
        {serviceName: "Wheel Alignment", serviceImageName: "wheel_alignment"},
        {serviceName: "Tow", serviceImageName: "tow"},
        {serviceName: "Inspections", serviceImageName: "inspection"},
    ];
    return (
        <>
            {/* REPAIRS SECTION */}
            <section id="services" className="bg-black py-16 text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-4xl font-bold">
                            <span className="text-white">CERTIFIED </span>
                            <span className="text-red-600">SERVICES</span>
                        </h2>
                        <a
                            href="./appointments"
                            className="bg-gray-800 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-red-600 transition"
                        >
                            Schedule Online Today
                            <span className="bg-red-600 rounded-full p-1">
                                <svg
                                    className="w-4 h-4 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </span>
                        </a>
                    </div>
                    {/* Scroll Container */}
                    <div
                        id="services-scroll"
                        className="services-scroll flex gap-6 overflow-x-auto pb-4 no-scrollbar"
                    >
                        {serviceList.map((service: ServicesInterface) => (
                            <ServiceCard key={service.serviceName} serviceName={service.serviceName} imageName={service.serviceImageName}/>
                        ))}
                    </div>
                </div>
            </section>
        </>

    )
}