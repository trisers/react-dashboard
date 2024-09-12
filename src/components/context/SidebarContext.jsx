import React, { createContext, useState, useContext } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const toggleSidebar = () => setIsSidebarCollapsed(prevState => !prevState);
  const toggleMobileView = () => setMobileView(prevState => !prevState);

  return (
    <SidebarContext.Provider value={{ isSidebarCollapsed, toggleSidebar, mobileView, toggleMobileView }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
