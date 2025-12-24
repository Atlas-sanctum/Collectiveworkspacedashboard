import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

type ValueMetric = {
  label: string;
  value: number;
  color: string;
};

type Proposal = {
  id: number;
  title: string;
  description: string;
  category: string;
  supportFor: number; // percentage
  supportAgainst: number; // percentage
  endsIn: string;
  proposer: string;
  proposerImage: string;
  status: 'active' | 'passed' | 'rejected' | 'pending';
  hasVoted?: boolean; // track if current user voted
};

type DashboardContextType = {
  // Wallet
  walletAddress: string | null;
  isWalletConnected: boolean;
  connectWallet: () => void;
  disconnectWallet: () => void;
  
  // Values Engine
  values: ValueMetric[];
  updateValue: (label: string, newValue: number) => void;
  
  // Governance
  proposals: Proposal[];
  voteOnProposal: (id: number, vote: 'for' | 'against') => void;
};

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  // Wallet State
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  
  const connectWallet = () => {
    // Simulate connection delay
    setTimeout(() => {
      setWalletAddress('0x71C...9A23');
      toast.success('Wallet connected successfully');
    }, 800);
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    toast.info('Wallet disconnected');
  };

  // Values Engine State
  const [values, setValues] = useState<ValueMetric[]>([
    { label: 'Ecological Regeneration', value: 85, color: 'bg-emerald-500' },
    { label: 'Social Equity', value: 70, color: 'bg-blue-500' },
    { label: 'Long-term Thinking', value: 90, color: 'bg-purple-500' },
    { label: 'Transparency', value: 65, color: 'bg-amber-500' },
    { label: 'Cultural Preservation', value: 75, color: 'bg-rose-500' },
  ]);

  const updateValue = (label: string, newValue: number) => {
    setValues(prev => prev.map(v => v.label === label ? { ...v, value: newValue } : v));
  };

  // Proposals State
  const [proposals, setProposals] = useState<Proposal[]>([
    {
      id: 101,
      title: 'Amazon Bio-Corridor Expansion',
      description: 'Allocate 50,000 ETH equivalent in stablecoins to fund the expansion of the bio-corridor project in partnership with local indigenous communities.',
      category: 'Ecosystem Restoration',
      supportFor: 82,
      supportAgainst: 18,
      endsIn: '2 days',
      proposer: 'crypto_botanist.eth',
      proposerImage: 'https://i.pravatar.cc/150?u=101',
      status: 'active'
    },
    {
      id: 102,
      title: 'Urban Vertical Farming Subsidy',
      description: 'Proposal to subsidize vertical farming initiatives in high-density urban areas to reduce food transport emissions.',
      category: 'Urban Sustainability',
      supportFor: 45,
      supportAgainst: 55,
      endsIn: '5 hours',
      proposer: 'urban_grower.eth',
      proposerImage: 'https://i.pravatar.cc/150?u=102',
      status: 'active'
    }
  ]);

  const voteOnProposal = (id: number, vote: 'for' | 'against') => {
    if (!walletAddress) {
      toast.error('Please connect your wallet to vote');
      return;
    }

    setProposals(prev => prev.map(p => {
      if (p.id === id) {
        if (p.hasVoted) {
          toast.error('You have already voted on this proposal');
          return p;
        }
        
        toast.success(`Voted ${vote} on proposal #${id}`);
        
        // Simple mock calculation to adjust percentages
        // In a real app this would be more complex math
        let newFor = p.supportFor;
        let newAgainst = p.supportAgainst;
        
        if (vote === 'for') {
           newFor = Math.min(100, p.supportFor + 1);
           newAgainst = Math.max(0, p.supportAgainst - 1);
        } else {
           newFor = Math.max(0, p.supportFor - 1);
           newAgainst = Math.min(100, p.supportAgainst + 1);
        }

        return {
          ...p,
          supportFor: newFor,
          supportAgainst: newAgainst,
          hasVoted: true
        };
      }
      return p;
    }));
  };

  return (
    <DashboardContext.Provider value={{
      walletAddress,
      isWalletConnected: !!walletAddress,
      connectWallet,
      disconnectWallet,
      values,
      updateValue,
      proposals,
      voteOnProposal
    }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
}
