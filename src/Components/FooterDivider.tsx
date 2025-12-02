import bgimage from "../assets/FooterBanner.png"
export default function Hero() {
  return (
    <section className="w-full relative h-[533px]  mx-auto mt-12">
      {/* Background image */}
      <div
       className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgimage})`, 
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
          Avtomobil icarəsi heç vaxt bu <br/> qədər asan olmamışdı.
        </h1>

        <p
          className="text-xl leading-relaxed text-white  max-w-3xl mx-auto mt-3 "
          style={{
            fontFamily: "Menlo, ui-monospace, SFMono-Regular, monospace",
          }}
        >
          Yeni tətbiqimizi yükləyin, saniyələr ərzində yüzlərlə avtomobil <br/> arasından seçim edin və dərhal yola düşün.
        </p>
      </div>

       
    </section>  
  );
}
