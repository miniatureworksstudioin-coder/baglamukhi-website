import AdminPanel from '../components/AdminPanel';

export default function Admin() {
  // This forces the panel to stay open on this page.
  // If the user clicks the 'X', it redirects them to the homepage.
  const handleClose = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-[#fbf7ee]">
      <AdminPanel isOpen={true} onClose={handleClose} />
    </div>
  );
}
