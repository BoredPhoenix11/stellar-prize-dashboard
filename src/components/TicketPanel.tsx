import { useState } from "react";
import { Ticket, Wallet, ArrowRight } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const TicketPanel = () => {
  const [depositAmount, setDepositAmount] = useState(100);
  const maxDeposit = 10000;
  
  const ticketCount = Math.floor(depositAmount / 10);
  const estimatedOdds = ((depositAmount / 1000000) * 100).toFixed(4);

  return (
    <div className="glass-card gradient-border p-6 h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-xl bg-accent/10">
          <Ticket className="w-5 h-5 text-accent" />
        </div>
        <h2 className="text-lg font-semibold text-foreground">Get Tickets</h2>
      </div>
      
      {/* Deposit Amount Display */}
      <div className="text-center mb-8">
        <span className="text-sm text-muted-foreground">Deposit Amount</span>
        <div className="text-4xl font-bold gradient-text-accent mt-1">
          ${depositAmount.toLocaleString()}
        </div>
        <span className="text-xs text-muted-foreground">USDC</span>
      </div>
      
      {/* Slider */}
      <div className="mb-8 px-2">
        <Slider
          value={[depositAmount]}
          onValueChange={(value) => setDepositAmount(value[0])}
          max={maxDeposit}
          min={10}
          step={10}
          className="cursor-pointer"
        />
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          <span>$10</span>
          <span>${maxDeposit.toLocaleString()}</span>
        </div>
      </div>
      
      {/* Stats */}
      <div className="space-y-3 mb-8">
        <div className="flex justify-between items-center py-3 border-b border-border/50">
          <span className="text-sm text-muted-foreground">Tickets Earned</span>
          <span className="text-sm font-semibold text-foreground">{ticketCount} tickets</span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-border/50">
          <span className="text-sm text-muted-foreground">Win Probability</span>
          <span className="text-sm font-semibold text-accent">{estimatedOdds}%</span>
        </div>
        <div className="flex justify-between items-center py-3">
          <span className="text-sm text-muted-foreground">Withdrawal</span>
          <span className="text-sm font-semibold text-foreground">Anytime</span>
        </div>
      </div>
      
      {/* CTA Button */}
      <Button className="w-full h-12 bg-gradient-to-r from-accent to-purple text-accent-foreground font-semibold text-base group hover:opacity-90 transition-opacity">
        <Wallet className="w-4 h-4 mr-2" />
        Connect Wallet
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
      
      <p className="text-xs text-center text-muted-foreground mt-4">
        No loss. Withdraw your principal anytime.
      </p>
    </div>
  );
};

export default TicketPanel;
