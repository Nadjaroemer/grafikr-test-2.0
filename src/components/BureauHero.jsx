import shopifyexperts from "../assets/shopifyeksperter.png";

export default function BureauHero({ text, headline, image }) {
  return (
    <div className="flex flex-col">
      <p className="text-center text-sm pt-20 pb-10">{text}</p>
      <h1 className="text-center font-bold text-7xl pb-20">{headline}</h1>
      <img src={shopifyexperts} alt="ShopifyExperts" />
    </div>
  );
}
