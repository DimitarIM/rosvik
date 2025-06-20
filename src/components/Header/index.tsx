import DesktopNavigation from "../Navigation/DesktopNavigation";
import MobileNavigation from "../Navigation/MobileNavigation";

const Header = () => {
  return (
    <header className="absolute z-50 top:0 left:0 w-full flex top-0 bg-transparent px-6 py-4">
      <div className="hidden md:flex items-center space-x-6 grow">
        <DesktopNavigation />
      </div>
      {/* mobile navigation */}
      <div className="md:hidden flex items-center w-full justify-between">
        <MobileNavigation />
      </div>
    </header>
  );
};

export default Header;
