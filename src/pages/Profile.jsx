import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBell,
  faCalendarCheck,
  faCheck,
  faClock,
  faGear,
  faHeart,
  faLocationDot,
  faPen,
  faPhone,
  faRightFromBracket,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const upcomingBookings = [
  {
    id: 1,
    salon: "Luna Beauty Lounge",
    service: "Hair Styling",
    specialist: "Mariam Ali",
    date: "30 Sep 2026",
    time: "05:00 PM",
    location: "Al Ashar · Basra",
    status: "Confirmed",
  },
  {
    id: 2,
    salon: "Glow Beauty Studio",
    service: "Classic Manicure",
    specialist: "Noor Hassan",
    date: "04 Oct 2026",
    time: "04:30 PM",
    location: "Al Jubaila · Basra",
    status: "Pending",
  },
];

const pastBookings = [
  {
    id: 3,
    salon: "Velvet Beauty House",
    service: "Evening Makeup",
    date: "18 Sep 2026",
    time: "06:00 PM",
    rating: 5,
  },
  {
    id: 4,
    salon: "The Beauty Room",
    service: "Brows & Lashes",
    date: "09 Sep 2026",
    time: "03:30 PM",
    rating: 4,
  },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [editing, setEditing] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const [profile, setProfile] = useState({
    name: "Zahraa Ahmed",
    email: "zahraa@example.com",
    phone: "+964 7XX XXX XXXX",
  });

  useEffect(() => {
    document.title = "My Profile — GLOW";
  }, []);

  const handleChange = (event) => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-[#f7f1e6] text-[#302720]">
      <section className="border-b border-[#302720]/15 px-5 pb-14 pt-36 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-[1700px]">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-[#8a6a43]" />

                <span className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#8a6a43]">
                  My GLOW · Account
                </span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-display text-6xl font-semibold leading-[0.82] tracking-[-0.07em] sm:text-8xl lg:text-[9vw]"
              >
                MY PROFILE
              </motion.h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-[#302720]/60 sm:text-base">
                Manage your account, appointments, preferences and beauty
                journey with GLOW.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#302720] font-display text-2xl text-[#f7f1e6]">
                Z
              </div>

              <div>
                <p className="font-display text-2xl font-semibold">
                  {profile.name}
                </p>

                <p className="mt-1 text-xs text-[#302720]/50">
                  Client Account
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-[1700px]">
          <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
            <aside className="h-fit border border-[#302720]/15">
              <div className="border-b border-[#302720]/10 p-5">
                <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#302720]/40">
                  Account
                </p>
              </div>

              <div className="p-3">
                <ProfileNavButton
                  active={activeTab === "overview"}
                  onClick={() => setActiveTab("overview")}
                  icon={faUser}
                  label="Overview"
                />

                <ProfileNavButton
                  active={activeTab === "bookings"}
                  onClick={() => setActiveTab("bookings")}
                  icon={faCalendarCheck}
                  label="My Bookings"
                />

                <ProfileNavButton
                  active={activeTab === "favorites"}
                  onClick={() => setActiveTab("favorites")}
                  icon={faHeart}
                  label="Favorites"
                />

                <ProfileNavButton
                  active={activeTab === "settings"}
                  onClick={() => setActiveTab("settings")}
                  icon={faGear}
                  label="Settings"
                />

                <Link
                  to="/"
                  className="mt-3 flex items-center gap-3 border-t border-[#302720]/10 px-4 py-4 pt-5 text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#302720]/50 transition hover:text-[#8a6a43]"
                >
                  <FontAwesomeIcon icon={faRightFromBracket} />
                  Log Out
                </Link>
              </div>
            </aside>

            <div className="min-w-0">
              {activeTab === "overview" && (
                <Overview
                  profile={profile}
                  upcomingBookings={upcomingBookings}
                  notifications={notifications}
                />
              )}

              {activeTab === "bookings" && (
                <BookingsSection
                  upcomingBookings={upcomingBookings}
                  pastBookings={pastBookings}
                />
              )}

              {activeTab === "favorites" && <Favorites />}

              {activeTab === "settings" && (
                <Settings
                  profile={profile}
                  editing={editing}
                  setEditing={setEditing}
                  handleChange={handleChange}
                  notifications={notifications}
                  setNotifications={setNotifications}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const ProfileNavButton = ({ active, onClick, icon, label }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 px-4 py-4 text-left text-[9px] font-extrabold uppercase tracking-[0.15em] transition ${
        active
          ? "bg-[#302720] text-[#f7f1e6]"
          : "text-[#302720]/55 hover:bg-[#e9dcc8]/40 hover:text-[#302720]"
      }`}
    >
      <FontAwesomeIcon icon={icon} />
      {label}
    </button>
  );
};

const Overview = ({
  profile,
  upcomingBookings,
  notifications,
}) => {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard number="02" label="Upcoming Bookings" />
        <StatCard number="08" label="Completed Visits" />
        <StatCard number="05" label="Saved Salons" />
      </div>

      <div className="mt-10 grid gap-8 xl:grid-cols-[1.35fr_0.65fr]">
        <section className="border border-[#302720]/15">
          <div className="flex items-center justify-between border-b border-[#302720]/10 px-6 py-5">
            <div>
              <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#8a6a43]">
                Next appointment
              </span>

              <h2 className="mt-2 font-display text-2xl font-semibold">
                Upcoming
              </h2>
            </div>

            <Link
              to="/bookings"
              className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#8a6a43]"
            >
              Book New
            </Link>
          </div>

          <div className="divide-y divide-[#302720]/10">
            {upcomingBookings.map((booking) => (
              <BookingItem key={booking.id} booking={booking} />
            ))}
          </div>
        </section>

        <section className="border border-[#302720]/15 bg-[#e9dcc8]/35 p-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#302720] text-[#f7f1e6]">
            <FontAwesomeIcon icon={faBell} />
          </div>

          <span className="mt-8 block text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#8a6a43]">
            Reminder
          </span>

          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight">
            Your next appointment is coming up.
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#302720]/55">
            GLOW will keep you updated about appointment times, changes and
            important salon notifications.
          </p>

          <div className="mt-7 flex items-center gap-3 border-t border-[#302720]/10 pt-5 text-xs text-[#302720]/55">
            <FontAwesomeIcon icon={faCheck} className="text-[#8a6a43]" />
            Notifications are {notifications ? "enabled" : "disabled"}.
          </div>
        </section>
      </div>

      <section className="mt-8 border border-[#302720]/15 p-6 sm:p-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#8a6a43]">
              Personal information
            </span>

            <h2 className="mt-2 font-display text-3xl font-semibold">
              Your Details
            </h2>
          </div>

          <Link
            to="/profile"
            className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#8a6a43]"
          >
            Edit in Settings
          </Link>
        </div>

        <div className="mt-7 grid gap-5 sm:grid-cols-3">
          <InfoItem
            icon={faUser}
            label="Full Name"
            value={profile.name}
          />

          <InfoItem
            icon={faPhone}
            label="Phone"
            value={profile.phone}
          />

          <InfoItem
            icon={faLocationDot}
            label="Location"
            value="Basra · Iraq"
          />
        </div>
      </section>
    </div>
  );
};

const BookingsSection = ({ upcomingBookings, pastBookings }) => {
  return (
    <div>
      <SectionHeading
        eyebrow="Appointments"
        title="My Bookings"
        description="Track your upcoming appointments and revisit your beauty history."
      />

      <div className="mt-10">
        <SectionLabel text="Upcoming" />

        <div className="mt-4 divide-y divide-[#302720]/10 border border-[#302720]/15">
          {upcomingBookings.map((booking) => (
            <BookingItem key={booking.id} booking={booking} />
          ))}
        </div>
      </div>

      <div className="mt-12">
        <SectionLabel text="Past Appointments" />

        <div className="mt-4 divide-y divide-[#302720]/10 border border-[#302720]/15">
          {pastBookings.map((booking) => (
            <div
              key={booking.id}
              className="flex flex-col justify-between gap-5 p-6 sm:flex-row sm:items-center"
            >
              <div>
                <h3 className="font-display text-xl font-semibold">
                  {booking.service}
                </h3>

                <p className="mt-1 text-sm text-[#302720]/55">
                  {booking.salon}
                </p>

                <p className="mt-2 text-xs text-[#302720]/40">
                  {booking.date} · {booking.time}
                </p>
              </div>

              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FontAwesomeIcon
                    key={star}
                    icon={faStar}
                    className={`text-xs ${
                      star <= booking.rating
                        ? "text-[#8a6a43]"
                        : "text-[#302720]/15"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Favorites = () => {
  const favorites = [
    {
      name: "Luna Beauty Lounge",
      location: "Al Ashar · Basra",
      rating: "4.9",
      image: "/images/salon-export.jpg",
    },
    {
      name: "Glow Beauty Studio",
      location: "Al Jubaila · Basra",
      rating: "4.8",
      image: "/images/glow-space.jpg.jpg",
    },
  ];

  return (
    <div>
      <SectionHeading
        eyebrow="Saved spaces"
        title="Favorites"
        description="Your saved salons are kept here so your next appointment is always close."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {favorites.map((salon) => (
          <Link
            key={salon.name}
            to="/salons"
            className="group border border-[#302720]/15 p-2"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[#e9dcc8]">
              <img
                src={salon.image}
                alt={salon.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f1e6] text-[#8a6a43]">
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-semibold">
                    {salon.name}
                  </h3>

                  <p className="mt-2 text-xs text-[#302720]/50">
                    {salon.location}
                  </p>
                </div>

                <span className="flex items-center gap-1 text-xs font-bold">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-[#8a6a43]"
                  />
                  {salon.rating}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const Settings = ({
  profile,
  editing,
  setEditing,
  handleChange,
  notifications,
  setNotifications,
}) => {
  return (
    <div>
      <SectionHeading
        eyebrow="Account settings"
        title="Settings"
        description="Keep your GLOW profile information and preferences up to date."
      />

      <section className="mt-10 border border-[#302720]/15 p-6 sm:p-8">
        <div className="flex items-center justify-between border-b border-[#302720]/10 pb-5">
          <div>
            <SectionLabel text="Personal information" />
            <h3 className="mt-2 font-display text-2xl font-semibold">
              Profile Details
            </h3>
          </div>

          <button
            type="button"
            onClick={() => setEditing(!editing)}
            className="flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#8a6a43]"
          >
            <FontAwesomeIcon icon={faPen} />
            {editing ? "Cancel" : "Edit"}
          </button>
        </div>

        <div className="mt-7 grid gap-6 md:grid-cols-2">
          <SettingInput
            label="Full Name"
            name="name"
            value={profile.name}
            onChange={handleChange}
            disabled={!editing}
          />

          <SettingInput
            label="Email Address"
            name="email"
            value={profile.email}
            onChange={handleChange}
            disabled={!editing}
          />

          <SettingInput
            label="Phone Number"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            disabled={!editing}
          />
        </div>

        {editing && (
          <button
            type="button"
            onClick={() => setEditing(false)}
            className="mt-7 bg-[#302720] px-7 py-4 text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#f7f1e6] transition hover:bg-[#8a6a43]"
          >
            Save Changes
          </button>
        )}
      </section>

      <section className="mt-8 border border-[#302720]/15 p-6 sm:p-8">
        <SectionLabel text="Notifications" />

        <div className="mt-5 flex items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-semibold">
              Appointment reminders
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#302720]/55">
              Receive reminders before your appointments and updates if your
              booking changes.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setNotifications(!notifications)}
            className={`relative h-7 w-12 shrink-0 rounded-full transition ${
              notifications ? "bg-[#302720]" : "bg-[#302720]/20"
            }`}
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-[#f7f1e6] transition ${
                notifications ? "left-6" : "left-1"
              }`}
            />
          </button>
        </div>
      </section>

      <section className="mt-8 border border-[#302720]/15 p-6 sm:p-8">
        <SectionLabel text="Account" />

        <div className="mt-5 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-2xl font-semibold">
              Sign out
            </h3>

            <p className="mt-2 text-sm text-[#302720]/55">
              Sign out from your GLOW account on this device.
            </p>
          </div>

          <Link
            to="/"
            className="flex w-fit items-center gap-3 border border-[#302720]/15 px-6 py-4 text-[9px] font-extrabold uppercase tracking-[0.16em] transition hover:border-[#302720] hover:bg-[#302720] hover:text-[#f7f1e6]"
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
            Log Out
          </Link>
        </div>
      </section>
    </div>
  );
};

const BookingItem = ({ booking }) => {
  return (
    <div className="flex flex-col justify-between gap-6 p-6 sm:flex-row sm:items-center">
      <div className="flex gap-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-[#302720]/10 bg-[#e9dcc8]/40">
          <FontAwesomeIcon
            icon={faCalendarCheck}
            className="text-[#8a6a43]"
          />
        </div>

        <div>
          <h3 className="font-display text-2xl font-semibold">
            {booking.service}
          </h3>

          <p className="mt-1 text-sm text-[#302720]/55">
            {booking.salon}
          </p>

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-[#302720]/45">
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCalendarCheck} />
              {booking.date}
            </span>

            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faClock} />
              {booking.time}
            </span>

            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} />
              {booking.location}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-5 sm:flex-col sm:items-end">
        <span
          className={`border px-3 py-2 text-[8px] font-extrabold uppercase tracking-[0.13em] ${
            booking.status === "Confirmed"
              ? "border-[#8a6a43]/30 bg-[#e9dcc8]/40 text-[#8a6a43]"
              : "border-[#302720]/15 text-[#302720]/50"
          }`}
        >
          {booking.status}
        </span>

        <Link
          to="/bookings"
          className="flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#8a6a43]"
        >
          Details
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
};

const StatCard = ({ number, label }) => {
  return (
    <div className="border border-[#302720]/15 p-6">
      <span className="font-display text-5xl font-semibold text-[#8a6a43]">
        {number}
      </span>

      <p className="mt-3 text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#302720]/50">
        {label}
      </p>
    </div>
  );
};

const InfoItem = ({ icon, label, value }) => {
  return (
    <div className="border-t border-[#302720]/10 pt-4">
      <div className="flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#302720]/40">
        <FontAwesomeIcon icon={icon} />
        {label}
      </div>

      <p className="mt-3 text-sm">{value}</p>
    </div>
  );
};

const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <div>
      <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#8a6a43]">
        {eyebrow}
      </span>

      <h2 className="mt-3 font-display text-5xl font-semibold leading-[0.9] tracking-[-0.05em] sm:text-6xl">
        {title}
      </h2>

      <p className="mt-5 max-w-2xl text-sm leading-6 text-[#302720]/55">
        {description}
      </p>
    </div>
  );
};

const SectionLabel = ({ text }) => {
  return (
    <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#8a6a43]">
      {text}
    </span>
  );
};

const SettingInput = ({
  label,
  name,
  value,
  onChange,
  disabled,
}) => {
  return (
    <div>
      <label className="mb-2 block text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#302720]/50">
        {label}
      </label>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`h-14 w-full border px-4 text-sm outline-none transition ${
          disabled
            ? "border-[#302720]/10 bg-[#e9dcc8]/20 text-[#302720]/55"
            : "border-[#8a6a43] bg-transparent focus:border-[#302720]"
        }`}
      />
    </div>
  );
};

export default Profile;