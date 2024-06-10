import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#fdfefe]">
      {/* NAVIGATION */}
      <nav className="flex w-full px-2 py-10 border-black border-b-4 text-slate-950 bg-green-400">
        <div className="flex-1 w-14 bg-green-900 font-bold">
          <p className="text-2xl tracking-wide">STREET ARTZ TOURS</p>
        </div>
        <div className="flex justify-end gap-x-8 flex-1 w-64 text-base font-light">
          <Link href="#" className="px-2.5">
            Home
          </Link>
          <Link href="#" className="px-2.5">
            Tours
          </Link>
          <Link href="#" className="px-2.5">
            About
          </Link>
          <Link href="#" className="px-2.5">
            Contact
          </Link>
          <Link href="#" className="px-2.5">
            Login
          </Link>
        </div>
      </nav>

      {/* 4 SQUARE */}
      <section className="bg-red-400 w-full h-full px-10">
        <div className="w-full grid grid-cols-2 gap-8">
          {/* 4 squares */}

          <div className="relative w[100%] h-[900px] bg-[url('/images/brick.webp')] bg-center bg-cover">
            {/* <Image src="/images/brick.webp" width={900} height={1500} /> */}

            <div className="bg-black w-[450px] absolute bottom-0 left-0 p-10 text-light">
              <div className="">
                <div className="text-8xl font-extrabold flex">
                  <p className="text-2xl p-1 font-light">1.</p>{" "}
                  <p className="pt-4"> BUD</p>
                </div>
                <p className="my-5">Nov. 15, 2038</p>
                <p>Europe&apos;s Magical Corners</p>
                <p>Budapest | Hungary</p>
              </div>
              <button className="border-solid border-2 border-white mt-20 px-20 py-4">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative w[100%] h-[900px] bg-[url('/images/elephacto.jpg')] bg-center bg-cover">
            {/* <Image src="/images/brick.webp" width={900} height={1500} /> */}

            <div className="bg-black w-[450px] absolute bottom-0 left-0 p-10 text-light">
              <div className="">
                <div className="text-8xl font-extrabold flex">
                  <p className="text-2xl p-1 font-light">1.</p>{" "}
                  <p className="pt-4"> BUD</p>
                </div>
                <p className="my-5">Nov. 15, 2038</p>
                <p>Europe&apos;s Magical Corners</p>
                <p>Budapest | Hungary</p>
              </div>
              <button className="border-solid border-2 border-white mt-20 px-20 py-4">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative w[100%] h-[900px] bg-[url('/images/shops.jpeg')] bg-center bg-cover">
            {/* <Image src="/images/brick.webp" width={900} height={1500} /> */}

            <div className="bg-black w-[450px] absolute bottom-0 left-0 p-10 text-light">
              <div className="">
                <div className="text-8xl font-extrabold flex">
                  <p className="text-2xl p-1 font-light">1.</p>{" "}
                  <p className="pt-4"> BUD</p>
                </div>
                <p className="my-5">Nov. 15, 2038</p>
                <p>Europe&apos;s Magical Corners</p>
                <p>Budapest | Hungary</p>
              </div>
              <button className="border-solid border-2 border-white mt-20 px-20 py-4">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative w[100%] h-[900px] bg-[url('/images/mike-von-osjura.jpg')] bg-center bg-cover">
            {/* <Image src="/images/brick.webp" width={900} height={1500} /> */}

            <div className="bg-black w-[450px] absolute bottom-0 left-0 p-10 text-light">
              <div className="">
                <div className="text-8xl font-extrabold flex">
                  <p className="text-2xl p-1 font-light">1.</p>{" "}
                  <p className="pt-4"> BUD</p>
                </div>
                <p className="my-5">Nov. 15, 2038</p>
                <p>Europe&apos;s Magical Corners</p>
                <p>Budapest | Hungary</p>
              </div>
              <button className="border-solid border-2 border-white mt-20 px-20 py-4">
                Learn More
              </button>
            </div>
          </div>

          {/* END  */}
        </div>
      </section>

      {/* # STREET ARTZ TOURS */}
      <section className="text-black w-full py-16 flex justify-center">
        <div className="w-4/5">
          <h1 className="text-5xl font-bold">#StreetArtzTours</h1>
          <p className="text-2xl">Street Artz Tours</p>
          <div className="flex gap-10 py-10">
            <p>
              Street Artz Tours is a travel company that specializes in tours
              that focus on street art, graffiti, and murals. Our tours are
              designed to give you an inside look at the local street art scene
              in cities around the world. We work with local artists, guides,
              and organizations to create unique and immersive experiences that
              showcase the best of the local street art scene.
            </p>
            <p>
              Our tours are perfect for art lovers, street art enthusiasts, and
              anyone who wants to explore the vibrant and dynamic world of
              street art. Whether you are a seasoned traveler or a first-time
              visitor, our tours are a great way to discover the hidden gems of
              the local street art scene and get a behind-the-scenes look at the
              artists and organizations that are shaping the urban landscape.{" "}
              <br />
              <button className="border-solid border-2 border-black px-8 py-3 mt-8 hover:font-bold">
                Read More
              </button>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
