import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";

function ComingSoon({ title }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#faf6ef] px-6 pt-32">
      <div className="text-center">
        <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#a78350]">
          GLOW Beauty Studio
        </span>

        <h1 className="mt-10 font-display text-[clamp(6rem,13vw,14rem)] font-medium leading-[0.65] tracking-[-0.09em]">
          {title}
        </h1>

        <p className="mx-auto mt-10 max-w-lg font-serif text-2xl leading-tight text-[#302720]/55">
          Something beautiful is being prepared for you.
        </p>
      </div>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/services"
          element={<ComingSoon title="SERVICES" />}
        />
        <Route
          path="/bookings"
          element={<ComingSoon title="BOOKINGS" />}
        />
        <Route
          path="/profile"
          element={<ComingSoon title="PROFILE" />}
        />
        <Route
          path="/login"
          element={<ComingSoon title="LOGIN" />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;