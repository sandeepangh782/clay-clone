"use client"; // This line marks the component as a client component

import React, { useState, useEffect } from 'react';
import styles from '@/app/styles/DropdownMenu.module.css';


const DropdownMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  let closeTimeout;

  // Function to open the menu
  const handleMouseEnter = () => {
    clearTimeout(closeTimeout); // Clear any previous close timeout
    setIsOpen(true);
  };

  // Function to close the menu after 4 seconds
  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setIsOpen(false);
    }, 1000); // 4-second delay before closing
  };

  useEffect(() => {
    // Cleanup timeout on unmount to prevent memory leaks
    return () => clearTimeout(closeTimeout);
  }, []);

  return (
    <div
      className={styles.dropdownMenu}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center cursor-pointer">
        {children}
      </div>
      {isOpen && (
        <div className={styles.dropdownContent}>
          <div className={styles.inner}>
            <div className="grid grid-cols-2">
              {/* Column 1: Recurring Workflows */}
              <div className="border-r border-gray-200">
                <h3 className="font-semibold text-gray-700 mb-2 p-4 bg-gray-100 text-xs">CLAY FOR</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-[40px_1fr] divide-gray-200 items-center p-4 border-b border-gray-200">
                    <img src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66e48d7baf0d1ed31e280380_RevOps.avif" alt="CRM" className="h-6 w-6 hover:scale-110 transition-transform " />
                    <div>
                      <p className="font-medium text-black text-sm font-bold">RevOps</p>
                      <p className="text-gray-600 text-xs ">Prospect, enrich, and clean your
                      CRM automatically</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-[40px_1fr] divide-gray-200 items-center p-4">
                    <img src={"https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66e48d7bbebf97135bedbe28_SDR.avif"} alt="Search" className="h-6 w-6 hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-medium text-black text-sm font-bold">SDRs</p>
                      <p className="text-gray-600 text-xs">Grow pipeline faster by targeting
and enriching your prospects in
seconds</p>
                    </div>
                  </div>
                  {/* Add more rows here */}
                </div>
              </div>

              {/* Column 2: Features */}
              <div className="border-r border-gray-200">
                <h3 className="font-semibold text-gray-700 mb-2 p-4 bg-gray-100 text-xs">CUSTOMER SOLUTIONS</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-[40px_1fr] items-center p-4 border-b border-gray-200">
                    <img src={"https://cdn.prod.website-files.com/61702af2e3966e09c4101538/670175f515ea5801d59eeb45_CSV.avif"} alt="Integrations" className="h-6 w-6 hover:scale-110 transition-transform " />
                    <div>
                      <p className="text-gray-600 text-xs ">How Verkada's growth team uses Clay
to launch targeted ABM campaigns
across Linkedin, email, and direct mail</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-[40px_1fr] divide-gray-200 items-center p-4">
                    <img src={"https://cdn.prod.website-files.com/61702af2e3966e09c4101538/67017619c252f8cb382976c0_CS.avif"} alt="Settings" className="h-6 w-6 hover:scale-110 transition-transform  " />
                    <div>
                      <p className="text-gray-600 text-xs">How Anthropic uses Clay to 3x their
enrichment coverage-with no manual
work</p>
                    </div>
                  </div>
                  {/* Add more rows here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;