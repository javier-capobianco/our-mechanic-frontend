import Image from "next/image";

interface BrandLogoProps {
    brandName: string;
}

export default function BrandLogo({ brandName }: BrandLogoProps) {
    const src = `/car_brands/icons8-${brandName}-96.png`;
    return (
        <Image
            src={src}
            alt={brandName}
            width={48} // Provide the width of the image
            height={48} // Provide the height of the image
            className="h-12 object-contain"
        // Note: the className "h-12" will override the height prop visually,
        // but providing both width and height is crucial for performance.
        />
    );
}