'use client'
import { usePathname } from "next/navigation"
import DesktopNavigation from "../Navigation/DesktopNavigation"
import MobileNavigation from "../Navigation/MobileNavigation"
import { useRouter } from 'next/navigation' 

const Header = () => {
  const pathName = usePathname();
  const router = useRouter();

  if(pathName.split("/").length === 3) {
    return (
      <header className="absolute z-50 top:0 left:0 w-full flex top-0 bg-transparent px-6 py-4" >
        <button type="button" onClick={() => router.back()} className="cursor-pointer">
          <p className="text-2xl md:text-3xl text-[var(--name-color)] hover:text-shadow-[0_0_5px_rgb(182_169_112)]">
            <span className="pr-2">&#10523;</span>
            Back
          </p>
        </button>
        <div className="hidden md:flex items-center space-x-6 grow" >
          <DesktopNavigation />
        </div>
        {/* mobile navigation */}
        <div className="md:hidden flex items-center w-full justify-between">
          <MobileNavigation />
        </div>
      </header>
    )
  }
    return(
      <header className="absolute z-50 top:0 left:0 w-full flex top-0 bg-transparent px-6 py-4" >
        <div className="hidden md:flex items-center space-x-6 grow" >
        <DesktopNavigation/>
        </div>
        {/* mobile navigation */}
        <div className="md:hidden flex items-center w-full justify-between">
            <MobileNavigation/>
        </div>
      </header>
    )
}

export default Header
