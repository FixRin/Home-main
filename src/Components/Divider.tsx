import bgimage from "../assets/Divider.png";

export default function Hero() {
  return (
    <section className="w-full relative h-[533px]  mx-auto mt-12">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundAttachment:"fixed"
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1
          className="text-white text-4xl md:text-6xl font-bold"
          style={{ fontFamily: "Gotham, system-ui, sans-serif" }}
        >
          Asan seçim, rahat təhvil.
        </h1>

       
      </div>
    </section>
  );
}
