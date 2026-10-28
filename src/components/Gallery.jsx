import { useState } from 'react';

export default function Gallery() {
  const images = [
    'temple-prayer.jpg', 
    'havan-fire.jpg', 
    'havan-setup.jpg', 
    'havan-day.jpg', 
    'maa-baglamukhi.jpg', 
    'havan-night.jpg', 
    'temple-devotees.jpg'
  ];

  // This state holds the image that is currently clicked
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-24 px-5 bg-[#fbf7ee]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <span className="text-[#9e7426] uppercase tracking-widest text-xs font-bold">Moments of worship</span>
          <h2 className="mt-3 font-serif text-5xl text-[#641e17]">Photo Gallery</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Image 1 (Tall) */}
          <div className="col-span-2 md:col-span-1 md:row-span-2">
            <img 
              src={`/images/${images[0]}`} 
              alt="Devotees Praying at Nalkheda" 
              className="w-full h-full object-cover rounded-sm shadow-sm cursor-pointer hover:opacity-90 transition" 
              onClick={() => setSelectedImage(`/images/${images[0]}`)}
            />
          </div>
          
          {/* Image 2 */}
          <div>
            <img 
              src={`/images/${images[1]}`} 
              alt="Havan Fire Ritual" 
              className="w-full h-full object-cover rounded-sm shadow-sm cursor-pointer hover:opacity-90 transition" 
              onClick={() => setSelectedImage(`/images/${images[1]}`)}
            />
          </div>
          
          {/* Image 3 */}
          <div>
            <img 
              src={`/images/${images[2]}`} 
              alt="Puja Setup and Offerings" 
              className="w-full h-full object-cover rounded-sm shadow-sm cursor-pointer hover:opacity-90 transition" 
              onClick={() => setSelectedImage(`/images/${images[2]}`)}
            />
          </div>
          
          {/* Image 4 (Wide) */}
          <div className="col-span-2">
            <img 
              src={`/images/${images[3]}`} 
              alt="Daytime Havan" 
              className="w-full h-full object-cover rounded-sm shadow-sm cursor-pointer hover:opacity-90 transition" 
              onClick={() => setSelectedImage(`/images/${images[3]}`)}
            />
          </div>
          
          {/* Image 5 */}
          <div>
            <img 
              src={`/images/${images[4]}`} 
              alt="Maa Baglamukhi Deity" 
              className="w-full h-full object-cover rounded-sm shadow-sm cursor-pointer hover:opacity-90 transition" 
              onClick={() => setSelectedImage(`/images/${images[4]}`)}
            />
          </div>
          
          {/* Image 6 */}
          <div>
            <img 
              src={`/images/${images[5]}`} 
              alt="Night Havan Ritual" 
              className="w-full h-full object-cover rounded-sm shadow-sm cursor-pointer hover:opacity-90 transition" 
              onClick={() => setSelectedImage(`/images/${images[5]}`)}
            />
          </div>
          
          {/* Image 7 */}
          <div className="col-span-2 md:col-span-1">
            <img 
              src={`/images/${images[6]}`} 
              alt="Temple Devotees" 
              className="w-full h-full object-cover rounded-sm shadow-sm cursor-pointer hover:opacity-90 transition" 
              onClick={() => setSelectedImage(`/images/${images[6]}`)}
            />
          </div>
        </div>
      </div>

      {/* FULL SCREEN LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setSelectedImage(null)} // Click background to close
        >
          {/* Close Button */}
          <button 
            className="absolute top-5 right-8 text-white text-5xl font-bold hover:text-gray-300 transition"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          
          {/* Full Image */}
          <img 
            src={selectedImage} 
            alt="Full screen view" 
            className="max-h-[90vh] max-w-full object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the image itself
          />
        </div>
      )}
    </section>
  );
}
