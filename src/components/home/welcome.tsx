export default function Welcome() {
    return (
        <section className="bg-white text-black py-16">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Text Column */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl font-bold mb-6">
                        <span className="text-red-600">WELCOME TO</span> OUR MECHANIC
                    </h2>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                    </p>
                </div>
                {/* Image Column */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="/services/brakes.png"
                        alt="Shop image"
                        className="max-w-md rounded shadow w-full"
                    />
                </div>
            </div>
        </section>
    );
}