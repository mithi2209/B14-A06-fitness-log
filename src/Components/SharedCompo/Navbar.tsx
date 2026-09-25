
import Link from "next/link";
import logo from "@/assets/logo.png"
import Image from "next/image";



const Navbar = () => {

    const links = <>
     
        <li className="hover:text-[#C2F800] hover:bg-[#1A2312] py-1.5 px-4 rounded-full ">
            <Link href="/src/app/WorkOuts">WorkOuts</Link>
        </li>

        <li className="hover:text-[#C2F800] hover:bg-[#1A2312] py-1.5 px-4 rounded-full">
            <Link href="/src/app/My Plan">My Plan</Link>
        </li>
     
    </>
  
  return (
    <div className="sticky top-0">
    
      <div className="flex justify-between md:justify-between lg:justify-between items-center shadow-sm container mx-auto  py-6 px-3 md:px-4 lg:px-0 gap-0 md:gap-8 lg:gap-0 ">

        {/* Hamburger */}
        <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            {/* links for small device */}
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-[#0C0D10] border rounded-box z-1 mt-3 w-52 p-2 shadow font-inter text-sm text-[#9CA3AF] font-semibold gap-3"
            >
              {links}

            </ul>

          </div>

          {/* logo */}
           <div className="flex justify-center items-center ml-0 md:ml-8 lg:ml-0 gap-1.5 md:gap-3">
                <Image
                    src={logo} 
                    alt="navbar logo image">
                </Image>
                <a className="text-lg md:text-xl lg:text-2xl font-extrabold font-oswald tracking-wider text-white">FITLOG</a>

          </div>
          {/* links for Large device */}
          <div className=" hidden lg:flex">
                <ul className="menu menu-horizontal  px-1 font-inter text-base text-[#9CA3AF] font-semibold">

           {links}

          </ul>
          </div>

          {/* Buttons */}
          <div className="gap-1 md:gap-0 lg:gap-5 flex justify-center items-center ">

            <div className="btn border-none shadow-none bg-[#0C0D10] hover:bg-[#222630] font-inter font-medium text-sm md:text-base tracking-wide gap-2 p-2 md:p-4 hidden md:flex">

                <a className="text-[#9CA3AF]">Plan</a>
                <span className="bg-[#C2F800] text-[#1A2312] px-2 py-0.5 rounded-full">
                    0

                </span>
            </div>

            <div className="btn border-none shadow-none bg-[#0C0D10] hover:bg-[#222630] font-inter font-medium text-sm md:text-base tracking-wide gap-2 p-2 md:p-4">

                <a className="text-[#9CA3AF]">Saved</a>
                <span className="bg-[#1A2312] text-white px-2 py-0.5 rounded-full">
                    0
                </span>
            </div>
          
          </div>

      </div>
        
        {/* horizontal line */}
      <div className="border-b">

      </div>
    
    </div>
  );
};

export default Navbar;
