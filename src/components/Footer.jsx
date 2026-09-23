import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowUpRightFromSquare,
  faLocationDot,
  faPhone,
  faCalendarDays,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#17120f] text-[#faf6ef]">
      <div className="mx-auto max-w-[1750px] px-5 md:px-10 lg:px-16">
        <div className="border-b border-[#dfcba9]/20 py-16 md:py-20">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-[#dfcba9]">
                GLOW · The Beauty Gazette
              </p>

              <h2 className="mt-7 font-display text-[clamp(5.5rem,15vw,16rem)] font-semibold leading-[0.58] tracking-[-0.1em]">
                GLOW
              </h2>
            </div>

            <p className="max-w-xl font-serif text-3xl font-medium leading-[1.05] text-white/65 md:text-4xl">
              Beauty discovery,
              <br />

              <span className="italic text-[#dfcba9]">
                beautifully connected.
              </span>
            </p>
          </div>
        </div>

        <div className="grid border-b border-[#dfcba9]/20 lg:grid-cols-12">
          <div className="border-b border-[#dfcba9]/20 py-14 lg:col-span-7 lg:border-b-0 lg:border-r lg:pr-16">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#dfcba9]">
              Start your GLOW journey
            </p>

            <h3 className="mt-8 max-w-4xl font-display text-[clamp(3.2rem,6.5vw,7.5rem)] font-semibold leading-[0.7] tracking-[-0.07em]">
              FIND A PLACE
              <br />

              <span className="italic text-[#dfcba9]">
                THAT FEELS LIKE YOU.
              </span>
            </h3>

            <Link
              to="/bookings"
              className="group mt-11 inline-flex items-center gap-4 border-2 border-[#dfcba9] bg-[#dfcba9] px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#302720] transition hover:bg-transparent hover:text-[#dfcba9]"
            >
              <FontAwesomeIcon icon={faCalendarDays} />

              Begin your booking

              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:col-span-5">
            <div className="border-b border-[#dfcba9]/20 p-8 sm:border-r lg:border-b-0 lg:p-10">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#dfcba9]">
                Explore
              </p>

              <div className="mt-7 flex flex-col gap-4">
                <Link
                  to="/"
                  className="text-base font-semibold text-white/65 transition hover:text-[#dfcba9]"
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className="text-base font-semibold text-white/65 transition hover:text-[#dfcba9]"
                >
                  About Us
                </Link>

                <Link
                  to="/services"
                  className="text-base font-semibold text-white/65 transition hover:text-[#dfcba9]"
                >
                  Salons
                </Link>

                <Link
                  to="/bookings"
                  className="text-base font-semibold text-white/65 transition hover:text-[#dfcba9]"
                >
                  Bookings
                </Link>

                <Link
                  to="/profile"
                  className="text-base font-semibold text-white/65 transition hover:text-[#dfcba9]"
                >
                  Profile
                </Link>
              </div>
            </div>

            <div className="p-8 lg:p-10">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#dfcba9]">
                Contact
              </p>

              <div className="mt-7 space-y-6">
                <div className="flex items-start gap-4">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="mt-1 text-lg text-[#dfcba9]"
                  />

                  <div>
                    <p className="text-base font-semibold">
                      Basra · Iraq
                    </p>

                    <p className="mt-1 text-xs text-white/40">
                      Beauty destinations across Basra
                    </p>
                  </div>
                </div>

                <a
                  href="tel:07857804353"
                  className="flex items-center gap-4 text-base font-semibold text-white/65 transition hover:text-[#dfcba9]"
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-[#dfcba9]"
                  />

                  07857804353
                </a>

                <a
                  href="https://wa.me/9647857804353"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-base font-semibold text-white/65 transition hover:text-[#dfcba9]"
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="text-lg text-[#dfcba9]"
                  />

                  WhatsApp

                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-[10px]"
                  />
                </a>

                <a
                  href="#"
                  className="flex items-center gap-4 text-base font-semibold text-white/65 transition hover:text-[#dfcba9]"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-lg text-[#dfcba9]"
                  />

                  Instagram

                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-[10px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-7 py-8 md:flex-row md:items-center">
          <div>
            <p className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-white/35">
              © 2026 GLOW
            </p>

            <p className="mt-2 text-[9px] font-extrabold uppercase tracking-[0.25em] text-white/25">
              Beauty · Art · Individuality
            </p>
          </div>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group flex items-center gap-3 self-start border border-white/20 px-5 py-3 text-[9px] font-extrabold uppercase tracking-[0.2em] transition hover:border-[#dfcba9] hover:text-[#dfcba9] md:self-auto"
          >
            Back to top

            <FontAwesomeIcon
              icon={faArrowUp}
              className="transition group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;