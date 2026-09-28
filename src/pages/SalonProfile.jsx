import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCalendarCheck,
  faLocationDot,
  faStar,
  faClock,
  faPhone,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const salon = {
  name: "Luna Beauty Lounge",
  location: "Al Ashar · Basra",
  rating: "4.9",
  reviews: 128,
  image: "/images/salon-export.jpg",
  description:
    "A refined beauty destination in Basra where modern beauty services meet a calm, elegant atmosphere.",
  services: [
    { name: "Signature Makeup", price: "$45", duration: "60 min" },
    { name: "Hair Styling", price: "$35", duration: "60 min" },
    { name: "Bridal Makeup", price: "$90", duration: "120 min" },
    { name: "Luxury Manicure", price: "$25", duration: "45 min" },
    { name: "Brow Design", price: "$15", duration: "30 min" },
    { name: "Relaxing Massage", price: "$40", duration: "60 min" },
  ],
};

function SalonProfile() {
  const { slug } = useParams();

  return (
    <main className="glow-page">
      <section className="mx-auto max-w-[1580px] px-5 pb-10 pt-8 sm:px-8 lg:px-12 lg:pb-16 lg:pt-12">
        <Link
          to="/salons"
          className="inline-flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#76552f] transition-colors hover:text-[#9a7444]"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-[10px]" />
          Back to salons
        </Link>

        <div className="mt-7 grid overflow-hidden rounded-[20px] border border-[#302720]/10 bg-[#f5eee4] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[430px] lg:min-h-[600px]">
            <img
              src={salon.image}
              alt={salon.name}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#17120f]/65 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 sm:bottom-10 sm:left-10">
              <div className="mb-3 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#dfcba9]">
                <FontAwesomeIcon icon={faLocationDot} />
                {salon.location}
              </div>

              <h1 className="font-display text-[46px] leading-[0.98] tracking-[-0.05em] text-[#f5eee4] sm:text-[62px]">
                {salon.name}
              </h1>
            </div>
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full bg-[#dfcba9]/35 px-4 py-2">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-[10px] text-[#9a7444]"
                />
                <span className="text-[12px] font-extrabold text-[#302720]">
                  {salon.rating}
                </span>
              </div>

              <span className="text-[11px] font-semibold text-[#302720]/45">
                {salon.reviews} reviews
              </span>
            </div>

            <p className="mt-7 text-[15px] leading-8 text-[#302720]/60">
              {salon.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-[12px] border border-[#302720]/10 bg-[#eee5d8] p-4">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-[#9a7444]"
                />
                <div className="mt-3 text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#302720]/45">
                  Hours
                </div>
                <div className="mt-1 text-[13px] font-bold">
                  10:00 — 21:00
                </div>
              </div>

              <div className="rounded-[12px] border border-[#302720]/10 bg-[#eee5d8] p-4">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-[#9a7444]"
                />
                <div className="mt-3 text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#302720]/45">
                  Location
                </div>
                <div className="mt-1 text-[13px] font-bold">
                  Al Ashar
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/bookings"
                className="inline-flex h-[54px] items-center justify-center gap-3 rounded-[10px] border border-[#76552f]/35 bg-[#9a7444] px-7 text-[11px] font-extrabold uppercase tracking-[0.11em] text-[#fffaf2] shadow-[0_8px_25px_rgba(118,85,47,0.16)] transition-all hover:-translate-y-0.5 hover:bg-[#76552f]"
              >
                Book an appointment
                <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
              </Link>

              <button
                type="button"
                className="inline-flex h-[54px] items-center justify-center gap-3 rounded-[10px] border border-[#76552f]/25 bg-[#dfcba9]/55 px-7 text-[11px] font-extrabold uppercase tracking-[0.11em] text-[#76552f] transition-all hover:bg-[#dfcba9]"
              >
                <FontAwesomeIcon icon={faPhone} className="text-[10px]" />
                Contact salon
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1580px] px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mb-8">
          <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#9a7444]">
            Available treatments
          </div>
          <h2 className="mt-2 font-display text-[40px] tracking-[-0.045em] text-[#302720]">
            Choose your service
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {salon.services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-[14px] border border-[#302720]/10 bg-[#f5eee4] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(48,39,32,0.1)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-[24px] text-[#302720]">
                    {service.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-[#302720]/45">
                    <FontAwesomeIcon icon={faClock} />
                    {service.duration}
                  </div>
                </div>

                <div className="font-display text-[25px] text-[#9a7444]">
                  {service.price}
                </div>
              </div>

              <Link
                to="/bookings"
                className="mt-6 flex h-[45px] items-center justify-center gap-2 rounded-[9px] border border-[#76552f]/25 bg-[#dfcba9]/50 text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#76552f] transition-colors hover:bg-[#dfcba9]"
              >
                <FontAwesomeIcon icon={faCalendarCheck} />
                Select service
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default SalonProfile;