import { GameOverViewProps } from "@/types/types"


const About = ({aboutText}: Pick<GameOverViewProps, "aboutText">) => {
    return (
        <div className="m-[50px] mt-[55px] p-2.5 pr-1 flex flex-col gap-5 rounded-[10px] bg-foreground
        sm:m-5 lg:gap-8 sm:max-w-[340px] md:max-w-[370px]
        lg:py-[36px] lg:px-[35px] xl:pb-[50px] lg:max-w-[500px] xl:max-w-[600px]  ">
            {aboutText.map((text, index) => (
                <p className="text-sm sm:text-[18px] lg:text-[22px] xl:text-[26px]" key={index}>{text}</p>
            ))}
        </div>
    )
}

export default About