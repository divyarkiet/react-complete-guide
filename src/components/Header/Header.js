import React from 'react';

const Header = () => {
  const style = "margin-top: 0px;";
  const imgStyle = "height: 24px;";
  return <div id="header-outer">
    <header id="top">
      <div className="container">
        <div className="row">
          <div className="col span_3">
            Logo
          </div>
          <div className="col span_9"></div>
        </div>
      </div>
    </header>
  </div>
}

export default Header;
