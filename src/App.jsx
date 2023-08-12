import { Header, RecipeeCard } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeeDetails from "./pages/RecipeeDetails";

const App = () => {
  return (
    <div className="flex flex-col">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/recipee/:id" element={<RecipeeDetails />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
