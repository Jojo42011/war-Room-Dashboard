/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ActivePanel } from './types';
import RailLines from './components/RailLines';
import StationHotspots from './components/StationHotspots';
import AgentPanel from './components/AgentPanel';
import MobileHUD from './components/MobileHUD';

// Static import for the generated 16:9 cyberpunk subway dashboard background
// @ts-ignore
import cyberpunkSubwayBg from './assets/images/cyberpunk_subway_bg_1780612953530.png';

export default function App() {
  const [activePanel, setActivePanel] = useState<ActivePanel>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Monitor responsive screen dimensions for strict mobile optimization
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Keyboard handler to close panels/modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActivePanel(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectStation = (station: 'scrub' | 'fraud' | 'chat' | 'payment' | 'jarvis') => {
    if (station === 'jarvis') {
      window.open('https://leadsmart-ringba-scrub.fly.dev/jarvis', '_blank');
    } else if (station === 'payment') {
      window.open('https://leadsmart-ringba-scrub.fly.dev/payments', '_blank');
    } else if (station === 'scrub') {
      window.open('https://leadsmart-ringba-scrub.fly.dev/#overview', '_blank');
    } else {
      setActivePanel(station);
    }
  };

  return (
    <main className="relative w-screen h-screen bg-zinc-950 flex flex-col items-stretch justify-start overflow-hidden font-mono text-zinc-300">
      
      {/* Decorative Grid Mesh Scanline Underneath */}
      <div className="absolute inset-0 pointer-events-none cyber-grid select-none opacity-20"></div>

      {isMobile ? (
        /* Portrait-optimized High-Fidelity Tactical Mobile Cockpit View */
        <MobileHUD activePanel={activePanel} onSelectStation={handleSelectStation} />
      ) : (
        /* 
          FULL SCREEN EDGE-TO-EDGE VIEWPORT FOR DESKTOP:
          No borders, no margins, no padding, filling full 100% width.
          To completely remove the baked-in bottom status panel without drifting layout coordinates,
          we stretch the parent stage to 115% viewport height and align to the top.
          The bottom 15% (which contains the baked-in black status bar) is cleanly pushed off-screen
          and clipped by the body's overflow-hidden.
        */
        <div className="absolute top-0 left-0 w-full h-[115%] overflow-hidden bg-black hidden md:block">
          
          {/* Subway Background Image */}
          <img
            src={cyberpunkSubwayBg}
            alt="Cyberpunk Subway War Room"
            className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none z-0"
            referrerPolicy="no-referrer"
          />

          {/* SVG Connector Lines Overlay */}
          <RailLines />

          {/* Invisible Clickable Station Hotspots */}
          <StationHotspots activePanel={activePanel} onSelectStation={handleSelectStation} />

          {/* Visual Map Backdrop Scanning Noise */}
          <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-black/10 to-black/40 z-10 select-none"></div>
        </div>
      )}

      {/* Sleek Sliding Drawers for SCRUB, FRAUD, CHAT, and PAYMENT Agents */}
      <AgentPanel activePanel={activePanel} onClose={() => setActivePanel(null)} />
    </main>
  );
}
