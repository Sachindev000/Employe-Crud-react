import "./App.css";
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Home from "./components/Home"
import Add from "./components/Add"
import Edit from "./components/Edit"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route   path="/Add" element={<Add />}></Route>
          <Route path="/Edit" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
