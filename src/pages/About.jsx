import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight, CalendarDays, MapPin, Phone } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const img = {
  hero: "/images/glow-hero.jpg.jpg",
  beauty: "/images/glow-beauty.jpg",
  hair: "/images/glow-hair.jpg.jpg",
  space: "/images/glow-space.jpg.jpg",

  hair1: "/images/hair-export.jpg",
  hair2: "/images/hair2-export.jpg",
  makeup: "/images/makeup-export.jpg",
  salon: "/images/salon-export.jpg",
  nail1: "/images/nail-export.jpg",
  nail2: "/images/nails-export.jpg",

  g1: "/images/gallery1.jpg",
  g2: "/images/gallery2.jpg",
  g3: "/images/gallery3.jpg",
  g4: "/images/gallery4.jpg",

  i1: "/images/imag1.jpg",
  i2: "/images/image2.jpg",
  i3: "/images/image3.jpg",
  i4: "/images/image4.jpg",
  i5: "/images/image5.jpg",
  i6: "/images/image6.jpg",
  i7: "/images/image7.jpg",
  i8: "/images/image8.jpg",
};

const WhatsApp = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.861 9.861 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.887 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.89c0 2.096.547 4.142 1.588 5.945L.057 24l6.304-1.654a11.882 11.882 0 005.684 1.447h.005c6.554 0 11.89-5.335 11.893-11.89a11.821 11.821 0 00-3.479-8.415" />
  </svg>
);

