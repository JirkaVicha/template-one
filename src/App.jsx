import { useState } from "react"
import Header from "./components/Header"
import LeftSide from "./components/LeftSide"
import RightSide from "./components/RightSide"
import Content from "./components/Content"
import Footer from "./components/Footer"
import About from "./components/About"
import Projects from "./components/Projects"
import Services from "./components/Services"

const menuItems = ['home', 'about', 'projects', 'services']

const App = () => {
  const[selectedMenuItem, setSelectedMenuItem] = useState('home')

  const handleMenuItem = (item) => {
    setSelectedMenuItem(item)
  }

  const renderComponent = () => {
    switch (selectedMenuItem) {
      case 'home':
        return <Content />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'services':
        return <Services />;
      default:
        return null;
    }
  }

  return (
    <div className='container'>
      <div className="box">
       <Header />
        <div className="middle-container">
          <LeftSide
            handleMenuItem={handleMenuItem}
            menuItems={menuItems} 
          />
          {renderComponent(selectedMenuItem)} 
          <RightSide />
        </div>
          <Footer /> 
      </div>
    </div>
  )
}

export default App