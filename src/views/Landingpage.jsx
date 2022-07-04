import MainMenu from "../components/MainMenu";
import BureauHero from "../components/BureauHero";
import shopifyexperts from "../assets/shopifyeksperter.png";
import Button from "../components/Button";
import Footer from "../components/Footer";

export default function Landingpage() {
  return (
    <div className="pl-20 pr-20">
      <header>
        <MainMenu />
        <BureauHero
          text="SHOPIFY EXPERTS"
          headline="Et dediceret e-commerece-bureau"
          image={shopifyexperts}
        />
        <Button />
      </header>
      <main></main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
