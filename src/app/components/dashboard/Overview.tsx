import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowUpRight, ArrowDownRight, Leaf, Users, Activity, Zap } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface OverviewProps {
  setActiveTab: (tab: string) => void;
}

const healthData = [
  { name: 'Mon', value: 65 },
  { name: 'Tue', value: 72 },
  { name: 'Wed', value: 68 },
  { name: 'Thu', value: 75 },
  { name: 'Fri', value: 82 },
  { name: 'Sat', value: 86 },
  { name: 'Sun', value: 89 },
];

const impactData = [
  { name: 'Jan', carbon: 400, water: 240 },
  { name: 'Feb', carbon: 300, water: 139 },
  { name: 'Mar', carbon: 200, water: 980 },
  { name: 'Apr', carbon: 278, water: 390 },
  { name: 'May', carbon: 189, water: 480 },
  { name: 'Jun', carbon: 239, water: 380 },
];

export function Overview({ setActiveTab }: OverviewProps) {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Total Regenerative Assets</CardTitle>
            <Leaf className="h-4 w-4 text-emerald-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-100">$2,450,920</div>
            <p className="text-xs text-emerald-400 flex items-center mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +20.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Active Proposals</CardTitle>
            <Users className="h-4 w-4 text-indigo-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-100">12</div>
            <p className="text-xs text-indigo-400 flex items-center mt-1">
              <span className="text-slate-500 mr-2">3 Voting Ending Soon</span>
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Ecosystem Health</CardTitle>
            <Activity className="h-4 w-4 text-rose-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-100">92/100</div>
            <p className="text-xs text-rose-400 flex items-center mt-1">
              <ArrowDownRight className="h-3 w-3 mr-1" />
              -1.2% minor fluctuation
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Knowledge Shared</CardTitle>
            <Zap className="h-4 w-4 text-amber-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-100">843</div>
            <p className="text-xs text-amber-400 flex items-center mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +42 new stories this week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        
        {/* Main Chart */}
        <Card className="lg:col-span-4 bg-slate-900/50 border-slate-800 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-slate-100">Regenerative Impact Trend</CardTitle>
            <CardDescription className="text-slate-400">Real-time ecosystem restoration metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={healthData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc' }}
                    itemStyle={{ color: '#10b981' }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Side Chart/List */}
        <Card className="lg:col-span-3 bg-slate-900/50 border-slate-800 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-slate-100">Resource Allocation</CardTitle>
            <CardDescription className="text-slate-400">Distribution across impact sectors</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={impactData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={true} vertical={false} />
                  <XAxis type="number" stroke="#64748b" fontSize={12} hide />
                  <YAxis dataKey="name" type="category" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} width={30} />
                  <Tooltip 
                    cursor={{fill: '#1e293b'}}
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc' }}
                  />
                  <Bar dataKey="carbon" name="Carbon Credits" stackId="a" fill="#10b981" radius={[0, 4, 4, 0]} barSize={20} />
                  <Bar dataKey="water" name="Water Restoration" stackId="a" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Quick Actions / Recent Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
          <CardHeader>
             <CardTitle className="text-slate-100">Recent Governance Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: 'Reforestation Protocol Alpha', status: 'Passed', time: '2h ago' },
                { title: 'Community Fund Allocation Q3', status: 'Voting', time: '5h ago' },
                { title: 'New Oracle Integration: OceanClean', status: 'Review', time: '1d ago' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-950/30 border border-slate-800/50">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-slate-200">{item.title}</span>
                    <span className="text-xs text-slate-500">{item.time}</span>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full border ${
                    item.status === 'Passed' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                    item.status === 'Voting' ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' :
                    'bg-amber-500/10 text-amber-400 border-amber-500/20'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
            <Button variant="link" className="w-full mt-4 text-emerald-400 hover:text-emerald-300" onClick={() => setActiveTab('governance')}>
              View all proposals
            </Button>
          </CardContent>
        </Card>

         <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
          <CardHeader>
             <CardTitle className="text-slate-100">AI Oracle Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
               {[
                { title: 'Amazon Basin Carbon Absorption', value: '+5.2% above baseline', type: 'positive' },
                { title: 'Coral Reef Bleaching Risk', value: 'Moderate Alert Level', type: 'warning' },
                { title: 'Urban Circular Economy Index', value: 'Steady growth', type: 'neutral' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-950/30 border border-slate-800/50">
                  <div className={`mt-1 w-2 h-2 rounded-full ${
                     item.type === 'positive' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' :
                     item.type === 'warning' ? 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]' :
                     'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]'
                  }`} />
                  <div>
                     <p className="text-sm font-medium text-slate-200">{item.title}</p>
                     <p className="text-xs text-slate-500">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
             <Button variant="link" className="w-full mt-4 text-indigo-400 hover:text-indigo-300" onClick={() => setActiveTab('metrics')}>
              View full analysis
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
