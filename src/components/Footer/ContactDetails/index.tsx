import { footerContactDetails } from "@/data/footerData"

const ContactDetails = () => {
    return (
        <div className="flex flex-col gap-1">
            <h3 className="text-xl sm:text-2xl lg:text-[26px] mb-3 md:mb-5">{footerContactDetails.title}</h3>
            <p>Phone: <a href={`tel:${footerContactDetails.phone}`}>{footerContactDetails.phone}</a></p>
            <p>Email: <a href={`mailto:${footerContactDetails.email}`}>{footerContactDetails.email}</a></p>
        </div>
    )
}

export default ContactDetails