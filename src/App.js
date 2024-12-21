import "./index.css";

// COMPONENT
import Banner from "./components/Banner";
import EventCard from "./components/EventCard";
import AboutHimtiSemwork from "./components/AboutHIMTI";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="Dashboard">
        <Banner />

      <div className="space-y-16 bg-[#808AE7] py-10 pt-16 pb-32 z-30 relative">
        <EventCard />
      </div>

        <AboutHimtiSemwork />
        <ContactUs />
        <Footer />
    </div>
  );
}
