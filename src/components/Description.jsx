export default function Description({ headline, text }) {
  return (
    <div className="text-center pb-8">
      <h1 className="text-xl md:text-4xl font-bold pb-2 md:pb-8">{headline}</h1>
      <p className="text-s md:text-2xl md:font-light">{text}</p>
    </div>
  );
}
