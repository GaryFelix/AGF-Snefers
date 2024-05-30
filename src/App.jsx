import {
  CustomerReviews,
  HeroSection,
  Products,
  Services,
  SuperQuality,
  Offers,
  Subscribe,
  Footer,
} from "./sections";
import Nav from "./Components/Nav";
import Loader from "./Components/Loader";
import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <main className="relative">
          <Nav />
          <section className="xl:padding-l wide:padding-r padding-b">
            <HeroSection />
          </section>
          <section className="padding">
            <Products />
          </section>
          <section className="padding">
            <SuperQuality />
          </section>
          <section className="padding-x py-10">
            <Services />
          </section>
          <section className="padding">
            <Offers />
          </section>
          <section className="bg-[#4aa9ba38] padding">
            <CustomerReviews />
          </section>
          <section className="padding-x sm:py-32 py-16 w-full">
            <Subscribe />
          </section>
          <section className="padding bg-black padding-x padding-t pb-8">
            <Footer />
          </section>
        </main>
      )}
    </div>
  );
};

export default App;
