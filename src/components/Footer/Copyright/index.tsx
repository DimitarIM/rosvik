import { footerCopyright } from "@/data/footerData"

const FooterCopyright = () => {
    return (
        <div className="pt-5">
            {footerCopyright.copyright}
        </div>
    )
}

export default FooterCopyright