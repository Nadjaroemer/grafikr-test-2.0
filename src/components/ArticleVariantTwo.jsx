import Button from "../components/Button";

export default function ArticleVariantTwo({ headline, text, imagePath }) {
  return (
    <div className="flex pt-28">
      <div className="pr-36">
        <img src={imagePath} alt="ShopifyExperts" />
      </div>
      <div className="text-right self-center">
        <h1 className="text-5xl">{headline}</h1>
        <p className="text-2xl pt-8">{text}</p>
        <Button text="Læs mere" />
      </div>
    </div>
  );
}
