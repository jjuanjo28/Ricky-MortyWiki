import React,{ useState , useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import '../../App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import Card from "../../components/Card/Card"
import Filter from "../../components/Filter/Filter"
import Search from "../../components/Search/Search"
import Pagination from '../../components/Pagination/Pagination';
import Episodes from '../../Pages/Episodes';
import Location from '../../Pages/Location';


const Home = () => {
    const [fetchData, setFetchData] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [search, setSearch] = useState("")
    let [status, updateStatus] = useState("");
    let [gender, updateGender] = useState("");
    let [species, updateSpecies] = useState("");
    
    
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
    let { info, results } = fetchData
    
    // creo un use efect y cada vez que cambie el estado de api se re ejecuta la accion
       useEffect(() => {
      async function capture () {
        let data = await fetch(api)
        const info = await data.json()
        setFetchData(info)
        }
       capture() 
    
    }, [api])
    
    
    
      return (
        <div className="App">
          <h1 className="text-center mb-3">Characters</h1>
          <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className="container">
      <div className="row">
        <Filter
          pageNumber={pageNumber}
      status={status}
      updateStatus={updateStatus}
      updateGender={updateGender}
      updateSpecies={updateSpecies}
      updatePageNumber={setPageNumber}
        />
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/home/" results={results}/>
          </div>
          <Pagination
      info={info}
      pageNumber={pageNumber}
      setPageNumber={setPageNumber}
      
    />
    
        </div>
      </div>
      </div>
        </div>
      )
}

export default Home;
