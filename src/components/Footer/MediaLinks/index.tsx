import { footerMedia } from "@/data/footerData"
import Image from "next/image"
import Link from "next/link"


const FooterMedia = () => {
    return (
        <div className="">
            <h3 className="text-xl sm:text-2xl lg:text-[26px] mb-3 md:mb-5">{footerMedia.developers.title}</h3>
            <ul className="flex flex-col gap-2">
                {footerMedia.developers.names.map((dev) => (
                    <li className="flex gap-2" key={dev.id}> {dev.name}
                        <Link href={dev.linkedin}>
                        <Image src={dev.icon} height={20} width={20} alt={dev.name}/>
                        </Link>                               
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterMedia