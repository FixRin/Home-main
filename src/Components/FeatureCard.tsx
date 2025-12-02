import carPhoto from "../assets/CarCard.png";
import carPhoto2 from "../assets/CarCard2.png";
import Card from "../assets/FeaturedCard.png";
import { FadeInOnScroll } from "./FadeInOnScroll";

export default function FeatureCard() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center px-4">

        {/* TITLE */}
        <FadeInOnScroll>
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "Gotham, system-ui, sans-serif" }}
          >
            Bizim üstünlüyümüz Sadədidir.
          </h2>
        </FadeInOnScroll>

        {/* SUBTEXT */}
        <FadeInOnScroll delay={0.1}>
          <p
            className="text-gray-600 max-w-xl mx-auto mb-16"
            style={{
              fontFamily: "Menlo, ui-monospace, SFMono-Regular, monospace",
            }}
          >
            Servislərimizlə sizə ən rahat, ən şəffaf və ən praktik icarə təcrübəsini təqdim edirik.
          </p>
        </FadeInOnScroll>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <FadeInOnScroll delay={0.1}>
            <div className="relative rounded-xl overflow-hidden bg-black text-white h-[380px] md:h-[420px]">
              <img
                src={carPhoto}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="relative p-8">
                <h3
                  className="text-3xl font-bold mb-4"
                  style={{ fontFamily: "Gotham, system-ui, sans-serif" }}
                >
                  Sürət
                </h3>
                <p
                  className="text-lg"
                  style={{
                    fontFamily:
                      "Menlo, ui-monospace, SFMono-Regular, monospace",
                  }}
                >
                  Maşını saniyələr içində tap və sahibinə bir toxunuşla yaz.
                </p>
              </div>
            </div>
          </FadeInOnScroll>

          {/* Card 2 */}
          <FadeInOnScroll delay={0.2}>
            <div className="relative rounded-xl overflow-hidden bg-black text-white h-[380px] md:h-[420px]">
              <img
                src={carPhoto2}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="relative p-8">
                <h3
                  className="text-3xl font-bold mb-4"
                  style={{ fontFamily: "Gotham, system-ui, sans-serif" }}
                >
                  Rahatlıq
                </h3>
                <p
                  className="text-lg"
                  style={{
                    fontFamily:
                      "Menlo, ui-monospace, SFMono-Regular, monospace",
                  }}
                >
                  Heç bir sənədləşmə və gözləmə olmadan asan icarə prosesi.
                </p>
              </div>
            </div>
          </FadeInOnScroll>

          {/* Card 3 */}
          <FadeInOnScroll delay={0.3}>
            <div className="relative rounded-xl overflow-hidden bg-black text-white h-[380px] md:h-[420px]">
              <img
                src={Card}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </FadeInOnScroll>

        </div>
      </div>
    </section>
  );
}
