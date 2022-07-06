import Button from "./Button";

export default function ArticleVariantTwo({ headline, text, imagePath }) {
  return (
    <article className="flex flex-col md:flex-row md:block xl:flex justify-between sm:pt-28">
      <div className="hidden md:flex md:p-0 md:shrink-0">
        <img
          src={imagePath}
          alt="ShopifyExperts"
          className="md:h-full md:w-full"
        />
      </div>
      <div className="self-center text-left md:text-right">
        <h1 className="text-2xl font-bold pt-8 pb-4 md:text-5xl">{headline}</h1>
        <div className="md:hidden md:p-0 md:shrink-0">
          <img
            src={imagePath}
            alt="ShopifyExperts"
            className="md:h-full md:w-full"
          />
        </div>
        <p className="text-xl md:text-2xl pt-4 pb-4 md:pt-8 md:pb-8">{text}</p>
        <Button text="Læs mere" />
      </div>
    </article>
  );
}
