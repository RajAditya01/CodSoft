import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-4 fixed bottom-0 left-0 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Icons */}
          <div className="mb-4 md:mb-0">
            <h5 className="text-lg font-semibold mb-2">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.56v14.88c0 2.52-2.04 4.56-4.56 4.56H4.56C2.04 24 0 21.96 0 19.44V4.56C0 2.04 2.04 0 4.56 0h14.88C21.96 0 24 2.04 24 4.56zM8.1 19.44V9.9H5.55v9.54H8.1zm-1.275-10.8c.825 0 1.35-.675 1.35-1.5s-.675-1.5-1.35-1.5-1.5.675-1.5 1.5.675 1.5 1.5 1.5zm10.275 10.8h2.55v-5.85c0-3.15-3.3-3-4.5-1.5V9.9h-2.55v9.54h2.55v-5.25c0-1.05.75-1.5 1.575-1.5 1.125 0 1.425 1.05 1.425 2.4v4.35zm-7.2-10.8c-.75 0-1.275.525-1.275 1.275 0 .75.525 1.275 1.275 1.275h.075c.75 0 1.275-.525 1.275-1.275 0-.75-.525-1.275-1.275-1.275h-.075z" /></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75 0 4.8 3.384 8.775 7.803 9.645v-6.792H8.797v-2.853h2.256V9.9c0-2.214 1.35-3.453 3.34-3.453.951 0 1.904.174 1.904.174v2.04h-1.073c-1.054 0-1.378.65-1.378 1.304v1.557h2.433l-.39 2.853h-2.043V21.645c4.419-.87 7.803-4.845 7.803-9.645 0-5.376-4.374-9.75-9.75-9.75z" /></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.56v14.88c0 2.52-2.04 4.56-4.56 4.56H4.56C2.04 24 0 21.96 0 19.44V4.56C0 2.04 2.04 0 4.56 0h14.88C21.96 0 24 2.04 24 4.56zM8.1 19.44V9.9H5.55v9.54H8.1zm-1.275-10.8c.825 0 1.35-.675 1.35-1.5s-.675-1.5-1.35-1.5-1.5.675-1.5 1.5.675 1.5 1.5 1.5zm10.275 10.8h2.55v-5.85c0-3.15-3.3-3-4.5-1.5V9.9h-2.55v9.54h2.55v-5.25c0-1.05.75-1.5 1.575-1.5 1.125 0 1.425 1.05 1.425 2.4v4.35zm-7.2-10.8c-.75 0-1.275.525-1.275 1.275 0 .75.525 1.275 1.275 1.275h.075c.75 0 1.275-.525 1.275-1.275 0-.75-.525-1.275-1.275-1.275h-.075z" /></svg>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-right">
            <h5 className="text-lg font-semibold mb-2">Contact Us</h5>
            <p>Name: Aditya Raj</p>
            <p>Email: adityavishal903@gmail.com</p>
            <p>Phone: (+91) 8076489276</p>
          </div>
        </div>
        <div className="mt-4 text-center text-gray-400">
          <p>&copy; 2024 Project Management Tool. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
