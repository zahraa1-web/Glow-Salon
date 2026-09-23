import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowDown,
  faLocationDot,
  faCalendarDays,
  faMagnifyingGlass,
  faScissors,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const Reveal = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 65 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "18%"]
  );

  const titleY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "35%"]
  );

  useEffect(() => {
    document.title = "About Us — GLOW";
  }, []);

  return (
    <main className="overflow-hidden bg-[#f7f1e6] text-[#302720]">
      <section
        ref={heroRef}
        className="relative min-h-screen overflow-hidden border-b border-[#302720]/20 bg-[#302720]"
      >
        <motion.img
          style={{ y: imageY }}
          src="/images/glow-space.jpg.jpg"
          alt="GLOW Beauty Space"
          className="absolute inset-[-10%] h-[120%] w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#17120f]/60" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#17120f] via-transparent to-[#17120f]/30" />

        <div className="relative z-10 flex min-h-screen flex-col justify-between px-5 pb-10 pt-40 md:px-10 md:pb-14 lg:px-16">
          <div className="flex justify-between text-[#f7f1e6]">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.35em]">
                About Us
              </p>

              <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.25em] text-[#dfcba9]">
                Feature · 001
              </p>
            </div>

            <div className="text-right">
              <p className="font-display text-3xl">
                BASRA
              </p>

              <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/60">
                Iraq · 2026
              </p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[1750px]">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-16 bg-[#dfcba9]" />

              <span className="text-[9px] font-extrabold uppercase tracking-[0.35em] text-[#dfcba9]">
                The story behind the platform
              </span>
            </div>

            <motion.h1
              style={{ y: titleY }}
              initial={{ opacity: 0, y: 75 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-[clamp(5rem,16vw,17rem)] font-semibold leading-[0.62] tracking-[-0.1em] text-[#f7f1e6]"
            >
              ABOUT
            </motion.h1>

            <div className="mt-9 grid gap-8 border-t border-white/25 pt-6 md:grid-cols-12 md:items-end">
              <p className="font-serif text-3xl font-medium leading-[1.02] text-white/85 md:col-span-8 md:text-4xl lg:text-5xl">
                A new way to discover
                <br />

                <span className="italic text-[#dfcba9]">
                  beauty in Basra.
                </span>
              </p>

              <div className="flex items-center gap-3 text-white/60 md:col-span-4 md:justify-end">
                <FontAwesomeIcon icon={faArrowDown} />

                <span className="text-[9px] font-bold uppercase tracking-[0.3em]">
                  Read the story
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#302720]/15 px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1750px]">
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-3">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#8a6a43]">
                01 — The Idea
              </p>

              <div className="mt-9 border-t border-[#302720]/20 pt-5">
                <span className="font-display text-5xl italic">
                  G
                </span>

                <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.25em] text-[#302720]/50">
                  GLOW Gazette
                </p>
              </div>
            </Reveal>

            <Reveal
              delay={0.1}
              className="lg:col-span-9"
            >
              <h2 className="font-display text-[clamp(3.8rem,8.5vw,9.5rem)] font-semibold leading-[0.68] tracking-[-0.08em]">
                BEAUTY
                <br />

                <span className="ml-[8%] italic text-[#a78350]">
                  SHOULD BE EASY.
                </span>
              </h2>

              <div className="mt-14 grid gap-10 md:grid-cols-2">
                <p className="font-serif text-3xl font-medium leading-[1.05] md:text-4xl">
                  GLOW was created from a simple idea:

                  <span className="italic">
                    discovering beauty should feel as beautiful as the experience itself.
                  </span>
                </p>

                <div>
                  <p className="text-sm font-semibold leading-7 text-[#302720]/65 md:text-base">
                    Basra has its own beauty culture, its own artists,
                    salons and communities. GLOW brings them together
                    in one digital destination where people can discover,
                    explore and book.
                  </p>

                  <p className="mt-6 text-sm font-semibold leading-7 text-[#302720]/65 md:text-base">
                    Instead of moving between different social pages,
                    phone numbers and messages, users can find what
                    they are looking for in one place.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#e9dcc8] px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="text-center text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#8a6a43]">
              02 — Our Story
            </p>

            <div className="mx-auto mt-11 max-w-6xl border-y-2 border-[#302720] py-11 md:py-14">
              <p className="font-serif text-3xl font-medium leading-[1.12] md:text-4xl lg:text-5xl">
                <span className="float-left mr-5 mt-[-10px] font-display text-[8rem] font-semibold leading-none text-[#8a6a43]">
                  B
                </span>

                eauty is not one look.

                It is personal.

                It changes with the person,
                the moment and the place.

                GLOW was imagined to celebrate
                that individuality by creating a
                space where every beauty destination
                in Basra can be discovered.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-[#302720]/15 bg-[#f7f1e6] px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1750px]">
          <Reveal>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#8a6a43]">
                  03 — The Experience
                </p>

                <h2 className="mt-9 font-display text-[clamp(4rem,8.5vw,9.5rem)] font-semibold leading-[0.67] tracking-[-0.08em]">
                  HOW GLOW
                  <br />

                  <span className="italic text-[#a78350]">
                    WORKS.
                  </span>
                </h2>
              </div>

              <p className="max-w-md font-serif text-2xl font-medium leading-tight md:text-3xl">
                Four simple moments between discovering a beauty space and
                making an appointment.
              </p>
            </div>
          </Reveal>

          <div className="mt-18 grid gap-0 border-y border-[#302720]/20 md:grid-cols-4">
            {[
              [
                "01",
                faMagnifyingGlass,
                "Discover",
                "Explore beauty salons across Basra.",
              ],
              [
                "02",
                faLocationDot,
                "Choose",
                "Find the place that feels right.",
              ],
              [
                "03",
                faScissors,
                "Select",
                "Choose your service and experience.",
              ],
              [
                "04",
                faCalendarDays,
                "Book",
                "Reserve your preferred appointment.",
              ],
            ].map(([number, icon, title, text], index) => (
              <Reveal
                key={number}
                delay={index * 0.08}
                className="border-b border-[#302720]/20 p-7 md:border-b-0 md:border-r last:border-r-0"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-4xl font-semibold">
                    {number}
                  </span>

                  <FontAwesomeIcon
                    icon={icon}
                    className="mt-2 text-[#a78350]"
                  />
                </div>

                <h3 className="mt-14 font-display text-4xl font-semibold">
                  {title}
                </h3>

                <p className="mt-4 text-sm font-semibold leading-7 text-[#302720]/55">
                  {text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#17120f] px-5 py-24 text-[#f7f1e6] md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1750px]">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-7">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#dfcba9]">
                04 — The City
              </p>

              <h2 className="mt-11 font-display text-[clamp(4rem,9vw,11rem)] font-semibold leading-[0.65] tracking-[-0.09em]">
                MADE FOR
                <br />

                <span className="italic text-[#dfcba9]">
                  BASRA.
                </span>
              </h2>

              <p className="mt-11 max-w-2xl font-serif text-3xl font-medium leading-[1.05] text-white/75 md:text-4xl">
                GLOW begins in Basra.

                A platform built around the people,
                salons and beauty experiences that
                make the city unique.
              </p>
            </Reveal>

            <Reveal
              delay={0.15}
              className="lg:col-span-5"
            >
              <motion.div
                whileHover={{
                  rotate: -1,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="border border-[#dfcba9]/40 p-3"
              >
                <div className="relative border border-[#dfcba9]/20">
                  <motion.img
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.9 }}
                    src="/images/salon-export.jpg"
                    alt="Beauty salon"
                    className="h-[560px] w-full object-cover"
                  />

                  <div className="absolute bottom-5 left-5 right-5 border border-white/20 bg-[#17120f]/85 p-5 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="text-[#dfcba9]"
                      />

                      <div>
                        <p className="text-[9px] font-extrabold uppercase tracking-[0.25em]">
                          Basra · Iraq
                        </p>

                        <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em] text-white/45">
                          Where GLOW begins
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-[#302720]/15 bg-[#f7f1e6] px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1750px]">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#8a6a43]">
                  05 — The Vision
                </p>

                <div className="mt-9 border-t border-[#302720]/20 pt-6">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-[#a78350]"
                  />

                  <p className="mt-4 text-[9px] font-extrabold uppercase tracking-[0.25em]">
                    Beauty · Community · Choice
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8">
                <h2 className="font-display text-[clamp(3.8rem,8vw,8.5rem)] font-semibold leading-[0.68] tracking-[-0.08em]">
                  ONE CITY.
                  <br />

                  <span className="italic text-[#a78350]">
                    MANY BEAUTIES.
                  </span>
                </h2>

                <p className="mt-12 max-w-4xl font-serif text-3xl font-medium leading-[1.05] md:text-4xl">
                  GLOW is designed to make beauty discovery more connected,
                  more transparent and more enjoyable — giving users the
                  freedom to choose while giving salons a place to be seen.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#dfcba9] px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1750px]">
          <Reveal>
            <div className="border-y-2 border-[#302720] py-11 md:py-14">
              <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#8a6a43]">
                    06 — Your next chapter
                  </p>

                  <h2 className="mt-8 font-display text-[clamp(3.8rem,8.5vw,9rem)] font-semibold leading-[0.65] tracking-[-0.08em]">
                    FIND YOUR
                    <br />

                    <span className="italic">
                      GLOW.
                    </span>
                  </h2>
                </div>

                <Link
                  to="/bookings"
                  className="group flex w-fit items-center gap-4 bg-[#302720] px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#f7f1e6] transition hover:bg-[#8a6a43]"
                >
                  <FontAwesomeIcon icon={faCalendarDays} />

                  Begin your booking

                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden border-t border-[#302720]/20 bg-[#302720] py-7">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max items-center gap-16"
        >
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex items-center gap-16"
            >
              <span className="font-display text-4xl font-semibold italic text-[#f7f1e6] md:text-6xl">
                THE BEAUTY EDITION
              </span>

              <span className="font-display text-4xl font-semibold text-[#dfcba9] md:text-6xl">
                GLOW
              </span>
            </div>
          ))}
        </motion.div>
      </section>
    </main>
  );
};

export default About;