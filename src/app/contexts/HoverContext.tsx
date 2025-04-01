// src/contexts/HoverContext.tsx
import { createContext, useContext, useState } from 'react';

interface HoverContextType {
  isHovered: { x: number; y: number } | null;
  setIsHovered: (hoverState: { x: number; y: number } | null) => void;
}

const HoverContext = createContext<HoverContextType | undefined>(undefined);

export function HoverProvider({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState<{ x: number; y: number } | null>(null);
  return (
    <HoverContext.Provider value={{ isHovered, setIsHovered }}>
      {children}
    </HoverContext.Provider>
  );
}

export function useHover() {
  const context = useContext(HoverContext);
  if (context === undefined) {
    throw new Error('useHover must be used within a HoverProvider');
  }
  return context;
}