import React, { useState } from "react";
import "./Home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Home(){

     const [inputInfos, setInputInfos] = useState("");
     const [error, setError] = useState(null);
     const navigate = useNavigate();

     async function searchInfos(e){
          e.preventDefault();
          try {
               setError(null)
               const userName = inputInfos;
               console.log(userName);
               const response = await axios.get(`https://api.github.com/users/${userName}`);
               console.log(response.data);
               const user = response.data;
               localStorage.setItem("user", JSON.stringify(user));

               navigate("/perfil");
          } catch (error) {
               setError(error.message);
               console.log(error.message);
          }
     }


     return(
        <div className="home-container">
            <div className="search-container">
               <h2 className="search-title">Search Devs</h2>
               <div className="search-input-box">
                    <form onSubmit={searchInfos} className="search-form">
                         <input type="text" className="search-input" value={inputInfos} onChange={(e)=> setInputInfos(e.target.value)} placeholder="Type de username here..."/>
                         <button type="submit" className="search-button"><span className="material-symbols-outlined">search</span>Buscar</button>
                    </form>
                    {error && <div className="error-msg">O usuário não existe</div>}
               </div>
            </div>
        </div>
     )
}

export default Home;