
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetStart from './GetStart/getStart';
import Login from './LogIN/login';
import Signup from './SignUP/signup';
import DashboardPage from './Dashboard/dashboardPage';
import CategoryPage from './Categories/categories';
import ItemPage from './Items/itempage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/catogary" element={<CategoryPage />} />
        <Route path= "/dashboard/items" element={<ItemPage/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
