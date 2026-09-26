import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowDown,
  faScissors,
  faBrush,
  faHandSparkles,
  faSpa,
  faWandMagicSparkles,
  faEye,
  faPerson,
  faComments,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    number: "01",
    title: "Makeup",
    subtitle: "Makeup artistry for every occasion.",
    icon: faBrush,
    image: "/images/makeup-export.jpg",
    items: [
      "Bridal Makeup",
      "Soft Glam",
      "Full Glam",
      "Henna Makeup",
      "Engagement Makeup",
      "Evening Makeup",
    ],
  },
  {
    number: "02",
    title: "Hair",
    subtitle: "Hair styling, treatments and transformations.",
    icon: faScissors,
    image: "/images/hair-export.jpg",
    items: [
      "Hair Styling",
      "Hair Cutting",
      "Hair Coloring",
      "Hair Treatment",
      "Blow Dry",
      "Bridal Hair",
    ],
  },
  {
    number: "03",
    title: "Nails",
    subtitle: "Details that complete your look.",
    icon: faHandSparkles,
    image: "/images/nails-export.jpg",
    items: [
      "Manicure",
      "Pedicure",
      "Gel Nails",
      "Acrylic Nails",
      "Nail Art",
      "French Nails",
    ],
  },
  {
    number: "04",
    title: "Beauty",
    subtitle: "Personal care designed around you.",
    icon: faWandMagicSparkles,
    image: "/images/glow-beauty.jpg",
    items: [
      "Facials",
      "Skin Care",
      "Body Care",
      "Beauty Treatments",
      "Deep Cleansing",
      "Special Care",
    ],
  },
  {
    number: "05",
    title: "Brows & Lashes",
    subtitle: "Frame your face with precision.",
    icon: faEye,
    image: "/images/image5.jpg",
    items: [
      "Eyebrow Shaping",
      "Eyebrow Tint",
      "Lash Lifting",
      "Lash Extensions",
      "Lash Tint",
      "Brow Lamination",
    ],
  },
  {
    number: "06",
    title: "Massage",
    subtitle: "Slow down. Relax. Reset.",
    icon: faSpa,
    image: "/images/glow-space.jpg.jpg",
    items: [
      "Relaxation Massage",
      "Full Body Massage",
      "Head Massage",
      "Back Massage",
      "Foot Massage",
      "Special Massage",
    ],
  },
  {
    number: "07",
    title: "Comprehensive Care",
    subtitle: "Complete beauty experiences in one visit.",
    icon: faPerson,
    image: "/images/salon-export.jpg",
    items: [
      "Full Beauty Package",
      "Bridal Package",
      "Hair & Makeup",
      "Beauty Day",
      "Complete Care",
      "Custom Package",
    ],
  },
  {
    number: "08",
    title: "Free Consultation",
    subtitle: "Not sure what you need? Start here.",
    icon: faComments,
    image: "/images/glow-space.jpg.jpg",
    items: [
      "Beauty Consultation",
      "Hair Consultation",
      "Makeup Consultation",
      "Bridal Consultation",
      "Skin Consultation",
      "Personal Recommendation",
    ],
  },
];

