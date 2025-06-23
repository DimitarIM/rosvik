'use client'
import { footerMedia } from "@/data/footerData"
import Link from "next/link"

const FooterMedia = () => {
    return (
        <div>
            <h3 className="text-xl sm:text-2xl lg:text-[26px] mb-3 md:mb-5">{footerMedia.developers.title}</h3>
            <ul className="flex flex-col gap-2">
                {footerMedia.developers.names.map((dev) => (
                    <li className="flex gap-1.5 items-center" key={dev.id}> 
                    <span className="pr-2 lg:pr-3">{dev.name}</span>
                    {dev.linkedin && dev.icon && (
                        <Link href={dev.linkedin} target="_blank">
                        <img src={dev.icon} alt={dev.name}
                        className="w-3 h-3  lg:w-4 lg:h-4  "/>
                        </Link>   
                    )} 
                    {dev.github && dev.giticon && (
                        <Link href={dev.github} target="_blank">
                        <img src={dev.giticon} alt={dev.name}
                        className="w-3 h-3  lg:w-4 lg:h-4 "/>
                        </Link>   
                    )}                              
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterMedia