import { Link } from "react-router-dom";
import Form from "./Form";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-20 font-PlusJakartarSans text-sm">
      <div className="flex justify-around pb-8 pl-2">
        <section className="">
          <ul>
            <li className="pb-6 text-2xl">Support</li>
            <li>Grafikr A/S</li>
            <li className="pb-6">CVR:37783277</li>
            <li>+45 69 69 29 15</li>
            <li className="pb-6">kontakt@grafikr.dk</li>
            <li>Randers:</li>
            <li>Vestergade 10b</li>
            <li className="pb-6">8900Randers C</li>
            <li>København:</li>
            <li>Scandigade 25</li>
            <li>2450 Køvenhavn SV</li>
          </ul>
        </section>

        <section className="pr-20">
          <ul className="leading-6">
            <li className="pb-6 text-2xl">Information</li>
            <li>Karriere (4 åbne stillinger)</li>
            <li>
              <Link to="/">Hent e-bog om Shopify+</Link>
            </li>
            <li>
              <Link to="/">Cases</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Om os</Link>
            </li>
            <li>
              <Link to="/">Kontakt os</Link>
            </li>
          </ul>
        </section>

        <section>
          <ul className="leading-6">
            <li className="pb-6 text-2xl">Udvalgte Cases</li>
            <li>
              <Link to="">Arkk Copenhagen</Link>
            </li>
            <li>
              <Link to="/">Basic Apparel</Link>
            </li>
            <li>
              <Link to="/">Barons</Link>
            </li>
            <li>
              <Link to="/">LinkCamille Brinch Jewellery</Link>
            </li>
            <li>
              <Link to="/">Eyda</Link>
            </li>
            <li>
              <Link to="/">LinkNoella Fashion</Link>
            </li>
            <li>
              <Link to="/">SACKit</Link>
            </li>
          </ul>
        </section>
        <Form />
      </div>

      <p className="pl-8">
        &copy;Grafikr A/S. Alle rettigheder forbeholdt 2021
      </p>
      {/*<div className=" abspolute w-8 h-12 -rotate-45 ">
        <span>strepxe</span>
        <span>yfipohs</span>
        <span>- uaerub</span>
        <span>ecremmoc-e</span>
  </div>*/}
    </footer>
  );
}
