export default function Index() {
  return (
    <div className="min-h-screen bg-anisha-bg overflow-hidden relative font-inter">
      {/* Decorative Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-14 h-14 rounded-full bg-anisha-gray top-[165px] left-[20px] hidden lg:block" />
        <div className="absolute w-14 h-14 rounded-full bg-anisha-gray top-[372px] left-[1318px] hidden xl:block" />
        <div className="absolute w-14 h-14 rounded-full bg-anisha-gray top-[478px] left-[1318px] hidden xl:block" />
        <div className="absolute w-14 h-14 rounded-full bg-anisha-gray top-[584px] left-[1318px] hidden xl:block" />
        <div className="absolute w-14 h-14 rounded-full bg-anisha-gray top-[690px] left-[1318px] hidden xl:block" />
        <div className="absolute w-14 h-14 rounded-full bg-anisha-gray top-[877px] left-[449px] hidden lg:block" />
        <div className="absolute w-14 h-14 rounded-full bg-anisha-gray top-[546px] left-[840px] hidden lg:block" />
        <div className="absolute w-14 h-14 rounded-full bg-anisha-gray top-[372px] left-[1197px] hidden xl:block" />
        <div className="absolute w-14 h-14 rounded-full bg-anisha-gray top-[407px] left-[1096px] hidden xl:block" />
        <div className="absolute w-4 h-4 rounded-full bg-anisha-gray top-[253px] left-[423px] hidden lg:block" />
        <div className="absolute w-4 h-4 rounded-full bg-anisha-gray top-[336px] left-[735px] hidden lg:block" />
        <div className="absolute w-4 h-4 rounded-full bg-anisha-gray top-[1001px] left-[1033px] hidden lg:block" />
        <div className="absolute w-4 h-4 rounded-full bg-anisha-gray top-[181px] left-[1355px] hidden xl:block" />
        <div className="absolute w-4 h-4 rounded-full bg-anisha-gray top-[478px] left-[1384px] hidden xl:block" />
        <div className="absolute w-4 h-4 rounded-full bg-anisha-gray top-[584px] left-[1384px] hidden xl:block" />
        <div className="absolute w-14 h-14 rounded-full bg-anisha-gray top-[433px] left-[20px] hidden lg:block" />

        {/* Decorative Diamonds */}
        <div className="absolute w-8 h-8 bg-anisha-blue rotate-45 top-[185px] left-[827px] hidden lg:block" />
        <div className="absolute w-8 h-8 bg-anisha-blue rotate-45 top-[848px] left-[1267px] hidden xl:block" />
        <div className="absolute w-8 h-8 bg-anisha-blue rotate-45 top-[934px] left-[633px] hidden lg:block" />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[101px] pt-8 lg:pt-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-[5px] h-[30px] bg-anisha-blue" />
            <h1 className="font-poppins font-bold text-[28px] lg:text-[32px] leading-[32px] text-black">
              Anisha
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-[25px] font-poppins text-[18px] leading-6 text-anisha-text">
            <a
              href="#about"
              className="hover:text-anisha-blue transition-colors"
            >
              About
            </a>
            <div className="flex items-center gap-2">
              <a
                href="#service"
                className="hover:text-anisha-blue transition-colors"
              >
                Service
              </a>
              <svg
                width="18"
                height="10"
                viewBox="0 0 18 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L8.69028 9L16.3806 1"
                  stroke="#3A4563"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <a
              href="#doctor"
              className="hover:text-anisha-blue transition-colors"
            >
              Doctor
            </a>
            <a
              href="#patient"
              className="hover:text-anisha-blue transition-colors"
            >
              Patient
            </a>
            <a
              href="#contact"
              className="hover:text-anisha-blue transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6 lg:gap-10">
            <a
              href="#login"
              className="font-poppins font-bold text-[16px] lg:text-[18px] leading-6 text-black hover:text-anisha-blue transition-colors"
            >
              Login
            </a>
            <button className="bg-anisha-blue hover:bg-blue-600 transition-colors text-white font-poppins font-bold text-[16px] lg:text-[20px] leading-6 px-6 lg:px-10 py-3 lg:py-4 rounded-full">
              Book A Doctor
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[101px] pt-16 lg:pt-[200px] pb-12 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Subject Tag */}
            <div className="inline-flex items-center bg-anisha-blue-light rounded-full px-4 py-2">
              <span className="font-poppins font-bold text-[18px] lg:text-[20px] leading-9 text-anisha-blue">
                Innovative Medicine
              </span>
            </div>

            {/* Main Headline */}
            <div className="relative">
              <h2 className="font-inter font-bold text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.2] lg:leading-[72px] text-black">
                "Anisha" The Best Clinic for{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Online Medical</span>
                  <svg
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-auto -z-0 hidden sm:block"
                    viewBox="0 0 450 78"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ minWidth: "280px" }}
                  >
                    <rect x="1" y="3" width="100%" height="70" fill="#E7F4FF" />
                    <rect
                      x="1"
                      y="3"
                      width="100%"
                      height="70"
                      fill="white"
                      fillOpacity="0.2"
                    />
                    <rect
                      x="1"
                      y="3"
                      width="100%"
                      height="70"
                      stroke="#008BFF"
                      strokeWidth="2"
                      strokeDasharray="10 10"
                    />
                    <circle cx="6" cy="6" r="5" fill="#008BFF" />
                    <circle cx="6" cy="73" r="5" fill="#008BFF" />
                  </svg>
                </span>{" "}
                Treatment Service
              </h2>
            </div>

            {/* Description */}
            <p className="font-inter text-[18px] lg:text-[20px] leading-7 lg:leading-[28px] text-anisha-text max-w-[711px]">
              Lorem Ipsum is simply dummy text. It is a long fact that a reader
              will be distracted by the readable content of a page when looking
              at its layout.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8 pt-2 lg:pt-4">
              <button className="bg-anisha-blue hover:bg-blue-600 transition-colors text-white font-poppins font-bold text-[18px] lg:text-[20px] leading-6 px-8 lg:px-10 py-4 lg:py-5 rounded-full">
                Schedule a Celll
              </button>

              <button className="flex items-center gap-4 group">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] flex items-center justify-center group-hover:shadow-[0_6px_32px_rgba(0,139,255,0.15)] transition-shadow">
                    <svg
                      width="20"
                      height="24"
                      viewBox="0 0 20 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 12L0 23.6603V0.339746L20 12Z"
                        fill="#008BFF"
                      />
                    </svg>
                  </div>
                </div>
                <span className="font-poppins font-semibold text-[18px] lg:text-[20px] leading-6 text-anisha-blue group-hover:text-blue-600 transition-colors">
                  Watch Videos
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Doctor Image */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/6e714b59c50dddc03a0538c060defa24596c586d?width=898"
              alt="Professional doctor in white coat with stethoscope"
              className="w-full max-w-[400px] lg:max-w-[449px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="hidden lg:flex flex-col items-start gap-6 mt-32">
          <span className="font-inter text-[20px] leading-6 text-anisha-text">
            Scroll Down
          </span>
          <svg
            width="23"
            height="34"
            viewBox="0 0 23 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.9853 33.0607C10.5711 33.6464 11.5208 33.6464 12.1066 33.0607L21.6526 23.5147C22.2383 22.9289 22.2383 21.9792 21.6526 21.3934C21.0668 20.8076 20.117 20.8076 19.5312 21.3934L11.046 29.8787L2.56068 21.3934C1.97489 20.8076 1.02515 20.8076 0.439359 21.3934C-0.146428 21.9792 -0.146428 22.9289 0.439359 23.5147L9.9853 33.0607ZM9.54596 0L9.54596 32H12.546L12.546 0L9.54596 0Z"
              fill="#008BFF"
            />
          </svg>
        </div>
      </main>
    </div>
  );
}
