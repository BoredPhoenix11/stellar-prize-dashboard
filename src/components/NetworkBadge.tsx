import { Activity } from "lucide-react";

const NetworkBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
      <div className="relative">
        <Activity className="w-3 h-3 text-accent" />
        <div className="absolute inset-0 animate-ping">
          <Activity className="w-3 h-3 text-accent opacity-50" />
        </div>
      </div>
      <span className="text-xs font-medium text-accent">Stellar Network</span>
    </div>
  );
};

export default NetworkBadge;
