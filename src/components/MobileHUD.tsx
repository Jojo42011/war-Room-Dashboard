import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Activity,
  Shield,
  MessageSquare,
  CreditCard,
  Cpu,
  Radio,
  ExternalLink,
  ChevronRight,
  Terminal,
  Clock,
  Zap
} from 'lucide-react';
import { ActivePanel } from '../types';

interface StationItem {
  id: 'scrub' | 'fraud' | 'chat' | 'payment' | 'jarvis';
  name: string;
  subName: string;
  status: string;
  icon: any;
  colorClass: string;
  bgGlowClass: string;
  textColorClass: string;
  borderClass: string;
  isExternal: boolean;
  link?: string;
  techData: { label: string; value: string }[];
}

interface MobileHUDProps {
  onSelectStation: (station: 'scrub' | 'fraud' | 'chat' | 'payment' | 'jarvis') => void;
  activePanel: ActivePanel;
}

export default function MobileHUD({ onSelectStation, activePanel }: MobileHUDProps) {
  const [timeStr, setTimeStr] = useState('');

  // Update clock every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString([], { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const stations: StationItem[] = [
    {
      id: 'jarvis',
      name: 'JARVIS COMMAND HQ',
      subName: 'Core Intelligent Intelligence Brain',
      status: 'CORE ACTIVE',
      icon: Cpu,
      colorClass: 'text-yellow-400',
      bgGlowClass: 'shadow-[0_0_15px_rgba(250,204,21,0.15)] bg-yellow-950/10',
      textColorClass: 'text-yellow-400',
      borderClass: 'border-yellow-500/30',
      isExternal: true,
      link: 'https://leadsmart-ringba-scrub.fly.dev/jarvis',
      techData: [
        { label: 'INTELLIGENCE', value: 'SWARM_PRIMARY' },
        { label: 'DIRECTIVES', value: 'TUNNEL_SECURE' },
        { label: 'CORE LOAD', value: '78.4% CAP' }
      ]
    },
    {
      id: 'scrub',
      name: 'SCRUB TELEMETRY',
      subName: 'Live Cloud Data Purging Flow',
      status: 'ONLINE',
      icon: Activity,
      colorClass: 'text-teal-400',
      bgGlowClass: 'shadow-[0_0_15px_rgba(45,212,191,0.15)] bg-teal-950/10',
      textColorClass: 'text-teal-400',
      borderClass: 'border-teal-500/30',
      isExternal: true,
      link: 'https://leadsmart-ringba-scrub.fly.dev/#overview',
      techData: [
        { label: 'NODE WEIGHTS', value: 'OPTIMAL' },
        { label: 'CORS BYPASS', value: 'SWARM_TUNNEL' },
        { label: 'SCRUB COUNT', value: '3,014 DETECTED' }
      ]
    },
    {
      id: 'payment',
      name: 'PAYMENT CLEARANCE',
      subName: 'SWIFT Settlement & Reconcilities',
      status: 'STANDBY',
      icon: CreditCard,
      colorClass: 'text-blue-400',
      bgGlowClass: 'shadow-[0_0_15px_rgba(59,130,246,0.15)] bg-blue-950/10',
      textColorClass: 'text-blue-400',
      borderClass: 'border-blue-500/30',
      isExternal: true,
      link: 'https://leadsmart-ringba-scrub.fly.dev/payments',
      techData: [
        { label: 'SWIFT PROTOCOL', value: 'RECONCILED' },
        { label: 'TXN QUEUES', value: 'EMPTY (IDLE)' },
        { label: 'SECURE RECOV', value: 'ACTIVE' }
      ]
    },
    {
      id: 'fraud',
      name: 'FRAUD PREVENTION',
      subName: 'Adversarial Risk & Heuristics',
      status: 'STANDBY',
      icon: Shield,
      colorClass: 'text-amber-400',
      bgGlowClass: 'shadow-[0_0_15px_rgba(245,158,11,0.15)] bg-amber-950/10',
      textColorClass: 'text-amber-400',
      borderClass: 'border-amber-500/30',
      isExternal: false,
      techData: [
        { label: 'HEURISTICS', value: 'ARMED' },
        { label: 'THREAT BAR', value: '0.04 - SOLID' },
        { label: 'MONITORING', value: 'IDLE / CALIBRATED' }
      ]
    },
    {
      id: 'chat',
      name: 'CHAT DISPATCH Swarm',
      subName: 'Conversational Swarm Matrix',
      status: 'OFFLINE',
      icon: MessageSquare,
      colorClass: 'text-purple-400',
      bgGlowClass: 'shadow-[0_0_15px_rgba(168,85,247,0.15)] bg-purple-950/10',
      textColorClass: 'text-purple-400',
      borderClass: 'border-purple-500/30',
      isExternal: false,
      techData: [
        { label: 'SOCK LISTENERS', value: 'SLEEP_MODE' },
        { label: 'MODEL DEPLOY', value: 'DISCONNECTED' },
        { label: 'RESOURCES', value: 'STANDBY' }
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen px-4 py-6 bg-zinc-950/95 font-mono text-zinc-300 md:hidden flex flex-col justify-between overflow-y-auto">
      
      {/* HEADER SECTION */}
      <header className="mb-6 space-y-3">
        <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-1 px-2 rounded bg-teal-950 text-teal-400 border border-teal-500/30 flex items-center gap-1.5 animate-pulse">
              <Radio size={12} />
              <span className="text-[10px] font-bold tracking-widest">MOBILE HUD LIVE</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-semibold">
            <Clock size={12} className="text-teal-400" />
            <span>{timeStr || '14:14:00'}</span>
          </div>
        </div>

        <div className="space-y-1">
          <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
            <Terminal size={18} className="text-teal-400" />
            LEADSMART SYS
          </h1>
          <p className="text-[10px] text-zinc-500 leading-relaxed font-semibold uppercase tracking-widest">
            Tactical Security Swarm &bull; War Room Diagnostics
          </p>
        </div>
      </header>

      {/* DYNAMIC RADAR OR CONSOLE PULSE */}
      <section className="mb-6 p-4 rounded bg-zinc-900/30 border border-zinc-900 flex items-center justify-between gap-4">
        <div className="flex-1 space-y-1">
          <span className="text-[9px] text-zinc-500 block">SENSORS ONLINE</span>
          <span className="text-xs text-zinc-300 leading-normal font-medium block">
            Core tactical grids and data pipelines active. Tap below to navigate modules.
          </span>
        </div>
        <div className="relative w-12 h-12 flex items-center justify-center bg-teal-950/20 rounded-full border border-teal-500/20 overflow-hidden">
          <div className="absolute inset-0 border border-dashed border-teal-500/30 rounded-full animate-spin [animation-duration:8s]"></div>
          <Activity size={16} className="text-teal-400 animate-pulse" />
        </div>
      </section>

      {/* STATIONS LIST */}
      <main className="flex-1 space-y-4 mb-8">
        {stations.map((st) => {
          const IconComponent = st.icon;
          return (
            <motion.div
              key={st.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectStation(st.id)}
              className={`block w-full text-left p-4 rounded border ${st.borderClass} ${st.bgGlowClass} transition-all duration-300 relative overflow-hidden`}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded bg-zinc-950 border ${st.borderClass} ${st.textColorClass}`}>
                    <IconComponent size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-wide uppercase">
                      {st.name}
                    </h3>
                    <p className="text-[10px] text-zinc-500 font-semibold block mt-0.5">
                      {st.subName}
                    </p>
                  </div>
                </div>

                <div className={`px-2 py-0.5 rounded border text-[8px] font-bold uppercase tracking-wider ${st.textColorClass} bg-zinc-950/60`}>
                  {st.status}
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-3 gap-2 py-2 border-t border-b border-zinc-900/40 text-[9px] font-mono leading-tight mb-3">
                {st.techData.map((data, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <span className="text-zinc-600 block uppercase tracking-tighter">{data.label}</span>
                    <span className="text-zinc-300 font-semibold block truncate">{data.value}</span>
                  </div>
                ))}
              </div>

              {/* Tap Indicator Button layout */}
              <div className="flex justify-between items-center text-[10px] font-bold">
                <span className="text-zinc-500 text-[8px] uppercase tracking-widest font-semibold">
                  {st.isExternal ? 'REDIRECT EXTERNAL LINK' : 'SLIDEOUT CONTROLLER'}
                </span>
                <span className={`flex items-center gap-1.5 ${st.textColorClass}`}>
                  <span>{st.isExternal ? 'LAUNCH PORTAL' : 'OPEN INTERFACE'}</span>
                  {st.isExternal ? <ExternalLink size={11} /> : <ChevronRight size={12} />}
                </span>
              </div>
            </motion.div>
          );
        })}
      </main>

      {/* FOOTER BAR */}
      <footer className="border-t border-zinc-900 pt-4 flex justify-between items-center text-[9px] text-zinc-600">
        <span>SECURITY CORE V1.49</span>
        <span className="text-glow text-teal-500 font-bold uppercase tracking-widest flex items-center gap-1">
          <Zap size={10} /> LINK ENCRYPTED
        </span>
      </footer>

    </div>
  );
}
