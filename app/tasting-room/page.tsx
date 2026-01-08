<main className="min-h-screen">
  {/* Header */}
  <header className="flex justify-between items-center px-8 py-4 bg-white border-b border-gray-100">
    <div className="brand-header">
      <Link href="/" className="text-black font-bold">ORANGE RIVER KALAHARI</Link>
    </div>
    <nav className="flex items-center space-x-4 md:space-x-8 text-[10px] md:text-sm uppercase tracking-wider">
      <Link href="/restaurants" className="text-gray-700 hover:text-[#8B2635]">
        Restaurants
      </Link>
      <a 
        href="https://orangeriverwines.com/shop/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-[#8B2635] font-bold flex items-center gap-1 border-b-2 border-[#8B2635]"
      >
        SHOP NOW
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>
      <Link href="/accommodation" className="text-gray-700 hover:text-[#8B2635]">
        Accommodation
      </Link>
      <Link href="/experiences" className="text-gray-700 hover:text-[#8B2635]">
        Experiences
      </Link>
      <Link href="/tasting-room" className="text-gray-700 hover:text-[#8B2635]">
        Tasting Room
      </Link>
      <Link href="/contact" className="text-gray-700 hover:text-[#8B2635]">
        Contact
      </Link>
    </nav>
  </header>

  {/* Hero Section - CHANGED TO TEST */}
  <section className="relative h-[500px] w-full bg-red-600 flex items-center justify-center">
    <div className="text-center text-white z-10">
      <h1 className="text-9xl font-bold">TEST</h1>
      <p className="text-2xl mt-4">If you see this red box, we are in the right file.</p>
    </div>
  </section>
