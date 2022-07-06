export default function BureauHero({ text, headline, imagePath }) {
  return (
    <div className="flex flex-col">
      <p className="text-center text-xs lg:text-sm sm:text-xs lg:pt-20 pt-16 pb-4">
        {text}
      </p>
      <h1 className="text-center text-2xl font-bold md:text-7xl pb-8 md:pb-24">
        {headline}
      </h1>
      <div className="md:p-0 md:shrink-0">
        <img
          src={imagePath}
          alt="ShopifyExperts"
          className="pb-8 md:pb-20 md:h-full md:w-full"
        />
      </div>
    </div>
  );
}
