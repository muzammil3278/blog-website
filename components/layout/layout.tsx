import React from 'react'
import Header from '@/components/layout/header'
import Logo from '@/components/layout/logo'
import Navbar from '@/components/layout/navbar'
// import Client from '@/components/layout/client'
import Subscribe from '@/components/layout/subscribe'
import Footer from '@/components/layout/footer'


type DashboardLayoutProps = {
  children: React.ReactNode,
};

export default function Layout({ children }: DashboardLayoutProps) {
  return (
    <><Header /><Logo /><Navbar />{children}<Subscribe /><Footer /></>
  );
}