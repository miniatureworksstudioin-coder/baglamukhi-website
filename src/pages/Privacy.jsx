export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#fbf7ee] py-20 px-5">
      <div className="mx-auto max-w-4xl bg-white p-8 md:p-12 rounded-xl shadow-md border border-[#e5d8c5]">
        <h1 className="text-4xl font-serif font-bold text-[#641e17] mb-6">Privacy Policy</h1>
        <div className="text-[#5d4c42] space-y-4 text-[16px] leading-relaxed">
          <p>At Shree Baglamukhi Nalkheda, we respect your privacy and are committed to protecting your personal data.</p>
          
          <h2 className="text-2xl font-serif text-[#641e17] mt-8 mb-2">1. Information We Collect</h2>
          <p>When you fill out the booking form, we collect your Name, Phone Number, Puja Type, Preferred Date, and any messages you provide. This information is securely stored in our database (Supabase) and sent to Pandit Ji via WhatsApp and Email.</p>
          
          <h2 className="text-2xl font-serif text-[#641e17] mt-8 mb-2">2. How We Use Your Data</h2>
          <p>Your information is used strictly to contact you regarding your Puja booking, to perform the Sankalp in your name, and to arrange for Prasad delivery if needed. We do not sell, rent, or share your personal information with third-party marketing companies.</p>
          
          <h2 className="text-2xl font-serif text-[#641e17] mt-8 mb-2">3. Cookies & Analytics</h2>
          <p>We may use basic cookies or analytics tools to understand how visitors use our website. This helps us improve your experience but does not collect personally identifiable information.</p>

          <h2 className="text-2xl font-serif text-[#641e17] mt-8 mb-2">4. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at shreebaglamukhinalkheda@gmail.com.</p>
          
          <p className="mt-8 text-sm text-gray-500">Last updated: October 2026</p>
        </div>
      </div>
    </div>
  );
}
