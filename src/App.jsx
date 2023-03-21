import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Card from "./components/Card/Card";
import Filter from "./components/Filter/Filter";
import Search from "./components/Search/Search";
import Pagination from "./components/Pagination/Pagination";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import CardDetails from "./components/Card/CardDetails";

function App() {
  // capturo la info de la api
  const [fetchData, setFetchData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  let { info, results } = fetchData;

  // creo un use efect y cada vez que cambie el estado de api se re ejecuta la accion
  useEffect(() => {
    async function capture() {
      let data = await fetch(api);
      const info = await data.json();
      setFetchData(info);
    }
    capture();
  }, [api]);

  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/location" element={<Location />} />
        <Route path="/home/:id" element={<CardDetails />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
