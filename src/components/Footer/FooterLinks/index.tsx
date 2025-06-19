'use client'
import { footerLinks } from "@/data/footerData"
import Link from "next/link"

const FooterLinks = () => {
    return (
        <div className="flex flex-col gap-3">
            <h3 className="text-xl sm:text-2xl lg:text-[26px] mb-3 ">Guick Links</h3>
        {footerLinks.links.map(link => (
        <div key={link.id} className="">
            {link.label && (
                <Link  href={link.href}>
                <span className="bg-button-color py-2 rounded-[100px] flex flex-col text-center">
                    {link.label}
                </span>
                </Link>
            )}
        </div>
        ))}
    </div>
    )
}

export default FooterLinks