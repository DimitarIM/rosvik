import { footerCopyright } from "@/data/footerData"


const FooterCopyright = () => {
    return (
        <div className="m-5">
            {footerCopyright.copyright}
        </div>
    )
}

export default FooterCopyright