export default function Footer() {
    return (
        <footer id="footer" className="bg-black text-white pt-12">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 pb-4 text-center md:text-left items-center md:items-start">
                {/* Logo + Message */}
                <div>
                    <div className="md:flex items-center mb-4 text-center">
                        <h3 className="text-xl font-bold ">
                            <span className="text-white">OUR</span>
                            <span className="text-red-600">MECHANIC</span>
                        </h3>
                    </div>
                    <p className="mb-4">Make The Right Choice And Come Visit Us Today!</p>
                    <div className="md:flex md:gap-3">
                        <a href="#" className="bg-red-600 rounded-full p-2 m-2 md:m-0">
                            <i className="fa-brands fa-facebook texIt-white" aria-hidden="true" />
                        </a>
                        <a href="#" className="bg-red-600 rounded-full p-2 m-2 md:m-0">
                            <i className="fa-brands fa-instagram" aria-hidden="true"/>
                        </a>
                    </div>
                </div>
                {/* Store Info */}
                <div>
                    <h4 className="text-lg font-bold mb-2">STORE INFO:</h4>
                    <p>
                        <span className="text-red-500 font-semibold">ADDRESS</span>
                        <br />
                        3927 3-A St NE <br />
                        Calgary, AB T2E 6S7
                    </p>
                    <p className="mt-4">
                        <span className="text-red-500 font-semibold">HOURS</span>
                        <br />
                        Mon–Fri: 8am–5pm
                        <br />
                        Closed Weekends
                    </p>
                    <p className="mt-4">
                        <span className="text-red-500 font-semibold">CALL US</span>
                        <br />
                        <span className="text-xl font-bold">403-277-7174</span>
                    </p>
                </div>
                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-bold mb-2">QUICK LINKS</h4>
                    <ul className="space-y-2">
                        <li>
                            <a href="/" className="hover:text-red-500">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-red-500">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/#services" className="hover:text-red-500">
                                All Services
                            </a>
                        </li>
                        <li>
                            <a href="#footer" className="hover:text-red-500">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Right-side CTA */}
                <div className="md:flex md:flex-col justify-between">
                    <div>
                        <h4 className="text-2xl font-bold leading-snug mb-4 text-center md:text-justify">
                            {/* YOUR TOP–TIER<br />DESTINATION<br /> */}
                            FOR ALL
                            <br />
                            REPAIRS
                        </h4>
                        <a
                            href="/appointments"
                            className="inline-flex items-center bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
                        >
                            Schedule Online Today
                            <span className="bg-red-600 ml-2 p-2 rounded-full">
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
                    <div>
                        <a />
                    </div>
                </div>
            </div>
            {/* Bottom Bar */}
            <div className="bg-black text-white pt-auto text-sm flex flex-col md:flex-row justify-between items-center">
                <p className="mx-auto">©2025 All Rights Reserved</p>
                <p className="mt-4 md:mt-0" />
            </div>
        </footer>
    );
}