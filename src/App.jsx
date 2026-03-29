import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/daisynav/navbar";
import MyNavbar from "./components/Navbar/MyNavbar";
import PricingOptions from "./components/pricing/PricingOptions";

const pricingPromise = async () => {
  const res = await fetch("pricingData.json");
  return res.json();
};
function App() {
  return (
    <>
      <header>
        <MyNavbar></MyNavbar>
      </header>
      <main>
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-60">
              <span className="loading loading-spinner text-accent"></span>
            </div>
          }
        >
          <PricingOptions pricingPromise={pricingPromise()}></PricingOptions>
        </Suspense>
      </main>
    </>
  );
}

export default App;
