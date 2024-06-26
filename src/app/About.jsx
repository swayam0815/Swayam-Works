const About = () => {
  const about = [
    {
      heading: "Who We Are.",
      line: "We are a passionate team of web developers dedicated to creating high-quality, modern websites tailored to your unique needs. We believe in building genuine relationships with our clients, working closely with you to bring your vision to life. Our commitment to honesty, transparency, and exceptional service sets us apart, ensuring you always feel supported and valued throughout the development process.",
      mLine:
        "We're a passionate team of web developers creating high-quality, modern websites tailored to your needs. We build genuine relationships with our clients, ensuring honesty, transparency, and exceptional service throughout the process.",
    },
    {
      heading: "Our Mission.",
      line: "Our mission is to revolutionize the web development experience by delivering cutting-edge, custom websites at fair and transparent prices. We aim to combat the inflated pricing and hidden fees common in the industry, providing businesses of all sizes with the digital tools they need to thrive. Our goal is to empower you with a powerful online presence without compromising on quality or affordability.",
      mLine:
        "Our mission is to deliver custom websites at fair, transparent prices, combating the inflated costs common in the industry. We empower businesses with quality online tools, offering great value without hidden fees.",
    },
  ];

  return (
    <section className="flex-col" id="about">
      <div className="w-full h-full flex justify-center items-center flex-col">
        <h1 className="relative my-1 text-7xl md:text-8xl">About</h1>
        <div
          id="headings"
          className="flex flex-col md:flex-row items-start w-full justify-center md:gap-5"
        >
          {about.map((point, index) => (
            <div
              className="md:text-lg w-fit px-4 sm:px-8 md:px-12 lg:px-20 xl:px-20 text-xl"
              key={index}
            >
              <h2 className="mt-4 mb-2 text-4xl md:text-5xl text-center">
                {point.heading}
              </h2>
              <p className="text-justify hidden md:block ">{point.line}</p>
              <p className="block md:hidden text-justify ">{point.mLine}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
