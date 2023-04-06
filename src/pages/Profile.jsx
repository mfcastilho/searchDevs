import React from "react";
import "./Profile.css";

function Profile(){


     return(
          <div className="profile-container">
               

               <div className="sidebar-container">
                    <img className="profile-picture" src="" alt="" />
                    <div className="profile-infos-box">
                         <h3 className="profile-full-name">Developer´s full name</h3>
                         <h6 className="profile-username">@username</h6>
                         <p className="profile-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illum totam, earum molestiae facere, iusto, aspernatur officia explicabo ex vero ducimus.</p>
                         <div className="followers-and-stars-box">
                              <div className="followers-box">
                                   <img className="followers-icon-img" src="../../public/followers-icon.png" alt="" />
                                   <span className="followers-quantity">100</span>
                                   <span className="followers">followers</span>
                              </div>
                              <div className="following-box">
                                   <img className="followers-icon-img" src="../../public/heart.png" alt="" />
                                   <span className="followers-quantity">100</span>
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
               </div>
               <div className="user-repositories-container">

               </div>
              
          </div>
     )
}

export default Profile;