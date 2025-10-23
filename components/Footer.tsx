import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="mb-4">
                <span className="text-xl font-bold">Spark Games</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Empowering developers and bringing great mobile games to a global audience. 
                Spark Games is the commercial name of Naolito Games SL.
              </p>
              <div className="text-sm text-gray-400">
                <p className="mb-1"><strong>Naolito Games SL</strong></p>
                <p className="mb-1">VAT Number: B75552836</p>
                <p className="mb-1">Sor teresa prat 15, Polo de contenidos digitales</p>
                <p className="mb-1">Málaga (Spain) 29003</p>
                <p className="mb-1">Email: <a href="mailto:contact@naolito.com" className="text-blue-400 hover:text-blue-300">contact@naolito.com</a></p>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/terms-and-conditions"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            Terms and Conditions
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/privacy-policy"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            Privacy Policy
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/cookies-policy"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            Cookies Policy
                          </Link>
                        </li>
                      </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/contact" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a 
                    href="mailto:contact@naolito.com" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Email Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Spark Games. All Rights Reserved. Commercial name of Naolito Games SL.
            </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                      <Link
                        href="/terms-and-conditions"
                        className="text-gray-400 hover:text-white text-sm transition-colors"
                      >
                        Terms
                      </Link>
                      <Link
                        href="/privacy-policy"
                        className="text-gray-400 hover:text-white text-sm transition-colors"
                      >
                        Privacy
                      </Link>
                      <Link
                        href="/cookies-policy"
                        className="text-gray-400 hover:text-white text-sm transition-colors"
                      >
                        Cookies
                      </Link>
                    </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
