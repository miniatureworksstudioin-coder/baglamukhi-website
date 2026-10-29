import AdminPanel from '../components/AdminPanel';

export default function Admin() {
  const handleClose = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-[#fbf7ee]">
      <AdminPanel isOpen={true} onClose={handleClose} />
    </div>
  );
}
