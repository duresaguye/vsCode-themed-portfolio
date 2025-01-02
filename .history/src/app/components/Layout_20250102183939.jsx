import Titlebar from './Titlebar'
import Sidebar from './Sidebar'
import Tabsbar from './tabsbar'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
  // set scroll to top of main content on url pathname change
  const router = useRouter()
  useEffect(() => {
    const main = document.getElementById('main-editor')
    main.scrollTop = 0
  }, [router.pathname])
  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: '100%' }}>
          <Tabsbar />
          <main id="main-editor" className={styles.content}>
            {children}
          </main>
        </div>
      </div>
      <Bottombar />
    </>
  )
}

export default Layout
