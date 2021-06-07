import { useContext, createContext, ReactNode, useState, useEffect, useLayoutEffect } from 'react';

interface MobileContextData {
  isMobile: boolean,
}

interface MobileProviderProps {
  children: ReactNode,
}

const MobileContext = createContext<MobileContextData>(
  {} as MobileContextData
);


export function MobileProvider({ children } : MobileProviderProps) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function updateWidth() {
      if(window.innerWidth < 1025) {
        document.body.className = "o-visible"
        return setIsMobile(true);
      }
      setIsMobile(false);
      document.body.className = "o-hidden"
    }
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);


  return(
    <MobileContext.Provider
      value={{
        isMobile,
      }}>
      {children}
    </MobileContext.Provider>
  );
}

export function useMobile() {
  const context = useContext(MobileContext);
  return context;
}