'use client'
import { usePathname } from "next/navigation"
import DesktopNavigation from "../Navigation/DesktopNavigation"
import MobileNavigation from "../Navigation/MobileNavigation"
import Link from "next/link"

const Header = () => {
  const pathName = usePathname();
  if(pathName.split("/").length === 4) {
    return (
      <header className="absolute z-50 top:0 left:0 w-full flex top-0 bg-transparent px-6 py-4" >
        <Link href="/about"><p className="pl-[15%] pt-[40%] text-3xl md:text-4xl text-[var(--name-color)] hover:text-shadow-[0_0_5px_rgb(182_169_112)]"><span className="pr-2">&#10523;</span>Back</p></Link>
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
