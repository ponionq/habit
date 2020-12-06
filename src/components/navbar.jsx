import React, { PureComponent } from 'react';
import './common.css';
class Navbar extends PureComponent {
    render() {
        return (
            <div className="search">
                <div className="wrap">
                    <h1><a href="./"><img src="./images/logo.png" alt="로고"/><span>Youtube</span></a></h1>
                    <div className="searcch_inpbtn">
                        <input type="text"/>
                        <button><img src="./images/search.png" alt="검색이미지"/></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;