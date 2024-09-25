import React from "react";
import Image from "next/image";

const FourImageSection = () => {
  return (
    <section className=" text-black w-full h-auto pb-[10rem]    ">
      <div
        className="max-w-full
      "
      >
        {" "}
        <div className=" bottom-30 lg:bottom-60 w-full   grid">
          <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-10 px-10">
            <div className="overflow-hidden" style={{ width: "100%" }}>
              <Image
                src="/images/mike-von-osjura.jpg"
                width={480}
                height={260}
                alt="four square"
                className="transition ease-out rounded hover:scale-125 duration-[5500ms]"
                layout="responsive"
              />
            </div>
            <div className="overflow-hidden" style={{ width: "100%" }}>
              <Image
                src="/images/eyes.jpg"
                width={480}
                height={260}
                alt="four square"
                className="transition ease-out rounded hover:scale-125 duration-[5500ms]"
                layout="responsive"
              />
            </div>
            <div className="overflow-hidden" style={{ width: "100%" }}>
              <Image
                src="/images/tree.jpg"
                width={480}
                height={260}
                alt="four square"
                className="transition ease-out rounded hover:scale-125 duration-[5500ms]"
                layout="responsive"
              />
            </div>
            <div className="overflow-hidden" style={{ width: "100%" }}>
              <Image
                src="/images/shovel.jpg"
                width={480}
                height={260}
                alt="four square"
                className="transition ease-out rounded hover:scale-125 duration-[5500ms]"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourImageSection;
