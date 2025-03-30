// import { useState } from "react";
// import Link from "next/link";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="flex justify-between items-center px-8 py-6 bg-black text-white border-b border-[#1f2937]">
//       {/* Logo/Brand */}
//       <h1 className="text-2xl font-bold">
//         <Link href="/">Tuan Nguyen</Link>
//       </h1>

//       {/* Desktop Menu */}
//       <ul className="hidden sm:flex gap-6 text-lg">
//         <li>
//           <Link href="/#about" className="hover:underline">
//             About
//           </Link>
//         </li>
//         <li>
//           <Link href="/projects" className="hover:underline">
//             Projects
//           </Link>
//         </li>
//         <li>
//           <Link href="/skills" className="hover:underline">
//             Skills
//           </Link>
//         </li>
//         <li>
//           <Link href="/contact" className="hover:underline">
//             Contact
//           </Link>
//         </li>
//       </ul>

//       {/* Hamburger Menu (visible only on mobile) */}
//       <div className="sm:hidden">
//         <button onClick={toggleMenu} className="text-3xl">
//           {isMenuOpen ? "×" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Menu (toggle visibility based on state) */}
//       <div className={`sm:hidden ${isMenuOpen ? "block" : "hidden"} mt-4`}>
//         <ul className="flex flex-col items-center space-y-4">
//           <li>
//             <Link href="/#about" className="text-lg hover:underline">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link href="/projects" className="text-lg hover:underline">
//               Projects
//             </Link>
//           </li>
//           <li>
//             <Link href="/skills" className="text-lg hover:underline">
//               Skills
//             </Link>
//           </li>
//           <li>
//             <Link href="/contact" className="text-lg hover:underline">
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-8 py-6 bg-black text-white border-b border-[#1f2937]">
      {/* Logo/Brand */}
      <h1 className="text-2xl font-bold">
        <Link href="/">Tuan Nguyen</Link>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-6 text-lg">
        <li>
          <Link href="/#about" className="hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/skills" className="hover:underline">
            Skills
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Menu (visible only on mobile) */}
      <div className="sm:hidden flex items-center">
        <button 
          onClick={toggleMenu} 
          className="text-3xl focus:outline-none transition-transform duration-300 ease-in-out"
        >
          {isMenuOpen ? (
            <span className="text-3xl">×</span>
          ) : (
            <span className="text-3xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu (toggle visibility based on state) */}
      <div className={`sm:hidden ${isMenuOpen ? "block" : "hidden"} mt-4 relative`}>
        {/* Close Button (X) positioned at the top */}
        {isMenuOpen && (
          <button 
            onClick={toggleMenu} 
            className="absolute top-2 right-4 text-3xl text-white"
          >
            ×
          </button>
        )}

        <ul className="flex flex-col items-center space-y-4 pt-10">
          <li>
            <Link href="/#about" className="text-lg hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-lg hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/skills" className="text-lg hover:underline">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-lg hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
