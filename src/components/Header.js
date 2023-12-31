import React, {useContext, useState, useEffect} from "react";

import {getLocalStorage} from "../helpers/localStorage"
import { isAuthenticated, logout } from '../helpers/auth';
import { withRouter } from "../helpers/withrouter";
import styled from  "styled-components";
import {BsSearch} from "react-icons/bs"
import {TbHeartHandshake} from "react-icons/tb"
import {CgProfile} from "react-icons/cg"
import { Collapse } from "bootstrap"
import {MdDashboard} from "react-icons/md"
import {GiSplitCross} from "react-icons/gi"
import {IoMdNotificationsOutline} from "react-icons/io"
import { ProductContext } from './App';
//chat changes
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";
import {NavLink, useNavigate, useLocation } from "react-router-dom";
import { getAllChatNotification } from "../api/chat";
import { deletechatnotification } from "../api/chat";
import { BsList } from "react-icons/bs";
const Header = (props) => {
  const {state, dispatch} = useContext(ProductContext);
  const [showNavbar, setShowNavbar] = useState(window.innerWidth)

  //chat changes
  const navigate = useNavigate();
  const routeLocation = useLocation();
  const [notification, setNotification] = useState([]);
  var [toggle, setToggle] = useState(false);
  const  [search, setSearch] = useState("");
  const [location, setLocation] = useState("")

  useEffect(()=>{if(window.innerWidth<576){
    setShowNavbar(!showNavbar)
  }},[])

  useEffect(() => {
    if(isAuthenticated()){
      console.log(isAuthenticated())
      getAllChatNotification()
      .then((data) => {
        setNotification(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    deleteNotif();
      var myCollapse = document.getElementById('collapseTarget')
      var bsCollapse = new Collapse(myCollapse, {toggle: false})
      toggle ? bsCollapse.show() : bsCollapse.hide()
    }
  },[toggle,location.pathname]);

  let deleteNotif = () => {
    if (notification.length !== 0 && routeLocation.pathname == "/chat") {
      deletechatnotification().then(function (data) {
        navigate("/chat");
      });
    }
  };
  const searchProdct=(e)=>{
    e.preventDefault()
    navigate(`/products?location=${location}&search=${search}&page=1`)
  }
  const handleLogout = () => {
    logout(() => {
      navigate('/signin')
    })
    props.setSelectedChat(null);
  }
  const showNavigation  = () => (
    <>
    <NavLink to="/" className="text-decoration-none headerName">
        <p className="logoName"><span className="logoImage"><TbHeartHandshake className="glow"/></span>BidOnBuy</p>
    </NavLink>
    {window.innerWidth<576 && <div><p  style={{position: "absolute", right:"10px", top:"15px"}} onClick={()=>setShowNavbar(!showNavbar)}><BsList className='text-white h1 ml-5'/></p></div>}
    {showNavbar && <>
    <form>
        <input className="searchBar mr-3 w-25 mb-2"  type="text" placeholder="Location" onChange={(e)=> setLocation(e.target.value)}/>
        <input className="searchBar" type="text" placeholder='Find Cars, Mobile Phones and more...' onChange={(e)=>setSearch(e.target.value)}/>
        <button className='searchBtn scale' onClick={searchProdct}><BsSearch /></button>
      </form>
    {!isAuthenticated() && (
      <div>
      <NavLink to="/signin">
    <button className='searchBtn scale'>Login | Register</button>
    </NavLink>
    <NavLink to="/signup">
    <button className='loginBtn searchBtn sellHover'><GiSplitCross className="mr-2"/>Sell</button>
    </NavLink>
      </div>

    )}

    {isAuthenticated() && isAuthenticated().role === "user" && (
      <>
      <p>
        <button className="btn btn-primary btn-lg" onClick={() => setToggle(toggle => !toggle)}>{  getLocalStorage("user").name}</button>
      </p> 
      <div className="collapse bg-white rounded text-dark navDashboard" id="collapseTarget">
        <div  className="d-flex flex-column align-items-start">
          <NavLink className="pt-2 pl-3 pb-3 scale text-dark" to="/profile" style={{color:"white", fontSize: "1.5em"}}><CgProfile style={{marginRight: "0.5em", fontSize: "1.5em"}}/>Profile</NavLink>
          <NavLink  className="pl-3 pb-3 scale text-dark" to="/user/dashboard" style={{marginRight: "1.5em", color:"white", fontSize: "16px"}}><MdDashboard style={{fontSize: "1.5em"}}/><span style={{marginLeft: "5px"}}>Dashboard</span></NavLink>
          <NavLink className="pt-2 pl-3 pb-3 scale text-dark" to="/notification" style={{color:"white", fontSize: "1.5em"}}><IoMdNotificationsOutline className="shake" style={{marginRight: "0.5em", fontSize: "1.5em"}}/>Notification</NavLink>
          <NavLink
                className="pt-2 pl-3 pb-3 scale text-dark"
                style={{ color: "white", fontSize: "1.5em" }}
                to="/chat"
              >
                <div
                  style={{
                    position: "absolute",
                    left: "2.7em",
                  }}
                >
                  <NotificationBadge
                    style={{ fontSize: "0.5em" }}
                    count={notification.length}
                    effect={Effect.SCALE}
                  />
                </div>
                <BsFillChatLeftDotsFill
                  style={{
                    marginLeft: "0.3em",
                    marginRight: "0.9em",
                    fontSize: "1em",
                  }}
                />
                Chat
              </NavLink>
          <button className='loginBtn searchBtn scale' onClick={handleLogout}>Logout</button>
        </div>
      </div> 
  </>)}
    {isAuthenticated() && isAuthenticated().role === "admin" && (
      <>
      <p>
        <button className="btn-primary btn-lg" onClick={() => setToggle(toggle => !toggle)}>{  getLocalStorage("user").name}</button>
      </p> 
      <div className="collapse bg-white rounded text-dark navDashboard" id="collapseTarget" >
          <div className="d-flex flex-column align-items-start">
          <NavLink className="pt-2 pl-3 pb-3 scale text-dark" to="/profile" style={{color:"white", fontSize: "1.5em"}}><CgProfile style={{marginRight: "0.5em", fontSize: "1.5em"}}/> Profile</NavLink>
          <NavLink className="pl-3 pb-3 scale text-dark" to="/admin/dashboard" style={{marginRight: "1.5em", color:"white", fontSize: "16px"}}><MdDashboard style={{fontSize: "1.5em"}}/><span style={{marginLeft: "5px"}}>Dashboard</span></NavLink>
          <NavLink className="pt-2 pl-3 pb-3 scale text-dark" to="/notification" style={{color:"white", fontSize: "1.5em"}}><IoMdNotificationsOutline className="shake" style={{marginRight: "0.5em", fontSize: "1.5em"}}/>Notification</NavLink>
          <NavLink
                className="pt-2 pl-3 pb-3 scale text-dark"
                style={{ color: "white", fontSize: "1.5em" }}
                to="/chat"
              >
                <div
                  style={{
                    position: "absolute",
                    left: "2.7em",
                  }}
                >
                  <NotificationBadge
                    style={{ fontSize: "0.5em" }}
                    count={notification.length}
                    effect={Effect.SCALE}
                  />
                </div>
                <BsFillChatLeftDotsFill
                  style={{
                    marginLeft: "0.3em",
                    marginRight: "0.9em",
                    fontSize: "1em",
                  }}
                />
                Chat
              </NavLink>
          <button className='loginBtn searchBtn scale' onClick={handleLogout}>Logout</button>
          </div>
      </div>
  </>)}
  </>}
      </>
  )
  return <MainHeader id="header" className="header" style={{position:"relative", zIndex:"20"}}>{showNavigation()}</MainHeader>
}
const MainHeader = styled.header` 
`;
 

export default withRouter(Header);
