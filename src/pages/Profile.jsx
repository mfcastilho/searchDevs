import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment/moment";

function Profile(){

     const user = JSON.parse(localStorage.getItem("user"));
     
     const [totalProfileStars, setTotalProfileStars] = useState(0);
     const [organizations, setOrganizations] = useState([]);

     const navigate = useNavigate();
     if(!user){
          navigate("/");
     }

     const [repositories, setRepositories] = useState([]);
     let page = 1;

     async function getUserRepositories(){
          try {
               const response = await axios.get(`https://api.github.com/users/${user.login}/repos?per_page=200&page=${page}`);
               let totalStars = 0;
               response.data.sort((a, b)=> b.stargazers_count - a.stargazers_count);
               response.data.forEach(repository=>{
                    const daysAgo = moment(repository.updated_at).fromNow(true);
                    repository.updated_at = daysAgo;
                    totalStars += repository.stargazers_count;
                    setTotalProfileStars(totalStars);

               });
               setRepositories(response.data);
               page++;
          } catch (error) {
               console.error(error.message);
          }
     }

     function leaveToTheHomePage(){
          navigate("/");
     }

     function editUserWebSiteLink(){
          const userWebsiteLinkFirstPart = user.blog.split("//")[0];
          if(userWebsiteLinkFirstPart !== "https:" ){
               return `https://${user.blog}`
          }
          return user.blog;
     }

     function editHowUserWebsitelinkWillShow(){
          const userWebSiteLinkFirstPart = user.blog.split("www.")[0];
          if(userWebSiteLinkFirstPart == "https://" ){
               return user.blog.split("www.")[1];
          }

          return user.blog;
     }

     function turningMobileBackButtonBarFRixed(){
          const scrollTop = window.scrollY;

          if(scrollTop > 279){
               document.querySelector(".mobile-button-box").classList.add("isFixed");
               document.querySelector(".profile-container").computedStyleMap.position = "relative";
          }else{
               document.querySelector(".mobile-button-box").classList.remove("isFixed");
          }
     }

     window.addEventListener("scroll", turningMobileBackButtonBarFRixed);

     async function getUserOrganizatios(){
          try {
               
               const response = await axios.get(`https://api.github.com/users/${user.login}/orgs`);
               const orgPrimises = response.data.map( async org=>{
                    const res = await axios.get(`https://api.github.com/orgs/${org.login}`);
                    return res.data;
               })
               const orgData = await Promise.all(orgPrimises);
               setOrganizations(orgData);
          } catch (error) {
               console.log(error.message);
          }
     }

     
     
     useEffect(()=>{
          getUserRepositories();
          getUserOrganizatios();
     }, []);

     return(
          <div className="profile-container">
               
               <div className="header-mobile-container">
                    <div className="top-header-mobile-part">
                         <img className="profile-picture" src={user.avatar_url} alt="" />
                         <div className="wrapper-top-part">
                              <h3 className="profile-full-name">{user.name}</h3>
                              <a href={`https://github.com/${user.login}`} target="_blank" className="profile-username">@{user.login}</a>
                              <p className="profile-description">{user.bio}</p>
                         </div>
                         
                    </div>
                    <div className="profile-infos-box">
                         
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
                                   <span className="followers-quantity">{totalProfileStars}</span>
                                   <span className="followers">stars</span>
                              </div>
                         </div>
                         <div className="profile-others-infos">

                              {organizations.length > 0 && (
                                   <div className="orgs-box">
                                   {organizations.map((org) => (
                                        <div key={org.id} className="orgs-wrapper">
                                             <img className="images" src="../../public/organization-icon.png" alt="" />
                                             <a key={org.id} href={`${org.html_url}`} target="_blank" className="link"><p className="info">{org.login}</p></a>
                                        </div>
                                   ))}
                              </div>
                              )}
                              
                              {user.email ? (
                                   <div className="links-box">
                                        <img className="images" src="../../public/email-icon.png" alt="" />
                                        <a href="" className="link"><p className="info">email</p></a>
                                   </div>
                              ) : null}
                              

                              {user.blog ? (
                                   <div className="links-box">
                                        <img className="images" src="../../public/website-icon.png" alt="" />
                                        <a href={`${editUserWebSiteLink()}`} target="_blank" className="link"><p className="info">{editHowUserWebsitelinkWillShow()}</p></a>
                                   </div>
                              ) : null}
                              
                              {user.twitter_username ? (
                                   <div className="links-box">
                                        <img className="images" src="../../public/twitter-icon.png" alt="" />
                                        <a href={`https://twitter.com/${user.twitter_username}`} target="_blank" className="link"><p className="info">@{user.twitter_username}</p></a>
                                   </div>
                              ) : null}
                              
                         </div>
                         
                         
                    </div>
               </div>
               <div className="mobile-button-box">
                              <button onClick={leaveToTheHomePage} className="back-button">Voltar</button>
               </div>

               <aside className="sidebar-container">
                    <img className="profile-picture" src={user.avatar_url} alt="" />
                    <div className="profile-infos-box">
                         <h3 className="profile-full-name">{user.name}</h3>
                         <a href={`https://github.com/${user.login}`} target="_blank" className="profile-username">@{user.login}</a>
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
                                   <span className="followers-quantity">{totalProfileStars}</span>
                                   <span className="followers">stars</span>
                              </div>
                         </div>
                         <div className="profile-others-infos">

                              {organizations.length > 0 && (
                                   <div className="orgs-box">
                                   {organizations.map((org) => (
                                        <div key={org.id} className="orgs-wrapper">
                                             <img className="images" src="../../public/organization-icon.png" alt="" />
                                             <a key={org.id} href={`${org.html_url}`} target="_blank" className="link"><p className="info">{org.login}</p></a>
                                        </div>
                                   ))}
                              </div>
                              )}
                              
                              {user.email ? (
                                   <div className="links-box">
                                        <img className="images" src="../../public/email-icon.png" alt="" />
                                        <a href="" className="link"><p className="info">email</p></a>
                                   </div>
                              ) : null}
                              

                              {user.blog ? (
                                   <div className="links-box">
                                        <img className="images" src="../../public/website-icon.png" alt="" />
                                        <a href={`${editUserWebSiteLink()}`} target="_blank" className="link"><p className="info">{editHowUserWebsitelinkWillShow()}</p></a>
                                   </div>
                              ) : null}
                              
                              {user.twitter_username ? (
                                   <div className="links-box">
                                        <img className="images" src="../../public/twitter-icon.png" alt="" />
                                        <a href={`https://twitter.com/${user.twitter_username}`} target="_blank" className="link"><p className="info">@{user.twitter_username}</p></a>
                                   </div>
                              ) : null}
                              
                         </div>
                         <div className="button-box">
                              <button onClick={leaveToTheHomePage} className="back-button">Voltar</button>
                         </div>
                         
                    </div>
               </aside>

               <section className="user-repositories-container">
                    {repositories.map(repository =>(
                         <a href={repository.html_url} target="_blank" key={repository.id} className="repository-infos">
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
                    </a>
                    ))}
               </section>
              
          </div>
     )
}

export default Profile;