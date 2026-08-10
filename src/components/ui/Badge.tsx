type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-primary-light/55 px-3 py-1 text-xs font-medium text-primary dark:bg-bg-color-dark dark:text-body-color-dark">
      {children}
    </span>
  );
}
