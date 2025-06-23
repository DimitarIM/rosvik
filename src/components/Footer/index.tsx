import ContactDetails from "./ContactDetails"
import FooterLinks from "./FooterLinks"
import FooterCopyright from "./Copyright"
import FooterMedia from "./MediaLinks"
import FooterLink from "./FooterLink"

const Footer = () => {
    return (
        <footer className="w-full p-3 py-7 lg:p-7 bg-fullscreen-bg ">
            <div className="grid grid-cols-2 gap-3 sm:gap-5 text-sm items-center place-items-center sm:text-[15px] md:grid-cols-4 md:items-start md:gap-3 lg:text-[20px] ">
                <div>
                   <FooterLink />
                </div>
                <div>
                    <FooterLinks />
                </div>
                <div>
                    <FooterMedia />
                </div>
                <div>
                    <ContactDetails />
                </div>
                <div className="col-span-2 sm:text-sm md:col-span-4 lg:text-[16px] w-full">
                    <FooterCopyright />
                </div>
            </div>
        </footer>
    )
}

export default Footer