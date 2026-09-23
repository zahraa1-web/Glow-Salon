import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowDown,
  faCalendarDays,
  faLocationDot,
  faScissors,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Reveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) => {
  const directions = {
    up: { y: 70, x: 0 },
    left: { y: 0, x: -70 },
    right: { y: 0, x: 70 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
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

const Home = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "18%"]
  );

  const heroTitleY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "30%"]
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, 0]
  );

  useEffect(() => {
    document.title = "GLOW — The Beauty Gazette";
  }, []);

  const discoveries = [
    {
      number: "01",
      title: "Discover",
      text: "Explore beauty destinations across Basra and discover spaces that match your style.",
      image: "/images/glow-space.jpg.jpg",
    },
    {
      number: "02",
      title: "Choose",
      text: "Find the salon, artist and beauty service that feels right for you.",
      image: "/images/glow-beauty.jpg",
    },
    {
      number: "03",
      title: "Book",
      text: "Choose your preferred time and reserve your appointment with ease.",
      image: "/images/makeup-export.jpg",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#f7f1e6] text-[#302720]">
      <section
        ref={heroRef}
        className="relative min-h-screen overflow-hidden border-b border-[#302720]/20 bg-[#302720]"
      >
        <motion.img
          style={{ y: heroImageY }}
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 2.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          src="/images/glow-hero.jpg.jpg"
          alt="GLOW Beauty"
          className="absolute inset-[-8%] h-[116%] w-full object-cover"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
          className="absolute inset-0 bg-[#17120f]/55"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#17120f] via-transparent to-[#17120f]/30" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 flex min-h-screen flex-col justify-between px-5 pb-8 pt-36 md:px-10 md:pb-12 lg:px-16"
        >
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.35,
            }}
            className="flex items-start justify-between text-[#f7f1e6]"
          >
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.35em]">
                The Beauty Gazette
              </p>

              <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.25em] text-[#dfcba9]">
                Vol. 01 · Basra · Iraq
              </p>
            </div>

            <div className="hidden text-right sm:block">
              <p className="font-display text-3xl">
                2026
              </p>

              <p className="text-[8px] font-bold uppercase tracking-[0.3em]">
                First Edition
              </p>
            </div>
          </motion.div>

          <div className="mx-auto w-full max-w-[1750px]">
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: 70,
                opacity: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 0.75,
              }}
              className="mb-7 h-px bg-[#dfcba9]"
            />

            <motion.p
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.85,
              }}
              className="mb-7 text-[9px] font-extrabold uppercase tracking-[0.35em] text-[#dfcba9]"
            >
              Beauty · Art · Individuality
            </motion.p>

            <motion.h1
              style={{ y: heroTitleY }}
              initial={{
                opacity: 0,
                y: 100,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1.3,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-[clamp(5.5rem,18vw,19rem)] font-semibold leading-[0.62] tracking-[-0.1em] text-[#f7f1e6]"
            >
              GLOW
            </motion.h1>

            <div className="mt-11 grid gap-8 border-t border-white/25 pt-6 md:grid-cols-12 md:items-end">
              <Reveal
                direction="left"
                className="md:col-span-7"
              >
                <p className="max-w-3xl font-serif text-3xl font-medium leading-[1.02] text-white/90 md:text-4xl lg:text-5xl">
                  The new way to discover
                  <br />

                  <span className="italic text-[#dfcba9]">
                    beauty in Basra.
                  </span>
                </p>
              </Reveal>

              <Reveal
                direction="right"
                delay={0.15}
                className="md:col-span-5 md:flex md:justify-end"
              >
                <Link
                  to="/services"
                  className="group flex w-fit items-center gap-4 bg-[#dfcba9] px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#302720] transition duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-2xl"
                >
                  Discover salons

                  <motion.span
                    whileHover={{ rotate: 45 }}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#302720] text-sm text-white"
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </motion.span>
                </Link>
              </Reveal>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 1.3,
              }}
              className="mt-9 flex items-center gap-3 text-white/60"
            >
              <motion.span
                animate={{ y: [0, 7, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                <FontAwesomeIcon icon={faArrowDown} />
              </motion.span>

              <span className="text-[9px] font-bold uppercase tracking-[0.3em]">
                Scroll to explore
              </span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="border-b border-[#302720]/15 bg-[#f7f1e6] px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1750px]">
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal
              direction="left"
              className="lg:col-span-3"
            >
              <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#8a6a43]">
                01 — The Idea
              </p>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="mt-9 h-px bg-[#302720]/20"
              />

              <motion.p
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mt-5 font-display text-5xl"
              >
                G
              </motion.p>

              <p className="mt-2 text-[8px] font-bold uppercase tracking-[0.3em] text-[#302720]/40">
                Beauty Gazette
              </p>
            </Reveal>

            <Reveal
              direction="right"
              delay={0.1}
              className="lg:col-span-9"
            >
              <motion.h2
                whileInView={{
                  opacity: [0, 1],
                  x: [-45, 0],
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="font-display text-[clamp(3.8rem,8.5vw,9.5rem)] font-semibold leading-[0.7] tracking-[-0.08em]"
              >
                BEAUTY
                <br />

                <span className="ml-[8%] italic text-[#a78350]">
                  IN ONE PLACE.
                </span>
              </motion.h2>

              <div className="mt-14 grid gap-10 md:grid-cols-2">
                <p className="font-serif text-3xl font-medium leading-[1.05] md:text-4xl">
                  GLOW is a beauty discovery platform created to bring the
                  salons of Basra together in one beautiful destination.
                </p>

                <div>
                  <p className="text-sm font-semibold leading-7 text-[#302720]/65 md:text-base">
                    Instead of searching through different pages, accounts
                    and messages, GLOW gives you one place to explore salons,
                    discover their services and choose the experience that
                    feels right for you.
                  </p>

                  <Link
                    to="/about"
                    className="group mt-8 inline-flex items-center gap-4 border-b-2 border-[#302720]/30 pb-3 text-[10px] font-extrabold uppercase tracking-[0.18em] transition hover:border-[#a78350] hover:text-[#a78350]"
                  >
                    About Us

                    <motion.span whileHover={{ x: 6 }}>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </motion.span>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-[#302720]/15 bg-[#e9dcc8] px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1750px]">
          <Reveal>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#8a6a43]">
                  02 — The GLOW Method
                </p>

                <h2 className="mt-9 font-display text-[clamp(4rem,9vw,10rem)] font-semibold leading-[0.67] tracking-[-0.08em]">
                  FIND YOUR
                  <br />

                  <span className="italic text-[#8a6a43]">
                    GLOW.
                  </span>
                </h2>
              </div>

              <p className="max-w-md font-serif text-2xl font-medium leading-tight md:text-3xl">
                Three simple moments between discovering a place and making it
                yours.
              </p>
            </div>
          </Reveal>

          <div className="mt-18 grid gap-6 md:grid-cols-3">
            {discoveries.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 90,
                  rotate: index === 1 ? 2 : 0,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.16,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -12,
                }}
                className="group border border-[#302720]/20 bg-[#f7f1e6] shadow-sm"
              >
                <div className="relative overflow-hidden border-b border-[#302720]/20">
                  <motion.img
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 1.1,
                    }}
                    src={item.image}
                    alt={item.title}
                    className="h-[410px] w-full object-cover"
                  />

                  <motion.div
                    initial={{ scale: 0, rotate: -15 }}
                    whileInView={{
                      scale: 1,
                      rotate: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.65,
                      delay: 0.25 + index * 0.12,
                    }}
                    className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center border border-white/70 bg-[#302720]/80 font-display text-lg font-bold text-[#f7f1e6] backdrop-blur-sm"
                  >
                    {item.number}
                  </motion.div>
                </div>

                <div className="p-7">
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-[#8a6a43]">
                    Chapter {item.number}
                  </p>

                  <h3 className="mt-4 font-display text-4xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm font-semibold leading-7 text-[#302720]/60">
                    {item.text}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-[#302720]/15 pt-5">
                    <span className="text-[8px] font-extrabold uppercase tracking-[0.25em]">
                      GLOW Gazette
                    </span>

                    <motion.span whileHover={{ x: 7 }}>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </motion.span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#17120f] px-5 py-24 text-[#f7f1e6] md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1750px]">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <Reveal
              direction="left"
              className="lg:col-span-7"
            >
              <p className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#dfcba9]">
                03 — The City
              </p>

              <h2 className="mt-11 font-display text-[clamp(4rem,9vw,11rem)] font-semibold leading-[0.66] tracking-[-0.09em]">
                BASRA
                <br />

                <span className="italic text-[#dfcba9]">
                  IS GLOWING.
                </span>
              </h2>

              <p className="mt-11 max-w-2xl font-serif text-3xl font-medium leading-[1.05] text-white/75 md:text-4xl">
                From established beauty houses to emerging studios,
                discover the people and places shaping the beauty scene
                of Basra.
              </p>
            </Reveal>

            <Reveal
              direction="right"
              delay={0.2}
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
                className="relative border border-[#dfcba9]/40 p-3"
              >
                <div className="border border-[#dfcba9]/20 p-3">
                  <motion.img
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.9 }}
                    src="/images/salon-export.jpg"
                    alt="Beauty salon in Basra"
                    className="h-[560px] w-full object-cover"
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 }}
                    className="absolute bottom-7 left-7 right-7 flex items-center justify-between border border-white/20 bg-[#17120f]/80 px-5 py-4 backdrop-blur-md"
                  >
                    <div className="flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="text-[#dfcba9]"
                      />

                      <div>
                        <p className="text-[9px] font-extrabold uppercase tracking-[0.25em]">
                          Basra, Iraq
                        </p>

                        <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/50">
                          The beauty city
                        </p>
                      </div>
                    </div>

                    <span className="font-display text-xl text-[#dfcba9]">
                      03
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f1e6] px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1750px]">
          <Reveal>
            <div className="border-y-2 border-[#302720] py-10 md:py-12">
              <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-5">
                  <span className="font-display text-4xl font-bold">
                    04
                  </span>

                  <div>
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-[#8a6a43]">
                      The next chapter
                    </p>

                    <h2 className="mt-2 font-display text-4xl font-semibold leading-none md:text-6xl">
                      YOUR APPOINTMENT.
                    </h2>
                  </div>
                </div>

                <Link
                  to="/bookings"
                  className="group flex w-fit items-center gap-4 bg-[#302720] px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#f7f1e6] transition duration-500 hover:-translate-y-2 hover:bg-[#a78350] hover:shadow-2xl"
                >
                  <FontAwesomeIcon icon={faCalendarDays} />

                  Begin your booking

                  <motion.span whileHover={{ x: 5 }}>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </motion.span>
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="mt-20 grid gap-10 md:grid-cols-3">
            {[
              [
                faMagnifyingGlass,
                "Explore",
                "Browse salons and beauty spaces around Basra.",
              ],
              [
                faScissors,
                "Choose",
                "Select the service and experience you want.",
              ],
              [
                faCalendarDays,
                "Reserve",
                "Choose your time and make your appointment.",
              ],
            ].map(([icon, title, text], index) => (
              <motion.div
                key={title}
                initial={{
                  opacity: 0,
                  y: 55,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.14,
                }}
                whileHover={{
                  y: -7,
                }}
                className="border-t border-[#302720]/20 pt-6"
              >
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.15,
                  }}
                  className="w-fit"
                >
                  <FontAwesomeIcon
                    icon={icon}
                    className="text-xl text-[#a78350]"
                  />
                </motion.div>

                <h3 className="mt-5 font-display text-3xl font-semibold">
                  {title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-7 text-[#302720]/60">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-t border-[#302720]/15 bg-[#dfcba9] py-7">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max items-center gap-20"
        >
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex items-center gap-20"
            >
              <span className="font-display text-4xl font-semibold italic text-[#302720] md:text-6xl">
                DISCOVER BEAUTY
              </span>

              <span className="font-display text-4xl font-semibold text-[#302720] md:text-6xl">
                FIND YOUR GLOW
              </span>
            </div>
          ))}
        </motion.div>
      </section>
    </main>
  );
};

export default Home;