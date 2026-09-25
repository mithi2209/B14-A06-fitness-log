import Image from "next/image";
import Link from "next/link";
import FooterLogo from "@/assets/footer-logo.png" ;


const Footer = () => {
    return (
       
        <div className=" ">
            <div className="flex flex-col md:flex-col lg:flex-row gap-5 justify-center lg:justify-between items-center py-6 px-3 md:px-4 lg:px-8">

                <div className="flex justify-center items-center  gap-1.5 md:gap-3">

                    <Image
                        src={FooterLogo} 
                        alt="footer logo" 
                        width={30} height={30}>

                     </Image>
                    
                    <span className="text-lg md:text-xl lg:text-2xl font-extrabold font-oswald tracking-wider text-white" >       <Link href="/">FITLOGO</Link>
                    </span>
                </div>

                <div>
                    <p className=" font-inter text-center text-sm md:text-base text-[#6B7280]">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </div>

            </div>
            
        </div>
    );
};

export default Footer;