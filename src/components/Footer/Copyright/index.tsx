import { footerCopyright } from "@/data/footerData"

const FooterCopyright = () => {
    return (
        <div className="mt-7 pt-3 border-t-1 text-center w-11/12 m-auto">
            {footerCopyright.copyright}
        </div>
    )
}

export default FooterCopyright