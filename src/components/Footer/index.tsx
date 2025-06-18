'use client'
import Link from "next/link"
import { footerMedia} from "@/data/footerData"
import Image from "next/image"
import ContactDetails from "./ContactDetails"
import KeyFacts from "./KeyFacts"
import FooterLinks from "./FooterLinks"
import FooterCopyright from "./Copyright"
import FooterMedia from "./MediaLinks"


const Footer = () => {
    return (
        <footer className="m-7 lg:p-7">
            <div className="grid grid-cols-2 gap-7 text-sm items-center place-items-center sm:text-[16px] md:grid-cols-4 md:items-start md:gap-3 lg:text-[20px] ">
                <div>
                    <FooterLinks />
                </div>
                <div>
                    <KeyFacts />
                </div>
                <div>
                    <FooterMedia />
                </div>

                <div>
                    <ContactDetails />
                </div>
                <div className="col-span-2 sm:text-sm md:col-span-4 lg:text-[16px]">
                    <FooterCopyright />
                </div>
            </div>
        </footer>
    )
}

export default Footer