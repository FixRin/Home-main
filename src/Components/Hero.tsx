import { FadeInOnScroll } from "./FadeInOnScroll";

export default function Hero() {
  const handleScroll = () => {
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section style={{ backgroundColor: "#FFFFFF" }}>
      <div className="mx-auto max-w-[960px] px-6 pt-12 pb-5 text-center">
        {/* Başlıq */}
        <FadeInOnScroll>
          <h1
            className="text-3xl md:text-[36px] font-bold leading-snug text-black mb-6"
            style={{ fontFamily: "Gotham, system-ui, sans-serif" }}
          >
            Tezliklə qarşınızdayıq.
          </h1>
        </FadeInOnScroll>

        {/* Açıqlama mətni */}
        <FadeInOnScroll delay={0.1}>
          <p
            className="text-[16px] leading-relaxed text-gray-600 mb-8 max-w-2xl mx-auto"
            style={{
              fontFamily: "Menlo, ui-monospace, SFMono-Regular, monospace",
            }}
          >
            Sizin üçün ən rahat, ən şəffaf və ən sürətli avtomobil seçmə
            təcrübəsini gətiririk.
          </p>
        </FadeInOnScroll>

        {/* Button + shine effekti */}
        <FadeInOnScroll delay={0.2}>
          <div className="group inline-block">
            <button
              onClick={handleScroll}
              className="
                relative inline-flex items-center justify-center
                px-16 py-3 rounded-md text-white font-medium text-sm
                transition-all duration-300 ease-out
                group-hover:scale-[1.03]
                group-hover:shadow-[0_6px_20px_rgba(82,173,255,0.5)]
                overflow-hidden
                cursor-pointer
              "
              style={{ backgroundColor: "#485AE9" }}
            >
              {/* Text */}
              <span className="relative z-10">Bizimlə Əlaqə</span>

              {/* Shine hover effect */}
              <span
                className="
                  absolute inset-0
                  bg-gradient-to-r from-white/0 via-white/20 to-white/0
                  opacity-0
                  -translate-x-[150%]
                  group-hover:translate-x-[150%]
                  group-hover:opacity-100
                  transition-all duration-500 ease-out
                "
              />
            </button>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
