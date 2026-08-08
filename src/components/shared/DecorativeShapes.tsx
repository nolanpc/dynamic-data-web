export default function DecorativeShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="absolute right-62 top-40 h-8 w-8 rounded-full bg-peach" />
      <span className="absolute right-36 top-30 h-24 w-24 rounded-full bg-primary-medium" />
      <span className="absolute right-58 bottom-20 h-14 w-14 rounded-full bg-navy" />
      <span className="absolute right-30 bottom-10 h-30 w-30 rounded-full bg-primary-light" />
    </div>
  );
}
