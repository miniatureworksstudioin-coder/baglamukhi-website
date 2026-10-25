export default function Gallery() {
  const images = ['puja-12.jpg', 'puja-5.jpg', 'puja-3.jpg', 'puja-9.jpg', 'puja-7.jpg', 'puja-2.jpg'];
  return (
    <section id="gallery" className="py-24 px-5 bg-[#fbf7ee]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <span className="text-[#9e7426] uppercase tracking-widest text-xs font-bold">Moments of worship</span>
          <h2 className="mt-3 font-serif text-5xl text-[#641e17]">Photo Gallery</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="col-span-2 md:col-span-1 md:row-span-2">
            <img src={`/images/${images[0]}`} alt="Gallery 1" className="w-full h-full object-cover rounded-sm" />
          </div>
          <div>
            <img src={`/images/${images[1]}`} alt="Gallery 2" className="w-full h-full object-cover rounded-sm" />
          </div>
          <div>
            <img src={`/images/${images[2]}`} alt="Gallery 3" className="w-full h-full object-cover rounded-sm" />
          </div>
          <div className="col-span-2">
            <img src={`/images/${images[3]}`} alt="Gallery 4" className="w-full h-full object-cover rounded-sm" />
          </div>
          <div>
            <img src={`/images/${images[4]}`} alt="Gallery 5" className="w-full h-full object-cover rounded-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
