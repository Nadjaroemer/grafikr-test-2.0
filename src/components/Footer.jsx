import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="flex">
        <section>
          <ul className="flex">
            <Link to="/">Support</Link>
            <Link to="/">Grafikr A/S</Link>
            <Link to="/">CVR:37783277</Link>
            <Link to="/">Telefon &plus;45 69 69 29 15</Link>
            <Link to="/">kontakt&commat;grafikr.dk</Link>
            <Link to="/">
              <div className="flex">
                <p>Randers:</p>
                <p>Vestergade 10b</p>
                <p>8900Randers C</p>
              </div>
            </Link>
            <Link to="/">
              København:
              <br />
              Scandigade 25
              <br />
              2450 Køvenhavn SV
            </Link>
          </ul>
        </section>

        <section>
          <ul>
            <Link to="/">Information</Link>
            <Link to="/">Karriere &lpar;4 åbne stillinger&rpar;</Link>
            <Link to="/">Hent e-bog om Shopify&plus;</Link>
            <Link to="/">Cases</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Om os</Link>
            <Link to="/">Kontakt os</Link>
          </ul>
        </section>

        <section className="flex">
          <ul className="flex">
            <Link to="/">Udvalgte Cases</Link>
            <Link to="">Arkk Copenhagen</Link>
            <Link to="/">Basic Apparel</Link>
            <Link to="/">Barons</Link>
            <Link to="/">LinkCamille Brinch Jewellery</Link>
            <Link to="/">Eyda</Link>
            <Link to="/">LinkNoella Fashion</Link>
            <Link to="/">SACKit</Link>
          </ul>
        </section>
      </div>
      <p>&copy;Grafikr A/S. Alle rettigheder forbeholdt 2021</p>
    </footer>
  );
}
