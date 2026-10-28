export default function VideoGallery() {
  return (
    <section className="py-24 bg-red-500 text-white text-center">
      <h2 className="text-5xl font-bold">VIDEO GALLERY TEST</h2>
      <p className="mt-4">If you can see this red box, the code is working!</p>
      
      <div className="mt-8 flex justify-center">
        <video width="600" controls className="border-4 border-black">
          <source src="/videos/havan-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
