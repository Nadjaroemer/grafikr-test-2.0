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
        <div className="text-center ">
          <h1 className="font-semibold text-4xl pb-10">
            Mød dine (Måske) nye kollegaer
          </h1>
          <p className="text-center text-4xl font-extralight tracking-widest pb-6">
            Kiranan, Erik, Anders, Lasse, Pernille, Magnus,
          </p>
          <p className="text-center text-4xl font-extralight tracking-widest">
            Rasmus, Christian, Tobias, Tor, Thomas
          </p>
        </div>
        <Carousel />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
