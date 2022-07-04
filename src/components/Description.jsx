export default function Description({ headline, text }) {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold pt-20 pb-8">{headline}</h1>
      <p className="text-2xl font-light">{text}</p>
    </div>
  );
}
