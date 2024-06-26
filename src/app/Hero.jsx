import Shiny from "./Shiny";
import CBTN from "./CBTN";

const Hero = () => {
  return (
    <section
      id="hero"
      className=" flex flex-col h-screen w-full items-center justify-center p-2 md:items-center"
    >
      <div
        id="section"
        className="relative flex w-full flex-col items-center justify-start px-2 py-0 text-center md:w-full md:px-32 mb-6"
      >
        <h1 className="text-5xl leading-relaxed md:text-8xl">
          Boost Your Business with a <Shiny>Powerful</Shiny> Online Presence.
        </h1>

        <p className="text-2xl leading-relaxed md:mt-8">
          Tailored Web Solutions to Amplify Your Market Reach.{" "}
        </p>
      </div>
      <div id="btns" className="flex items-center justify-center gap-4">
        <CBTN path="/#contact" ><p>Contact</p></CBTN>
        <CBTN path="/#services" ><p>Services</p></CBTN>

      </div>
    </section>
  );
};

export default Hero;
