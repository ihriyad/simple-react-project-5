import "./App.css";
import Navbar from "./components/daisynav/navbar";

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <ul className="flex space-x-2">
          <li>Home</li>
          <li>Service</li>
          <li>Login</li>
        </ul> */}
      </header>
      <main>
        <h2 className="text-3xl text-center">Get Started</h2>
      </main>
    </>
  );
}

export default App;
