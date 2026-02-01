import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

interface PrizePotProps {
  amount: number;
}

const PrizePot = ({ amount }: PrizePotProps) => {
  const [displayAmount, setDisplayAmount] = useState(amount);
  
  useEffect(() => {
    // Animate counter when amount changes
    const duration = 2000;
    const steps = 60;
    const increment = (amount - displayAmount) / steps;
    let current = displayAmount;
    let step = 0;
    
    const timer = setInterval(() => {
      step++;
      current += increment;
      setDisplayAmount(Math.round(current));
      
      if (step >= steps) {
        setDisplayAmount(amount);
        clearInterval(timer);
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [amount]);

  const formattedAmount = displayAmount.toLocaleString('en-US');

  return (
    <div className="relative flex flex-col items-center">
      {/* Glow background effect */}
      <div className="absolute -inset-20 bg-gold/10 rounded-full blur-3xl animate-pulse-slow" />
      
      {/* Label */}
      <div className="relative flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-gold" />
        <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Prize Pot
        </span>
        <Sparkles className="w-5 h-5 text-gold" />
      </div>
      
      {/* Main counter */}
      <div className="relative">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight glow-gold text-primary animate-pulse-glow">
          ${formattedAmount}
        </h1>
        <span className="absolute -right-16 md:-right-20 top-1/2 -translate-y-1/2 text-xl md:text-2xl font-semibold text-gold/80">
          USDC
        </span>
      </div>
      
      {/* Decorative line */}
      <div className="mt-6 w-32 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </div>
  );
};

export default PrizePot;
