import React, { useState } from 'react';
import { Sidebar } from './components/dashboard/Sidebar';
import { Header } from './components/dashboard/Header';
import { Overview } from './components/dashboard/Overview';
import { Governance } from './components/dashboard/Governance';
import { Exchange } from './components/dashboard/Exchange';
import { Metrics } from './components/dashboard/Metrics';
import { Knowledge } from './components/dashboard/Knowledge';
import { Economy } from './components/dashboard/Economy';
import { DashboardProvider } from './context/DashboardContext';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview setActiveTab={setActiveTab} />;
      case 'governance':
        return <Governance />;
      case 'exchange':
        return <Exchange />;
      case 'metrics':
        return <Metrics />;
      case 'knowledge':
        return <Knowledge />;
      case 'economy':
        return <Economy />;
      default:
        return <Overview setActiveTab={setActiveTab} />;
    }
  };

  return (
    <DashboardProvider>
      <div className="flex h-screen w-full bg-slate-950 text-slate-50 overflow-hidden font-sans">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex flex-col flex-1 h-full overflow-hidden">
          <Header activeTab={activeTab} />
          <main className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
            <div className="max-w-7xl mx-auto space-y-8">
              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </DashboardProvider>
  );
}
