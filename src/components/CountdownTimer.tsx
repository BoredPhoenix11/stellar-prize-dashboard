import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 14,
    minutes: 2,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset for demo
          return { hours: 23, minutes: 59, seconds: 59 };
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  const TimeBlock = ({ value, label }: { value: string; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="glass-card px-4 py-3 min-w-[72px]">
          <span className="text-3xl md:text-4xl font-bold text-foreground tabular-nums">
            {value}
          </span>
        </div>
        <div className="absolute inset-0 rounded-2xl bg-accent/5 blur-md -z-10" />
      </div>
      <span className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
    </div>
  );

  return (
    <div className="glass-card gradient-border p-6 md:p-8">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Clock className="w-4 h-4 text-accent" />
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Next Draw
        </span>
      </div>
      
      <div className="flex items-center justify-center gap-3">
        <TimeBlock value={formatNumber(timeLeft.hours)} label="Hours" />
        <span className="text-3xl font-light text-muted-foreground mt-[-24px]">:</span>
        <TimeBlock value={formatNumber(timeLeft.minutes)} label="Minutes" />
        <span className="text-3xl font-light text-muted-foreground mt-[-24px]">:</span>
        <TimeBlock value={formatNumber(timeLeft.seconds)} label="Seconds" />
      </div>
    </div>
  );
};

export default CountdownTimer;
