import Link from "next/link"
import { menuItems } from "@/data/data"
const NavigationItems: React.FC = () => {
    return(
        <div className='flex  space-x-6 text-white'>
           {menuItems.map((item,index) => <Link key={index} href={item.path} className='bg-[#595959]/60 p-4 rounded-4xl w-30 text text-center  hover:bg-[var(--color-sunny)]'>{item.name}</Link>)}
        </div>
    )
}

export default NavigationItems