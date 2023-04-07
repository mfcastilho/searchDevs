import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment/moment";

function Profile(){

     const location = useLocation();
     const user = location.state.user;
     const [dateNow, setDateNow] = useState("");
 
     const navigate = useNavigate();
     if(!user){
          navigate("/");
     }

     const [repositories, setRepositories] = useState([]);
     let page = 1;

     async function getUserRepositories(){
          try {
               const response = await axios.get(`https://api.github.com/users/${user.login}/repos?per_page=100&page=${page}`);
               setRepositories(response.data);
               // const updatedAt = response.data.updated_at.split("T")[0]; 
               // setDate();
               response.data.forEach(repository=>{
                    const daysAgo = moment(repository.updated_at).fromNow(true);
                    repository.updated_at = daysAgo;
               })
               console.log(date);
               console.log(repositories);
               page++;
          } catch (error) {
               console.error(error.message);
          }
     }
     
     useEffect(()=>{
          getUserRepositories()
     }, []);

     return(
          <div className="profile-container">
               

               <aside className="sidebar-container">
                    <img className="profile-picture" src={user.avatar_url} alt="" />
                    <div className="profile-infos-box">
                         <h3 className="profile-full-name">{user.name}</h3>
                         <h6 className="profile-username">@{user.login}</h6>
                         <p className="profile-description">{user.bio}</p>
                         <div className="followers-and-stars-box">
                              <div className="followers-box">
                                   <img className="followers-icon-img" src="../../public/followers-icon.png" alt="" />
                                   <span className="followers-quantity">{user.followers}</span>
                                   <span className="followers">followers</span>
                              </div>
                              <div className="following-box">
                                   <img className="followers-icon-img" src="../../public/heart.png" alt="" />
                                   <span className="followers-quantity">{user.following}</span>
                                   <span className="followers">following</span>
                              </div>
                              <div className="stars-box">
                                   <img className="followers-icon-img" src="../../public/star.png" alt="" />
                                   <span className="followers-quantity">100</span>
                                   <span className="followers">stars</span>
                              </div>
                         </div>
                         <div className="profile-others-infos">
                              <div className="links-box">
                                   <img className="images" src="../../public/organization-icon.png" alt="" />
                                   <a href="" className="link"><p className="info">organization</p></a>
                              </div>
                              <div className="links-box">
                                   <img className="images" src="../../public/location-icon.png" alt="" />
                                   <a href="" className="link"><p className="info">location</p></a>
                              </div>
                              <div className="links-box">
                                   <img className="images" src="../../public/email-icon.png" alt="" />
                                   <a href="" className="link"><p className="info">email</p></a>
                              </div>
                              <div className="links-box">
                                   <img className="images" src="../../public/website-icon.png" alt="" />
                                   <a href="" className="link"><p className="info">www.mywebsite.com</p></a>
                              </div>
                              <div className="links-box">
                                   <img className="images" src="../../public/twitter-icon.png" alt="" />
                                   <a href="" className="link"><p className="info">@myTwitter</p></a>
                              </div>
                         </div>
                         <div className="button-box">
                              <button className="back-button">Voltar</button>
                         </div>
                         
                    </div>
               </aside>
               <section className="user-repositories-container">
                    {repositories.map(repository =>(
                         <article key={repository.id} className="repository-infos">
                         <h4 className="repository-name">{repository.name}</h4>
                         <p className="repository-description">
                              {repository.description}
                         </p>
                         <div className="repository-details-box">
                              <div className="wrapper-details">
                                   <img className="followers-icon-img" src="../../public/star2.png" alt="" />
                                   <span className="star-quantity">{repository.stargazers_count}</span>
                                   <span className="stars">stars</span>
                              </div>
                              <div className="wrapper-details">
                                   <span className="separator">.</span>
                                   <span className="updated">Updated {repository.updated_at} days ago</span>
                              </div>
                         </div>
                    </article>
                    ))}
               </section>
              
          </div>
     )
}

export default Profile;