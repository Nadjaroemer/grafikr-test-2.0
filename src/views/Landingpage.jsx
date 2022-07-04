import MainMenu from "../components/MainMenu";
import Button from "../components/Button";
import BureauHero from "../components/BureauHero";
import shopifyexperts from "../assets/shopifyeksperter.png";
import Description from "../components/Description";

import Footer from "../components/Footer";

export default function Landingpage() {
  return (
    <div className="pl-20 pr-20">
      <header>
        <MainMenu />
        <Button />
        <BureauHero
          text="SHOPIFY EXPERTS"
          headline="Et dediceret e-commerece-bureau"
          image={shopifyexperts}
        />
        <Description
          headline="Kompetencer"
          text="Ved at kombinere analyse, strategi, kreativitet, design og udvikling, skaber vi positiv gennemslagskraft for ambitiøse brands, som ønsker at opnå målbar afkast."
        />
      </header>
      <main></main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
