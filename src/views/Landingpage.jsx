import MainMenu from "../components/MainMenu";
import Button from "../components/Button";
import BureauHero from "../components/BureauHero";
import Description from "../components/Description";
import ArticleVariantOne from "../components/ArticleVariantOne";
import ArticleVariantTwo from "../components/ArticleVariantTwo";
import Carousel from "../components/carousel";
import Footer from "../components/Footer";
import workculturePath from "../assets/arbejdskultur.png";
import { Swiper, SwiperSlide } from "swiper/react";

import shopifyExpertsPath from "../assets/shopifyeksperter.png";
import articleImagePath from "../assets/webudvikling.png";
import articleTwoImagePath from "../assets/webudviklingshopify.png";
import kirananImage from "../assets/Kiranan.png";

export default function Landingpage() {
  return (
    <div className="pl-20 pr-20">
      <header>
        <div className="flex justify-center align-middle pt-5">
          <MainMenu />
          <Button text="Hent e-bog" />
        </div>
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
        <ArticleVariantOne
          headline="Webdesign"
          text="Vi skaber mindeværdige brugeroplevelser og øget salg med unikt webdesign"
          imagePath={articleImagePath}
        />
        <ArticleVariantTwo
          imagePath={articleTwoImagePath}
          headline="Webudvikling i Shopify"
          text="Vi er certificerede Shopify eksperter og udvikler mindeværdige e-commerce løsninger"
        />

        <section className="flex justify-center flex-col pt-36">
          <h1 className="font-semibold text-4xl pt-10 pb-10 text-center">
            Arbejsdkulturen hos Grafikr
          </h1>
          <img src={workculturePath} alt="Arbejdskulturen" className="pb-20" />
        </section>

        {/*Mød dine nye kollegaer*/}
        <div className="text-center ">
          <h1 className="font-semibold text-4xl pb-10">
            Mød dine (Måske) nye kollegaer
          </h1>
          <p className="text-center text-4xl font-light tracking-widest pb-6">
            <span
              className="bg-{{kirananImage}}"
              style={{ backgroundImage: kirananImage }}
            >
              Kiranan,
            </span>
            <img
              className="hover:visible"
              src={kirananImage}
              alt="Picture of Kiranan"
            />
            Erik, Anders, Lasse, Pernille, Magnus,
          </p>
          <p className="text-center text-4xl font-extralight tracking-widest">
            Rasmus, Christian, Tobias, Tor, Thomas
          </p>
        </div>
        {/*Brand Carousel*/}
        <Carousel />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
