import Footer from "./components/Footer";
import Header from "./components/header";
import Serv from "./components/Serv";
import { BackgroundLines } from "./components/ui/background-lines";

export default function Home() {
  return (
    <div >
      <Header/>
      <BackgroundLines className="" >
      <h1 className="text-5xl sm:text-7xl font-bold text-center mt-40 z-50 text-[rgb(94,236,255)]">
  Welcome to MetaSynk
</h1>

        <h1 className="text-5xl sm:text-7xl font-bold text-center mt-10 z-50">
          Software Development Company</h1>
      </BackgroundLines>
      <Serv/>
      <Footer/>
    </div>
  );
}
