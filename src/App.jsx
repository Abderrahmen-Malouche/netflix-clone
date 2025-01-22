
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <div className="bg-black">
      <Header/>
      <main className="">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
