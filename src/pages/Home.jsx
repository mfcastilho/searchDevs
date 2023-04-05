import React, { useState } from "react";
import "./Home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Home(){

     const [inputInfos, setInputInfos] = useState("");
     const navigate = useNavigate();

     async function searchInfos(){

     }


     return(
        <div className="home-container">
            <div className="search-container">
               <h2 className="search-title">Search Devs</h2>
               <div className="search-input-box">
                    <form className="search-form">
                         <input type="text" className="search-input" placeholder="Type de username here..."/>
                         
                         <button className="search-button"><span class="material-symbols-outlined">search</span>Buscar</button>
                    </form>
               </div>
            </div>
        </div>
     )
}

export default Home;