import { footerLinks } from "@/data/footerData"
import Image from "next/image"
import Link from "next/link"

const FooterLink = () => {
    return (
        <div>
        {footerLinks.quickLinks.links.map(link => (
        <div key={link.id}>
            {link.logo && (
                <Link href={link.href}>
                <span>
                    <Image src={link.logo} width={280} height={280} alt="logo" />
                </span>
                </Link>
            )}
        </div>
        ))}
    </div>
    )
}

export default FooterLink