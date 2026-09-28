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
  faStore,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const salons = [
  {
    id: "luna",
    name: "Luna Beauty Lounge",
    location: "Al Ashar · Basra",
    image: "/images/salon-export.jpg",
    description:
      "A refined beauty destination for polished everyday looks and special occasions.",
    rating: "4.9",
  },
  {
    id: "glow",
    name: "Glow Beauty Studio",
    location: "Al Jubaila · Basra",
    image: "/images/glow-space.jpg.jpg",
    description:
      "A contemporary beauty space focused on personal care, hair and makeup.",
    rating: "4.8",
  },
  {
    id: "velvet",
    name: "Velvet Beauty House",
    location: "Al Qibla · Basra",
    image: "/images/glow-beauty.jpg",
    description:
      "A calm destination for nails, brows, lashes, massage and beauty rituals.",
    rating: "4.8",
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
    if (currentStep === 1) return Boolean(selectedSalon);

    if (currentStep === 2) {
      return Boolean(selectedCategory && selectedService);
    }

    if (currentStep === 3) {
      return Boolean(selectedDate && selectedTime);
    }

    if (currentStep === 4) {
      return Boolean(
        customer.name.trim() && customer.phone.trim()
      );
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
    <main className="overflow-hidden bg-[#eee5d8] text-[#302720]">

      <section className="relative min-h-[90vh] overflow-hidden bg-[#17120f] text-[#f5eee4]">
        <motion.img
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          src="/images/glow-space.jpg.jpg"
          alt="GLOW booking experience"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#17120f]/68" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#17120f] via-[#17120f]/25 to-[#17120f]/45" />

        <div className="relative z-10 flex min-h-[90vh] flex-col justify-between px-5 pb-12 pt-36 md:px-10 lg:px-16">
          <div className="mx-auto flex w-full max-w-[1750px] items-start justify-between">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.35em]">
                GLOW Bookings
              </p>

              <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.27em] text-[#dfcba9]">
                Your beauty destination
              </p>
            </div>

            <div className="hidden text-right sm:block">
              <p className="font-display text-4xl">
                04
              </p>

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/50">
                Simple steps
              </p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[1750px]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 70 }}
              transition={{
                duration: 0.8,
                delay: 0.35,
              }}
              className="mb-8 h-px bg-[#dfcba9]"
            />

            <p className="mb-7 text-[10px] font-extrabold uppercase tracking-[0.34em] text-[#dfcba9]">
              Discover · Choose · Book
            </p>

            <motion.h1
              initial={{
                opacity: 0,
                y: 80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-[clamp(5rem,15vw,16rem)] font-semibold leading-[0.61] tracking-[-0.1em]"
            >
              BOOK
            </motion.h1>

            <div className="mt-10 grid gap-8 border-t border-white/20 pt-7 md:grid-cols-12 md:items-end">
              <p className="font-serif text-3xl font-medium leading-[1.03] text-white/85 md:col-span-8 md:text-4xl lg:text-5xl">
                Choose your place,
                <br />
                <span className="italic text-[#dfcba9]">
                  choose your moment.
                </span>
              </p>

              <div className="flex items-center gap-3 text-white/55 md:col-span-4 md:justify-end">
                <motion.span
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <FontAwesomeIcon icon={faArrowDown} />
                </motion.span>

                <span className="text-[9px] font-extrabold uppercase tracking-[0.3em]">
                  Start your experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#302720]/15 bg-[#e4d8c7] px-5 py-8 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1750px]">
          <div className="grid grid-cols-2 overflow-hidden rounded-[10px] border border-[#302720]/15 bg-[#eee5d8] md:grid-cols-4">
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
                  className={`border-b border-[#302720]/12 px-5 py-5 text-left transition md:border-b-0 md:border-r last:md:border-r-0 ${
                    active
                      ? "bg-[#302720] text-[#f5eee4]"
                      : completed
                        ? "bg-[#dfcba9]/30 hover:bg-[#dfcba9]/50"
                        : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-display text-2xl ${
                        active || completed
                          ? active
                            ? "text-[#dfcba9]"
                            : "text-[#9a7444]"
                          : "text-[#302720]/25"
                      }`}
                    >
                      {String(stepNumber).padStart(2, "0")}
                    </span>

                    <div>
                      <p
                        className={`text-[9px] font-extrabold uppercase tracking-[0.2em] ${
                          active
                            ? "text-[#dfcba9]"
                            : "text-[#302720]/45"
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
                        className="ml-auto text-xs text-[#9a7444]"
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1750px]">
          <AnimatePresence mode="wait">

            {currentStep === 1 && (
              <motion.div
                key="step-one"
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -30,
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                <div className="grid gap-14 lg:grid-cols-12">
                  <div className="lg:col-span-3">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#9a7444]">
                      01 — Choose your salon
                    </p>

                    <div className="mt-10 border-t border-[#302720]/15 pt-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#302720] shadow-[0_10px_30px_rgba(48,39,32,0.15)]">
                        <span className="font-display text-3xl text-[#eee5d8]">
                          G
                        </span>
                      </div>

                      <p className="mt-4 text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#302720]/45">
                        Beauty destinations
                      </p>

                      <p className="mt-1 text-[11px] font-bold text-[#302720]/65">
                        Basra · Iraq
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-9">
                    <h2 className="font-display text-[clamp(4rem,8vw,9rem)] font-semibold leading-[0.67] tracking-[-0.08em]">
                      FIND YOUR
                      <br />
                      <span className="italic text-[#9a7444]">
                        PLACE.
                      </span>
                    </h2>

                    <p className="mt-10 max-w-3xl font-serif text-2xl font-medium leading-[1.05] md:text-3xl">
                      Explore beauty destinations across Basra and choose the
                      space that feels right for your next appointment.
                    </p>

                    <div className="mt-14 overflow-hidden rounded-[12px] border border-[#302720]/15 bg-[#f5eee4]">
                      {salons.map((salon, index) => {
                        const selected =
                          selectedSalon?.id === salon.id;

                        return (
                          <button
                            key={salon.id}
                            type="button"
                            onClick={() => chooseSalon(salon)}
                            className={`group grid w-full gap-6 border-b border-[#302720]/12 p-5 text-left transition last:border-b-0 md:grid-cols-12 md:items-center md:p-7 ${
                              selected
                                ? "bg-[#302720] text-[#f5eee4]"
                                : "hover:bg-[#e4d8c7]/55"
                            }`}
                          >
                            <span
                              className={`font-display text-2xl md:col-span-1 md:text-3xl ${
                                selected
                                  ? "text-[#dfcba9]"
                                  : "text-[#9a7444]"
                              }`}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <div className="md:col-span-3">
                              <div
                                className={`overflow-hidden rounded-[6px] border p-1 ${
                                  selected
                                    ? "border-white/15"
                                    : "border-[#302720]/15"
                                }`}
                              >
                                <img
                                  src={salon.image}
                                  alt={salon.name}
                                  className="h-36 w-full object-cover transition duration-700 group-hover:scale-105"
                                />
                              </div>
                            </div>

                            <div className="md:col-span-6">
                              <div className="flex flex-wrap items-center gap-3">
                                <h3 className="font-display text-3xl font-semibold leading-none md:text-4xl">
                                  {salon.name}
                                </h3>

                                <span
                                  className={`flex items-center gap-1 rounded-full px-3 py-1 text-[9px] font-extrabold ${
                                    selected
                                      ? "bg-white/10 text-[#dfcba9]"
                                      : "bg-[#dfcba9]/35 text-[#76552f]"
                                  }`}
                                >
                                  <span>★</span>
                                  {salon.rating}
                                </span>
                              </div>

                              <div
                                className={`mt-3 flex items-center gap-2 text-xs font-bold ${
                                  selected
                                    ? "text-white/55"
                                    : "text-[#302720]/55"
                                }`}
                              >
                                <FontAwesomeIcon
                                  icon={faLocationDot}
                                  className={
                                    selected
                                      ? "text-[#dfcba9]"
                                      : "text-[#9a7444]"
                                  }
                                />

                                {salon.location}
                              </div>

                              <p
                                className={`mt-4 max-w-xl text-sm leading-7 ${
                                  selected
                                    ? "text-white/55"
                                    : "text-[#302720]/58"
                                }`}
                              >
                                {salon.description}
                              </p>
                            </div>

                            <div className="flex items-center justify-end md:col-span-2">
                              <span
                                className={`flex h-12 w-12 items-center justify-center rounded-full border transition ${
                                  selected
                                    ? "border-[#dfcba9] bg-[#dfcba9] text-[#302720]"
                                    : "border-[#302720]/20 group-hover:border-[#302720] group-hover:bg-[#302720] group-hover:text-[#dfcba9]"
                                }`}
                              >
                                <FontAwesomeIcon icon={faCheck} />
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-6 flex items-center gap-3 text-[#302720]/45">
                      <FontAwesomeIcon icon={faStore} />

                      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                        More destinations coming soon
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step-two"
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -30,
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                <div className="grid gap-14 lg:grid-cols-12">
                  <div className="lg:col-span-3">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#9a7444]">
                      02 — Choose your service
                    </p>

                    <div className="mt-10 rounded-[12px] border border-[#302720]/15 bg-[#f5eee4] p-6">
                      <p className="text-[9px] font-extrabold uppercase tracking-[0.23em] text-[#302720]/45">
                        Selected destination
                      </p>

                      <p className="mt-4 font-display text-2xl font-semibold leading-tight">
                        {selectedSalon?.name}
                      </p>

                      <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#302720]/50">
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          className="text-[#9a7444]"
                        />

                        {selectedSalon?.location}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-9">
                    <h2 className="font-display text-[clamp(4rem,8vw,9rem)] font-semibold leading-[0.67] tracking-[-0.08em]">
                      CHOOSE YOUR
                      <br />
                      <span className="italic text-[#9a7444]">
                        GLOW.
                      </span>
                    </h2>

                    <p className="mt-10 max-w-3xl font-serif text-2xl font-medium leading-[1.05] md:text-3xl">
                      Start with a category, then select the exact treatment
                      you want.
                    </p>

                    <div className="mt-14 overflow-hidden rounded-[12px] border border-[#302720]/15 bg-[#f5eee4]">
                      {categories.map((category) => {
                        const categoryOpen =
                          selectedCategory?.id === category.id;

                        return (
                          <div
                            key={category.id}
                            className="border-b border-[#302720]/12 last:border-b-0"
                          >
                            <button
                              type="button"
                              onClick={() => chooseCategory(category)}
                              className={`group flex w-full items-center gap-5 p-6 text-left transition md:p-7 ${
                                categoryOpen
                                  ? "bg-[#302720] text-[#f5eee4]"
                                  : "hover:bg-[#e4d8c7]/45"
                              }`}
                            >
                              <span
                                className={`w-10 shrink-0 font-display text-2xl md:w-14 md:text-3xl ${
                                  categoryOpen
                                    ? "text-[#dfcba9]"
                                    : "text-[#9a7444]"
                                }`}
                              >
                                {category.number}
                              </span>

                              <span
                                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition ${
                                  categoryOpen
                                    ? "border-[#dfcba9] bg-[#dfcba9] text-[#302720]"
                                    : "border-[#302720]/15 bg-[#eee5d8] text-[#9a7444] group-hover:bg-[#302720] group-hover:text-[#dfcba9]"
                                }`}
                              >
                                <FontAwesomeIcon icon={category.icon} />
                              </span>

                              <span className="flex-1">
                                <span className="block font-display text-3xl font-semibold leading-none md:text-4xl">
                                  {category.title}
                                </span>

                                <span
                                  className={`mt-2 block text-xs font-semibold ${
                                    categoryOpen
                                      ? "text-white/45"
                                      : "text-[#302720]/45"
                                  }`}
                                >
                                  {category.services.length} available
                                  services
                                </span>
                              </span>

                              <FontAwesomeIcon
                                icon={
                                  categoryOpen
                                    ? faArrowDown
                                    : faArrowRight
                                }
                                className={
                                  categoryOpen
                                    ? "text-[#dfcba9]"
                                    : "text-[#9a7444]"
                                }
                              />
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
                                  transition={{
                                    duration: 0.45,
                                  }}
                                  className="overflow-hidden bg-[#e4d8c7]"
                                >
                                  <div className="grid gap-8 p-6 md:grid-cols-12 md:p-8">
                                    <div className="md:col-span-4">
                                      <div className="overflow-hidden rounded-[8px] border border-[#302720]/15 bg-[#d9cbb8] p-2">
                                        <img
                                          src={category.image}
                                          alt={category.title}
                                          className="h-[250px] w-full object-cover transition duration-700 hover:scale-105"
                                        />
                                      </div>
                                    </div>

                                    <div className="md:col-span-8">
                                      <p className="mb-5 text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#76552f]">
                                        Select a service
                                      </p>

                                      <div className="grid gap-2 sm:grid-cols-2">
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
                                                className={`flex min-h-[65px] items-center justify-between rounded-[8px] border px-4 text-left transition ${
                                                  selected
                                                    ? "border-[#302720] bg-[#302720] text-[#f5eee4]"
                                                    : "border-[#302720]/12 bg-[#eee5d8] hover:border-[#9a7444]/50 hover:bg-[#f5eee4]"
                                                }`}
                                              >
                                                <div className="flex items-center gap-3">
                                                  <span
                                                    className={`font-display text-sm ${
                                                      selected
                                                        ? "text-[#dfcba9]"
                                                        : "text-[#9a7444]"
                                                    }`}
                                                  >
                                                    {String(index + 1).padStart(
                                                      2,
                                                      "0"
                                                    )}
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

            {currentStep === 3 && (
              <motion.div
                key="step-three"
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -30,
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                <div className="grid gap-14 lg:grid-cols-12">
                  <div className="lg:col-span-3">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#9a7444]">
                      03 — Date & time
                    </p>

                    <div className="mt-10 rounded-[12px] border border-[#302720]/15 bg-[#f5eee4] p-6">
                      <p className="text-[9px] font-extrabold uppercase tracking-[0.23em] text-[#302720]/45">
                        Your selection
                      </p>

                      <p className="mt-4 font-display text-2xl font-semibold leading-tight">
                        {selectedService}
                      </p>

                      <p className="mt-2 text-xs font-bold text-[#302720]/50">
                        {selectedSalon?.name}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-9">
                    <h2 className="font-display text-[clamp(4rem,8vw,9rem)] font-semibold leading-[0.67] tracking-[-0.08em]">
                      PICK YOUR
                      <br />
                      <span className="italic text-[#9a7444]">
                        MOMENT.
                      </span>
                    </h2>

                    <p className="mt-10 max-w-3xl font-serif text-2xl font-medium leading-[1.05] md:text-3xl">
                      Select the date and time that works best for your beauty
                      appointment.
                    </p>

                    <div className="mt-14 grid gap-10 md:grid-cols-2">
                      <div className="rounded-[12px] border border-[#302720]/15 bg-[#f5eee4] p-6 md:p-8">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#302720] text-[#dfcba9]">
                            <FontAwesomeIcon icon={faCalendarDays} />
                          </div>

                          <div>
                            <p className="text-[9px] font-extrabold uppercase tracking-[0.23em] text-[#9a7444]">
                              Choose
                            </p>

                            <p className="mt-1 text-sm font-bold">
                              Appointment date
                            </p>
                          </div>
                        </div>

                        <input
                          type="date"
                          value={selectedDate}
                          onChange={(event) =>
                            setSelectedDate(event.target.value)
                          }
                          min={new Date()
                            .toISOString()
                            .split("T")[0]}
                          className="mt-8 w-full rounded-[7px] border border-[#302720]/15 bg-[#eee5d8] px-5 py-5 text-sm font-bold outline-none transition focus:border-[#9a7444] focus:bg-[#f5eee4]"
                        />
                      </div>

                      <div className="rounded-[12px] border border-[#302720]/15 bg-[#f5eee4] p-6 md:p-8">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#302720] text-[#dfcba9]">
                            <FontAwesomeIcon icon={faClock} />
                          </div>

                          <div>
                            <p className="text-[9px] font-extrabold uppercase tracking-[0.23em] text-[#9a7444]">
                              Choose
                            </p>

                            <p className="mt-1 text-sm font-bold">
                              Appointment time
                            </p>
                          </div>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3">
                          {times.map((time) => {
                            const selected = selectedTime === time;

                            return (
                              <button
                                key={time}
                                type="button"
                                onClick={() => setSelectedTime(time)}
                                className={`rounded-[6px] border px-3 py-4 text-xs font-bold transition ${
                                  selected
                                    ? "border-[#302720] bg-[#302720] text-[#dfcba9]"
                                    : "border-[#302720]/12 bg-[#eee5d8] hover:border-[#9a7444]/50 hover:bg-[#dfcba9]/25"
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

            {currentStep === 4 && (
              <motion.div
                key="step-four"
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -30,
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                <div className="grid gap-14 lg:grid-cols-12">
                  <div className="lg:col-span-3">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#9a7444]">
                      04 — Your details
                    </p>

                    <div className="mt-10 rounded-[12px] border border-[#302720]/15 bg-[#f5eee4] p-6">
                      <p className="text-[9px] font-extrabold uppercase tracking-[0.23em] text-[#302720]/45">
                        Appointment summary
                      </p>

                      <p className="mt-4 font-display text-2xl font-semibold leading-tight">
                        {selectedService}
                      </p>

                      <div className="mt-5 space-y-3 text-xs font-bold text-[#302720]/55">
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon
                            icon={faStore}
                            className="text-[#9a7444]"
                          />
                          {selectedSalon?.name}
                        </div>

                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon
                            icon={faCalendarDays}
                            className="text-[#9a7444]"
                          />
                          {selectedDate}
                        </div>

                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon
                            icon={faClock}
                            className="text-[#9a7444]"
                          />
                          {selectedTime}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-9">
                    <h2 className="font-display text-[clamp(4rem,8vw,9rem)] font-semibold leading-[0.67] tracking-[-0.08em]">
                      MAKE IT
                      <br />
                      <span className="italic text-[#9a7444]">
                        YOURS.
                      </span>
                    </h2>

                    <p className="mt-10 max-w-3xl font-serif text-2xl font-medium leading-[1.05] md:text-3xl">
                      Leave your details so the salon can confirm your
                      appointment.
                    </p>

                    <div className="mt-14 rounded-[14px] border border-[#302720]/15 bg-[#f5eee4] p-6 md:p-10">
                      <div className="grid gap-8 md:grid-cols-2">
                        <div>
                          <label className="mb-3 block text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#76552f]">
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
                            className="w-full rounded-[7px] border border-[#302720]/15 bg-[#eee5d8] px-5 py-4 text-base font-semibold outline-none transition placeholder:text-[#302720]/30 focus:border-[#9a7444] focus:bg-white/40"
                          />
                        </div>

                        <div>
                          <label className="mb-3 block text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#76552f]">
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
                            className="w-full rounded-[7px] border border-[#302720]/15 bg-[#eee5d8] px-5 py-4 text-base font-semibold outline-none transition placeholder:text-[#302720]/30 focus:border-[#9a7444] focus:bg-white/40"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="mb-3 block text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#76552f]">
                            Notes · Optional
                          </label>

                          <textarea
                            rows="5"
                            value={customer.notes}
                            onChange={(event) =>
                              setCustomer({
                                ...customer,
                                notes: event.target.value,
                              })
                            }
                            placeholder="Anything the salon should know?"
                            className="w-full resize-none rounded-[7px] border border-[#302720]/15 bg-[#eee5d8] px-5 py-4 text-base font-semibold outline-none transition placeholder:text-[#302720]/30 focus:border-[#9a7444] focus:bg-white/40"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="border-t border-[#302720]/15 bg-[#dfcba9] px-5 py-7 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1750px] items-center justify-between gap-5">
          <button
            type="button"
            onClick={previousStep}
            disabled={currentStep === 1}
            className={`flex items-center gap-3 rounded-[7px] border px-5 py-4 text-[10px] font-extrabold uppercase tracking-[0.18em] transition ${
              currentStep === 1
                ? "cursor-not-allowed border-[#302720]/10 text-[#302720]/25"
                : "border-[#302720]/25 hover:bg-[#302720] hover:text-[#f5eee4]"
            }`}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Back
          </button>

          <div className="hidden text-center md:block">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#302720]/45">
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
            className={`group flex items-center gap-4 rounded-[7px] px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.18em] transition ${
              canContinue()
                ? "bg-[#302720] text-[#f5eee4] shadow-[0_10px_25px_rgba(48,39,32,0.16)] hover:-translate-y-1 hover:bg-[#76552f]"
                : "cursor-not-allowed bg-[#302720]/10 text-[#302720]/30"
            }`}
          >
            {currentStep === 4
              ? "Confirm Booking"
              : "Continue"}

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

      <section className="border-t border-white/10 bg-[#17120f] px-5 py-24 text-[#f5eee4] md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1750px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-[#dfcba9]"
                />

                <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#dfcba9]">
                  Your beauty destination
                </p>
              </div>

              <h2 className="mt-9 font-display text-[clamp(4rem,9vw,10rem)] font-semibold leading-[0.65] tracking-[-0.08em]">
                BEAUTY
                <br />
                <span className="italic text-[#dfcba9]">
                  AWAITS.
                </span>
              </h2>

              <p className="mt-10 max-w-2xl font-serif text-3xl leading-[1.05] text-white/60 md:text-4xl">
                Discover salons, explore services and make your next
                appointment through GLOW.
              </p>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Link
                to="/salons"
                className="group flex w-fit items-center gap-4 rounded-[7px] border border-[#dfcba9] px-7 py-5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#dfcba9] transition duration-500 hover:-translate-y-1 hover:bg-[#dfcba9] hover:text-[#302720]"
              >
                Explore salons

                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#17120f]/80 px-5 backdrop-blur-md"
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
              className="w-full max-w-2xl rounded-[14px] border border-[#dfcba9]/35 bg-[#eee5d8] p-7 text-[#302720] shadow-[0_30px_100px_rgba(0,0,0,0.3)] md:p-12"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#302720] text-[#dfcba9]">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-xl"
                />
              </div>

              <p className="mt-8 text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#9a7444]">
                Booking request received
              </p>

              <h2 className="mt-5 font-display text-6xl font-semibold leading-[0.72] tracking-[-0.06em] md:text-8xl">
                YOU'RE
                <br />
                <span className="italic text-[#9a7444]">
                  BOOKED.
                </span>
              </h2>

              <p className="mt-8 max-w-xl font-serif text-2xl leading-tight text-[#302720]/65">
                Your appointment request has been prepared for{" "}
                <strong>{selectedSalon?.name}</strong>.
              </p>

              <div className="mt-8 rounded-[9px] border border-[#302720]/12 bg-[#f5eee4] p-5">
                <div className="grid gap-5 sm:grid-cols-3">
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
                  className="flex items-center gap-3 rounded-[7px] bg-[#302720] px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#f5eee4] transition hover:bg-[#76552f]"
                >
                  New booking

                  <FontAwesomeIcon icon={faArrowRight} />
                </button>

                <Link
                  to="/services"
                  onClick={() => setSubmitted(false)}
                  className="flex items-center gap-3 rounded-[7px] border border-[#302720]/20 px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.18em] transition hover:bg-[#dfcba9]/40"
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