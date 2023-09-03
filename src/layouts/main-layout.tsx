import { Container, styled } from "@mui/material";
import React, { ReactNode } from 'react';
import MainNavbar from "../components/main-navbar";

const MainLayoutRoot = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    height: '100%',
  }));
  interface MainLayoutProps {
    children: ReactNode;
  }
  
  export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
      <MainLayoutRoot>
         <MainNavbar/>
        {children}
      </MainLayoutRoot>
    );
  };
