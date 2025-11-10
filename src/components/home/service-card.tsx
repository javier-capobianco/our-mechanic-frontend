interface ServiceCardProps {
    serviceName: string,
    imageName: string
};
export default function ServiceCard({ serviceName, imageName }: ServiceCardProps) {
    const imageNameHTML = `/services/${imageName}.png`;
    return (
        <div className="snap-start shrink-0 w-[80%] sm:w-[60%] md:w-1/3 lg:w-1/4 bg-white text-black rounded-xl p-4 shadow relative">
            <img
                src={imageNameHTML}
                className="rounded mb-4 w-full h-64 object-cover"
                alt={serviceName}
            />
            <h3 className="font-bold text-lg mb-2">{serviceName}</h3>
            <div className="absolute bottom-4 right-4">
                <a href="/appointments">
                    <button className="bg-red-600 p-3 rounded-full shadow-md hover:bg-red-700">
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
                    </button>
                </a>
            </div>
        </div>
    );
}