
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from './components/SideBar';

function App() {


  return (
    <div className="app-container">
      <Sidebar></Sidebar>
      <div className="container">
        <Header></Header>
        <Footer></Footer>
      </div>
    </div >
  )
}

export default App
