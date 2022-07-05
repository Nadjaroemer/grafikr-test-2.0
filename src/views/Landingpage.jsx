import MainMenu from "../components/MainMenu";
import Button from "../components/Button";
import BureauHero from "../components/BureauHero";
import shopifyexperts from "../assets/shopifyeksperter.png";
import Description from "../components/Description";
import Carousel from "../components/carousel";
import Footer from "../components/Footer";

import shopifyExpertsPath from "../assets/shopifyeksperter.png";

export default function Landingpage() {
  return (
    <div className="pl-20 pr-20">
      <header>
        <MainMenu />
        <Button />
      </header>
      <main>
        <BureauHero
          text="SHOPIFY EXPERTS"
          headline="Et dediceret e-commerece-bureau"
          imagePath={shopifyExpertsPath}
        />
        <Description
          headline="Kompetencer"
          text="Ved at kombinere analyse, strategi, kreativitet, design og udvikling, skaber vi positiv gennemslagskraft for ambitiøse brands, som ønsker at opnå målbar afkast."
        />
        <BureauHero
          headline="Arbejsdkulturen hos Grafikr"
          image={shopifyexperts}
        />
        <Description
          headline="Mød dine (Måske) nye kollegaer"
          text="Kiranan, Erik, Anders, Lasse, Pernille, Magnus, Rasmus, Christion, Tobias, Tor, Thomas"
        />
        <Carousel />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
