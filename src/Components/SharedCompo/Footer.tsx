import Image from "next/image";
import Link from "next/link";
import FooterLogo from "@/assets/footer-logo.png" ;


const Footer = () => {
    return (
        <div>
            
        </div>
        // <div className="sticky bottom-0">
        //     {/* horizonal line */}
        //     <div className="border-t"></div>
        //     <div className="flex justify-between items-center">

        //         <div className="flex justify-center items-center ml-0 md:ml-8 lg:ml-0 gap-1.5 md:gap-3">

        //             <Image src={FooterLogo} alt="footer logo" width={30} height={30}></Image>
                    
        //             <span className="text-lg md:text-xl lg:text-2xl font-extrabold font-oswald tracking-wider text-white" >       <Link href="/">FITLOGO</Link>
        //             </span>
        //         </div>

        //         <div>
        //             <p className=" font-inter text-sm md:text-base text-[#6B7280]">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        //         </div>

        //     </div>
        // </div>
    );
};

export default Footer;