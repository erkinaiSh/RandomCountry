import React, { PureComponent } from "react";
import "./Header.css";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/600px-Flag_of_Romania.svg.png?20160520173724"
          width="35"
          height="35"
          alt=""
        />
        Random Country
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/600px-Flag_of_Romania.svg.png?20160520173724"
          width="35"
          height="35"
          alt=""
        />
        <hr></hr>
      </header>
      
    );
    
  }
}
