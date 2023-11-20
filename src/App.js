
import './App.css';
import NavBar from './components/navbar/NavBar';
import SideBar from './components/sidebar/SideBar';
import DashBoard from './components/dashboard/DashBoard';

function App() {
  return (
    <div className="App"> 
      <NavBar/>
      <SideBar/>
      <DashBoard/>
    </div>
  );
}

export default App;
