export default function DecorativeShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="absolute left-0 top-6 h-8 w-8 rounded-full bg-peach" />
      <span className="absolute -right-6 top-0 h-24 w-24 rounded-full bg-primary" />
      <span className="absolute left-4 bottom-0 h-10 w-10 rounded-full bg-navy" />
      <span className="absolute right-4 bottom-4 h-28 w-28 rounded-full bg-primary-light" />
    </div>
  );
}
