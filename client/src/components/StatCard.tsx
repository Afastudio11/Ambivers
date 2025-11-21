import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  position?: string;
  positionClass?: string;
  delay?: number;
}

export const StatCard: React.FC<StatCardProps> = ({
  icon,
  value,
  label,
  positionClass = "relative"
}) => {
  return (
    <div className={`${positionClass} bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-black/5`}>
      <div className="flex flex-col items-center gap-2">
        {icon}
        <div className="text-center">
          <div className="font-bold text-lg text-gray-900">{value}</div>
          <div className="text-xs text-gray-600">{label}</div>
        </div>
      </div>
    </div>
  );
};
