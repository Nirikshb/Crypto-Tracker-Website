import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import './App.css';
import { Dashboard } from "./pages/D";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          < path="/Dashboard" element={<Dashboard />}></>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
