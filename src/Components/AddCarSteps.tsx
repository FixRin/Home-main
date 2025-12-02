import ProfileIcon from "../assets/ProfileIcon.png";
import CarIcon from "../assets/CarIcon.png";
import ChatIcon from "../assets/ChatIcon.png";
import DollarIcon from "../assets/DollarIcon.png";
import { FadeInOnScroll } from "./FadeInOnScroll";

export default function AddCarSteps() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* Title */}
        <FadeInOnScroll>
          <h2
            className="text-center text-[32px] md:text-[40px] font-bold mb-3"
            style={{ fontFamily: "Gotham, system-ui, sans-serif" }}
          >
            Maşınını əlavə et, qazanca başla.
          </h2>
        </FadeInOnScroll>

        {/* Subtitle */}
        <FadeInOnScroll delay={0.1}>
          <p
            className="text-center text-gray-700 max-w-[700px] mx-auto mb-12 text-[16px]"
            style={{
              fontFamily: "Menlo, ui-monospace, SFMono-Regular, monospace",
            }}
          >
            Rentify agentlik hesabı ilə avtomobilini həm tez, həm də stresssiz
            kirayə ver – gəlirin artsın.
          </p>
        </FadeInOnScroll>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* --- Card 1 --- */}
          <FadeInOnScroll delay={0.1}>
            <div
              className="rounded-2xl p-6 flex flex-col gap-3 h-50"
              style={{ backgroundColor: "#F9B914" }}
            >
              <img src={ProfileIcon} alt="Icon" className="w-10 h-10" />
              <h3
                className="text-[24px] font-bold text-white"
                style={{ fontFamily: "Gotham, system-ui, sans-serif" }}
              >
                Agentlik hesabı aç
              </h3>
              <p
                className="text-white"
                style={{
                  fontFamily:
                    "Menlo, ui-monospace, SFMono-Regular, monospace",
                }}
              >
                Bir neçə dəqiqəyə sadə qeydiyyat.
              </p>
            </div>
          </FadeInOnScroll>

          {/* --- Card 2 --- */}
          <FadeInOnScroll delay={0.2}>
            <div
              className="rounded-2xl p-6 flex flex-col gap-3 h-50"
              style={{ backgroundColor: "#485AE9" }}
            >
              <img src={CarIcon} alt="Icon" className="w-16 h-10" />
              <h3
                className="text-[24px] font-bold text-white"
                style={{ fontFamily: "Gotham, system-ui, sans-serif" }}
              >
                Maşınını əlavə et
              </h3>
              <p
                className="text-white"
                style={{
                  fontFamily:
                    "Menlo, ui-monospace, SFMono-Regular, monospace",
                }}
              >
                Foto, model və qiymət daxil et.
              </p>
            </div>
          </FadeInOnScroll>

          {/* --- Card 3 --- */}
          <FadeInOnScroll delay={0.3}>
            <div
              className="rounded-2xl p-6 flex flex-col gap-3 h-50"
              style={{ backgroundColor: "#52ADFF" }}
            >
              <img src={ChatIcon} alt="Icon" className="w-10 h-10" />
              <h3
                className="text-[24px] font-bold text-white"
                style={{ fontFamily: "Gotham, system-ui, sans-serif" }}
              >
                Müştərilər səninlə əlaqə saxlasın
              </h3>
              <p
                className="text-white"
                style={{
                  fontFamily:
                    "Menlo, ui-monospace, SFMono-Regular, monospace",
                }}
              >
                Birbaşa mesaj və ya zəng.
              </p>
            </div>
          </FadeInOnScroll>

          {/* --- Card 4 --- */}
          <FadeInOnScroll delay={0.4}>
            <div
              className="rounded-2xl p-6 flex flex-col gap-3 h-50"
              style={{ backgroundColor: "#1D2E82" }}
            >
              <img src={DollarIcon} alt="Icon" className="w-10 h-10" />
              <h3
                className="text-[24px] font-bold text-white"
                style={{ fontFamily: "Gotham, system-ui, sans-serif" }}
              >
                Təhvil ver və qazan
              </h3>
              <p
                className="text-white"
                style={{
                  fontFamily:
                    "Menlo, ui-monospace, SFMono-Regular, monospace",
                }}
              >
                Komissiyasız, tam gəlir.
              </p>
            </div>
          </FadeInOnScroll>

        </div>
      </div>
    </section>
  );
}
