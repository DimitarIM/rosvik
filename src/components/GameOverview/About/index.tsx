import { GameOverViewProps } from "@/types/types"


const About = ({aboutText}: Pick<GameOverViewProps, "aboutText">) => {
    return (
        <div className="m-[50px] p-2.5 pr-1 flex flex-col gap-6.5 rounded-[10px] bg-[rgba(124,131,133,0.2)] sm:order-3">
            {aboutText.map((text, index) => (
                <p className="text-sm" key={index}>{text}</p>
            ))}
        </div>
    )
}

export default About