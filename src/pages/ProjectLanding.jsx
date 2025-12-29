import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo1.png';

const ProjectLanding = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  
  // Hero form refs
  const heroNameRef = useRef(null);
  const heroEmailRef = useRef(null);
  const heroPhoneRef = useRef(null);
  
  const whatsappNumber = "+919560002261";
  
  const handleHeroSubmit = (e) => {
    e.preventDefault();
    const name = (heroNameRef.current?.value || "").trim();
    const email = (heroEmailRef.current?.value || "").trim();
    const phone = (heroPhoneRef.current?.value || "").trim();
    
    const message = `*New Project Enquiry*\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject: Shapoorji Pallonji Dualis`;
    const cleaned = whatsappNumber.replace(/\D/g, "");
    const url = `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`;
    
    window.open(url, "_blank");
    
    // Reset form
    if (heroNameRef.current) heroNameRef.current.value = "";
    if (heroEmailRef.current) heroEmailRef.current.value = "";
    if (heroPhoneRef.current) heroPhoneRef.current.value = "";
  };

  const heroImages = [
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=3540&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full font-sans text-white overflow-x-hidden">
      
      {/* ================= NAVBAR STRIP ================= */}
      <nav className="w-full bg-[#1c1915] py-4 border-b border-[#dfae75]/20 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <img 
            src={logo} 
            alt="Hitech Homes Logo" 
            className="h-10 w-auto"
          />
          <span className="text-[#dfae75] text-xl md:text-2xl font-bold tracking-wider uppercase">
            Hitech Homes
          </span>
        </div>
      </nav>
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Images with Auto Slide */}
        {heroImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentHeroImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${img}')`,
            }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
          </div>
        ))}

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-3/5 space-y-6 animate-fade-in-up mt-10 lg:mt-0 order-1 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide leading-tight text-[#fdf8e8]">
              SHAPOORJI PALLONJI DUALIS
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-light tracking-wide">
              In Sector 46 Gurgaon
            </h2>
            
            <div className="w-fit bg-[#dfae75] text-black px-4 py-2 text-sm md:text-base font-bold uppercase tracking-wider">
              PREMIUM - 3.5 & 4.5 BHK HOMES
            </div>
            
            <div className="bg-[#e4b57b] bg-opacity-90 text-black px-6 py-3 w-fit font-bold text-lg md:text-xl tracking-wider rounded-r-md">
               PRICE STARTS : ₹ 5.77 CR*
            </div>

            {/* Features List - Hidden on mobile, shown on desktop */}
            <ul className="hidden lg:flex lg:flex-col space-y-2 mt-8 text-sm md:text-base font-medium text-gray-100/90">
               <li className="flex items-center space-x-2">
                  <span className="text-[#dfae75]">✓</span>
                  <span>PRICE VALID FOR 1st 50 BOOKINGS</span>
               </li>
               <li className="flex items-center space-x-2">
                  <span className="text-[#dfae75]">✓</span>
                  <span>Total Land Area- 2 Acres</span>
               </li>
               <li className="flex items-center space-x-2">
                  <span className="text-[#dfae75]">✓</span>
                  <span>Comfortable & Convenient Luxury Living</span>
               </li>
               <li className="flex items-center space-x-2">
                  <span className="text-[#dfae75]">✓</span>
                  <span>Luxury Facilities And Amenities</span>
               </li>
               <li className="flex items-center space-x-2">
                  <span className="text-[#dfae75]">✓</span>
                  <span>Luxurious Clubhouse & Amenities ✓ 60,000 sq.ft.</span>
               </li>
               <li className="flex items-center space-x-2">
                  <span className="text-[#dfae75]">✓</span>
                  <span>Twin Towers - G+40 Story.</span>
               </li>
            </ul>

            <div className="hidden lg:block pt-6 text-2xl md:text-4xl font-serif text-white/50 italic">
              Artist's Impression
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-1/3 bg-black/60 backdrop-blur-md p-6 md:p-8 rounded-lg border border-white/10 shadow-2xl order-2 lg:order-2">
            <h3 className="text-2xl font-semibold mb-6">Get in touch with us.</h3>
            
            <form onSubmit={handleHeroSubmit} className="space-y-6">
              <div className="relative">
                <input 
                  ref={heroNameRef}
                  type="text" 
                  placeholder="Name*" 
                  required
                  className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none focus:border-[#dfae75] transition-colors placeholder-gray-300"
                />
              </div>
              
              <div className="relative">
                <input 
                  ref={heroEmailRef}
                  type="email" 
                  placeholder="Email*" 
                  required
                  className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none focus:border-[#dfae75] transition-colors placeholder-gray-300"
                />
              </div>

              <div className="relative">
                <input 
                  ref={heroPhoneRef}
                  type="tel" 
                  placeholder="Mobile*" 
                  required
                  className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none focus:border-[#dfae75] transition-colors placeholder-gray-300"
                />
              </div>

              <button 
                type="submit"
                className="w-full mt-4 bg-gradient-to-r from-[#dfae75] to-[#cfa065] text-black font-bold py-3 uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Features List - Shown on mobile below form */}
          <div className="w-full lg:hidden space-y-6 order-3">
            <ul className="space-y-2 text-sm font-medium text-gray-100/90">
               <li className="flex items-center space-x-2">
                  <span className="text-[#dfae75]">✓</span>
                  <span>PRICE VALID FOR 1st 50 BOOKINGS</span>
               </li>
               <li className="flex items-center space-x-2">
                  <span className="text-[#dfae75]">✓</span>
                  <span>Total Land Area- 2 Acres</span>
               </li>
               <li className="flex items-center space-x-2">
                  <span className="text-[#dfae75]">✓</span>
                  <span>Comfortable & Convenient Luxury Living</span>
               </li>
               <li className="flex items-center space-x-2">
                  <span className="text-[#dfae75]">✓</span>
                  <span>Luxury Facilities And Amenities</span>
               </li>
               <li className="flex items-center space-x-2">
                  <span className="text-[#dfae75]">✓</span>
                  <span>Luxurious Clubhouse & Amenities ✓ 60,000 sq.ft.</span>
               </li>
               <li className="flex items-center space-x-2">
                  <span className="text-[#dfae75]">✓</span>
                  <span>Twin Towers - G+40 Story.</span>
               </li>
            </ul>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-8 h-1 bg-white rounded-full opacity-100"></div>
          <div className="w-8 h-1 bg-white rounded-full opacity-50"></div>
        </div>
      </section>

      {/* ================= OVERVIEW SECTION ================= */}
      <section className="bg-[#1c1915] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl tracking-wide uppercase">
                  <span className="text-[#dfae75]">SHAPOORJI</span> <span className="text-[#e4b57b]">PALLONJI SECTOR 46</span>
                </h2>
                <h3 className="text-xl md:text-2xl text-white font-light tracking-widest uppercase">
                  IN SECTOR 46 GURGAON
                </h3>
              </div>

              <div className="text-gray-300 leading-relaxed text-sm md:text-base text-justify space-y-4 font-light">
                <p>
                  Shapoorji Pallonji Group has launched its latest residential complex in Shapoorji Pallonji Dualis Sector 46 Gurgaon, offering carefully built 3.5 & 4.5 BHK flats on many acres of lush nature. This new launch combines luxurious housing with efficient urban planning in Gurugram's most strategic location.
                </p>
                <p>
                  The quality and attention to detail of Shapoorji Pallonji houses appeal to discriminating homeowners seeking comfort and status, drawing on decades of construction experience. This idea is inspired by Shapoorji Pallonji's project to provide high-quality living places with great financial potential.
                </p>
                <p>
                  The builder wants to meet the rising need for excellent yet affordable homes in Gurugram's established sectors, where homeowners can enjoy mature neighbourhood infrastructure and contemporary facilities.
                </p>
              </div>

              <div>
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="bg-gradient-to-r from-[#dfae75] to-[#cfa065] text-black font-bold py-3 px-8 uppercase tracking-wider hover:shadow-lg hover:scale-105 transition-all duration-300">
                  DOWNLOAD PRICE LIST
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative group overflow-hidden border-4 border-[#dfae75]/20 rounded-sm">
                <div className="absolute inset-0 bg-[#dfae75]/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src="http://shapoorjidualis.com/img/g1.jpg" 
                  alt="Shapoorji Pallonji Sector 46" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>

          {/* ================= HIGHLIGHTS SECTION ================= */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 mt-20 md:mt-32">
            
            {/* Left Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative group overflow-hidden border-4 border-[#dfae75]/20 rounded-sm">
                <div className="absolute inset-0 bg-[#dfae75]/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src="http://shapoorjidualis.com/img/slider/2.jpg" 
                  onError={(e) => {e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2670&auto=format&fit=crop'}}
                  alt="Shapoorji Dualis Lobby" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 text-white/80 text-sm font-serif italic z-20">
                  Artist's Impression
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl tracking-wide uppercase text-[#e4b57b]">
                  SHAPOORJI DUALIS <span className="text-white">HIGHLIGHTS</span>
                </h2>
              </div>

              <ul className="space-y-4 text-gray-300 font-light text-sm md:text-base">
                <li className="flex items-start">
                  <span className="text-[#dfae75] mr-3 mt-1">•</span>
                  <span>World-class amenities such as a pool, gymnasium, clubhouse, and landscaped gardens.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dfae75] mr-3 mt-1">•</span>
                  <span>Prime Location in Sector 46, Gurgaon, with convenient connectivity to major locations.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dfae75] mr-3 mt-1">•</span>
                  <span>The project features thoughtfully designed apartments with great views.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dfae75] mr-3 mt-1">•</span>
                  <span>Spreading across 2 acres of land with several towers providing large, luxurious living spaces.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dfae75] mr-3 mt-1">•</span>
                  <span>Shapoorji Pallonji Dualis provides New upcoming homes with 3.5BHK and 4.5BHK units.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dfae75] mr-3 mt-1">•</span>
                  <span>Concierge Services By Quintessentially</span>
                </li>
              </ul>

              <div>
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="bg-gradient-to-r from-[#dfae75] to-[#cfa065] text-black font-bold py-3 px-8 uppercase tracking-wider hover:shadow-lg hover:scale-105 transition-all duration-300">
                  BOOK SITE VISIT
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PRICE LIST SECTION ================= */}
      <section className="bg-[#242b2e] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl tracking-wide uppercase text-[#e4b57b]">
               SHAPOORJI <span className="text-[#dfae75]">DUALIS PRICE LIST</span>
             </h2>
          </div>

          <div className="bg-[#1a202c] p-8 max-w-6xl mx-auto rounded-lg shadow-2xl overflow-x-auto">
            <div className="min-w-[800px] grid grid-cols-5 gap-6 text-center items-center">
              
              {/* Headings */}
              <div className="col-span-1 text-[#dfae75] font-bold text-sm tracking-widest uppercase mb-4 border-r border-gray-700 pb-2">TYPE</div>
              <div className="col-span-1 text-[#dfae75] font-bold text-sm tracking-widest uppercase mb-4 border-r border-gray-700 pb-2">SIZES</div>
              <div className="col-span-1 text-[#dfae75] font-bold text-sm tracking-widest uppercase mb-4 border-r border-gray-700 pb-2">
                PAYMENT PLAN<br/><span className="text-xs text-gray-400">FLEXI 10x10</span>
              </div>
              <div className="col-span-1 text-[#dfae75] font-bold text-sm tracking-widest uppercase mb-4 border-r border-gray-700 pb-2">
                PAYMENT PLAN<br/><span className="text-xs text-gray-400">30:40:30</span>
              </div>
              <div className="col-span-1 text-[#dfae75] font-bold text-sm tracking-widest uppercase mb-4"></div>

              {/* Row 1 */}
              <div className="col-span-1 border-r border-gray-700 h-full flex items-center justify-center">
                <div className="text-white font-medium uppercase">
                  3 BHK + SERVANT ROOM
                </div>
              </div>
              <div className="col-span-1 border-r border-gray-700 h-full flex items-center justify-center">
                <div className="text-white">
                  2850-3000 Sq.ft.
                </div>
              </div>
              <div className="col-span-1 border-r border-gray-700 h-full flex items-center justify-center">
                <div className="text-white">
                  ₹ 5.77 Cr* - 6.47 Cr*
                </div>
              </div>
              <div className="col-span-1 border-r border-gray-700 h-full flex items-center justify-center">
                <div className="text-white">
                  ₹ 5.99 Cr* - 6.69 Cr*
                </div>
              </div>
              <div className="col-span-1 flex items-center justify-center py-4">
                 <button 
                    onClick={() => setIsPopupOpen(true)}
                    className="bg-gradient-to-r from-[#dfae75] to-[#cfa065] text-black w-full py-3 px-2 text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
                    DOWNLOAD
                 </button>
              </div>

              {/* Divider */}
              <div className="col-span-5 h-px bg-gray-700 my-2"></div>

              {/* Row 2 */}
              <div className="col-span-1 border-r border-gray-700 h-full flex items-center justify-center">
                <div className="text-white font-medium uppercase">
                  4 BHK + SERVANT ROOM
                </div>
              </div>
              <div className="col-span-1 border-r border-gray-700 h-full flex items-center justify-center">
                <div className="text-white">
                  3600 - 3700 Sq.ft.
                </div>
              </div>
              <div className="col-span-1 border-r border-gray-700 h-full flex items-center justify-center">
                <div className="text-white">
                  ₹ 7.95 Cr* - 8.41 Cr*
                </div>
              </div>
              <div className="col-span-1 border-r border-gray-700 h-full flex items-center justify-center">
                <div className="text-white">
                  ₹ 7.68 Cr* - 8.14 Cr*
                </div>
              </div>
              <div className="col-span-1 flex items-center justify-center py-4">
                 <button 
                    onClick={() => setIsPopupOpen(true)}
                    className="bg-gradient-to-r from-[#dfae75] to-[#cfa065] text-black w-full py-3 px-2 text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
                    DOWNLOAD
                 </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= AMENITIES SECTION ================= */}
      <section className="bg-black py-16 md:py-24 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-[#dfae75] mb-2 uppercase tracking-widest">AMENITIES</h2>
          <p className="text-white text-lg md:text-xl font-light mb-16 tracking-wide">
            Shapoorji Pallonji Dualis The Iconic Life.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 max-w-6xl mx-auto">
            
            {/* Lift */}
            <div className="flex flex-col items-center group cursor-pointer">
               <svg className="w-16 h-16 md:w-20 md:h-20 mb-4 text-[#dfae75] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                 <rect x="5" y="3" width="14" height="18" rx="2" />
                 <path d="M12 3v18" />
                 <path d="M8 10l2-2 2 2" />
                 <path d="M8 14l2 2 2-2" />
               </svg>
               <span className="text-white text-xs md:text-sm uppercase tracking-widest font-medium">LIFT</span>
            </div>

            {/* Swimming Pool */}
            <div className="flex flex-col items-center group cursor-pointer">
               <svg className="w-16 h-16 md:w-20 md:h-20 mb-4 text-[#dfae75] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                 <path d="M2 12c.6.5 1.2 1 2.5 1s2.5 0 4-2c1.4.3 2.7.7 4 1.5 1.4-1.2 2.7-2 4.5-2 2 .5 3.3 1.3 5 2.5" />
                 <path d="M2 16c.6.5 1.2 1 2.5 1s2.5 0 4-2c1.4.3 2.7.7 4 1.5 1.4-1.2 2.7-2 4.5-2 2 .5 3.3 1.3 5 2.5" />
                 <path d="M2 20c.6.5 1.2 1 2.5 1s2.5 0 4-2c1.4.3 2.7.7 4 1.5 1.4-1.2 2.7-2 4.5-2 2 .5 3.3 1.3 5 2.5" />
                 <circle cx="18" cy="6" r="3" />
               </svg>
               <span className="text-white text-xs md:text-sm uppercase tracking-widest font-medium">SWIMMING POOL</span>
            </div>

            {/* Kid's Play Area */}
            <div className="flex flex-col items-center group cursor-pointer">
               <svg className="w-16 h-16 md:w-20 md:h-20 mb-4 text-[#dfae75] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                 <path d="M4 20l10-10" />
                 <path d="M14 10l4-4" />
                 <path d="M14 20h6" />
                 <path d="M17 17l3 3" />
                 <path d="M3 20h2" />
               </svg>
               <span className="text-white text-xs md:text-sm uppercase tracking-widest font-medium">KID'S PLAY AREA</span>
            </div>

            {/* Yoga */}
            <div className="flex flex-col items-center group cursor-pointer">
               <svg className="w-16 h-16 md:w-20 md:h-20 mb-4 text-[#dfae75] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                 <circle cx="12" cy="5" r="2" />
                 <path d="M9 20l-1-4 2-5h4l2 5-1 4" />
                 <path d="M8 12l-4 3" />
                 <path d="M16 12l4 3" />
               </svg>
               <span className="text-white text-xs md:text-sm uppercase tracking-widest font-medium">YOGA</span>
            </div>

            {/* Jogging Track */}
            <div className="flex flex-col items-center group cursor-pointer">
               <svg className="w-16 h-16 md:w-20 md:h-20 mb-4 text-[#dfae75] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                 <path d="M12 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                 <path d="M9 22v-5l-2-3 2-6 6 1" />
                 <path d="M12 14l3 3v5" />
                 <path d="M15 8l3 3" />
                 <path d="M4 21h16" strokeDasharray="2 2" />
               </svg>
               <span className="text-white text-xs md:text-sm uppercase tracking-widest font-medium">JOGGING TRACK</span>
            </div>

            {/* Gymnasium */}
            <div className="flex flex-col items-center group cursor-pointer">
               <svg className="w-16 h-16 md:w-20 md:h-20 mb-4 text-[#dfae75] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M6 4l12 0" />
                  <path d="M5 4l0 16" />
                  <path d="M19 4l0 16" />
                  <path d="M6 20l12 0" />
                  <path d="M4 9l16 0" />
                  <path d="M4 15l16 0" />
               </svg>
               <span className="text-white text-xs md:text-sm uppercase tracking-widest font-medium">GYMNASIUM</span>
            </div>

             {/* Amphitheatre */}
            <div className="flex flex-col items-center group cursor-pointer">
               <svg className="w-16 h-16 md:w-20 md:h-20 mb-4 text-[#dfae75] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                  <path d="M7 20c0-2.8 2.2-5 5-5s5 2.2 5 5" />
                  <path d="M2 20h20" />
                  <path d="M12 9V5" />
                  <path d="M12 5l-2 2" />
                  <path d="M12 5l2 2" />
               </svg>
               <span className="text-white text-xs md:text-sm uppercase tracking-widest font-medium">AMPHITHEATRE</span>
            </div>

             {/* Indoor Games */}
            <div className="flex flex-col items-center group cursor-pointer">
               <svg className="w-16 h-16 md:w-20 md:h-20 mb-4 text-[#dfae75] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="2" y="4" width="20" height="12" rx="2" />
                  <circle cx="6" cy="10" r="1" fill="currentColor" />
                  <circle cx="18" cy="10" r="1" fill="currentColor" />
                  <circle cx="12" cy="10" r="1" fill="currentColor" />
                  <path d="M4 16v4" />
                  <path d="M20 16v4" />
               </svg>
               <span className="text-white text-xs md:text-sm uppercase tracking-widest font-medium">INDOOR GAMES</span>
            </div>

          </div>

          <div className="mt-20">
            <button 
               onClick={() => setIsPopupOpen(true)}
               className="bg-gradient-to-r from-[#dfae75] to-[#cfa065] text-black font-bold py-3 px-10 uppercase tracking-wider hover:opacity-90 transition-opacity">
               KNOW MORE
            </button>
          </div>
        </div>
      </section>

      {/* ================= FLOOR PLAN SECTION ================= */}
      <section className="bg-[#242b2e] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-serif text-[#e4b57b] uppercase tracking-widest">
               MASTER & <span className="text-[#dfae75]">FLOOR PLAN</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            
            {/* Master Plan */}
            <div className="group text-center">
              <div className="relative overflow-hidden rounded-md shadow-2xl mb-6 bg-white p-2">
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] z-10 group-hover:bg-black/40 transition-colors duration-300"></div>
                <img 
                  src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg"
                  alt="Master Plan" 
                  className="w-full h-64 object-cover filter blur-[2px] group-hover:blur-[1px] transition-all duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                   <button 
                     onClick={() => setIsPopupOpen(true)}
                     className="bg-gradient-to-r from-[#dfae75] to-[#cfa065] text-black font-bold py-2 px-6 uppercase tracking-wider text-sm hover:scale-105 transition-transform duration-300">
                     KNOW MORE
                   </button>
                </div>
              </div>
              <h3 className="text-white text-lg font-bold uppercase tracking-wider">Master Plan</h3>
            </div>

            {/* 3 BHK */}
            <div className="group text-center">
              <div className="relative overflow-hidden rounded-md shadow-2xl mb-6 bg-white p-2">
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] z-10 group-hover:bg-black/40 transition-colors duration-300"></div>
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop" 
                  alt="3 BHK Plan" 
                  className="w-full h-64 object-cover filter blur-[2px] group-hover:blur-[1px] transition-all duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                   <button 
                     onClick={() => setIsPopupOpen(true)}
                     className="bg-gradient-to-r from-[#dfae75] to-[#cfa065] text-black font-bold py-2 px-6 uppercase tracking-wider text-sm hover:scale-105 transition-transform duration-300">
                     KNOW MORE
                   </button>
                </div>
              </div>
              <h3 className="text-white text-lg font-bold uppercase tracking-wider">3 BHK + SERVANT ROOM</h3>
            </div>

            {/* 4 BHK */}
            <div className="group text-center">
              <div className="relative overflow-hidden rounded-md shadow-2xl mb-6 bg-white p-2">
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] z-10 group-hover:bg-black/40 transition-colors duration-300"></div>
                <img 
                  src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2670&auto=format&fit=crop" 
                  alt="4 BHK Plan" 
                  className="w-full h-64 object-cover filter blur-[2px] group-hover:blur-[1px] transition-all duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                   <button 
                     onClick={() => setIsPopupOpen(true)}
                     className="bg-gradient-to-r from-[#dfae75] to-[#cfa065] text-black font-bold py-2 px-6 uppercase tracking-wider text-sm hover:scale-105 transition-transform duration-300">
                     KNOW MORE
                   </button>
                </div>
              </div>
              <h3 className="text-white text-lg font-bold uppercase tracking-wider">4 BHK + SERVANT ROOM</h3>
            </div>

          </div>
        </div>
      </section>

      {/* ================= LOCATION ADVANTAGE SECTION ================= */}
      <section className="bg-[#1c1915] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Box - Map */}
             <div className="w-full lg:w-1/2 h-[300px] md:h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14033.801083313045!2d77.04795670573557!3d28.43584006236011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1888054e2d75%3A0xa49245f339865ca2!2sSector%2046%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1766984408527!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-2xl transition-all duration-500"
                ></iframe>
             </div>

             {/* Right Content - Location list */}
             <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl text-[#dfae75] uppercase tracking-widest mb-8">
                  LOCATION <span className="text-[#e4b57b]">ADVANTAGE</span>
                </h2>
                
                <ul className="space-y-4 text-gray-300 font-light text-sm md:text-base">
                  <li className="flex items-start">
                    <span className="text-[#dfae75] mr-3 mt-1">•</span>
                    <span>IGI Airport: Around 25-30 minutes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#dfae75] mr-3 mt-1">•</span>
                    <span>HUDA City Centre Metro Station: Around 5-10 minutes, convenient metro connectivity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#dfae75] mr-3 mt-1">•</span>
                    <span>NH-48: Around 5-10 minutes, with easy connectivity to Delhi and other areas of NCR.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#dfae75] mr-3 mt-1">•</span>
                    <span>Sohna Road: Around 10-15 minutes distance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#dfae75] mr-3 mt-1">•</span>
                    <span>Udyog Vihar: Around 15-20 minutes distance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#dfae75] mr-3 mt-1">•</span>
                    <span>Cyber City: Around 15-20 minutes distance</span>
                  </li>
                </ul>
             </div>

          </div>
        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section className="bg-[#242b2e] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-[#e4b57b] uppercase tracking-widest">GALLERY</h2>
          </div>

          <GalleryCarousel />
          
        </div>
      </section>

      {/* ================= UNSURE CTA SECTION ================= */}
      <section className="relative py-24 bg-cover bg-center bg-no-repeat bg-fixed" style={{backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop')"}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Still Unsure About Selecting The Right Home?</h2>
          <p className="text-xl md:text-2xl mb-8 font-light">Get Answers To All Your Questions</p>
          <button 
            onClick={() => setIsPopupOpen(true)}
            className="bg-gradient-to-r from-[#dfae75] to-[#cfa065] text-black font-bold py-3 px-10 uppercase tracking-wider hover:scale-105 transition-transform shadow-lg">
            REGISTER NOW
          </button>
        </div>
      </section>

      {/* ================= ENQUIRE FOOTER SECTION ================= */}
      <section className="bg-[#1a1816] py-16 border-t border-[#dfae75]/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* Left Text */}
            <div className="w-full lg:w-1/3 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl text-[#dfae75] uppercase tracking-widest mb-2 font-serif">ENQUIRE NOW</h2>
              <p className="text-gray-400 text-sm tracking-widest uppercase">GET IN TOUCH WITH US.</p>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-2/3">
              <form className="flex flex-col md:flex-row items-end gap-6">
                <div className="w-full relative">
                   <input type="text" placeholder="Name*" className="w-full bg-transparent border-b border-gray-600 py-3 text-white focus:outline-none focus:border-[#dfae75] transition-colors placeholder-gray-500" />
                </div>
                <div className="w-full relative">
                   <input type="email" placeholder="Email*" className="w-full bg-transparent border-b border-gray-600 py-3 text-white focus:outline-none focus:border-[#dfae75] transition-colors placeholder-gray-500" />
                </div>
                <div className="w-full relative">
                   <input type="tel" placeholder="Mobile*" className="w-full bg-transparent border-b border-gray-600 py-3 text-white focus:outline-none focus:border-[#dfae75] transition-colors placeholder-gray-500" />
                </div>
                <div className="w-full md:w-auto">
                  <button type="button" className="w-full md:w-auto bg-gradient-to-r from-[#dfae75] to-[#cfa065] text-black font-bold py-3 px-8 uppercase tracking-wider hover:opacity-90 transition-opacity whitespace-nowrap shadow-md">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>

          </div>
          
          {/* Copyright/Footer Text */}
          <div className="text-center mt-12 text-gray-600 text-xs">
             <p className="mt-2 text-sm">
                © 2024 HI-TECH HOMES. All Rights Reserved. | <a href="/privacy-policy" className="hover:text-[#dfae75] transition-colors">Privacy Policy</a>
             </p>
          </div>
        </div>
      </section>

      <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
};
 
const GalleryCarousel = () => {
    const images = [
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setItemsToShow(4);
            } else {
                setItemsToShow(1);
            }
        };

        handleResize(); // Init
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            const maxIndex = images.length - itemsToShow;
            return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            const maxIndex = images.length - itemsToShow;
            return prevIndex === 0 ? maxIndex : prevIndex - 1;
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, [itemsToShow]);

    return (
        <div className="relative w-full max-w-7xl mx-auto h-[300px] md:h-[400px] group">
            <div className="w-full h-full overflow-hidden rounded-lg">
                {/* Image Track */}
                <div 
                    className="h-full flex transition-transform duration-700 ease-in-out will-change-transform"
                    style={{ 
                        transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
                        width: `${(images.length / itemsToShow) * 100}%` 
                    }}
                >
                    {images.map((img, index) => (
                        <div 
                            key={index} 
                            className="h-full p-2 relative box-border"
                            style={{ width: `${100 / images.length}%` }}
                        >
                            <div className="w-full h-full relative overflow-hidden rounded-lg shadow-lg border border-white/10 group-hover:border-[#dfae75]/30 transition-colors">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img src={img} alt={`Gallery ${index}`} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Arrows */}
            <button 
                onClick={prevSlide}
                className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 bg-[#dfae75] p-3 rounded-full shadow-lg hover:bg-white transition-colors z-20 focus:outline-none"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button 
                onClick={nextSlide}
                className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 bg-[#dfae75] p-3 rounded-full shadow-lg hover:bg-white transition-colors z-20 focus:outline-none"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
            
            {/* Dots */}
            <div className="flex justify-center mt-8 gap-2">
                {[...Array(images.length - itemsToShow + 1)].map((_, idx) => (
                    <button 
                        key={idx} 
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#dfae75] w-8' : 'bg-[#dfae75]/30 hover:bg-[#dfae75]'}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ProjectLanding;

const ContactPopup = ({ isOpen, onClose }) => {
  const popupNameRef = useRef(null);
  const popupEmailRef = useRef(null);
  const popupPhoneRef = useRef(null);
  
  const whatsappNumber = "+919560002261";
  
  const handlePopupSubmit = (e) => {
    e.preventDefault();
    const name = (popupNameRef.current?.value || "").trim();
    const email = (popupEmailRef.current?.value || "").trim();
    const phone = (popupPhoneRef.current?.value || "").trim();
    
    const message = `*New Project Enquiry*\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject: Shapoorji Pallonji Dualis`;
    const cleaned = whatsappNumber.replace(/\D/g, "");
    const url = `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`;
    
    window.open(url, "_blank");
    onClose();
  };
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative w-full max-w-md bg-[#1c1915] border border-[#dfae75]/30 p-8 rounded-lg shadow-2xl animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <h3 className="text-2xl font-serif text-[#dfae75] mb-2 text-center uppercase tracking-wide">Enquire Now</h3>
        <p className="text-gray-400 text-center mb-6 text-sm tracking-wider">Register Here And Get The Best Offers</p>
        
        <form onSubmit={handlePopupSubmit} className="space-y-4">
          <div>
            <input ref={popupNameRef} type="text" placeholder="Name*" required className="w-full bg-black/30 border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#dfae75] transition-colors placeholder-gray-500" />
          </div>
          <div>
            <input ref={popupEmailRef} type="email" placeholder="Email*" required className="w-full bg-black/30 border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#dfae75] transition-colors placeholder-gray-500" />
          </div>
          <div>
            <input ref={popupPhoneRef} type="tel" placeholder="Mobile*" required className="w-full bg-black/30 border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#dfae75] transition-colors placeholder-gray-500" />
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-[#dfae75] to-[#cfa065] text-black font-bold py-3 uppercase tracking-wider hover:opacity-90 transition-opacity rounded-sm mt-2 shadow-lg">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};
