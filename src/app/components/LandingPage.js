// src/components/LandingPage.js
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/styles/LandingPage.module.css';

export const LandingPage = () => {
  const companies = [
    { name: 'Intercom', logo: 'https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66dac2913afacf1bcac1a936_img-logo-intercom.svg' },
    { name: 'Verkada', logo: 'https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66dac29242c23ab5f82e0189_img-logo-verkada.svg' },
    { name: 'Brex', logo: 'https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66dac29242c23ab5f82e016f_img-logo-brex.svg' },
    { name: 'Notion', logo: 'https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66dac292f8c407c51112b161_img-logo-notion.svg' },
    { name: 'Vanta', logo: 'https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66dac292f8c407c51112b18c_img-logo-vanta.svg' },
    { name: 'HubSpot', logo: 'https://cdn.prod.website-files.com/61477f2c24a826836f969afe/672107541763d4820dd26a31_img-logo-hubspot.svg' },
    { name: 'Anthropic', logo: 'https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66dacb4608a223faada2fd6f_img-logo-anthropic.svg' },
    { name: 'Ramp', logo: 'https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66dac291bafa65b8a43918f9_img-logo-ramp.svg' },
    { name: 'Hightouch', logo: 'https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66dac291fff0c4b20c048d39_img-logo-hightouch.svg' },
  ];

  const dataSourceButtons = [
    { text: 'CRM records', icon: '📊' },
    { text: 'Webinar registrations', icon: '🎥' },
    { text: 'Hot leads', icon: '🔥' },
    { text: 'Conference attendee list', icon: '👥' },
    { text: 'New outbound leads', icon: '🎯' },
    { text: 'Inbound signups', icon: '📥' },
  ];

  const commonStyles = {
    transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
    transformStyle: 'preserve-3d',
    opacity: 1,
  };

  return (
<main className={`min-h-screen relative overflow-hidden ${styles.hero}`}>
      
  <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
    {/* Hero Section */}
    <div>
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start `}>
      {/* Left Side - Hero Content */}
      <div className="pt-12">
        <h1 className="text-[4.5rem] text-black font-medium leading-[1.1] mb-8">
          Use Clay as your<br />
          CRM enrichment<br />
          and cleaning tool
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
          Maintain a clean, updated CRM by routing all your data through
          Clay first for enrichment, formatting, scoring, and more.
        </p>
        <Link 
          href="#"
          className="group inline-flex items-center px-8 py-4 bg-black text-white text-lg rounded-full hover:bg-gray-800 transition-all duration-200 ease-in-out"
        >
          <span>Start for free today</span>
          <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      {/* Right Side - Data Flow Visualization */}
      <div className="relative">
        <div className="space-y-8">
          {/* First grid */}
          <div className="grid grid-cols-4 gap-8">
            {[
              {width: '60%', src: '6719558b6786051eeace65b3_hero-crm-bubble1.svg'},
              {width: '70%', src: '6719558bffa1185697f534ac_hero-crm-bubble2.svg'},
              {width: '100%', src: '6719558c893a215479534d30_hero-crm-bubble3.svg'},
              {width: '60%', src: '6719558be83f1327c1291c9b_hero-crm-bubble3-1.svg'}
            ].map((item, index) => (
              <div 
                key={index}
                className="relative rounded-lg hover:scale-105 transition-transform duration-300"
                style={commonStyles}
              >
                <img 
                  className="mx-auto"
                  width={item.width}
                  src={`https://cdn.prod.website-files.com/61477f2c24a826836f969afe/${item.src}`}
                  alt="CRM bubble"
                />
              </div>
            ))}
          </div>

          {/* Second grid */}
          <div className="grid grid-cols-2 gap-8">
            {[
              {src: '671a576087a8ea0719ebd8b9_hero-crm-bubble4.svg'},
              {src: '671a576087a8ea0719ebd8b9_hero-crm-bubble4.svg'}
            ].map((item, index) => (
              <div key={index} className="w-[60%] mx-auto relative">
                <img 
                  className="w-full"
                  src={`https://cdn.prod.website-files.com/61477f2c24a826836f969afe/${item.src}`}
                  alt="CRM bubble"
                />
              </div>
            ))}
          </div>

          {/* Single image */}
          <div className="w-[40%] mx-auto">
            <img 
              className="mx-auto"
              width="55%"
              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6719558c221c6386ee2f2e8d_hero-crm-bubble6.svg"
              alt="CRM bubble"
            />
          </div>

          {/* Dashed Arrow */}
          <div className="flex justify-center my-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="3%" viewBox="0 2 15 47" fill="none" className="text-gray-400">
              <path 
                d="M5.25 0L5.25 36" 
                stroke="currentColor" 
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path 
                d="M5.46967 36.5303C5.76256 36.8232 6.23744 36.8232 6.53033 36.5303L11.3033 31.7574C11.5962 31.4645 11.5962 30.9896 11.3033 30.6967C11.0104 30.4038 10.5355 30.4038 10.2426 30.6967L6 34.9393L1.75736 30.6967C1.46446 30.4038 0.989591 30.4038 0.696698 30.6967C0.403805 30.9896 0.403805 31.4645 0.696698 31.7574L5.46967 36.5303Z"
                fill="currentColor"
              />
            </svg>
          </div>

          {/* Clay Box */}
          <div className="w-[42%] mx-auto transform hover:scale-105 transition-transform duration-300">
            <img 
              className="w-full"
              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/67195c4f985469f26597e526_hero-crm-bubble-big.png"
              alt="Clay"
            />
          </div>

          {/* Dashed Arrow */}
          <div className="flex justify-center my-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="3%" viewBox="0 2 15 47" fill="none" className="text-gray-400">
              <path 
                d="M5.25 0L5.25 36" 
                stroke="currentColor" 
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path 
                d="M5.46967 36.5303C5.76256 36.8232 6.23744 36.8232 6.53033 36.5303L11.3033 31.7574C11.5962 31.4645 11.5962 30.9896 11.3033 30.6967C11.0104 30.4038 10.5355 30.4038 10.2426 30.6967L6 34.9393L1.75736 30.6967C1.46446 30.4038 0.989591 30.4038 0.696698 30.6967C0.403805 30.9896 0.403805 31.4645 0.696698 31.7574L5.46967 36.5303Z"
                fill="currentColor"
              />
            </svg>
          </div>

          {/* CRM Box */}
          <div className="w-[32%] mx-auto transform hover:scale-105 transition-transform duration-300">
            <img 
              className="w-full"
              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/671a586bf60464107e1e178a_hero-crm-bubble7.svg"
              alt="CRM"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
        {/* Company Logos Section */}
        <div className="mt-24 bg=white">
          <p className="text-center text-xs font-medium text-gray-500 tracking-[0.05em] uppercase mb-8">
            TRUSTED BY 100,000 LEADING GTM TEAMS OF ALL SIZES
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {companies.map((company) => (
              <div key={company.name} className="h-8 transition-opacity duration-200">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={120}
                  height={32}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};