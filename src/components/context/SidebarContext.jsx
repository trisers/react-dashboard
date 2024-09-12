import React, { createContext, useState, useContext, useEffect } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [mobileView, setMobileView] = useState(window.innerWidth <= 768); 

  const toggleSidebar = () => setIsSidebarCollapsed(prevState => !prevState); //open or close
  const closeSidebar = () => setIsSidebarCollapsed(true);
  const toggleMobileView = () => setMobileView(prevState => !prevState);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMobileView(true);
        setIsSidebarCollapsed(true); 
      } else {
        setMobileView(false);
        setIsSidebarCollapsed(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SidebarContext.Provider
      value={{ isSidebarCollapsed, toggleSidebar, closeSidebar, mobileView, toggleMobileView }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
