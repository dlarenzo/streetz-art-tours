import React from "react";

const FourSquare = () => {
  return (
    <section className="bg-red-400 w-full h-full px-10 py-8 ">
      <div className="max-w-[1600px] m-auto">
        <div className="w-full grid lg:grid-cols-2 gap-8">
          {/* 4 squares */}

          <div className="relative w[100%] h-[900px] bg-[url('/images/brick.webp')] bg-center bg-cover">
            {/* <Image src="/images/brick.webp" width={900} height={1500} /> */}

            <div className="bg-black max-w-[450px] absolute bottom-0 left-0 p-10 text-light">
              <div className="">
                <div className="text-8xl font-extrabold flex">
                  <p className="text-2xl p-1 font-light">1.</p>{" "}
                  <p className="pt-4"> BUD</p>
                </div>
                <p className="my-5">Nov. 15, 2038</p>
                <p>Europe&apos;s Magical Corners</p>
                <p>Budapest | Hungary</p>
              </div>
              <button className="border-solid border-2 border-white mt-20 px-20 py-4 hover:font-bold">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative w[100%] h-[900px] bg-[url('/images/elephacto.jpg')] bg-center bg-cover">
            {/* <Image src="/images/brick.webp" width={900} height={1500} /> */}

            <div className="bg-black max-w-[450px] absolute bottom-0 left-0 p-10 text-light">
              <div className="">
                <div className="text-8xl font-extrabold flex">
                  <p className="text-2xl p-1 font-light">2.</p>{" "}
                  <p className="pt-4"> BER</p>
                </div>
                <p className="my-5">Dec. 22, 2038</p>
                <p>More Than a Hipster Hangout</p>
                <p>Berlin | Germany</p>
              </div>
              <button className="border-solid border-2 border-white mt-20 px-20 py-4 hover:font-bold">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative w[100%] h-[900px] bg-[url('/images/buildings.jpg')] bg-center bg-cover">
            {/* <Image src="/images/brick.webp" width={900} height={1500} /> */}

            <div className="bg-black max-w-[450px] absolute bottom-0 left-0 p-10 text-light">
              <div className="">
                <div className="text-8xl font-extrabold flex">
                  <p className="text-2xl p-1 font-light">3.</p>{" "}
                  <p className="pt-4"> NYC</p>
                </div>
                <p className="my-5">Sep. 15, 2038</p>
                <p>Lower East Side Secrets</p>
                <p>Manhattan | USAy</p>
              </div>
              <button className="border-solid border-2 border-white mt-20 px-20 py-4 hover:font-bold">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative w[100%] h-[900px] bg-[url('/images/mike-von-osjura.jpg')] bg-center bg-cover">
            {/* <Image src="/images/brick.webp" width={900} height={1500} /> */}

            <div className="bg-black max-w-[450px] absolute bottom-0 left-0 p-10 text-light">
              <div className="">
                <div className="text-8xl font-extrabold flex">
                  <p className="text-2xl p-1 font-light">4.</p>{" "}
                  <p className="pt-4"> TKO</p>
                </div>
                <p className="my-5">Oct. 10, 2038</p>
                <p>Europe&apos;s Magical Corners</p>
                <p>Tokyo | Japan</p>
              </div>
              <button className="border-solid border-2 border-white mt-20 px-20 py-4 hover:font-bold">
                Learn More
              </button>
            </div>
          </div>

          {/* END  */}
        </div>
      </div>
    </section>
  );
};

export default FourSquare;
