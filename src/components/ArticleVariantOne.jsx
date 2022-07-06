import Button from "../components/Button";

export default function ArticleVariantOne({ headline, text, imagePath }) {
  return (
    <article className="flex flex-col md:flex-row md:block xl:flex justify-between sm:pt-28">
      <div className="bg-kiranan">
        <h1 className="text-2xl font-bold pb-4 md:text-5xl">{headline}</h1>
        <img
          className="md:hidden md:h-full md:w-full sm:shrink-0"
          src={imagePath}
          alt="ShopifyExperts"
        />
        <p className="text-xl md:text-2xl pt-4 pb-4 md:pt-8 md:pb-8">{text}</p>
        <Button text="Læs mere" />
      </div>
      <div className="md:pl-36 md:p-0 md:shrink-0">
        <img
          className="hidden md:flex md:h-full md:w-full sm:shrink-0"
          src={imagePath}
          alt="ShopifyExperts"
        />
      </div>
    </article>
  );
}
