import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation/MenuDropdown';
import Dashboard from './Components/Dashboard/Dashboard';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Settings from './Components/Settings/Settings';

function App() {
  return (
      <div className="body">
          <Router>
              <Navigation/>
              <Routes>
                  <Route path="/" exact element={<About/>}/>
                  <Route path="/dashboard" element={<Dashboard/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/settings" element={<Settings/>}/>
              </Routes>
          </Router>
      </div>
  )
}

export default App