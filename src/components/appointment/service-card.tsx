interface ServiceCardProps {
    serviceName: string;
    serviceIcon: string;
    serviceDescription: string;
    checked?: boolean;
    onToggle?: (serviceName: string) => void;
}

export default function ServiceCard({
    serviceName,
    serviceIcon,
    serviceDescription,
    checked,
    onToggle,
}: ServiceCardProps) {
    return (
        <div
            className="flex items-center bg-white rounded-xl shadow p-4 border border-gray-200 hover:shadow-md cursor-pointer"
            onClick={() => onToggle?.(serviceName)}
        >
            <div className="mr-4">
                <img src={serviceIcon} height="32" width="32" alt={serviceName} />
            </div>
            <div className="flex-1">
                <h3 className="font-semibold text-black">{serviceName}</h3>
                <p className="text-sm text-gray-500">{serviceDescription}</p>
            </div>
            <input
                type="checkbox"
                checked={checked}
                onChange={() => onToggle?.(serviceName)}
                className="w-5 h-5"
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
}
