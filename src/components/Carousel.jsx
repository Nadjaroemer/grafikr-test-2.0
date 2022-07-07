export default function Carousel({ imageData, setImageData }) {
  const right = () => {
    const firstElement = imageData.shift();
    imageData.push(firstElement);
    // Use spread operator to copy imagedata into new array
    setImageData([...imageData]);
  };

  const left = () => {
    const lastElement = imageData.pop();
    imageData.unshift(lastElement);
    // Use spread operator to copy imagedata into new array
    setImageData([...imageData]);
  };

  return (
    <div>
      <h2 className="text-xl text-center md:text-4xl font-bold pb-2 md:pb-8">
        Arbejd med nogle af de største brands
      </h2>
      <div className="flex gap-x-8 relative pb-6">
        <button
          className="absolute z-10 top-2/3 left-6"
          onClick={() => {
            left();
          }}
        >
          left
        </button>
        {imageData.slice(0, 3).map(({ src, alt, text }) => {
          return (
            <div key={src} className="relative">
              <img src={src} alt={alt} />
              <p className="absolute text-white bottom-0 left-6">{text}</p>
            </div>
          );
        })}
        <button
          className="absolute z-10 top-2/3 right-6"
          onClick={() => {
            right();
          }}
        >
          right
        </button>
      </div>
    </div>
  );
}
