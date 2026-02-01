import { Wallet, TrendingUp, Coins, Ticket } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  subValue?: string;
  accentColor?: "gold" | "cyan" | "purple";
}

const StatCard = ({ icon, label, value, subValue, accentColor = "cyan" }: StatCardProps) => {
  const glowClass = accentColor === "gold" ? "glow-box-gold" : "glow-box-cyan";
  const textClass = accentColor === "gold" ? "text-gold" : "text-accent";
  
  return (
    <div className="glass-card p-5 stat-glow">
      <div className="flex items-start justify-between mb-3">
        <div className={`p-2 rounded-xl bg-${accentColor}/10`}>
          {icon}
        </div>
      </div>
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <div className={`text-2xl font-bold mt-1 ${textClass}`}>
        {value}
      </div>
      {subValue && (
        <span className="text-xs text-muted-foreground">{subValue}</span>
      )}
    </div>
  );
};

const UserStats = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-purple flex items-center justify-center">
          <span className="text-xs font-bold text-white">0x</span>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">Connected</p>
          <p className="text-xs text-muted-foreground">0x7a3d...8f2e</p>
        </div>
      </div>
      
      <StatCard
        icon={<Wallet className="w-4 h-4 text-accent" />}
        label="My Principal"
        value="$2,500"
        subValue="USDC Deposited"
        accentColor="cyan"
      />
      
      <StatCard
        icon={<Ticket className="w-4 h-4 text-purple" />}
        label="My Odds"
        value="0.046%"
        subValue="250 tickets active"
        accentColor="purple"
      />
      
      <StatCard
        icon={<Coins className="w-4 h-4 text-gold" />}
        label="Total Yield Earned"
        value="$127.45"
        subValue="+5.1% APY"
        accentColor="gold"
      />
      
      <StatCard
        icon={<TrendingUp className="w-4 h-4 text-accent" />}
        label="Lifetime Winnings"
        value="$0.00"
        subValue="Keep playing!"
        accentColor="cyan"
      />
    </div>
  );
};

export default UserStats;
