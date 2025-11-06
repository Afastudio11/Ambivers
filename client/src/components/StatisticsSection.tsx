export default function StatisticsSection() {
  const stats = [
    { number: "100+", label: "Corporate Partners" },
    { number: "40+", label: "School Partners" },
    { number: "50.000+", label: "Beneficiaries" },
    { number: "34", label: "Covered Regions" },
    { number: "90%", label: "Satisfaction of Users" }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16" data-testid="text-stats-title">
          Ambivers In Number
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-card-${index}`}>
              <div className="text-4xl lg:text-6xl font-bold text-primary mb-2" data-testid={`stat-number-${index}`}>
                {stat.number}
              </div>
              <div className="text-sm lg:text-base text-muted-foreground" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
