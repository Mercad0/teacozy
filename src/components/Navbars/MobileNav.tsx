import Link from "next/link";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 transition-all duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="h-full flex flex-col justify-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="text-center space-y-4">
          <li>
            <Link
              href="#mission"
              onClick={onClose}
              className="block text-white font-bold text-xl py-4"
            >
              Mission
            </Link>
          </li>
          <li>
            <Link
              href="#featuredTeas"
              onClick={onClose}
              className="block text-white font-bold text-xl py-4 "
            >
              Featured Tea
            </Link>
          </li>
          <li>
            <Link
              href="#locations"
              onClick={onClose}
              className="block text-white font-bold text-xl py-4 "
            >
              Locations
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;

  