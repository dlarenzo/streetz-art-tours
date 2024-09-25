import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="w-full">
      <div className="py-16 text-black">
        <h1 className="pt-10 text-center font-bold md:text-5xl sm:text-4xl text-4xl">
          Don&apos;t Miss The Tour!
        </h1>
        <h3 className="text-center text-2xl py-10 ">
          Join our mailing list today!
        </h3>

        <div className="w-full flex justify-center">
          <form className="flex flex-col xl:w-3/5 lg:w-4/5 sm:w-4/5 sm:px-10 w-full px-5">
            <input
              type="text"
              placeholder="Enter your email address"
              className=" border-black border-b-2 px-10 py-3 mb-6 bg-sky-100"
            />
            <button className="border-solid font-light border-2 border-black bg-black   px-10 py-3 transition ease-out text-white hover:bg-white hover:border-none hover:text-black duration-[500ms]">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
      <div className="bg-red-400 w-full h-full px-10 py-6 mx-auto text-center">
        <Link href="/#" className="">
          larenzodegraff.com
        </Link>
      </div>
    </section>
  );
};

export default Footer;
