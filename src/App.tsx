import "./App.css";
import { gsap } from "gsap";
import NavBar from "./components/Shared/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import MenuPage from "./pages/MenuPage/MenuPage";
import { 
  BrowserRouter as Router ,
  Routes,
  Route
} from "react-router-dom";
import AdminDashBoard from "./pages/Admin/AdminDashBoard/AdminDashBoard";


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/menu" element={ <MenuPage />} />
        <Route path="/admin/dashboard" element={ <AdminDashBoard/>} />
      </Routes>
    </Router>
  );
}

export default App;
