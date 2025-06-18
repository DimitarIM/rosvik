import { footerKeyFacts } from "@/data/footerData"

const KeyFacts = () => {
    return (
        <div className="flex flex-col gap-1">
            <h3 className="text-xl sm:text-2xl lg:text-[26px] mb-3 md:mb-5">{footerKeyFacts.title}</h3>
            <ul className="flex flex-col gap-2">
                {footerKeyFacts.facts.map((fact, index) => (
                <li key={index}>{fact}</li>
                ))}
            </ul>
        </div>
    )
}

export default KeyFacts