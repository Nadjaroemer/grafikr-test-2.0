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
          className="absolute z-10 inset-y-0 left-0 "
          onClick={() => {
            left();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        {imageData.slice(0, 3).map(({ src, alt, text }) => {
          return (
            <div key={src} className="relative">
              <img src={src} alt={alt} />
              <p className="absolute text-white bottom-5 left-6">{text}</p>
            </div>
          );
        })}
        <button
          className="absolute z-10 inset-y-0 right-0"
          onClick={() => {
            right();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
