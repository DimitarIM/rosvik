'use client'
import { useState } from "react"
import { languages } from "@/data/data"
import svImage from "../../../public/btn/sv-btn.png"
import enMobileImage from "../../../public/btn/lang_btn_mobile.png"
import Image from "next/image"
import { LanguageSwitchProps } from "@/types/types"
const LanguageSwitch = ({isMobile = false}:LanguageSwitchProps ) => {
    const [language, setLanguage] = useState(languages.en)

    const switchLanguage = () => {
        setLanguage(language === languages.en ? languages.sv : languages.en);
    }

    const imageSrc = isMobile 
    ? enMobileImage
    : language === languages.en ? enMobileImage : svImage

    return(
     <button type="button" onClick={switchLanguage} className='justify-center'>
        <Image 
           src={imageSrc}
           alt= {language}
           width={40}
           height={29}/>
     </button>
    )
}

export default LanguageSwitch
