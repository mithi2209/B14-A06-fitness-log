import Link from "next/link";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const NotFoundPage = () => {
  return (
    <section className="min-h-screen  flex items-center justify-center px-6">
      <div className="text-center max-w-md">

        <div className="mb-6">
          <span className="text-8xl font-bold text-[#C2F800]">404</span>
        </div>

        <h1 className="text-3xl text-[#9CA3AF]  font-bold  mb-3">
          {" "}
          Page not found{" "}
        </h1>

        <p className=" mb-8 text-[#9CA3AF] ">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
          have been moved or no longer exists.
        </p>
        <Link href="/" className="btn border-none text-black bg-[#C2F800] hover:bg-[#a8eb00]">
        <HiOutlineArrowNarrowLeft />
          {" "}
          Go back home{" "}
          
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
