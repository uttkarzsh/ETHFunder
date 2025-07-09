import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home.jsx"
import Navbar from "./components/Navbar.jsx"
import Funder from "./components/Funder.jsx"
import WalletInteract from "./components/WalletInteract.jsx"



function App() {
  return(
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/funder" element={<Funder />} />
          <Route path="/walletinteract" element={<WalletInteract />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
