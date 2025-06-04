import Link from "next/link"
import { menuItems } from "@/data"
const NavigationItems: React.FC = () => {
    return(
        <div className='flex space-x-6 text-white'>
           {menuItems.map((item,index) => <Link key={index} href={item.path} className=' hover:bg-[var(--color-sunny)]'>{item.name}</Link>)}
        </div>
    )
}

export default NavigationItems