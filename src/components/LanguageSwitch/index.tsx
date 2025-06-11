'use client'
import { useState } from "react"
import { languages } from "@/data/data"
import enImage from "../../../public/btn/en-btn.png"
import svImage from "../../../public/btn/sv-btn.png"
import Image from "next/image"
const LanguageSwitch = () => {
    const [language, setLanguage] = useState(languages.en)

    const switchLanguage = () => {
        setLanguage(language === languages.en ? languages.sv : languages.en);
    }
    return(
     <button onClick={switchLanguage} className='justify-center'>
        <Image 
           src={language === languages.en ? enImage : svImage}
           alt= {language}
           width={40}
           height={29}/>
     </button>
    )
}

export default LanguageSwitch