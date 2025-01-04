"use client"
import Titlebar from '../components/Titlebar'
import Sidebar from '../components/Sidebar'
import Explorer from '../components/Explorer'
import Bottombar from '../components/Footer'
import Tabsbar from './tabsbar'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import Socials from './Socials'

const Layout = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    const main = document.getElementById('main-editor')
    main.scrollTop = 0
  }, [router.pathname])

  return (
    <>
      <Titlebar />
      <div className="flex ">
        <Socials />
        <Explorer />
        <div className="w-full">
          <Tabsbar />
          <main
            id="main-editor"
            className="p-8 text-text-color font-jetbrains-mono flex-1 h-[85vh] overflow-y-auto scrollbar-thin scrollbar-thumb-accent-color scrollbar-track-scrollbar-track-bg smooth-scroll"
          >
            {children}
          </main>
        </div>
      </div>
      <Bottombar />
    </>
  )
}

export default Layout
