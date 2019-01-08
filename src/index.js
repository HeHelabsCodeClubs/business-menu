import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class BusinessMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {}
        };
    };
    render() {
        const {
            mainLogo,
            mainLogoHeight,
            logoPadding,
            headerBackground,
            customerName,
            iconColor,
            notification,
            alignItems,
            display,
            menuLinkClass,
            logoutBtn,
            logoutUser,
            menuOne,
            menuTwo,
            menuThree
        } = this.props;
        return(
            <div className="common-header">
                <div className="header-wrapper row" style={{background: headerBackground}}>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-reset logo-wrapper">
                        <Link to="/"><img src={mainLogo} className='comp-logo' style={{height: mainLogoHeight, padding: logoPadding}}/></Link>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 col-reset menu-wrapper">
                        <nav className="nav nav-container" style={{alignItems: alignItems}}>
                            <ul className="nav__menu" style={{display: display}}>
                                <li className="nav__menu-item">
                                    <Link to="/dashboard" 
                                    className={this.props.view === 'profile' ? `${menuLinkClass} active` : `${menuLinkClass}`}>
                                    <span className="icon-icon_home"></span>
                                    {customerName}
                                    </Link>
                                </li>
                                <li className="nav__menu-item">
                                    <Link to="/orders" 
                                    className={this.props.view === 'orders' ? `${menuLinkClass} active` : `${menuLinkClass}`}>
                                    <span className="icon-Group-187" style={{color: iconColor}}></span>
                                    {menuOne}
                                    </Link>
                                </li>
                                <li className="nav__menu-item">
                                    <Link to="/invoices" 
                                    className={this.props.view === 'invoices' ? `${menuLinkClass} active` : `${menuLinkClass}`}>
                                    <span className="icon-invoice-icon" style={{color: iconColor}}></span>
                                    {menuTwo}
                                    </Link>
                                </li>
                                <li className="nav__menu-item">
                                    <div className={this.props.view === 'notifications' ? `${menuLinkClass} active` : `${menuLinkClass}`}>
                                    <span className="icon-Notification-Icon" style={{color: iconColor}}><span className=""></span></span>
                                    {notification}
                                    </div>
                                </li>
                                <li className="nav__menu-item">
                                    <Link to="/contact" 
                                    className={this.props.view === 'contact' ? `${menuLinkClass} active` : `${menuLinkClass}`}>
                                    <span className="icon-Union-11" style={{color: iconColor}}></span> 
                                    {menuThree}
                                    </Link>
                                </li>
                                <li className="nav__menu-item">
                                    <div className="logout-btn">
                                        <button
                                        className={logoutBtn}
                                        onClick={logoutUser}
                                        >
                                        Logout
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>   
            </div>         
        );
    }
}

export default BusinessMenu;




  