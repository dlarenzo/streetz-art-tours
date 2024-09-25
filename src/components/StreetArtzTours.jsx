import React from "react";

const StreetArtzTours = () => {
  return (
    <section className="text-black w-full pt-40 flex justify-center mb-[-160px]">
      <div className="w-4/5">
        <h1 className="text-5xl font-bold mb-2">#StreetArtzTours</h1>
        <p className="text-2xl">Street Artz Tours</p>
        <div className="flex gap-10 py-10">
          <p>
            Street Artz Tours is a travel company that specializes in tours that
            focus on street art, graffiti, and murals. Our tours are designed to
            give you an inside look at the local street art scene in cities
            around the world. We work with local artists, guides, and
            organizations to create unique and immersive experiences that
            showcase the best of the local street art scene.
          </p>
          <div>
            <p>
              Our tours are perfect for art lovers, street art enthusiasts, and
              anyone who wants to explore the vibrant and dynamic world of
              street art. Whether you are a seasoned traveler or a first-time
              visitor, our tours are a great way to discover the hidden gems of
              the local street art scene and get a behind-the-scenes look at the
              artists and organizations that are shaping the urban landscape.{" "}
              <br />
            </p>
            <button className="border-solid border-2 border-black px-8 py-3 mt-8 hover:font-bold">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StreetArtzTours;
