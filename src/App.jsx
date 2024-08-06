import '../public/css/index.css'
import { Dashboard } from './components/content/Dashboard'
import { LeftBar } from './components/leftBar/LeftBar'
// import useSidebar from './hooks/useSideBar'

function App() {
  return (
    <>
    <LeftBar />
    <Dashboard />
    </>
  )
}

export default App
