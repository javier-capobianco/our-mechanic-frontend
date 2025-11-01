import Script from "next/script";
export default function NavBar() {

    return (<>
        <nav className="flex px-4 border-b md:shadow-lg items-center relative">
            <div className="text-lg font-bold md:py-0 py-4">
                <a href="/">
                    <img src="OurMechanicLogo-1.png" width="175px" />
                </a>
            </div>
            {/* MENU UL */}
            <ul
                id="menu"
                className="border-t md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent hidden md:flex border-b sm:border-none text-center text-lg"
            >
                <li>
                    <a
                        href="/"
                        className="flex md:inline-flex p-4 items-center hover:bg-gray-50 hover:font-bold"
                    >
                        <span className="hover:bottom-b-red">Home</span>
                    </a>
                </li>
                <li className="relative parent">
                    <a
                        href="/#services"
                        className="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-50 hover:font-bold"
                    >
                        <span>Services</span>
                    </a>
                </li>
                <li>
                    <a
                        href="/appointments"
                        className="flex md:inline-flex p-4 items-center hover:bg-gray-50 hover:font-bold"
                    >
                        <span>Request Appointment</span>
                    </a>
                </li>
                <li>
                    <a
                        href="/about"
                        className="flex md:inline-flex p-4 items-center hover:bg-gray-50 hover:font-bold"
                    >
                        <span>About us</span>
                    </a>
                </li>
                <li>
                    <a
                        href="/contact"
                        className="flex md:inline-flex p-4 items-center hover:bg-gray-50 hover:font-bold"
                    >
                        <span>Contact</span>
                    </a>
                </li>
            </ul>
            {/* HAMBURGER */}
            <div
                id="menu-toggle"
                className="ml-auto md:hidden text-gray-500 cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M4 5h16M4 12h16M4 19h16"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </nav>
        {/* Inline Script */}
      <Script 
        id="navbar-inline-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            document.getElementById("menu-toggle").addEventListener("click", function () {
            const menu = document.getElementById("menu");
            menu.classList.toggle("hidden");
          });
          `,
        }}
      />
    </>
    );
}