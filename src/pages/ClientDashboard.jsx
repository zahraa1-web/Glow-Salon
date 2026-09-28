import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faArrowRight,
  faHeart,
  faClock,
  faLocationDot,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

function ClientDashboard() {
  return (
    <main className="glow-page min-h-screen px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
      <div className="mx-auto max-w-[1500px]">
        <section className="rounded-[20px] border border-[#302720]/10 bg-[#e1d3c0] p-7 sm:p-10 lg:p-12">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#76552f]">
                Client dashboard
              </div>

              <h1 className="mt-3 font-display text-[48px] leading-none tracking-[-0.05em] text-[#302720] sm:text-[60px]">
                Welcome back.
              </h1>

              <p className="mt-4 max-w-[600px] text-[14px] leading-7 text-[#302720]/50">
                Manage your appointments, discover salons and keep your beauty
                routine organised.
              </p>
            </div>

            <Link
              to="/salons"
              className="inline-flex h-[52px] items-center justify-center gap-3 rounded-[10px] border border-[#76552f]/35 bg-[#9a7444] px-6 text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#fffaf2] shadow-[0_8px_25px_rgba(118,85,47,0.15)] transition-all hover:-translate-y-0.5 hover:bg-[#76552f]"
            >
              Explore salons
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </section>

        <section className="mt-7 grid gap-5 md:grid-cols-3">
          {[
            ["Upcoming", "1", faCalendarCheck],
            ["Completed", "8", faClock],
            ["Favourites", "4", faHeart],
          ].map(([label, value, icon]) => (
            <div
              key={label}
              className="rounded-[15px] border border-[#302720]/10 bg-[#f5eee4] p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dfcba9]/55 text-[#9a7444]">
                <FontAwesomeIcon icon={icon} />
              </div>

              <div className="mt-5 font-display text-[38px] text-[#302720]">
                {value}
              </div>

              <div className="text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#302720]/40">
                {label}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-9">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#9a7444]">
                Your next visit
              </div>

              <h2 className="mt-2 font-display text-[36px] text-[#302720]">
                Upcoming appointment
              </h2>
            </div>

            <Link
              to="/bookings"
              className="hidden text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#9a7444] sm:block"
            >
              View bookings
            </Link>
          </div>

          <div className="grid overflow-hidden rounded-[17px] border border-[#302720]/10 bg-[#f5eee4] lg:grid-cols-[0.7fr_1fr]">
            <div className="relative min-h-[260px]">
              <img
                src="/images/salon-export.jpg"
                alt="Luna Beauty Lounge"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="p-7 sm:p-9">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#dfcba9]/55 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.1em] text-[#76552f]">
                  Confirmed
                </span>

                <span className="text-[10px] font-bold text-[#302720]/35">
                  12 October 2026
                </span>
              </div>

              <h3 className="mt-5 font-display text-[34px] text-[#302720]">
                Luna Beauty Lounge
              </h3>

              <div className="mt-3 flex items-center gap-2 text-[12px] text-[#302720]/50">
                <FontAwesomeIcon icon={faLocationDot} />
                Al Ashar · Basra
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[10px] bg-[#eee5d8] p-4">
                  <div className="text-[9px] font-extrabold uppercase tracking-[0.1em] text-[#302720]/35">
                    Service
                  </div>
                  <div className="mt-1 text-[12px] font-bold">
                    Signature Makeup
                  </div>
                </div>

                <div className="rounded-[10px] bg-[#eee5d8] p-4">
                  <div className="text-[9px] font-extrabold uppercase tracking-[0.1em] text-[#302720]/35">
                    Time
                  </div>
                  <div className="mt-1 text-[12px] font-bold">
                    17:00
                  </div>
                </div>
              </div>

              <Link
                to="/bookings"
                className="mt-6 inline-flex h-[48px] items-center gap-3 rounded-[9px] border border-[#76552f]/25 bg-[#dfcba9]/55 px-5 text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#76552f] transition-colors hover:bg-[#dfcba9]"
              >
                Manage booking
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-9 pb-16">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#9a7444]">
                Your collection
              </div>

              <h2 className="mt-2 font-display text-[36px] text-[#302720]">
                Favourite salons
              </h2>
            </div>

            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dfcba9] text-[#76552f]">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {["Luna Beauty Lounge", "Glow Beauty Studio"].map(
              (name, index) => (
                <div
                  key={name}
                  className="flex items-center gap-4 rounded-[14px] border border-[#302720]/10 bg-[#f5eee4] p-4"
                >
                  <img
                    src={
                      index === 0
                        ? "/images/salon-export.jpg"
                        : "/images/glow-space.jpg.jpg"
                    }
                    alt={name}
                    className="h-20 w-20 rounded-[10px] object-cover"
                  />

                  <div>
                    <h3 className="font-display text-[20px] text-[#302720]">
                      {name}
                    </h3>

                    <div className="mt-1 text-[10px] text-[#302720]/40">
                      Basra · Beauty salon
                    </div>

                    <Link
                      to="/salons"
                      className="mt-2 inline-flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.08em] text-[#9a7444]"
                    >
                      View salon
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default ClientDashboard;