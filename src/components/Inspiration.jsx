import React from "react";
import Image from "next/image";

const Inspiration = () => {
  return (
    <section>
      <div className="w-full py-16 flex justify-center bg-black px-10">
        <div className="w-full md:w-4/5 px-2">
          <h1 className="text-5xl font-bold text-center py-10">Inspiration</h1>
          <p className="text-2xl py-10">
            Street Artz Tours is inspired by the vibrant and dynamic world of
            street art. We believe that street art is a powerful form of
            expression that can transform public spaces, spark conversations,
            and inspire change. Our tours are designed to showcase the best of
            the local street art scene and give you a behind-the-scenes look at
            the artists and organizations that are shaping the urban landscape.
            Whether you are a seasoned traveler or a first-time visitor, our
            tours are a great way to discover the hidden gems of the local
            street art scene and get a deeper understanding of the art form and
            its impact on the community.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="" style={{ width: "100%" }}>
              <h3 className="text-2xl py-8 font-bold text-center">
                {" "}
                10 Popular International Street Artists You Should Follow
              </h3>
              <div className="overflow-hidden" style={{ width: "100%" }}>
                <Image
                  src="/images/afro.jpg"
                  width={800}
                  height={800}
                  alt="image"
                />
              </div>
              <p className="py-8">
                Chicharrones tousled big mood iceland kale chips. JOMO echo park
                bespoke chicharrones, gochujang yr sus etsy vape post-ironic
                narwhal. Ennui church-key pop-up, waistcoat austin slow-carb air
                plant bruh tonx yuccie snackwave. Seitan la croix blog
                dreamcatcher paleo. Sustainable put a bird on it ramps prism.
                Big mood chartreuse same kogi, cold-pressed synth selvage
                letterpress. Etsy green juice snackwave, normcore iPhone yr
                organic meh fanny pack.
              </p>
              <button className="border-solid border-2 border-white px-8 py-2 mt-8 hover:font-bold">
                Explore
              </button>
            </div>
            <div className="" style={{ width: "100%" }}>
              <h3 className="text-2xl py-8 font-bold text-center">
                {" "}
                Middle Eastern Art Installations
              </h3>
              <div className="overflow-hidden" style={{ width: "100%" }}>
                <Image
                  src="/images/subway.webp"
                  width={800}
                  height={800}
                  alt="image"
                />
              </div>
              <p className="py-8">
                Grailed butcher ugh chambray, poke 8-bit gorpcore helvetica
                bicycle rights fingerstache ascot williamsburg put a bird on it.
                You probably haven&apos;t heard of them tacos iceland, chambray
                DIY forage mlkshk af offal tilde tbh four dollar toast vice.
                Meditation coloring book unicorn, glossier blue bottle art party
                mlkshk chicharrones jean shorts crucifix solarpunk kickstarter
                kale chips pug vibecession. Tote bag tousled distillery irony
                viral. Stumptown kogi meggings .
              </p>
              <button className="border-solid border-2 border-white px-8 py-2 mt-8 hover:font-bold">
                Explore
              </button>
            </div>
            <div className="" style={{ width: "100%" }}>
              <h3 className="text-2xl py-8 font-bold text-center">
                {" "}
                A New Art Scene Takes the Streets
              </h3>
              <div className="overflow-hidden" style={{ width: "100%" }}>
                <Image
                  src="/images/hydrant.webp"
                  width={800}
                  height={800}
                  alt="image"
                />
              </div>
              <p className="py-8">
                Affogato aesthetic hell of street art, DSA distillery man bun
                neutral milk hotel fit crucifix vibecession. Kogi tofu ascot,
                prism farm-to-table snackwave fashion axe hella. Kale chips air
                plant retro, shabby chic tumblr cardigan hammock. Woke +1 8-bit,
                waistcoat hashtag sus schlitz squid tonx photo booth tilde JOMO
                cronut man braid flexitarian. Unicorn sustainable crucifix, ugh
                iceland big mood letterpress meditation blog fixie. Palo santo
                green juice PBR&B pour-over man bun etsy.
              </p>
              <button className="border-solid border-2 border-white px-8 py-2 mt-8 hover:font-bold">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
