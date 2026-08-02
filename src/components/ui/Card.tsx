type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-stroke-stroke bg-white p-6 shadow-one dark:border-stroke-dark dark:bg-bg-color-dark ${className}`}
    >
      {children}
    </div>
  );
}
