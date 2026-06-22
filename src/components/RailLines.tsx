import { motion } from 'motion/react';

interface RailLineSegment {
  x1: string;
  y1: string;
  x2: string;
  y2: string;
}

interface RailLineData {
  id: string;
  name: string;
  color: string;
  glowColor: string;
  segments: RailLineSegment[];
  outwardX: string[];
  outwardY: string[];
  inwardX: string[];
  inwardY: string[];
  dotOutwardTimes: number[];
  dotInwardTimes: number[];
  dotColors: string[];
}

export default function RailLines() {
  const rails: RailLineData[] = [
    {
      id: 'scrub',
      name: 'Scrub Sync',
      color: 'rgba(20, 184, 166, 0.4)', // Teal
      glowColor: '#14b8a6',
      segments: [
        { x1: '50%', y1: '54%', x2: '20%', y2: '25%' },
        { x1: '20%', y1: '25%', x2: '19%', y2: '25%' },
        { x1: '19%', y1: '25%', x2: '19%', y2: '22%' }
      ],
      outwardX: ['50%', '20%', '19%', '19%'],
      outwardY: ['54%', '25%', '25%', '22%'],
      inwardX: ['19%', '19%', '20%', '50%'],
      inwardY: ['22%', '25%', '25%', '54%'],
      dotOutwardTimes: [0, 0.76, 0.87, 1],
      dotInwardTimes: [0, 0.13, 0.24, 1],
      dotColors: ['#2dd4bf', '#0d9488']
    },
    {
      id: 'fraud',
      name: 'Fraud Telemetry',
      color: 'rgba(245, 158, 11, 0.4)', // Amber
      glowColor: '#f59e0b',
      segments: [
        { x1: '52%', y1: '49%', x2: '76%', y2: '33%' },
        { x1: '76%', y1: '33%', x2: '69%', y2: '33%' },
        { x1: '69%', y1: '33%', x2: '66%', y2: '39%' }
      ],
      outwardX: ['52%', '76%', '69%', '66%'],
      outwardY: ['49%', '33%', '33%', '39%'],
      inwardX: ['66%', '69%', '76%', '52%'],
      inwardY: ['39%', '33%', '33%', '49%'],
      dotOutwardTimes: [0, 0.71, 0.87, 1],
      dotInwardTimes: [0, 0.13, 0.29, 1],
      dotColors: ['#fbbf24', '#d97706']
    },
    {
      id: 'chat',
      name: 'Chat Streams',
      color: 'rgba(168, 85, 247, 0.4)', // Purple
      glowColor: '#a855f7',
      segments: [
        { x1: '51%', y1: '52%', x2: '28%', y2: '72%' },
        { x1: '28%', y1: '72%', x2: '18%', y2: '72%' },
        { x1: '18%', y1: '72%', x2: '18%', y2: '80%' }
      ],
      outwardX: ['51%', '28%', '18%', '18%'],
      outwardY: ['52%', '72%', '72%', '80%'],
      inwardX: ['18%', '18%', '28%', '51%'],
      inwardY: ['80%', '72%', '72%', '52%'],
      dotOutwardTimes: [0, 0.74, 0.86, 1],
      dotInwardTimes: [0, 0.14, 0.26, 1],
      dotColors: ['#c084fc', '#7e22ce']
    },
    {
      id: 'payment',
      name: 'Payment Ledger',
      color: 'rgba(59, 130, 246, 0.4)', // Blue
      glowColor: '#3b82f6',
      segments: [
        { x1: '48%', y1: '52%', x2: '71%', y2: '70%' },
        { x1: '71%', y1: '70%', x2: '80%', y2: '70%' },
        { x1: '80%', y1: '70%', x2: '80%', y2: '78%' }
      ],
      outwardX: ['48%', '71%', '80%', '80%'],
      outwardY: ['52%', '70%', '70%', '78%'],
      inwardX: ['80%', '80%', '71%', '48%'],
      inwardY: ['78%', '70%', '70%', '52%'],
      dotOutwardTimes: [0, 0.74, 0.86, 1],
      dotInwardTimes: [0, 0.14, 0.26, 1],
      dotColors: ['#60a5fa', '#1d4ed8']
    }
  ];

  interface AgentStyle {
    helmetColor: string;
    visorColor: string;
    visorGlow: string;
    suitColor: string;
    accentColor: string;
    backpackColor: string;
    legColor: string;
  }

  const AGENT_STYLES: Record<string, AgentStyle> = {
    scrub: {
      helmetColor: '#0f172a',   // Sleek Dark Navy/Graphite
      visorColor: '#00f2fe',    // High-Luminance Cyber Cyan Visor
      visorGlow: '#00f2fe',     // Cyan neon glow
      suitColor: '#0d9488',     // Pulse Teal Tech Jumpsuit
      accentColor: '#34d399',    // Vibrant Emerald piping
      backpackColor: '#115e59',  // Deep Teal Battery
      legColor: '#0f766e',      // Teal operational trousers
    },
    fraud: {
      helmetColor: '#1e293b',   // Solid Dark Grey 
      visorColor: '#facc15',    // Hazard Gold/Yellow Visor
      visorGlow: '#fbbf24',     // Bright Gold Glow
      suitColor: '#f97316',     // Intense Warning Orange jumpsuit
      accentColor: '#fef08a',    // Ultra Bright yellow details/harness
      backpackColor: '#431407',  // Rich Crimson/Rust backpack
      legColor: '#7c2d12',      // Dark Rust/Orange legs
    },
    chat: {
      helmetColor: '#172554',   // Midnight Indigo
      visorColor: '#f43f5e',    // Electric Coral/Pink Visor
      visorGlow: '#f43f5e',     // Pink flare
      suitColor: '#a855f7',     // Deep Violet jumpsuit  
      accentColor: '#fae8ff',    // Pale lavender glowing line
      backpackColor: '#4c1d95',  // Dark Obsidian Purple pack
      legColor: '#581c87',      // Royal Purple boots
    },
    payment: {
      helmetColor: '#0f172a',   // Deep Space Obsidian
      visorColor: '#38bdf8',    // Bright electric Sky Blue
      visorGlow: '#38bdf8',     // Sky Blue illumination
      suitColor: '#2563eb',     // Rich Cobalt Blue uniform
      accentColor: '#dbeafe',    // ICE polar white-blue highlights
      backpackColor: '#1e3a8a',  // Nuclear power core Navy pack
      legColor: '#1d4ed8',      // Tactical blue pants
    }
  };

  const figures = [
    // Scrub Sync Line (5 agents - spaced out continuously)
    {
      id: 'scrub-1',
      styleKey: 'scrub',
      left: ['19%', '19%', '20%', '50%', '50%', '20%', '19%', '19%', '19%'],
      top: ['22%', '25%', '25%', '54%', '54%', '25%', '25%', '22%', '22%'],
      scaleX: [1, 1, 1, 1, -1, -1, -1, -1, 1],
      duration: 15,
      delay: 0
    },
    {
      id: 'scrub-2',
      styleKey: 'scrub',
      left: ['19%', '19%', '20%', '50%', '50%', '20%', '19%', '19%', '19%'],
      top: ['22%', '25%', '25%', '54%', '54%', '25%', '25%', '22%', '22%'],
      scaleX: [1, 1, 1, 1, -1, -1, -1, -1, 1],
      duration: 15,
      delay: -3
    },
    {
      id: 'scrub-3',
      styleKey: 'scrub',
      left: ['19%', '19%', '20%', '50%', '50%', '20%', '19%', '19%', '19%'],
      top: ['22%', '25%', '25%', '54%', '54%', '25%', '25%', '22%', '22%'],
      scaleX: [1, 1, 1, 1, -1, -1, -1, -1, 1],
      duration: 15,
      delay: -6
    },
    {
      id: 'scrub-4',
      styleKey: 'scrub',
      left: ['19%', '19%', '20%', '50%', '50%', '20%', '19%', '19%', '19%'],
      top: ['22%', '25%', '25%', '54%', '54%', '25%', '25%', '22%', '22%'],
      scaleX: [1, 1, 1, 1, -1, -1, -1, -1, 1],
      duration: 15,
      delay: -9
    },
    {
      id: 'scrub-5',
      styleKey: 'scrub',
      left: ['19%', '19%', '20%', '50%', '50%', '20%', '19%', '19%', '19%'],
      top: ['22%', '25%', '25%', '54%', '54%', '25%', '25%', '22%', '22%'],
      scaleX: [1, 1, 1, 1, -1, -1, -1, -1, 1],
      duration: 15,
      delay: -12
    },

    // Fraud Telemetry Line (5 agents)
    {
      id: 'fraud-1',
      styleKey: 'fraud',
      left: ['66%', '69%', '76%', '52%', '52%', '76%', '69%', '66%', '66%'],
      top: ['39%', '33%', '33%', '49%', '49%', '33%', '33%', '39%', '39%'],
      scaleX: [1, 1, -1, -1, 1, -1, -1, -1, -1],
      duration: 16,
      delay: 0
    },
    {
      id: 'fraud-2',
      styleKey: 'fraud',
      left: ['66%', '69%', '76%', '52%', '52%', '76%', '69%', '66%', '66%'],
      top: ['39%', '33%', '33%', '49%', '49%', '33%', '33%', '39%', '39%'],
      scaleX: [1, 1, -1, -1, 1, -1, -1, -1, -1],
      duration: 16,
      delay: -3.2
    },
    {
      id: 'fraud-3',
      styleKey: 'fraud',
      left: ['66%', '69%', '76%', '52%', '52%', '76%', '69%', '66%', '66%'],
      top: ['39%', '33%', '33%', '49%', '49%', '33%', '33%', '39%', '39%'],
      scaleX: [1, 1, -1, -1, 1, -1, -1, -1, -1],
      duration: 16,
      delay: -6.4
    },
    {
      id: 'fraud-4',
      styleKey: 'fraud',
      left: ['66%', '69%', '76%', '52%', '52%', '76%', '69%', '66%', '66%'],
      top: ['39%', '33%', '33%', '49%', '49%', '33%', '33%', '31%', '39%'],
      scaleX: [1, 1, -1, -1, 1, -1, -1, -1, -1],
      duration: 16,
      delay: -9.6
    },
    {
      id: 'fraud-5',
      styleKey: 'fraud',
      left: ['66%', '69%', '76%', '52%', '52%', '76%', '69%', '66%', '66%'],
      top: ['39%', '33%', '33%', '49%', '49%', '33%', '33%', '39%', '39%'],
      scaleX: [1, 1, -1, -1, 1, -1, -1, -1, -1],
      duration: 16,
      delay: -12.8
    },

    // Chat Streams Line (5 agents)
    {
      id: 'chat-1',
      styleKey: 'chat',
      left: ['18%', '18%', '28%', '51%', '51%', '28%', '18%', '18%', '18%'],
      top: ['80%', '72%', '72%', '52%', '52%', '72%', '72%', '80%', '80%'],
      scaleX: [1, 1, 1, 1, -1, -1, -1, -1, 1],
      duration: 15,
      delay: 0
    },
    {
      id: 'chat-2',
      styleKey: 'chat',
      left: ['18%', '18%', '28%', '51%', '51%', '28%', '18%', '18%', '18%'],
      top: ['80%', '72%', '72%', '52%', '52%', '72%', '72%', '80%', '80%'],
      scaleX: [1, 1, 1, 1, -1, -1, -1, -1, 1],
      duration: 15,
      delay: -3
    },
    {
      id: 'chat-3',
      styleKey: 'chat',
      left: ['18%', '18%', '28%', '51%', '51%', '28%', '18%', '18%', '18%'],
      top: ['80%', '72%', '72%', '52%', '52%', '72%', '72%', '80%', '80%'],
      scaleX: [1, 1, 1, 1, -1, -1, -1, -1, 1],
      duration: 15,
      delay: -6
    },
    {
      id: 'chat-4',
      styleKey: 'chat',
      left: ['18%', '18%', '28%', '51%', '51%', '28%', '18%', '18%', '18%'],
      top: ['80%', '72%', '72%', '52%', '52%', '72%', '72%', '80%', '80%'],
      scaleX: [1, 1, 1, 1, -1, -1, -1, -1, 1],
      duration: 15,
      delay: -9
    },
    {
      id: 'chat-5',
      styleKey: 'chat',
      left: ['18%', '18%', '28%', '51%', '51%', '28%', '18%', '18%', '18%'],
      top: ['80%', '72%', '72%', '52%', '52%', '72%', '72%', '80%', '80%'],
      scaleX: [1, 1, 1, 1, -1, -1, -1, -1, 1],
      duration: 15,
      delay: -12
    },

    // Payment Ledger Line (5 agents)
    {
      id: 'payment-1',
      styleKey: 'payment',
      left: ['80%', '80%', '71%', '48%', '48%', '71%', '80%', '80%', '80%'],
      top: ['78%', '70%', '70%', '52%', '52%', '70%', '70%', '78%', '78%'],
      scaleX: [-1, -1, -1, -1, 1, 1, 1, 1, -1],
      duration: 17,
      delay: 0
    },
    {
      id: 'payment-2',
      styleKey: 'payment',
      left: ['80%', '80%', '71%', '48%', '48%', '71%', '80%', '80%', '80%'],
      top: ['78%', '70%', '70%', '52%', '52%', '70%', '70%', '78%', '78%'],
      scaleX: [-1, -1, -1, -1, 1, 1, 1, 1, -1],
      duration: 17,
      delay: -3.4
    },
    {
      id: 'payment-3',
      styleKey: 'payment',
      left: ['80%', '80%', '71%', '48%', '48%', '71%', '80%', '80%', '80%'],
      top: ['78%', '70%', '70%', '52%', '52%', '70%', '70%', '78%', '78%'],
      scaleX: [-1, -1, -1, -1, 1, 1, 1, 1, -1],
      duration: 17,
      delay: -6.8
    },
    {
      id: 'payment-4',
      styleKey: 'payment',
      left: ['80%', '80%', '71%', '48%', '48%', '71%', '80%', '80%', '80%'],
      top: ['78%', '70%', '70%', '52%', '52%', '70%', '70%', '78%', '78%'],
      scaleX: [-1, -1, -1, -1, 1, 1, 1, 1, -1],
      duration: 17,
      delay: -10.2
    },
    {
      id: 'payment-5',
      styleKey: 'payment',
      left: ['80%', '80%', '71%', '48%', '48%', '71%', '80%', '80%', '80%'],
      top: ['78%', '70%', '70%', '52%', '52%', '70%', '70%', '78%', '78%'],
      scaleX: [-1, -1, -1, -1, 1, 1, 1, 1, -1],
      duration: 17,
      delay: -13.6
    }
  ];

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-10" id="rail-lines-container">
      {/* Sprite-specific walk cycle animation keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes legWalkLeft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-1.5px) scaleY(0.85); }
        }
        @keyframes legWalkRight {
          0%, 100% { transform: translateY(-1.5px) scaleY(0.85); }
          50% { transform: translateY(0); }
        }
        @keyframes bodyBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(0.8px); }
        }
      ` }} />

      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ mixBlendMode: 'screen' }} id="rail-lines-svg">
        <defs>
          {rails.map((rail) => (
            <linearGradient key={`grad-${rail.id}`} id={`grad-${rail.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(20, 184, 166, 0.6)" stopOpacity={0.8} />
              <stop offset="100%" stopColor={rail.glowColor} stopOpacity={0.2} />
            </linearGradient>
          ))}
          {/* Glow filter */}
          <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background connector rails */}
        {rails.map((rail) => (
          <g key={rail.id} id={`rail-group-${rail.id}`}>
            {/* Outer glow line */}
            {rail.segments.map((seg, idx) => (
              <line
                key={`glow-${rail.id}-${idx}`}
                id={`glow-line-${rail.id}-${idx}`}
                x1={seg.x1}
                y1={seg.y1}
                x2={seg.x2}
                y2={seg.y2}
                stroke={rail.glowColor}
                strokeWidth="3"
                strokeOpacity="0.15"
                filter="url(#neon-glow)"
              />
            ))}
            {/* Inner pathway rail */}
            {rail.segments.map((seg, idx) => (
              <line
                key={`inner-${rail.id}-${idx}`}
                id={`path-line-${rail.id}-${idx}`}
                x1={seg.x1}
                y1={seg.y1}
                x2={seg.x2}
                y2={seg.y2}
                stroke={rail.color}
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            ))}
          </g>
        ))}

        {/* Moving Data Packets / Dots */}
        {rails.map((rail) => (
          <g key={`dots-${rail.id}`} id={`dots-group-${rail.id}`}>
            {/* Dot 1: Centrifugal (outward) */}
            <motion.circle
              r="4.5"
              fill={rail.dotColors[0]}
              filter="url(#neon-glow)"
              animate={{
                cx: rail.outwardX,
                cy: rail.outwardY
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: 'linear',
                times: rail.dotOutwardTimes
              }}
              id={`pack1-${rail.id}`}
            />

            {/* Dot 2: Offset Centripetal (inward) */}
            <motion.circle
              r="3.5"
              fill={rail.dotColors[1]}
              filter="url(#neon-glow)"
              animate={{
                cx: rail.inwardX,
                cy: rail.inwardY
              }}
              transition={{
                duration: 3.5,
                delay: 1.8,
                repeat: Infinity,
                ease: 'linear',
                times: rail.dotInwardTimes
              }}
              id={`pack2-${rail.id}`}
            />

            {/* Dot 3: Secondary Centrifugal (Fast/Tiny) */}
            <motion.circle
              r="2.5"
              fill="#ffffff"
              filter="url(#neon-glow)"
              animate={{
                cx: rail.outwardX,
                cy: rail.outwardY
              }}
              transition={{
                duration: 2.5,
                delay: 0.8,
                repeat: Infinity,
                ease: 'linear',
                times: rail.dotOutwardTimes
              }}
              id={`pack3-${rail.id}`}
            />
          </g>
        ))}
      </svg>

      {/* Mini Walking Sprites along Rails */}
      {figures.map((fig) => {
        const style = AGENT_STYLES[fig.styleKey as keyof typeof AGENT_STYLES] || AGENT_STYLES.scrub;
        return (
          <motion.div
            key={`figure-${fig.id}`}
            className="absolute w-12 h-12 -translate-x-1/2 -translate-y-[85%] pointer-events-none flex items-center justify-center select-none"
            animate={{
              left: fig.left,
              top: fig.top,
              scaleX: fig.scaleX
            }}
            transition={{
              left: {
                duration: fig.duration,
                repeat: Infinity,
                ease: 'linear',
                times: [0, 0.06, 0.11, 0.46, 0.53, 0.88, 0.93, 0.99, 1],
                delay: fig.delay
              },
              top: {
                duration: fig.duration,
                repeat: Infinity,
                ease: 'linear',
                times: [0, 0.06, 0.11, 0.46, 0.53, 0.88, 0.93, 0.99, 1],
                delay: fig.delay
              },
              scaleX: {
                duration: fig.duration,
                repeat: Infinity,
                ease: 'linear',
                times: [0, 0.06, 0.11, 0.46, 0.53, 0.88, 0.93, 0.99, 1],
                delay: fig.delay
              }
            }}
            id={`fig-sprite-${fig.id}`}
          >
            {/* Pixel art tech agent style SVG */}
            <svg 
              width="44" 
              height="44" 
              viewBox="0 0 10 10" 
              style={{ shapeRendering: 'crispEdges', overflow: 'visible' }}
              id={`fig-svg-${fig.id}`}
            >
              {/* Figure body group with bobbing */}
              <g style={{ animation: 'bodyBob 0.5s infinite ease-in-out', transformOrigin: '5px 10px' }}>
                {/* Glowing jetpack / life-support backpack module */}
                <rect x="1" y="4.2" width="1.6" height="3.4" rx="0.3" fill={style.backpackColor} />
                <rect x="0.6" y="5.2" width="0.5" height="1.4" fill={style.visorColor} style={{ filter: `drop-shadow(0 0 1px ${style.visorColor})` }} />

                {/* Helmet/Head */}
                <rect x="2.8" y="1" width="4.8" height="3.8" fill={style.helmetColor} rx="0.6" />
                
                {/* Glowing Specialized Personalized Neon Visor */}
                <rect x="5.1" y="1.8" width="2.3" height="1.5" fill={style.visorColor} style={{ filter: `drop-shadow(0 0 2px ${style.visorGlow})` }} rx="0.3" />
                
                {/* Mini Visor Glossy shine reflection pixel */}
                <rect x="6.4" y="2.0" width="0.6" height="0.5" fill="#ffffff" opacity="0.85" />
                
                {/* High-tech tactical coat/jumpsuit */}
                <rect x="2.4" y="4.8" width="5.2" height="3.2" fill={style.suitColor} rx="0.4" />
                
                {/* Glowing neon alignment lines/harness details */}
                <rect x="3.4" y="4.8" width="0.8" height="2.2" fill={style.accentColor} />
                <rect x="3.2" y="7.0" width="3.6" height="0.6" fill={style.accentColor} opacity="0.9" />

                {/* Extra Personalized Accessories */}
                {fig.styleKey === 'scrub' && (
                  <>
                    {/* Scrub twin telemetry scanning antennae */}
                    <rect x="3.3" y="0.2" width="0.5" height="1.0" fill={style.accentColor} />
                    <rect x="6.2" y="0.2" width="0.5" height="1.0" fill={style.accentColor} />
                    <circle cx="3.5" cy="0.1" r="0.4" fill={style.visorColor} />
                    <circle cx="6.4" cy="0.1" r="0.4" fill={style.visorColor} />
                  </>
                )}

                {fig.styleKey === 'fraud' && (
                  <>
                    {/* Fraud sentinel flashing beacon */}
                    <rect x="4.6" y="-0.2" width="1.0" height="1.2" fill="#ef4444" rx="0.2" style={{ filter: 'drop-shadow(0 0 2.5px #f43f5e)' }} />
                    <circle cx="5.1" cy="-0.3" r="0.3" fill="#ffffff" />
                    {/* Defense hazard chest badge symbol */}
                    <polygon points="4.4,5.4 5.6,5.4 5.0,6.4" fill={style.visorColor} />
                  </>
                )}

                {fig.styleKey === 'chat' && (
                  <>
                    {/* Chat comm-headphones band and side receivers */}
                    <rect x="2.3" y="1.6" width="0.6" height="2.2" rx="0.2" fill="#f43f5e" />
                    <rect x="7.1" y="1.6" width="0.6" height="2.2" rx="0.2" fill="#f43f5e" />
                    <path d="M 2.9,1.2 Q 5.0,0.3 7.1,1.2" stroke="#f43f5e" strokeWidth="0.5" fill="none" />
                  </>
                )}

                {fig.styleKey === 'payment' && (
                  <>
                    {/* Payment holding glowing digital transaction sheet/chip */}
                    <rect x="7.6" y="5.0" width="1.8" height="1.8" rx="0.3" fill="#facc15" style={{ filter: 'drop-shadow(0 0 2.5px #eab308)' }} />
                    <line x1="8.1" y1="5.0" x2="8.1" y2="6.8" stroke="#ffffff" strokeWidth="0.4" />
                    <line x1="7.6" y1="5.9" x2="9.4" y2="5.9" stroke="#ffffff" strokeWidth="0.4" />
                  </>
                )}
              </g>
              
              {/* Walking Leg L Group */}
              <g style={{ animation: 'legWalkLeft 0.5s infinite step-end', transformOrigin: '3.6px 8px' }}>
                <rect x="2.8" y="8" width="1.3" height="1.5" fill={style.legColor} />
                <rect x="2.5" y="9.1" width="1.7" height="0.9" fill={style.accentColor} rx="0.2" />
              </g>

              {/* Walking Leg R Group */}
              <g style={{ animation: 'legWalkRight 0.5s infinite step-end', transformOrigin: '5.8px 8px' }}>
                <rect x="4.9" y="8" width="1.3" height="1.5" fill={style.legColor} />
                <rect x="4.6" y="9.1" width="1.7" height="0.9" fill={style.accentColor} rx="0.2" />
              </g>
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
}
