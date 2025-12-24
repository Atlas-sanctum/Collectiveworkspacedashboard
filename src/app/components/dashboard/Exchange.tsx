import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { RefreshCw, ArrowRightLeft, Sprout, Droplets, Mountain, Code, ExternalLink } from 'lucide-react';

export function Exchange() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Swap Interface */}
        <Card className="lg:col-span-1 bg-slate-900/50 border-slate-800 backdrop-blur-sm h-fit">
          <CardHeader>
            <CardTitle className="text-slate-100">Swap Assets</CardTitle>
            <CardDescription className="text-slate-400">Exchange tokens for impact credits</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-400">From</label>
              <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">U</div>
                   <span className="text-slate-200 font-medium">USDC</span>
                </div>
                <Input className="w-24 text-right border-none bg-transparent h-auto p-0 text-slate-100 placeholder:text-slate-600 focus-visible:ring-0" placeholder="0.00" defaultValue="1000" />
              </div>
            </div>

            <div className="flex justify-center">
              <Button variant="ghost" size="icon" className="rounded-full bg-slate-800 text-slate-400 hover:text-white">
                <ArrowRightLeft className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-400">To</label>
              <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                     <Sprout className="w-3.5 h-3.5" />
                   </div>
                   <span className="text-slate-200 font-medium">BioCredit</span>
                </div>
                <div className="text-right text-slate-100 font-medium">45.2</div>
              </div>
            </div>
            
            <div className="pt-2 text-xs text-slate-500 flex justify-between">
              <span>Rate</span>
              <span>1 BioCredit = 22.12 USDC</span>
            </div>

            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white mt-2">
              Confirm Exchange
            </Button>
          </CardContent>
        </Card>

        {/* Asset Marketplace */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="all" className="w-full">
             <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-100">Available Regenerative Assets</h3>
                <TabsList className="bg-slate-900 border border-slate-800">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="forest">Forestry</TabsTrigger>
                  <TabsTrigger value="ocean">Oceanic</TabsTrigger>
                  <TabsTrigger value="carbon">Carbon</TabsTrigger>
                </TabsList>
             </div>
             
             <TabsContent value="all" className="space-y-4">
               {[
                 { 
                   name: 'Amazon Rainforest Protection', 
                   type: 'Forestry', 
                   icon: Sprout, 
                   color: 'emerald', 
                   price: '$24.50', 
                   change: '+2.4%', 
                   desc: 'Preservation of 500 hectares of primary rainforest in Brazil.' 
                 },
                 { 
                   name: 'Pacific Blue Carbon', 
                   type: 'Oceanic', 
                   icon: Droplets, 
                   color: 'blue', 
                   price: '$18.20', 
                   change: '+5.1%', 
                   desc: 'Mangrove restoration project in Indonesia ensuring coastal resilience.' 
                 },
                 { 
                   name: 'Andean Soil Regeneration', 
                   type: 'Land', 
                   icon: Mountain, 
                   color: 'amber', 
                   price: '$12.05', 
                   change: '-0.4%', 
                   desc: 'Regenerative agriculture initiative supporting local farmers.' 
                 },
               ].map((asset, i) => (
                 <Card key={i} className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-colors cursor-pointer group">
                   <CardContent className="p-4 flex items-center justify-between">
                     <div className="flex items-center gap-4">
                       <div className={`w-12 h-12 rounded-xl bg-${asset.color}-500/10 flex items-center justify-center border border-${asset.color}-500/20`}>
                         <asset.icon className={`w-6 h-6 text-${asset.color}-500`} />
                       </div>
                       <div>
                         <h4 className="font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">{asset.name}</h4>
                         <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                           <Badge variant="secondary" className="bg-slate-800 text-slate-300 hover:bg-slate-700">{asset.type}</Badge>
                           <span className="hidden sm:inline">{asset.desc}</span>
                         </div>
                       </div>
                     </div>
                     <div className="text-right">
                       <div className="font-bold text-slate-100">{asset.price}</div>
                       <div className={`text-xs ${asset.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                         {asset.change}
                       </div>
                     </div>
                   </CardContent>
                 </Card>
               ))}
             </TabsContent>
          </Tabs>
        </div>

      </div>

      {/* Living Smart Contracts */}
      <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-indigo-400" />
              <CardTitle className="text-slate-100">Living Smart Contract: Auto-Distribution</CardTitle>
            </div>
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
              <ExternalLink className="w-4 h-4 mr-2" /> View on Etherscan
            </Button>
          </div>
          <CardDescription className="text-slate-400">
            This contract automatically disperses funds to project wallets when satellite oracle data verifies vegetation index growth (NDVI &gt; 0.6).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-950 rounded-lg p-4 font-mono text-xs text-slate-300 overflow-x-auto border border-slate-800 relative">
            <div className="absolute top-2 right-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-500 text-[10px] uppercase tracking-wider font-bold">Live Executing</span>
            </div>
            <pre>{`function verifyAndDistribute(bytes32 _projectId, uint256 _ndviScore) public onlyOracle {
    Project storage p = projects[_projectId];
    require(_ndviScore >= p.targetNDVI, "Target not met");
    
    uint256 payout = calculatePayout(p.stakedAmount, _ndviScore);
    
    // Auto-release to local community wallet
    (bool sent, ) = p.communityWallet.call{value: payout}("");
    require(sent, "Failed to send Ether");
    
    emit ImpactVerified(_projectId, _ndviScore, payout);
}`}</pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
