import BannerImg from "@/assets/banner.png" ;
import Image from "next/image";

const Banner = () => {
    return (
        <div className="bg-[#15171D] border border-[#222630] rounded-2xl mx-4 md:mx-6 lg:mx-8  my-7 md:my-10 lg:my-12  " >
            
            <div className="px-3 md:px-6 lg:px-14 py-12 md:py-16 lg:py-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 ">

                <div className="space-y-5 md:space-y-6 lg:space-y-8 text-center md:text-left lg:text-left">

                    <h3 className="font-inter font-bold text-[#C2F800] text-sm">WORKOUT LIBRARY</h3>

                    <h1 className="font-oswald font-bold text-3xl md:text-4xl lg:text-6xl tracking-wide text-white">TRAIN WITH INTENT.LOG <br />
                        EVERY SET.
                    </h1>

                    <p className="text-sm lg:text-lg text-[#9CA3AF] font-inter text-center md:text-left mx-auto md:mx-0 w-[90%] md:w-[65%] lg:w-[55%]">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.

                    </p>

                    <button className="text-[#000000] text-sm font-bold font-inter text-center cursor-pointer bg-[#C2F800] rounded-md px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 hover:bg-lime-100">
                        BROWSE WORKOUTS
                    </button>
                </div>

                <div>
                    <Image 
                        src={BannerImg}
                        alt="banner image"
                        >
                       
                    </Image>
                </div>
                
            </div>

        </div>
    );
};

export default Banner;