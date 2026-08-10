type Stat = {
  value: string;
  label: string;
};

type StatsBarProps = {
  stats: Stat[];
};

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="grid grid-cols-2 gap-6 rounded-xl bg-transparent py-6 dark:bg-bg-color-dark sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-2xl font-bold text-navy dark:text-white">
            {stat.value}
          </div>
          <div className="text-xs text-body-color dark:text-body-color-dark">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
