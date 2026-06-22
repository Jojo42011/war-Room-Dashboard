import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ActivePanel } from '../types';
import { Target, Activity, Shield, MessageSquare, CreditCard, Cpu, Radio, Zap } from 'lucide-react';

interface PolygonStation {
  id: 'scrub' | 'fraud' | 'chat' | 'payment' | 'jarvis';
  name: string;
  subName: string;
  status: string;
  statusColorClass: string;
  glowClass: string;
  points: string;
  centerPercent: { x: string; y: string };
  icon: any;
  techData: { label: string; value: string }[];
}

interface HotspotsProps {
  onSelectStation: (station: 'scrub' | 'fraud' | 'chat' | 'payment' | 'jarvis') => void;
  activePanel: ActivePanel;
}

export default function StationHotspots({ onSelectStation, activePanel }: HotspotsProps) {
  const [hoveredStation, setHoveredStation] = useState<string | null>(null);

  const stations: PolygonStation[] = [
    {
      id: 'scrub',
      name: 'SCRUB AGENT',
      subName: 'Telemetry Purging',
      status: 'ONLINE',
      statusColorClass: 'text-teal-400 bg-teal-950/40 border-teal-500/30',
      glowClass: 'station-poly-scrub',
      points: '165,219 437,54 647,144 607,279 397,369 165,259',
      centerPercent: { x: '31%', y: '12%' },
      icon: Activity,
      techData: [
        { label: 'NODE WEIGHTS', value: 'OPTIMAL' },
        { label: 'CORS BYPASS', value: 'SWARM_TUNNEL' },
        { label: 'SCRUB COUNT', value: '3,014 DETECTED' }
      ]
    },
    {
      id: 'fraud',
      name: 'FRAUD PREVENTION',
      subName: 'Adversarial Risk',
      status: 'STANDBY',
      statusColorClass: 'text-amber-400 bg-amber-950/40 border-amber-500/30',
      glowClass: 'station-poly-fraud',
      points: '921,166 1131,76 1403,241 1403,281 1171,391 961,301',
      centerPercent: { x: '66%', y: '15%' },
      icon: Shield,
      techData: [
        { label: 'HEURISTICS', value: 'ARMED' },
        { label: 'THREAT BAR', value: '0.04 - SOLID' },
        { label: 'MONITORING', value: 'IDLE / CALIBRATED' }
      ]
    },
    {
      id: 'chat',
      name: 'CHAT DISPATCH',
      subName: 'Conversational Swarm',
      status: 'OFFLINE',
      statusColorClass: 'text-purple-400 bg-purple-950/40 border-purple-500/30',
      glowClass: 'station-poly-chat',
      points: '130,635 410,520 620,640 585,745 370,840 130,765',
      centerPercent: { x: '29%', y: '67%' },
      icon: MessageSquare,
      techData: [
        { label: 'SOCK LISTENERS', value: 'SLEEP_MODE' },
        { label: 'MODEL DEPLOY', value: 'DISCONNECTED' },
        { label: 'RESOURCES', value: 'STANDBY' }
      ]
    },
    {
      id: 'payment',
      name: 'PAYMENT CLEARANCE',
      subName: 'SWIFT Reconcilities',
      status: 'STANDBY',
      statusColorClass: 'text-blue-400 bg-blue-950/40 border-blue-500/30',
      glowClass: 'station-poly-payment',
      points: '1055,660 1265,540 1545,655 1545,785 1305,860 1090,765',
      centerPercent: { x: '75%', y: '69%' },
      icon: CreditCard,
      techData: [
        { label: 'SWIFT PROTOCOL', value: 'RECONCILED' },
        { label: 'TXN QUEUES', value: 'EMPTY (IDLE)' },
        { label: 'SECURE RECOV', value: 'ACTIVE' }
      ]
    },
    {
      id: 'jarvis',
      name: 'JARVIS COMMAND',
      subName: 'Core Intelligent HQ',
      status: 'CORE ACTIVE',
      statusColorClass: 'text-yellow-400 bg-yellow-950/40 border-yellow-500/30 text-glow',
      glowClass: 'station-poly-jarvis',
      points: '800,341 914,373 964,450 914,527 800,559 686,527 636,450 686,373',
      centerPercent: { x: '50%', y: '45%' },
      icon: Cpu,
      techData: [
        { label: 'INTELLIGENCE', value: 'SWARM_PRIMARY' },
        { label: 'DIRECTIVES', value: 'TUNNEL_SECURE' },
        { label: 'CORE LOAD', value: '78.4% CAP' }
      ]
    }
  ];

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto z-20">
      
      {/* Absolute SVG overlay wrapper scaling to the parent aspect ratios */}
      <svg
        id="station-polygon-overlay"
        viewBox="0 0 1600 900"
        className="absolute inset-0 w-full h-full select-none"
        style={{ pointerEvents: 'none' }}
      >
        <g id="interactive-regions">
          {stations.map((st) => {
            const isActive = activePanel === st.id;
            return (
              <polygon
                key={st.id}
                id={`polygon-platform-${st.id}`}
                points={st.points}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectStation(st.id);
                }}
                onMouseEnter={() => setHoveredStation(st.id)}
                onMouseLeave={() => setHoveredStation(null)}
                className={`station-poly ${st.glowClass} ${
                  isActive ? 'fill-white/5 stroke-sky-400 stroke-[3] opacity-100' : ''
                }`}
              />
            );
          })}
        </g>
      </svg>

      {/* Cybernetic Dynamic Target Diagnostics Card overlay */}
      <AnimatePresence>
        {stations.map((st) => {
          const isHovered = hoveredStation === st.id;
          if (!isHovered) return null;

          const IconComponent = st.icon;

          return (
            <motion.div
              key={`diag-${st.id}`}
              initial={{ opacity: 0, scale: 0.92, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 5 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              style={{
                left: st.centerPercent.x,
                top: st.centerPercent.y,
                transform: 'translate(-50%, -50%)',
              }}
              className="absolute pointer-events-none select-none z-30 w-72 h-auto p-4 rounded border border-zinc-800 bg-zinc-950/95 backdrop-blur-md shadow-[0_0_35px_rgba(0,0,0,0.9)] font-mono space-y-3"
            >
              {/* Card Title Header with Accent Border */}
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2">
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded bg-zinc-900 border border-zinc-800">
                    <IconComponent size={14} className="text-zinc-100" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-zinc-100 uppercase tracking-widest">{st.name}</h4>
                    <span className="text-[8px] text-zinc-500 block -mt-0.5">{st.subName}</span>
                  </div>
                </div>

                <div className={`px-2 py-0.5 rounded border text-[8px] font-bold uppercase tracking-wider ${st.statusColorClass}`}>
                  {st.status}
                </div>
              </div>

              {/* Technical Specifications Readout */}
              <div className="space-y-1.5">
                {st.techData.map((data, idx) => (
                  <div key={idx} className="flex justify-between items-center text-[9px] font-mono leading-none">
                    <span className="text-zinc-500 font-medium">{data.label}</span>
                    <span className="text-zinc-300 font-bold tracking-wider">{data.value}</span>
                  </div>
                ))}
              </div>

              {/* Interaction Call to Action Footnote */}
              <div className="flex items-center gap-1 text-[8px] text-zinc-500 uppercase tracking-widest pt-1 border-t border-zinc-900/60 font-semibold justify-between">
                <span>TARGET LOCK: ENGAGED</span>
                <span className="animate-pulse text-zinc-400 flex items-center gap-0.5">
                  <Zap size={8} /> CLICK TO COMMUNICATE
                </span>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
