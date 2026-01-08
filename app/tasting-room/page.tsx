<main className="min-h-screen">
  {/* Header - We'll leave this as is */}
  <header className="flex justify-between items-center px-8 py-4">
    <div className="brand-header">
      <Link href="/">ORANGE RIVER KALAHARI</Link>
    </div>
    <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wider">
       <Link href="/restaurants" className="text-gray-700 hover:text-[#8B2635]">Restaurants</Link>
       <Link href="/accommodation" className="text-gray-700 hover:text-[#8B2635]">Accommodation</Link>
       <Link href="/contact" className="text-gray-700 hover:text-[#8B2635]">Contact</Link>
    </nav>
  </header>

  {/* NEW: Special Unique Shop Banner */}
  <section className="bg-[#8B2635] text-white py-4 px-8 flex flex-col md:flex-row items-center justify-between">
    <div className="flex items-center gap-4 mb-4 md:mb-0">
      <span className="text-2xl">🍷</span>
      <p className="font-serif italic tracking-wide text-lg">Love our wines? Bring the Kalahari home.</p>
    </div>
    <a 
      href="https://orangeriverwines.com/shop/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-white text-[#8B2635] px-8 py-2 font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors rounded-sm shadow-lg"
    >
      Visit Online Shop
    </a>
  </section>

  {/* Hero Section */}
  <section className="relative h-[400px] w-full">
    <Image
      src="/images/tasting-room-hero.jpg"
      alt="Wine tasting experience"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
      <h1 className="text-4xl md:text-6xl text-white font-serif text-center">Tasting Room</h1>
    </div>
  </section>
