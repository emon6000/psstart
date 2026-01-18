import { Link } from 'react-router-dom';

const Navbar = () => {
  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-blue-700 text-white shadow-md relative z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Brand - Always goes to Top of Home */}
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3 group">
          <div className="bg-white p-1.5 rounded-md text-blue-700">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
               <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.24c-.904.44-1.853.826-2.843 1.154m-16.297 0A50.553 50.553 0 0112 10.5c.39 0 .777-.01 1.161-.03m-10.723 0H1.5v-1.5" />
             </svg>
          </div>
          <span className="text-lg font-bold tracking-tight">CSE MANAGER</span>
        </Link>

        {/* Scroll Links */}
        <div className="flex gap-6 text-sm font-medium">
          <button onClick={() => scrollToSection('faculty')} className="hover:text-blue-200 transition">Faculty</button>
          <button onClick={() => scrollToSection('batches')} className="hover:text-blue-200 transition">Batches</button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;