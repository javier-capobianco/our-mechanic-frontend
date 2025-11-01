interface ServiceCardProps {
    serviceName: string,
    serviceIcon: string,
    serviceDescription: string
};

export default function ServiceCard({ serviceName, serviceIcon, serviceDescription }: ServiceCardProps) {
    return (
        <div className="flex items-center bg-white rounded-xl shadow p-4 border border-gray-200 hover:shadow-md">
            {/* Icon */}
            <div className="text-red-500 mr-4">
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 13V9a3 3 0 00-6 0v4m-6 0a6 6 0 0012 0v-4a6 6 0 10-12 0v4z"
                    />
                </svg> */}
                <img src={serviceIcon} height={"32px"} width={"32px"}></img>
            </div>
            {/* Text Content */}
            <div className="flex-1">
                <h3 className="font-semibold text-black">{serviceName}</h3>
                <p className="text-sm text-gray-500">{serviceDescription}</p>
            </div>
            {/* Checkbox */}
            <input
                type="checkbox"
                className="w-5 h-5 text-red-500 border-gray-300 rounded focus:ring-red-500"
            />
        </div>
    )
}