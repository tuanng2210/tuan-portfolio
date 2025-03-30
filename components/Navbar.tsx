// import Link from "next/link";

// const Navbar = () => {
//   return (
//     // <nav className="flex justify-between items-center px-8 py-6 bg-black text-white">
//     <nav className="flex justify-between items-center px-8 py-6 bg-black text-white border-b border-[#1f2937]">
//       <h1 className="text-2xl font-bold">
//         <Link href="/">Tuan Nguyen</Link>
//       </h1>
//       <ul className="flex gap-6 text-lg">
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
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-3xl">
          {isMenuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Menu (toggle visibility based on state) */}
      <div className={`sm:hidden ${isMenuOpen ? "block" : "hidden"} mt-4`}>
        <ul className="flex flex-col items-center space-y-4">
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
