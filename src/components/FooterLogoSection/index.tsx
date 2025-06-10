import Image from "next/image"
import { FooterLogoProps } from "@/types/types"
import  ftrgames_logo from "../../../public/img/ftrgames_logo.png"

const FooterLogoSection = ({image}: FooterLogoProps) => {
  return (
    <div>
      <Image src={ftrgames_logo} alt="ftrgames_logo" width={1440}  height={1543} / >
    </div>
  )
}

export default FooterLogoSection
