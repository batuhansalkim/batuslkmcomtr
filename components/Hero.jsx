import Image from "next/image";
import camp_svg from "../public/camp.svg";

function Hero(){
    return(
        <div className="max-container padding-container border-2 border-red-500 flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
            <div className="hero-map"/>
            
            <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
                <Image src={camp_svg} alt="camp" width={50} height={50} className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"/>
            </div>
        </div>
    )
}
export default Hero;