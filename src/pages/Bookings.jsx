import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faArrowDown,
  faCalendarDays,
  faClock,
  faLocationDot,
  faCheck,
  faScissors,
  faBrush,
  faHandSparkles,
  faWandMagicSparkles,
  faEye,
  faSpa,
  faPerson,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const salons = [
  {
    id: "luna",
    name: "Luna Beauty Lounge",
    location: "Al Ashar · Basra",
    image: "/images/salon-export.jpg",
    description:
      "A refined beauty destination for polished everyday looks and special occasions.",
  },
  {
    id: "glow",
    name: "Glow Beauty Studio",
    location: "Al Jubaila · Basra",
    image: "/images/glow-space.jpg.jpg",
    description:
      "A contemporary beauty space focused on personal care, hair and makeup.",
  },
  {
    id: "velvet",
    name: "Velvet Beauty House",
    location: "Al Qibla · Basra",
    image: "/images/glow-beauty.jpg",
    description:
      "A calm destination for nails, brows, lashes, massage and beauty rituals.",
  },
];

const categories = [
  {
    id: "makeup",
    number: "01",
    title: "Makeup",
    icon: faBrush,
    image: "/images/makeup-export.jpg",
    services: [
      "Bridal Makeup",
      "Soft Glam",
      "Full Glam",
      "Henna Makeup",
      "Engagement Makeup",
      "Evening Makeup",
    ],
  },
  {
    id: "hair",
    number: "02",
    title: "Hair",
    icon: faScissors,
    image: "/images/hair-export.jpg",
    services: [
      "Hair Styling",
      "Hair Cutting",
      "Hair Coloring",
      "Hair Treatment",
      "Blow Dry",
      "Bridal Hair",
    ],
  },
  {
    id: "nails",
    number: "03",
    title: "Nails",
    icon: faHandSparkles,
    image: "/images/nails-export.jpg",
    services: [
      "Manicure",
      "Pedicure",
      "Gel Nails",
      "Acrylic Nails",
      "Nail Art",
      "French Nails",
    ],
  },
  {
    id: "beauty",
    number: "04",
    title: "Beauty",
    icon: faWandMagicSparkles,
    image: "/images/glow-beauty.jpg",
    services: [
      "Facials",
      "Skin Care",
      "Body Care",
      "Beauty Treatments",
      "Deep Cleansing",
      "Special Care",
    ],
  },
  {
    id: "brows",
    number: "05",
    title: "Brows & Lashes",
    icon: faEye,
    image: "/images/image5.jpg",
    services: [
      "Eyebrow Shaping",
      "Eyebrow Tint",
      "Lash Lifting",
      "Lash Extensions",
      "Lash Tint",
      "Brow Lamination",
    ],
  },
  {
    id: "massage",
    number: "06",
    title: "Massage",
    icon: faSpa,
    image: "/images/glow-space.jpg.jpg",
    services: [
      "Relaxation Massage",
      "Full Body Massage",
      "Head Massage",
      "Back Massage",
      "Foot Massage",
      "Special Massage",
    ],
  },
  {
    id: "care",
    number: "07",
    title: "Comprehensive Care",
    icon: faPerson,
    image: "/images/salon-export.jpg",
    services: [
      "Full Beauty Package",
      "Bridal Package",
      "Hair & Makeup",
      "Beauty Day",
      "Complete Care",
      "Custom Package",
    ],
  },
  {
    id: "consultation",
    number: "08",
    title: "Free Consultation",
    icon: faComments,
    image: "/images/glow-space.jpg.jpg",
    services: [
      "Beauty Consultation",
      "Hair Consultation",
      "Makeup Consultation",
      "Bridal Consultation",
      "Skin Consultation",
      "Personal Recommendation",
    ],
  },
];

const times = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
];

const steps = [
  "Salon",
  "Service",
  "Date & Time",
  "Your Details",
];

