import Header from "@/components/Header";
import PrizePot from "@/components/PrizePot";
import CountdownTimer from "@/components/CountdownTimer";
import TicketPanel from "@/components/TicketPanel";
import UserStats from "@/components/UserStats";
import NetworkBadge from "@/components/NetworkBadge";
import { Users, Trophy, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-grid-pattern relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="fixed top-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      <div className="fixed bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple/5 rounded-full blur-3xl" />
      
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Network Badge */}
        <div className="flex justify-center mb-8">
          <NetworkBadge />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - User Stats */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <div className="lg:sticky lg:top-24">
              <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                Your Portfolio
              </h3>
              <UserStats />
            </div>
          </aside>
          
          {/* Main Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-8">
            {/* Prize Pot */}
            <div className="py-12 flex justify-center">
              <PrizePot amount={54320} />
            </div>
            
            {/* Countdown Timer */}
            <CountdownTimer />
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-card p-4 text-center">
                <Users className="w-5 h-5 text-accent mx-auto mb-2" />
                <p className="text-xl font-bold text-foreground">2,847</p>
                <p className="text-xs text-muted-foreground">Active Players</p>
              </div>
              <div className="glass-card p-4 text-center">
                <Trophy className="w-5 h-5 text-gold mx-auto mb-2" />
                <p className="text-xl font-bold text-foreground">$127K</p>
                <p className="text-xs text-muted-foreground">Total Prizes</p>
              </div>
              <div className="glass-card p-4 text-center">
                <Shield className="w-5 h-5 text-purple mx-auto mb-2" />
                <p className="text-xl font-bold text-foreground">$4.2M</p>
                <p className="text-xs text-muted-foreground">TVL Secured</p>
              </div>
            </div>
          </div>
          
          {/* Right Sidebar - Ticket Panel */}
          <aside className="lg:col-span-3 order-3">
            <div className="lg:sticky lg:top-24">
              <TicketPanel />
            </div>
          </aside>
        </div>
        
        {/* Footer note */}
        <footer className="mt-16 text-center">
          <p className="text-xs text-muted-foreground">
            Powered by Stellar Network • Your principal is always safe
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
