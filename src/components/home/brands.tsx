import BrandLogo from "./brand-logo";
export default function Brands() {
    const brandNames: string[] = ['bmw', 'jeep', 'gmc', 'ford', 'chrysler', 'cadillac', 'nissan', 'toyota', 'honda', 'buick', 'lincoln', 'subaru', 'acura', 'volkswagen'];
    return (
        <>
            {/* BRANDS */}
            <section className="bg-white text-black">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        <span className="text-red-600">BRANDS</span> WE SERVE
                    </h2>
                    <p className="mb-4">
                        Our Mechanic works with trusted brands like Ford, GM, Chevrolet,
                        Chrysler, Jeep, Lincoln, Cadillac, Honda, Toyota, Nissan, Subaru, Acura,
                        Infinity, Lexus and more. We ensure your vehicle gets the correct parts
                        and diagnostics from manufacturers we know and trust.
                    </p>
                    <p>
                        Whether your car is new or old, we have the tools, parts, and expertise
                        to help. Call today to schedule an appointment—your satisfaction is our
                        priority.
                    </p>
                </div>
                {/* Logos Strip */}
                <div className="mt-10 py-6 px-4 max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-6">
                        {brandNames.map((brandName: string) => (
                            <BrandLogo key={brandName} brandName={brandName} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}