const Bookings = () => {
  const [searchParams] = useSearchParams();

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSalon, setSelectedSalon] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    notes: "",
  });

  useEffect(() => {
    document.title = "Bookings — GLOW";

    const serviceFromUrl = searchParams.get("service");

    if (serviceFromUrl) {
      for (const category of categories) {
        const foundService = category.services.find(
          (service) =>
            service.toLowerCase().replace(/\s+/g, "-") ===
            serviceFromUrl.toLowerCase()
        );

        if (foundService) {
          setSelectedCategory(category);
          setSelectedService(foundService);
          break;
        }
      }
    }
  }, [searchParams]);

  const chooseSalon = (salon) => {
    setSelectedSalon(salon);
  };

  const chooseCategory = (category) => {
    setSelectedCategory(category);
    setSelectedService(null);
  };

  const chooseService = (service) => {
    setSelectedService(service);
  };

  const canContinue = () => {
    if (currentStep === 1) return selectedSalon;
    if (currentStep === 2) return selectedCategory && selectedService;
    if (currentStep === 3) return selectedDate && selectedTime;

    if (currentStep === 4) {
      return customer.name.trim() && customer.phone.trim();
    }

    return false;
  };

  const nextStep = () => {
    if (!canContinue()) return;

    if (currentStep < 4) {
      setCurrentStep((step) => step + 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      setSubmitted(true);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((step) => step - 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const resetBooking = () => {
    setCurrentStep(1);
    setSelectedSalon(null);
    setSelectedCategory(null);
    setSelectedService(null);
    setSelectedDate("");
    setSelectedTime("");
    setSubmitted(false);

    setCustomer({
      name: "",
      phone: "",
      notes: "",
    });
  };

  return (
    <main className="overflow-hidden bg-[#f7f1e6] text-[#302720]">
      {/* HERO */}
      <section className="relative min-h-[82vh] overflow-hidden border-b border-[#302720]/20 bg-[#302720]">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 2,
            ease: [0.22, 1, 0.36, 1],
          }}
          src="/images/glow-space.jpg.jpg"
          alt="GLOW booking experience"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#17120f]/70" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#17120f] via-transparent to-[#17120f]/40" />

        <div className="relative z-10 flex min-h-[82vh] flex-col justify-between px-5 pb-10 pt-40 md:px-10 lg:px-16">
          <div className="flex items-start justify-between text-[#f7f1e6]">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.35em]">
                GLOW Bookings
              </p>

              <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.25em] text-[#dfcba9]">
                Feature · 003
              </p>
            </div>

            <div className="text-right">
              <p className="font-display text-3xl">
                04
              </p>

              <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/60">
                Simple steps
              </p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[1750px]">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-16 bg-[#dfcba9]" />

              <span className="text-[9px] font-extrabold uppercase tracking-[0.35em] text-[#dfcba9]">
                Your next beauty chapter
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
              BOOK
            </motion.h1>

            <div className="mt-9 grid gap-8 border-t border-white/25 pt-6 md:grid-cols-12 md:items-end">
              <p className="font-serif text-3xl font-medium leading-[1.02] text-white/85 md:col-span-8 md:text-4xl lg:text-5xl">
                Choose your place,
                <br />

                <span className="italic text-[#dfcba9]">
                  choose your moment.
                </span>
              </p>

              <div className="flex items-center gap-3 text-white/60 md:col-span-4 md:justify-end">
                <FontAwesomeIcon icon={faArrowDown} />

                <span className="text-[9px] font-bold uppercase tracking-[0.3em]">
                  Begin your booking
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRESS */}
      <section className="border-b border-[#302720]/15 bg-[#f7f1e6] px-5 py-10 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1750px]">
          <div className="grid grid-cols-2 border-y border-[#302720]/20 md:grid-cols-4">
            {steps.map((step, index) => {
              const stepNumber = index + 1;
              const active = currentStep === stepNumber;
              const completed = currentStep > stepNumber;

              return (
                <button
                  key={step}
                  type="button"
                  onClick={() => {
                    if (completed) {
                      setCurrentStep(stepNumber);
                    }
                  }}
                  disabled={!completed}
                  className={`border-b border-[#302720]/15 px-4 py-5 text-left transition md:border-b-0 md:border-r last:md:border-r-0 ${
                    active
                      ? "bg-[#e9dcc8]"
                      : completed
                        ? "hover:bg-[#e9dcc8]/60"
                        : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-display text-2xl ${
                        active || completed
                          ? "text-[#8a6a43]"
                          : "text-[#302720]/30"
                      }`}
                    >
                      {String(stepNumber).padStart(2, "0")}
                    </span>

                    <div>
                      <p
                        className={`text-[9px] font-extrabold uppercase tracking-[0.2em] ${
                          active
                            ? "text-[#8a6a43]"
                            : "text-[#302720]/50"
                        }`}
                      >
                        Step {stepNumber}
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        {step}
                      </p>
                    </div>

                    {completed && (
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="ml-auto text-xs text-[#8a6a43]"
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOOKING CONTENT */}
      <section className="px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1750px]">
          <AnimatePresence mode="wait">
            {/* STEP 1 */}
            {currentStep === 1 && (
              <motion.div
                key="step-one"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid gap-12 lg:grid-cols-12">
                  <div className="lg:col-span-3">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#8a6a43]">
                      01 — Choose your salon
                    </p>

                    <div className="mt-9 border-t border-[#302720]/20 pt-5">
                      <span className="font-display text-5xl italic">
                        G
                      </span>

                      <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.25em] text-[#302720]/50">
                        Beauty destinations · Basra
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-9">
                    <h2 className="font-display text-[clamp(4rem,8vw,9rem)] font-semibold leading-[0.67] tracking-[-0.08em]">
                      FIND YOUR
                      <br />

                      <span className="italic text-[#a78350]">
                        PLACE.
                      </span>
                    </h2>

                    <p className="mt-10 max-w-3xl font-serif text-2xl font-medium leading-tight md:text-3xl">
                      Explore beauty destinations across Basra and choose the
                      space that feels right for your next appointment.
                    </p>

                    <div className="mt-14 border-t border-[#302720]/25">
                      {salons.map((salon, index) => {
                        const selected = selectedSalon?.id === salon.id;

                        return (
                          <button
                            key={salon.id}
                            type="button"
                            onClick={() => chooseSalon(salon)}
                            className={`group grid w-full gap-7 border-b border-[#302720]/25 py-7 text-left transition md:grid-cols-12 md:items-center md:py-9 ${
                              selected
                                ? "bg-[#e9dcc8]/70"
                                : "hover:bg-[#e9dcc8]/40"
                            }`}
                          >
                            <span className="font-display text-2xl text-[#8a6a43] md:col-span-1 md:text-3xl">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <div className="md:col-span-3">
                              <div className="relative overflow-hidden border border-[#302720]/20 p-1">
                                <img
                                  src={salon.image}
                                  alt={salon.name}
                                  className="h-32 w-full object-cover transition duration-700 group-hover:scale-105 md:h-28"
                                />
                              </div>
                            </div>

                            <div className="md:col-span-5">
                              <h3 className="font-display text-3xl font-semibold leading-none md:text-4xl">
                                {salon.name}
                              </h3>

                              <div className="mt-3 flex items-center gap-2 text-xs font-bold text-[#302720]/55">
                                <FontAwesomeIcon
                                  icon={faLocationDot}
                                  className="text-[#8a6a43]"
                                />

                                {salon.location}
                              </div>

                              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#302720]/60">
                                {salon.description}
                              </p>
                            </div>

                            <div className="flex items-center justify-end md:col-span-3">
                              <span
                                className={`flex h-12 w-12 items-center justify-center border transition ${
                                  selected
                                    ? "border-[#302720] bg-[#302720] text-[#dfcba9]"
                                    : "border-[#302720]/25 group-hover:bg-[#302720] group-hover:text-[#dfcba9]"
                                }`}
                              >
                                <FontAwesomeIcon icon={faCheck} />
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2 */}
            {currentStep === 2 && (
              <motion.div
                key="step-two"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid gap-12 lg:grid-cols-12">
                  <div className="lg:col-span-3">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#8a6a43]">
                      02 — Choose your service
                    </p>

                    <div className="mt-9 border-t border-[#302720]/20 pt-5">
                      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#302720]/50">
                        Selected destination
                      </p>

                      <p className="mt-3 font-display text-2xl font-semibold">
                        {selectedSalon?.name}
                      </p>

                      <p className="mt-2 text-xs text-[#302720]/50">
                        {selectedSalon?.location}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-9">
                    <h2 className="font-display text-[clamp(4rem,8vw,9rem)] font-semibold leading-[0.67] tracking-[-0.08em]">
                      CHOOSE YOUR
                      <br />

                      <span className="italic text-[#a78350]">
                        GLOW.
                      </span>
                    </h2>

                    <p className="mt-10 max-w-3xl font-serif text-2xl font-medium leading-tight md:text-3xl">
                      Start with a category, then select the exact treatment
                      you want.
                    </p>

                    <div className="mt-14 border-t border-[#302720]/25">
                      {categories.map((category) => {
                        const categoryOpen =
                          selectedCategory?.id === category.id;

                        return (
                          <div
                            key={category.id}
                            className="border-b border-[#302720]/25"
                          >
                            <button
                              type="button"
                              onClick={() => chooseCategory(category)}
                              className={`group flex w-full items-center gap-5 py-7 text-left transition md:py-8 ${
                                categoryOpen
                                  ? "bg-[#e9dcc8]/60"
                                  : "hover:bg-[#e9dcc8]/40"
                              }`}
                            >
                              <span className="w-10 shrink-0 font-display text-2xl text-[#8a6a43] md:w-16 md:text-3xl">
                                {category.number}
                              </span>

                              <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#302720]/20 bg-[#f7f1e6] text-[#8a6a43] transition group-hover:bg-[#302720] group-hover:text-[#dfcba9]">
                                <FontAwesomeIcon icon={category.icon} />
                              </span>

                              <span className="flex-1">
                                <span className="block font-display text-3xl font-semibold leading-none md:text-5xl">
                                  {category.title}
                                </span>

                                <span className="mt-2 block text-xs font-semibold text-[#302720]/50">
                                  {category.services.length} available
                                  services
                                </span>
                              </span>

                              <span className="text-[#8a6a43]">
                                <FontAwesomeIcon
                                  icon={
                                    categoryOpen
                                      ? faArrowLeft
                                      : faArrowRight
                                  }
                                />
                              </span>
                            </button>

                            <AnimatePresence initial={false}>
                              {categoryOpen && (
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
                                  transition={{ duration: 0.4 }}
                                  className="overflow-hidden"
                                >
                                  <div className="grid gap-8 pb-8 md:grid-cols-12">
                                    <div className="md:col-span-4">
                                      <div className="relative overflow-hidden border border-[#302720]/20 p-2">
                                        <img
                                          src={category.image}
                                          alt={category.title}
                                          className="h-[240px] w-full object-cover"
                                        />
                                      </div>
                                    </div>

                                    <div className="md:col-span-8">
                                      <div className="grid border-y border-[#302720]/20 md:grid-cols-2">
                                        {category.services.map(
                                          (service, index) => {
                                            const selected =
                                              selectedService === service;

                                            return (
                                              <button
                                                key={service}
                                                type="button"
                                                onClick={() =>
                                                  chooseService(service)
                                                }
                                                className={`flex items-center justify-between border-b border-[#302720]/15 px-4 py-5 text-left transition md:px-5 ${
                                                  selected
                                                    ? "bg-[#302720] text-[#f7f1e6]"
                                                    : "hover:bg-[#f7f1e6]"
                                                }`}
                                              >
                                                <div className="flex items-center gap-3">
                                                  <span
                                                    className={`font-display text-sm ${
                                                      selected
                                                        ? "text-[#dfcba9]"
                                                        : "text-[#8a6a43]"
                                                    }`}
                                                  >
                                                    {String(
                                                      index + 1
                                                    ).padStart(2, "0")}
                                                  </span>

                                                  <span className="text-sm font-bold">
                                                    {service}
                                                  </span>
                                                </div>

                                                {selected && (
                                                  <FontAwesomeIcon
                                                    icon={faCheck}
                                                    className="text-xs text-[#dfcba9]"
                                                  />
                                                )}
                                              </button>
                                            );
                                          }
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 3 */}
            {currentStep === 3 && (
              <motion.div
                key="step-three"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid gap-12 lg:grid-cols-12">
                  <div className="lg:col-span-3">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#8a6a43]">
                      03 — Date & time
                    </p>

                    <div className="mt-9 border-t border-[#302720]/20 pt-5">
                      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#302720]/50">
                        Your selection
                      </p>

                      <p className="mt-3 font-display text-2xl font-semibold">
                        {selectedService}
                      </p>

                      <p className="mt-2 text-xs text-[#302720]/50">
                        {selectedSalon?.name}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-9">
                    <h2 className="font-display text-[clamp(4rem,8vw,9rem)] font-semibold leading-[0.67] tracking-[-0.08em]">
                      PICK YOUR
                      <br />

                      <span className="italic text-[#a78350]">
                        MOMENT.
                      </span>
                    </h2>

                    <p className="mt-10 max-w-3xl font-serif text-2xl font-medium leading-tight md:text-3xl">
                      Select the date and time that works best for your beauty
                      appointment.
                    </p>

                    <div className="mt-14 grid gap-12 md:grid-cols-2">
                      <div>
                        <div className="mb-5 flex items-center gap-3">
                          <FontAwesomeIcon
                            icon={faCalendarDays}
                            className="text-[#8a6a43]"
                          />

                          <p className="text-[10px] font-extrabold uppercase tracking-[0.25em]">
                            Select date
                          </p>
                        </div>

                        <input
                          type="date"
                          value={selectedDate}
                          onChange={(event) =>
                            setSelectedDate(event.target.value)
                          }
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full border-2 border-[#302720]/20 bg-transparent px-5 py-5 text-sm font-bold outline-none transition focus:border-[#8a6a43]"
                        />
                      </div>

                      <div>
                        <div className="mb-5 flex items-center gap-3">
                          <FontAwesomeIcon
                            icon={faClock}
                            className="text-[#8a6a43]"
                          />

                          <p className="text-[10px] font-extrabold uppercase tracking-[0.25em]">
                            Select time
                          </p>
                        </div>

                        <div className="grid grid-cols-2 border-l border-t border-[#302720]/20 sm:grid-cols-3">
                          {times.map((time) => {
                            const selected = selectedTime === time;

                            return (
                              <button
                                key={time}
                                type="button"
                                onClick={() => setSelectedTime(time)}
                                className={`border-b border-r border-[#302720]/20 px-3 py-4 text-xs font-bold transition ${
                                  selected
                                    ? "bg-[#302720] text-[#dfcba9]"
                                    : "hover:bg-[#e9dcc8]"
                                }`}
                              >
                                {time}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 4 */}
            {currentStep === 4 && (
              <motion.div
                key="step-four"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid gap-12 lg:grid-cols-12">
                  <div className="lg:col-span-3">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#8a6a43]">
                      04 — Your details
                    </p>

                    <div className="mt-9 border-t border-[#302720]/20 pt-5">
                      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#302720]/50">
                        Almost there
                      </p>

                      <p className="mt-3 font-display text-3xl italic">
                        GLOW awaits.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-9">
                    <h2 className="font-display text-[clamp(4rem,8vw,9rem)] font-semibold leading-[0.67] tracking-[-0.08em]">
                      MAKE IT
                      <br />

                      <span className="italic text-[#a78350]">
                        YOURS.
                      </span>
                    </h2>

                    <p className="mt-10 max-w-3xl font-serif text-2xl font-medium leading-tight md:text-3xl">
                      Leave your details so the salon can confirm your
                      appointment.
                    </p>

                    <div className="mt-14 grid gap-8 md:grid-cols-2">
                      <div>
                        <label className="mb-3 block text-[10px] font-extrabold uppercase tracking-[0.25em]">
                          Full name
                        </label>

                        <input
                          type="text"
                          value={customer.name}
                          onChange={(event) =>
                            setCustomer({
                              ...customer,
                              name: event.target.value,
                            })
                          }
                          placeholder="Your name"
                          className="w-full border-b-2 border-[#302720]/25 bg-transparent px-0 py-4 text-lg font-semibold outline-none transition placeholder:text-[#302720]/30 focus:border-[#8a6a43]"
                        />
                      </div>

                      <div>
                        <label className="mb-3 block text-[10px] font-extrabold uppercase tracking-[0.25em]">
                          Phone number
                        </label>

                        <input
                          type="tel"
                          value={customer.phone}
                          onChange={(event) =>
                            setCustomer({
                              ...customer,
                              phone: event.target.value,
                            })
                          }
                          placeholder="07XXXXXXXXX"
                          className="w-full border-b-2 border-[#302720]/25 bg-transparent px-0 py-4 text-lg font-semibold outline-none transition placeholder:text-[#302720]/30 focus:border-[#8a6a43]"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="mb-3 block text-[10px] font-extrabold uppercase tracking-[0.25em]">
                          Notes · Optional
                        </label>

                        <textarea
                          rows="4"
                          value={customer.notes}
                          onChange={(event) =>
                            setCustomer({
                              ...customer,
                              notes: event.target.value,
                            })
                          }
                          placeholder="Anything the salon should know?"
                          className="w-full resize-none border-b-2 border-[#302720]/25 bg-transparent px-0 py-4 text-lg font-semibold outline-none transition placeholder:text-[#302720]/30 focus:border-[#8a6a43]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="border-t border-[#302720]/20 bg-[#e9dcc8] px-5 py-8 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1750px] items-center justify-between gap-5">
          <button
            type="button"
            onClick={previousStep}
            disabled={currentStep === 1}
            className={`flex items-center gap-3 border border-[#302720]/25 px-5 py-4 text-[10px] font-extrabold uppercase tracking-[0.18em] transition ${
              currentStep === 1
                ? "cursor-not-allowed opacity-30"
                : "hover:bg-[#302720] hover:text-[#f7f1e6]"
            }`}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Back
          </button>

          <div className="hidden text-center md:block">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#302720]/50">
              GLOW Booking
            </p>

            <p className="mt-1 font-display text-xl">
              {String(currentStep).padStart(2, "0")} / 04
            </p>
          </div>

          <button
            type="button"
            onClick={nextStep}
            disabled={!canContinue()}
            className={`group flex items-center gap-4 border px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.18em] transition ${
              canContinue()
                ? "border-[#302720] bg-[#302720] text-[#f7f1e6] hover:-translate-y-1 hover:bg-[#8a6a43]"
                : "cursor-not-allowed border-[#302720]/20 bg-[#302720]/10 text-[#302720]/30"
            }`}
          >
            {currentStep === 4 ? "Confirm Booking" : "Continue"}

            <FontAwesomeIcon
              icon={faArrowRight}
              className={
                canContinue()
                  ? "transition group-hover:translate-x-1"
                  : ""
              }
            />
          </button>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#17120f] px-5 py-24 text-[#f7f1e6] md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1750px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#dfcba9]">
                A GLOW destination
              </p>

              <h2 className="mt-9 font-display text-[clamp(4rem,9vw,10rem)] font-semibold leading-[0.65] tracking-[-0.08em]">
                BEAUTY
                <br />

                <span className="italic text-[#dfcba9]">
                  AWAITS.
                </span>
              </h2>

              <p className="mt-10 max-w-2xl font-serif text-3xl leading-[1.05] text-white/65 md:text-4xl">
                Discover salons, explore services and make your next
                appointment through GLOW.
              </p>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Link
                to="/services"
                className="group flex w-fit items-center gap-4 border border-[#dfcba9] px-7 py-5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#dfcba9] transition duration-500 hover:-translate-y-2 hover:bg-[#dfcba9] hover:text-[#302720]"
              >
                Explore services

                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#17120f]/80 px-5 backdrop-blur-sm"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 30,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full max-w-2xl border border-[#dfcba9]/40 bg-[#f7f1e6] p-7 text-[#302720] md:p-12"
            >
              <div className="flex h-16 w-16 items-center justify-center border border-[#8a6a43] text-[#8a6a43]">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-xl"
                />
              </div>

              <p className="mt-8 text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#8a6a43]">
                Booking request received
              </p>

              <h2 className="mt-5 font-display text-6xl font-semibold leading-[0.75] tracking-[-0.06em] md:text-8xl">
                YOU'RE
                <br />

                <span className="italic text-[#a78350]">
                  BOOKED.
                </span>
              </h2>

              <p className="mt-8 max-w-xl font-serif text-2xl leading-tight text-[#302720]/70">
                Your appointment request has been prepared for{" "}
                <strong>{selectedSalon?.name}</strong>.
              </p>

              <div className="mt-8 border-y border-[#302720]/15 py-5">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <p className="text-[8px] font-extrabold uppercase tracking-[0.2em] text-[#302720]/45">
                      Service
                    </p>

                    <p className="mt-2 text-sm font-bold">
                      {selectedService}
                    </p>
                  </div>

                  <div>
                    <p className="text-[8px] font-extrabold uppercase tracking-[0.2em] text-[#302720]/45">
                      Date
                    </p>

                    <p className="mt-2 text-sm font-bold">
                      {selectedDate}
                    </p>
                  </div>

                  <div>
                    <p className="text-[8px] font-extrabold uppercase tracking-[0.2em] text-[#302720]/45">
                      Time
                    </p>

                    <p className="mt-2 text-sm font-bold">
                      {selectedTime}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={resetBooking}
                  className="flex items-center gap-3 bg-[#302720] px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#f7f1e6] transition hover:bg-[#8a6a43]"
                >
                  New booking

                  <FontAwesomeIcon icon={faArrowRight} />
                </button>

                <Link
                  to="/services"
                  onClick={() => setSubmitted(false)}
                  className="flex items-center gap-3 border border-[#302720]/25 px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.18em] transition hover:bg-[#e9dcc8]"
                >
                  Explore services
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Bookings;