const Reveal = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 70 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const About = () => {
  const hero = useRef(null);

  const { scrollYProgress } = useScroll({
    target: hero,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);

  useEffect(() => {
    document.title = "GLOW — Beauty Studio";
  }, []);

  const artists = [
    [img.hair1, "Hair", "01"],
    [img.makeup, "Makeup", "02"],
    [img.hair2, "Color", "03"],
    [img.nail1, "Nails", "04"],
    [img.salon, "Studio", "05"],
    [img.nail2, "Nail Art", "06"],
  ];

  return (
    <main className="bg-[#F5F0E7] text-[#302720] overflow-hidden">

      <section
        ref={hero}
        className="relative h-[100svh] min-h-[720px] bg-[#302720] overflow-hidden"
      >
        <motion.img
          style={{ y: imageY }}
          src={img.hero}
          alt="GLOW"
          className="absolute inset-0 h-[120%] w-full object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />

        <div className="absolute left-7 top-7 z-20 md:left-12 md:top-10">
          <div className="flex items-center gap-4 text-white">
            <div className="flex h-12 w-12 items-center justify-center border border-white/60">
              <span className="font-serif text-2xl">G</span>
            </div>

            <div>
              <div className="text-xs tracking-[0.45em]">GLOW</div>
              <div className="mt-1 text-[8px] tracking-[0.35em] text-white/60">
                BEAUTY STUDIO
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-7 top-7 z-20 md:right-12 md:top-10">
          <a
            href="https://wa.me/9647857804353"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 border border-white/50 px-5 py-3 text-[9px] uppercase tracking-[0.3em] text-white backdrop-blur-md transition hover:bg-white hover:text-[#302720]"
          >
            <WhatsApp size={16} />
            Appointment
          </a>
        </div>

        <motion.div
          style={{ y: titleY }}
          className="absolute bottom-8 left-6 right-6 z-10 md:bottom-12 md:left-12 md:right-12"
        >
          <div className="mb-7 flex items-center gap-4 text-white/70">
            <span className="h-px w-16 bg-white/50" />
            <span className="text-[9px] uppercase tracking-[0.45em]">
              Basra · Iraq
            </span>
          </div>

          <h1 className="font-serif text-[clamp(5rem,18vw,19rem)] font-light leading-[0.63] tracking-[-0.09em] text-white">
            GLOW
          </h1>

          <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-lg text-sm leading-7 text-white/75 md:text-base">
              Beauty, considered differently.
              <br />
              A studio for artistry, detail and personal expression.
            </p>

            <div className="flex items-center gap-3 text-white/60">
              <ArrowDown size={17} strokeWidth={1} />
              <span className="text-[9px] uppercase tracking-[0.4em]">
                Scroll to explore
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="px-6 py-32 md:px-12 md:py-48 lg:px-20">
        <div className="mx-auto max-w-[1600px]">

          <Reveal>
            <div className="flex items-center gap-5">
              <span className="text-[9px] uppercase tracking-[0.45em] text-[#8A724C]">
                01 / About GLOW
              </span>
              <span className="h-px flex-1 bg-[#302720]/15" />
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <h2 className="max-w-[1450px] font-serif text-[clamp(3.5rem,8.5vw,10rem)] font-light leading-[0.82] tracking-[-0.07em]">
              Not just beauty.
              <br />
              <span className="ml-[12%] italic text-[#8A724C]">
                An experience.
              </span>
            </h2>
          </Reveal>

          <div className="mt-24 grid gap-12 lg:grid-cols-12 lg:items-end">

            <Reveal className="lg:col-span-7">
              <div className="relative h-[560px] overflow-hidden md:h-[720px]">
                <img
                  src={img.beauty}
                  alt="GLOW Beauty"
                  className="h-full w-full object-cover transition duration-[1500ms] hover:scale-105"
                />

                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-[9px] uppercase tracking-[0.35em]">
                    GLOW / 2026
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-4 lg:col-start-9 lg:pb-10">
              <p className="font-serif text-3xl leading-tight md:text-4xl">
                We created GLOW around one simple idea:
              </p>

              <p className="mt-8 text-sm leading-8 text-[#302720]/65">
                beauty should feel personal. Not rushed. Not copied. Not
                dictated by trends.
              </p>

              <p className="mt-6 text-sm leading-8 text-[#302720]/65">
                Every appointment begins with understanding what makes you
                feel beautiful, then turning that feeling into something
                tangible through artistry, precision and care.
              </p>

              <div className="mt-12 border-t border-[#302720]/20 pt-5">
                <span className="text-[9px] uppercase tracking-[0.35em] text-[#8A724C]">
                  Beauty studio / Basra
                </span>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      <section className="bg-[#302720] px-6 py-32 text-[#F5F0E7] md:px-12 md:py-48 lg:px-20">
        <div className="mx-auto max-w-[1600px]">

          <Reveal>
            <div className="grid gap-20 lg:grid-cols-12">

              <div className="lg:col-span-4">
                <span className="text-[9px] uppercase tracking-[0.45em] text-[#DCC9A7]">
                  02 / Our Philosophy
                </span>

                <div className="mt-14 h-px w-24 bg-[#DCC9A7]/50" />
              </div>

              <div className="lg:col-span-8">
                <p className="font-serif text-[clamp(2.7rem,6vw,7rem)] font-light leading-[0.9] tracking-[-0.055em]">
                  The best beauty is the kind that still feels like
                  <span className="italic text-[#DCC9A7]"> you.</span>
                </p>
              </div>

            </div>
          </Reveal>

          <div className="mt-28 grid gap-8 md:grid-cols-3">

            <Reveal>
              <div className="border-t border-white/20 pt-6">
                <span className="font-serif text-6xl text-[#DCC9A7]">01</span>
                <h3 className="mt-8 text-xl">Personal</h3>
                <p className="mt-5 text-sm leading-7 text-white/50">
                  Your features, your style, your moment. Nothing is treated
                  as one-size-fits-all.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="border-t border-white/20 pt-6">
                <span className="font-serif text-6xl text-[#DCC9A7]">02</span>
                <h3 className="mt-8 text-xl">Precise</h3>
                <p className="mt-5 text-sm leading-7 text-white/50">
                  Small details create the finished look. We care about every
                  one.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="border-t border-white/20 pt-6">
                <span className="font-serif text-6xl text-[#DCC9A7]">03</span>
                <h3 className="mt-8 text-xl">Timeless</h3>
                <p className="mt-5 text-sm leading-7 text-white/50">
                  Trends can inspire. Your identity should always lead.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      <section className="px-6 py-32 md:px-12 md:py-48 lg:px-20">
        <div className="mx-auto max-w-[1600px]">

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">

            <Reveal className="lg:col-span-5">
              <span className="text-[9px] uppercase tracking-[0.45em] text-[#8A724C]">
                03 / The Art
              </span>

              <h2 className="mt-10 font-serif text-[clamp(3.5rem,7vw,8rem)] font-light leading-[0.82] tracking-[-0.06em]">
                Made
                <br />
                <span className="italic text-[#8A724C]">by hand.</span>
              </h2>

              <p className="mt-10 max-w-md text-sm leading-8 text-[#302720]/60">
                Hair, makeup and nails are different languages of beauty. Our
                artists speak each one with patience and precision.
              </p>
            </Reveal>

            <Reveal className="lg:col-span-6 lg:col-start-7">
              <div className="relative h-[650px] overflow-hidden md:h-[800px]">
                <img
                  src={img.hair}
                  alt="GLOW Hair"
                  className="h-full w-full object-cover transition duration-[1500ms] hover:scale-105"
                />

                <div className="absolute right-5 top-5 border border-white/50 px-4 py-3 text-[9px] uppercase tracking-[0.3em] text-white">
                  Hair / Artistry
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      <section className="bg-[#E8DFD0] px-6 py-32 md:px-12 md:py-48 lg:px-20">
        <div className="mx-auto max-w-[1600px]">

          <Reveal>
            <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
              <div>
                <span className="text-[9px] uppercase tracking-[0.45em] text-[#8A724C]">
                  04 / The Artists
                </span>

                <h2 className="mt-10 font-serif text-[clamp(3.5rem,8vw,9rem)] font-light leading-[0.8] tracking-[-0.07em]">
                  The hands
                  <br />
                  <span className="italic text-[#8A724C]">behind GLOW.</span>
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-[#302720]/60">
                Six disciplines. One standard of care. Every artist brings a
                different perspective to the studio.
              </p>
            </div>
          </Reveal>

          <div className="mt-24 grid grid-cols-12 gap-4 md:gap-6">

            {artists.map(([source, title, number], index) => (
              <Reveal
                key={number}
                className={`col-span-12 sm:col-span-6 lg:col-span-4 ${
                  index === 1
                    ? "lg:mt-32"
                    : index === 2
                    ? "lg:mt-12"
                    : index === 4
                    ? "lg:-mt-16"
                    : ""
                }`}
              >
                <div className="group">

                  <div className="relative overflow-hidden">
                    <img
                      src={source}
                      alt={title}
                      loading="lazy"
                      className="aspect-[0.78] w-full object-cover transition duration-[1200ms] group-hover:scale-105"
                    />

                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center border border-white/70 bg-black/10 text-xs text-white backdrop-blur-sm">
                      {number}
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-[#302720]/20 pt-4">
                    <h3 className="font-serif text-3xl">{title}</h3>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.2}
                      className="text-[#8A724C]"
                    />
                  </div>

                </div>
              </Reveal>
            ))}

          </div>
        </div>
      </section>

      <section className="bg-[#F5F0E7] py-32 md:py-44">

        <Reveal className="px-6 md:px-12 lg:px-20">
          <div className="mx-auto flex max-w-[1600px] items-end justify-between">
            <div>
              <span className="text-[9px] uppercase tracking-[0.45em] text-[#8A724C]">
                05 / Inside GLOW
              </span>

              <h2 className="mt-8 font-serif text-[clamp(3.5rem,7vw,8rem)] font-light leading-[0.8] tracking-[-0.06em]">
                A little
                <br />
                <span className="italic text-[#8A724C]">closer.</span>
              </h2>
            </div>

            <span className="hidden text-[9px] uppercase tracking-[0.35em] text-[#302720]/40 md:block">
              Move with us
            </span>
          </div>
        </Reveal>

        <div className="mt-20 overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-5"
          >
            {[
              img.g1,
              img.g2,
              img.g3,
              img.g4,
              img.g1,
              img.g2,
              img.g3,
              img.g4,
            ].map((source, index) => (
              <div
                key={index}
                className="h-[420px] w-[320px] shrink-0 overflow-hidden md:h-[600px] md:w-[440px]"
              >
                <img
                  src={source}
                  alt="GLOW gallery"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#302720] px-6 py-32 text-[#F5F0E7] md:px-12 md:py-48 lg:px-20">
        <div className="mx-auto max-w-[1600px]">

          <Reveal>
            <div className="flex items-center gap-5">
              <span className="text-[9px] uppercase tracking-[0.45em] text-[#DCC9A7]">
                06 / Visual Journal
              </span>
              <span className="h-px flex-1 bg-white/15" />
            </div>
          </Reveal>

          <div className="mt-20 grid grid-cols-12 gap-3 md:gap-5">

            <Reveal className="col-span-7">
              <img
                src={img.i1}
                alt="GLOW"
                className="h-[520px] w-full object-cover md:h-[780px]"
              />
            </Reveal>

            <Reveal className="col-span-5 mt-24">
              <img
                src={img.i2}
                alt="GLOW"
                className="h-[380px] w-full object-cover md:h-[560px]"
              />
            </Reveal>

            <Reveal className="col-span-4">
              <img
                src={img.i3}
                alt="GLOW"
                className="h-[360px] w-full object-cover md:h-[520px]"
              />
            </Reveal>

            <Reveal className="col-span-8 mt-16">
              <img
                src={img.i4}
                alt="GLOW"
                className="h-[450px] w-full object-cover md:h-[680px]"
              />
            </Reveal>

            <Reveal className="col-span-6 mt-10">
              <img
                src={img.i5}
                alt="GLOW"
                className="h-[450px] w-full object-cover md:h-[700px]"
              />
            </Reveal>

            <Reveal className="col-span-6">
              <img
                src={img.i6}
                alt="GLOW"
                className="h-[350px] w-full object-cover md:h-[540px]"
              />
            </Reveal>

            <Reveal className="col-span-5 mt-12">
              <img
                src={img.i7}
                alt="GLOW"
                className="h-[400px] w-full object-cover md:h-[620px]"
              />
            </Reveal>

            <Reveal className="col-span-7 mt-32">
              <img
                src={img.i8}
                alt="GLOW"
                className="h-[460px] w-full object-cover md:h-[700px]"
              />
            </Reveal>

          </div>
        </div>
      </section>

      <section className="px-6 py-32 md:px-12 md:py-48 lg:px-20">
        <div className="mx-auto max-w-[1600px]">

          <Reveal>
            <span className="text-[9px] uppercase tracking-[0.45em] text-[#8A724C]">
              07 / Your Visit
            </span>

            <h2 className="mt-10 max-w-5xl font-serif text-[clamp(3.5rem,8vw,9rem)] font-light leading-[0.8] tracking-[-0.07em]">
              From
              <span className="italic text-[#8A724C]"> hello</span>
              <br />
              to glow.
            </h2>
          </Reveal>

          <div className="mt-28 grid gap-0 md:grid-cols-2">

            {[
              ["01", "Choose", "Find the service that feels right for your moment."],
              ["02", "Message", "Send us a WhatsApp message and choose your time."],
              ["03", "Arrive", "Come in, slow down and let us take care of you."],
              ["04", "Glow", "Leave feeling polished, confident and completely yourself."],
            ].map(([number, title, text], index) => (
              <Reveal key={number}>
                <div className="border-t border-[#302720]/20 px-0 py-10 md:px-8 md:py-14">
                  <div className="flex items-start justify-between">
                    <span className="font-serif text-6xl text-[#8A724C]">
                      {number}
                    </span>

                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#302720]/40">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-10 font-serif text-4xl">{title}</h3>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-[#302720]/55">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}

          </div>
        </div>
      </section>

      <section className="relative min-h-[850px] overflow-hidden bg-[#302720]">

        <img
          src={img.space}
          alt="GLOW Studio"
          className="absolute inset-0 h-full w-full object-cover opacity-65"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 flex min-h-[850px] flex-col justify-between px-6 py-12 text-white md:px-12 md:py-16 lg:px-20">

          <div className="flex justify-between">
            <span className="text-[9px] uppercase tracking-[0.45em]">
              08 / The Space
            </span>

            <span className="text-[9px] uppercase tracking-[0.35em] text-white/60">
              Basra · Iraq
            </span>
          </div>

          <div>
            <p className="mb-8 max-w-md text-sm leading-7 text-white/70">
              A space designed to make you slow down before you step back into
              the world.
            </p>

            <h2 className="font-serif text-[clamp(4.5rem,10vw,13rem)] font-light leading-[0.72] tracking-[-0.08em]">
              Stay
              <br />
              <span className="italic text-[#DCC9A7]">awhile.</span>
            </h2>
          </div>

        </div>
      </section>

      <section className="bg-[#DCC9A7] px-6 py-36 md:px-12 md:py-52 lg:px-20">
        <div className="mx-auto max-w-[1600px] text-center">

          <Reveal>
            <span className="text-[9px] uppercase tracking-[0.45em] text-[#302720]/60">
              09 / Your Appointment
            </span>

            <h2 className="mt-12 font-serif text-[clamp(4.5rem,11vw,14rem)] font-light leading-[0.72] tracking-[-0.09em]">
              Let&apos;s
              <br />
              <span className="italic text-[#8A724C]">glow.</span>
            </h2>

            <p className="mx-auto mt-14 max-w-lg text-sm leading-7 text-[#302720]/60">
              Tell us what you have in mind. We&apos;ll take it from there.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <a
                href="https://wa.me/9647857804353"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-[#302720] px-9 py-5 text-[9px] uppercase tracking-[0.35em] text-[#F5F0E7] transition hover:bg-[#8A724C]"
              >
                <WhatsApp size={18} />
                WhatsApp
                <ArrowUpRight size={16} />
              </a>

              <a
                href="tel:07857804353"
                className="flex items-center gap-4 border border-[#302720]/30 px-9 py-5 text-[9px] uppercase tracking-[0.35em] transition hover:border-[#302720]"
              >
                <Phone size={17} />
                07857804353
              </a>

            </div>
          </Reveal>

        </div>
      </section>

      <footer className="bg-[#17120F] text-[#F5F0E7]">

        <div className="px-6 pt-20 md:px-12 md:pt-28 lg:px-20">

          <div className="mx-auto max-w-[1600px]">

            <div className="grid gap-16 border-b border-white/10 pb-20 lg:grid-cols-12">

              <div className="lg:col-span-7">

                <span className="text-[9px] uppercase tracking-[0.5em] text-[#DCC9A7]">
                  GLOW Beauty Studio
                </span>

                <h3 className="mt-12 font-serif text-[clamp(5rem,13vw,16rem)] font-light leading-[0.62] tracking-[-0.1em]">
                  GLOW
                </h3>

              </div>

              <div className="flex flex-col justify-end lg:col-span-5">

                <p className="max-w-md text-sm leading-8 text-white/45">
                  A beauty studio in Basra built around artistry, individuality
                  and the little details that make you feel like yourself.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-8">

                  <div>
                    <span className="text-[8px] uppercase tracking-[0.4em] text-[#DCC9A7]">
                      Location
                    </span>

                    <div className="mt-4 flex gap-3 text-sm text-white/70">
                      <MapPin size={16} strokeWidth={1.2} />
                      <span>
                        Basra
                        <br />
                        Iraq
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[8px] uppercase tracking-[0.4em] text-[#DCC9A7]">
                      Appointments
                    </span>

                    <div className="mt-4 flex gap-3 text-sm text-white/70">
                      <CalendarDays size={16} strokeWidth={1.2} />
                      <span>
                        By appointment
                        <br />
                        via WhatsApp
                      </span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            <div className="border-b border-white/10 py-14">

              <a
                href="https://wa.me/9647857804353"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
              >

                <div className="flex items-center gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#DCC9A7]/40 text-[#DCC9A7] transition group-hover:bg-[#DCC9A7] group-hover:text-[#17120F]">
                    <WhatsApp size={25} />
                  </div>

                  <div>
                    <span className="block text-[8px] uppercase tracking-[0.4em] text-white/35">
                      WhatsApp us
                    </span>

                    <span className="mt-2 block font-serif text-3xl md:text-5xl">
                      07857804353
                    </span>
                  </div>

                </div>

                <ArrowUpRight
                  size={35}
                  strokeWidth={1}
                  className="text-[#DCC9A7] transition group-hover:translate-x-2 group-hover:-translate-y-2"
                />

              </a>

            </div>

            <div className="flex flex-col justify-between gap-5 py-8 text-[8px] uppercase tracking-[0.35em] text-white/30 md:flex-row">

              <span>© 2026 GLOW Beauty Studio</span>

              <span>Basra · Iraq</span>

              <span>Beauty with intention.</span>

            </div>

          </div>
        </div>

      </footer>

    </main>
  );
};

export default About;