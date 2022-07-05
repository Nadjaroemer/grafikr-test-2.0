import Button from "./Button";

export default function ArticleVariantTwo({ headline, text, imagePath }) {
  return (
    <div className="flex justify-between pt-28">
      <div>
        <img src={imagePath} alt="ShopifyExperts" />
      </div>
      <div className="self-center text-right">
        <h1 className="text-5xl">{headline}</h1>
        <p className="text-2xl pt-8">{text}</p>
        <Button text="Læs mere" />
      </div>
    </div>
  );
}
