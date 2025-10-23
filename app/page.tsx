import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900">
          {/* Background Gaming Illustration */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: "url('/Images/1c71975d-3bfa-4d55-8f2d-e55396822c15.png')",
            }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Spark Games
              </h1>
              <p className="text-xl lg:text-2xl text-purple-100 mb-4">
                Creating Engaging Mobile Games
              </p>
              <p className="text-lg text-purple-200 mb-12 max-w-2xl mx-auto">
                Empowering developers and bringing great mobile games to a global audience. 
                We craft innovative gaming experiences that connect players worldwide.
              </p>
              
              {/* App Store Buttons (Prepared for future) */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="bg-gray-800 bg-opacity-50 text-gray-300 px-6 py-3 rounded-lg font-medium cursor-not-allowed">
                  <div className="flex items-center space-x-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                    </svg>
                    <span>Coming to App Store</span>
                  </div>
                </div>
                <div className="bg-gray-800 bg-opacity-50 text-gray-300 px-6 py-3 rounded-lg font-medium cursor-not-allowed">
                  <div className="flex items-center space-x-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <span>Coming to Google Play</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              About Spark Games
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are passionate about creating innovative mobile gaming experiences that bring joy and engagement to players around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Spark Games, we believe in the power of mobile games to connect people, spark creativity, 
                and provide meaningful entertainment experiences. Our team is dedicated to developing high-quality 
                games that are accessible, engaging, and built with the latest technology.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We focus on creating games that are not just fun to play, but also foster communities 
                and provide lasting value to our players across the globe.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">What We Do</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Mobile Game Development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  iOS & Android Publishing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Game Design & User Experience
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Community Building
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Company Information</h2>
              <p className="text-gray-600">
                Spark Games is the commercial name of Naolito Games SL
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal Entity</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Company:</strong> Naolito Games SL</p>
                  <p><strong>Commercial Name:</strong> Spark Games</p>
                  <p><strong>VAT Number:</strong> B75552836</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Address:</strong> Sor teresa prat 15</p>
                  <p>Polo de contenidos digitales</p>
                  <p>Málaga (Spain) 29003</p>
                  <p><strong>Email:</strong> <a href="mailto:contact@naolito.com" className="text-purple-600 hover:text-purple-700">contact@naolito.com</a></p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link 
                href="/contact" 
                className="btn-primary inline-block"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Links Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Legal Information</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href="/legal" 
                className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
              >
                Terms and Conditions
              </Link>
              <Link 
                href="/legal#privacy-policy" 
                className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/legal#cookies-policy" 
                className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
              >
                Cookies Policy
              </Link>
              <Link 
                href="/contact" 
                className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
