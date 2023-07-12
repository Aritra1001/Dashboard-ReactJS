import React from "react";
import "./components.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside>
        <div className="sidebar">
          <section className="head">
            <div className="sidebar-head">
              <div className="sidebar-logo"></div>
              <div className="sidebar-name">Winning</div>
            </div>
          </section>
          <section className="main-content">
            <ul className="sidebar-menu">
              <li className="sidebar-menu-list">
                <Link to="/">
                  <span class="material-symbols-sharp">home</span>
                  Home
                </Link>
              </li>
              <li className="sidebar-menu-list">
                <Link to="/orders">
                  <span class="material-symbols-sharp">
                    shopping_cart_checkout
                  </span>
                  Orders
                </Link>
              </li>
              <li className="sidebar-menu-list">
                <Link to="/products">
                  <span class="material-symbols-sharp">inventory_2</span>
                  Products
                </Link>
              </li>
              <li className="sidebar-menu-list">
                <Link to="/customers">
                  <span class="material-symbols-sharp">group</span>
                  Customers
                </Link>
              </li>
              <li className="sidebar-menu-list">
                <Link to="/reports">
                  <span class="material-symbols-sharp">leaderboard</span>
                  Reports
                </Link>
              </li>
              <li className="sidebar-menu-list">
                <Link to="/settings">
                  <span class="material-symbols-sharp">settings</span>
                  Settings
                </Link>
              </li>
            </ul>
          </section>
          <section className="footer">
            <ul className="sidebar-menu">
              <li className="sidebar-menu-list">
                <Link to="/support">
                  <span class="material-symbols-sharp">help</span>
                  Support
                </Link>
              </li>
            </ul>

            <div className="sidebar-menu-list">
              <Link to="/support">
                <span class="material-symbols-sharp">logout</span>
                Log Out
              </Link>
            </div>
          </section>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
