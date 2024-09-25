import React from "react";
import Image from "next/image";

const FourImageSection = () => {
  return (
    <section className="relative text-black w-full h-[980px] mt-[-160px]  bg-[url('/images/triangle2.webp')] bg-center bg-cover ">
      <div className="absolute bottom-60 w-full px-10  flex justify-center">
        <div className="grid grid-cols-4 gap-10">
          <div className="overflow-hidden" style={{ width: "100%" }}>
            <Image
              src="/images/mike-von-osjura.jpg"
              width={580}
              height={260}
              alt="four square"
              className="transition ease-out rounded hover:scale-125 duration-[5500ms]"
              layout="responsive"
            />
          </div>
          <div className="overflow-hidden" style={{ width: "100%" }}>
            <Image
              src="/images/eyes.jpg"
              width={580}
              height={260}
              alt="four square"
              className="transition ease-out rounded hover:scale-125 duration-[5500ms]"
              layout="responsive"
            />
          </div>
          <div className="overflow-hidden" style={{ width: "100%" }}>
            <Image
              src="/images/tree.jpg"
              width={580}
              height={260}
              alt="four square"
              className="transition ease-out rounded hover:scale-125 duration-[5500ms]"
              layout="responsive"
            />
          </div>
          <div className="overflow-hidden" style={{ width: "100%" }}>
            <Image
              src="/images/shovel.jpg"
              width={580}
              height={260}
              alt="four square"
              className="transition ease-out rounded hover:scale-125 duration-[5500ms]"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourImageSection;
