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
            <div className="grid grid-cols-3">
              {/* Column 1: Recurring Workflows */}
              <div className="border-r border-gray-200">
                <h3 className="font-semibold text-gray-700 mb-2 p-4 bg-gray-100 text-xs">RECURRING WORKFLOWS</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-[40px_1fr] divide-gray-200 items-center p-4 border-b border-gray-200">
                    <img src={"https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c285a5ca1580d2949393_3d-icon-data.avif"} alt="CRM" className="h-6 w-6 hover:scale-110 transition-transform " />
                    <div>
                      <p className="font-medium text-black text-sm font-bold">CRM enrichment & hygiene</p>
                      <p className="text-gray-600 text-xs ">Connect to and auto-update your CRM as a source of truth</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-[40px_1fr] divide-gray-200 items-center p-4">
                    <img src={"https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c2850a2625d36b8b8f1c_3d-icon-list.avif"} alt="Search" className="h-6 w-6 hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-medium text-black text-sm font-bold">TAM sourcing</p>
                      <p className="text-gray-600 text-xs">Build targeted lead lists using 10+ sources and AI</p>
                    </div>
                  </div>
                  {/* Add more rows here */}
                </div>
              </div>

              {/* Column 2: Features */}
              <div className="border-r border-gray-200">
                <h3 className="font-semibold text-gray-700 mb-2 p-4 bg-gray-100 text-xs">FEATURES</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-[40px_1fr] items-center p-4 border-b border-gray-200">
                    <img src={"https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66968abc88fb18290e684672_3d-icon-wire.avif"} alt="Integrations" className="h-6 w-6 hover:scale-110 transition-transform " />
                    <div>
                      <p className="font-medium text-black text-sm font-bold">Integrations</p>
                      <p className="text-gray-600 text-xs ">Access 50+ databases to get the most comprehensive coverage of information</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-[40px_1fr] divide-gray-200 items-center p-4">
                    <img src={"https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66968abca946b59ed38891ca_3d-icon-wave.avif"} alt="Settings" className="h-6 w-6 hover:scale-110 transition-transform  " />
                    <div>
                      <p className="font-medium text-black text-sm font-bold">Multi-provider data enrichment</p>
                      <p className="text-gray-600 text-xs">Search multiple providers sequentially to maximize data quality and coverage</p>
                    </div>
                  </div>
                  {/* Add more rows here */}
                </div>
              </div>

              {/* Column 3: Quick Links */}
              <div className="border-r border-gray-200">
                <h3 className="font-semibold text-gray-700 mb-2 p-4 bg-gray-100 text-xs">QUICK LINKS</h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-[40px_1fr] items-center p-4 border-b border-gray-200">
                    <p className="text-black cursor-pointer hover:text-gray-500 text-sm">Templates</p>
                  </div>
                  <div className="grid grid-cols-[200px_1fr] items-center p-4 border-b border-gray-200">
                    <p className="text-black cursor-pointer hover:text-gray-500 text-sm">Chrome extension</p>
                  </div>
                  <div className="grid grid-cols-[40px_1fr] items-center p-4">
                    <p className="text-black cursor-pointer hover:text-gray-500 text-sm ">Changelog</p>
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