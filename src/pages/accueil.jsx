import Monheader from "../components/header/Header";
import MyPresentation from "../components/presentation/Presentation";
import MyFooter from "../components/footer/Footer";
import Myslide from "../components/slider/Slider";

export default function Accueil() {
  return (
    <main>
      <Monheader />
      <Myslide />
      <MyPresentation />
      <MyFooter />
    </main>
  );
}
