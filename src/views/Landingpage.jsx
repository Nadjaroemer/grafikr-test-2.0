import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import MainMenu from "../components/MainMenu";
import Button from "../components/Button";
import BureauHero from "../components/BureauHero";
import Description from "../components/Description";
import ArticleVariantOne from "../components/ArticleVariantOne";
import ArticleVariantTwo from "../components/ArticleVariantTwo";
import Footer from "../components/Footer";
import workculturePath from "../assets/arbejdskultur.png";

import shopifyExpertsPath from "../assets/shopifyeksperter.png";
import articleImagePath from "../assets/webudvikling.png";
import articleTwoImagePath from "../assets/webudviklingshopify.png";

export default function Landingpage() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isTabletOrMobile) {
      setIsMobileMenuOpen(false);
    }
  }, [isTabletOrMobile]);

  return (
    <>
      {isMobileMenuOpen ? (
        <div
          style={{
            height: "100vh",
            width: "30vw",
            backgroundColor: "white",
            position: "absolute",
          }}
        >
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      ) : undefined}
      <div className="pl-5 pr-5 lg:pl-20 lg:pr-20 w-screen mx-auto overscroll-none">
        <header>
          {isTabletOrMobile ? (
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          ) : (
            <div className="flex justify-center align-middle pt-5">
              <MainMenu />
              <Button text="Hent e-bog" />
            </div>
          )}
        </header>
        <main>
          <BureauHero
            text="SHOPIFY EXPERTS"
            headline="Et dediceret e-commerce-bureau"
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

          <section className="flex font-semibold justify-center flex-col pt-8 ">
            <h1 className="text-2xl md:text-4xl md:pt-10 md:pb-10 text-center">
              Arbejsdkulturen hos Grafikr
            </h1>
            <img src={workculturePath} alt="Arbejdskulturen" />
          </section>

          {/*Mød dine nye kollegaer*/}
          <div className="text-center pt-8 pb-10 md:pb-20">
            <h1 className="font-semibold text-2xl text-semibold md:text-4xl pb-4">
              Mød dine (Måske) nye kollegaer
            </h1>
            <p className="text-center text-xl md:text-4xl font-light tracking-widest">
              Kiranan,
              {/*<span>
                Kiranan,
                <img
                  className="invisible"
                  src={kirananImage}
                  alt="Picture of Kiranan"
                />
  </span>*/}
              Erik, Anders, Lasse, Pernille, Magnus,
            </p>
            <p className="text-center text-xl md:text-4xl font-light tracking-widest">
              Rasmus, Christian, Tobias, Tor, Thomas
            </p>
          </div>
          {/*Brand Carousel <Carousel />*/}
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
