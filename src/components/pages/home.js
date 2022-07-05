import { Component } from "react";
import Footer from "../footer";
import Header from "../header";
import Main from "../main";
import Sidebar from "../sidebar";
import "./home.css";
export default function Home(props){
    return (
      <div className="home">
        <div className="body-wrap">
          <Sidebar />

          <div className="body">
            <div className="header-bg"></div>
            <Header playlist={props.playlist}/>
            <Main playlist={props.playlist}/>
          </div>
        </div>
        <Footer />
      </div>
    );
 
}
