import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import Card from "./components/Card";
import Event from "./components/Event";


function App() {
  return (
    <Router>
      <div className="App">
      <Header />
    </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/display" element={<Card />} />
        <Route path="/create" element={<Event />} />
        <Route path="/" element={
          <>
          <Body />
          <Footer />
          </>
          
          } />
      </Routes>

    </Router>

  );
}

export default App;