const Services = () => {
  const [openService, setOpenService] = useState(null);

  useEffect(() => {
    document.title = "Services — GLOW";
  }, []);

  const createServiceLink = (service) => {
    const serviceSlug = service.toLowerCase().replace(/\s+/g, "-");

    return `/bookings?service=${encodeURIComponent(serviceSlug)}`;
  };

  return (
    <main className="overflow-hidden bg-[#f7f1e6] text-[#302720]">
      {/* HERO */}
      <section className="relative min-h-[88vh] overflow-hidden border-b border-[#302720]/20 bg-[#302720]">
        <motion.img
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 2,
            ease: [0.22, 1, 0.36, 1],
          }}
          src="/images/makeup-export.jpg"
          alt="GLOW beauty services"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#17120f]/65" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#17120f] via-transparent to-[#17120f]/30" />

        <div className="relative z-10 flex min-h-[88vh] flex-col justify-between px-5 pb-10 pt-40 md:px-10 lg:px-16">
          <div className="flex items-start justify-between text-[#f7f1e6]">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.35em]">
                GLOW Services
              </p>

              <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.25em] text-[#dfcba9]">
                Feature · 002
              </p>
            </div>

            <div className="text-right">
              <p className="font-display text-3xl">
                08
              </p>

              <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/60">
                Beauty categories
              </p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[1750px]">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-16 bg-[#dfcba9]" />

              <span className="text-[9px] font-extrabold uppercase tracking-[0.35em] text-[#dfcba9]">
                The beauty catalogue
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-[clamp(5rem,15vw,16rem)] font-semibold leading-[0.62] tracking-[-0.1em] text-[#f7f1e6]"
            >
              SERVICES
            </motion.h1>

            <div className="mt-9 grid gap-8 border-t border-white/25 pt-6 md:grid-cols-12 md:items-end">
              <p className="font-serif text-3xl font-medium leading-[1.02] text-white/85 md:col-span-8 md:text-4xl lg:text-5xl">
                Find the treatment,
                <br />

                <span className="italic text-[#dfcba9]">
                  find your GLOW.
                </span>
              </p>

              <div className="flex items-center gap-3 text-white/60 md:col-span-4 md:justify-end">
                <FontAwesomeIcon icon={faArrowDown} />

                <span className="text-[9px] font-bold uppercase tracking-[0.3em]">
                  Explore services
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-b border-[#302720]/15 px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1750px]">
          <div className="grid gap-14 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="lg:col-span-3"
            >
              <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#8a6a43]">
                01 — Choose your category
              </p>

              <div className="mt-9 border-t border-[#302720]/20 pt-5">
                <span className="font-display text-5xl italic">
                  G
                </span>

                <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.25em] text-[#302720]/50">
                  GLOW Beauty Gazette
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="lg:col-span-9"
            >
              <h2 className="font-display text-[clamp(3.8rem,8vw,9rem)] font-semibold leading-[0.68] tracking-[-0.08em]">
                BEAUTY
                <br />

                <span className="ml-[8%] italic text-[#a78350]">
                  YOUR WAY.
                </span>
              </h2>

              <p className="mt-12 max-w-4xl font-serif text-3xl font-medium leading-[1.05] md:text-4xl">
                Explore services offered by beauty destinations across Basra,
                then choose the experience that feels right for you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CATALOGUE */}
      <section className="bg-[#e9dcc8] px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1750px]">
          <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#8a6a43]">
                02 — The catalogue
              </p>

              <h2 className="mt-8 font-display text-[clamp(4rem,8vw,9rem)] font-semibold leading-[0.67] tracking-[-0.08em]">
                WHAT ARE
                <br />

                <span className="italic text-[#8a6a43]">
                  YOU LOOKING FOR?
                </span>
              </h2>
            </div>

            <p className="max-w-md font-serif text-2xl font-medium leading-tight md:text-3xl">
              Choose a category to reveal the services inside.
            </p>
          </div>

          <div className="border-t border-[#302720]/25">
            {services.map((service, index) => {
              const isOpen = openService === index;

              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.04,
                  }}
                  className="border-b border-[#302720]/25"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenService(isOpen ? null : index)
                    }
                    className="group flex w-full items-center gap-5 py-7 text-left md:py-9"
                  >
                    <span className="w-10 shrink-0 font-display text-2xl font-semibold text-[#8a6a43] md:w-16 md:text-3xl">
                      {service.number}
                    </span>

                    <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#302720]/20 bg-[#f7f1e6] text-[#8a6a43] transition duration-500 group-hover:bg-[#302720] group-hover:text-[#dfcba9] md:h-14 md:w-14">
                      <FontAwesomeIcon icon={service.icon} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-3xl font-semibold leading-none md:text-5xl">
                        {service.title}
                      </span>

                      <span className="mt-2 block text-xs font-semibold text-[#302720]/50 md:text-sm">
                        {service.subtitle}
                      </span>
                    </span>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#302720]/20">
                      <FontAwesomeIcon
                        icon={isOpen ? faMinus : faPlus}
                        className="text-xs"
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-8 pb-9 md:grid-cols-12 md:gap-12">
                          <div className="md:col-span-5">
                            <div className="relative overflow-hidden border border-[#302720]/20 p-2">
                              <motion.img
                                initial={{ scale: 1.08 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.8 }}
                                src={service.image}
                                alt={service.title}
                                className="h-[300px] w-full object-cover md:h-[360px]"
                              />

                              <div className="absolute bottom-5 left-5 border border-white/30 bg-[#302720]/85 px-4 py-3 text-[#f7f1e6] backdrop-blur-sm">
                                <p className="text-[9px] font-extrabold uppercase tracking-[0.25em]">
                                  GLOW · {service.number}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="md:col-span-7">
                            <p className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-[#8a6a43]">
                              Available services
                            </p>

                            <div className="mt-6 grid gap-0 border-y border-[#302720]/20 md:grid-cols-2">
                              {service.items.map((item, itemIndex) => (
                                <div
                                  key={item}
                                  className="flex items-center justify-between border-b border-[#302720]/15 py-5 last:border-b-0 md:nth-[odd]:border-r md:nth-last-[2]:border-b-0"
                                >
                                  <div className="flex items-center gap-3">
                                    <span className="font-display text-sm text-[#8a6a43]">
                                      {String(itemIndex + 1).padStart(2, "0")}
                                    </span>

                                    <span className="text-sm font-bold">
                                      {item}
                                    </span>
                                  </div>

                                  <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="text-xs text-[#a78350]"
                                  />
                                </div>
                              ))}
                            </div>

                            <Link
                              to={createServiceLink(service.items[0])}
                              className="mt-7 inline-flex items-center gap-4 bg-[#302720] px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#f7f1e6] transition duration-500 hover:-translate-y-1 hover:bg-[#8a6a43]"
                            >
                              Book this service

                              <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="bg-[#17120f] px-5 py-24 text-[#f7f1e6] md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1750px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#dfcba9]">
                03 — Your next step
              </p>

              <h2 className="mt-9 font-display text-[clamp(4rem,9vw,10rem)] font-semibold leading-[0.65] tracking-[-0.08em]">
                READY TO
                <br />

                <span className="italic text-[#dfcba9]">
                  BOOK?
                </span>
              </h2>

              <p className="mt-10 max-w-2xl font-serif text-3xl leading-[1.05] text-white/65 md:text-4xl">
                Find a salon, choose a service and make your next beauty
                appointment through GLOW.
              </p>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Link
                to="/bookings"
                className="group flex w-fit items-center gap-4 border border-[#dfcba9] bg-[#dfcba9] px-7 py-5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#302720] transition duration-500 hover:-translate-y-2 hover:bg-transparent hover:text-[#dfcba9]"
              >
                Start booking

                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;