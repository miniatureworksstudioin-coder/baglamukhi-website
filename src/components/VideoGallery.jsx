export default function VideoGallery() {
  return (
    <section id="videos" className="py-24 px-5 bg-[#fbf7ee]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <span className="text-[#9e7426] uppercase tracking-widest text-xs font-bold">Watch our rituals</span>
          <h2 className="mt-3 font-serif text-5xl text-[#641e17]">Video Gallery</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Video 1 */}
          <div className="rounded-lg overflow-hidden shadow-md bg-black">
            <video 
              width="100%" 
              controls 
              className="w-full h-auto"
              preload="metadata"
            >
              <source src="/videos/havan-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video 2 */}
          <div className="rounded-lg overflow-hidden shadow-md bg-black">
            <video 
              width="100%" 
              controls 
              className="w-full h-auto"
              preload="metadata"
            >
              <source src="/videos/puja-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
      </div>
    </section>
  );
}
