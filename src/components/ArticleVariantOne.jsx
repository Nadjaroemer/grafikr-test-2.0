import Button from "../components/Button";

export default function ArticleVariantOne({ headline, text, imagePath }) {
  return (
    <div className="flex justify-between pt-28">
      <div>
        <h1 className="text-5xl">{headline}</h1>
        <p className="text-2xl pt-8">{text}</p>
        <Button text="Læs mere" />
      </div>
      <div className="pl-36">
        <img src={imagePath} alt="ShopifyExperts" />
      </div>
    </div>
  );
}
