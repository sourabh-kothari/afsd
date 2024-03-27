import React from "react";
import { Link, Outlet } from "react-router-dom";
import  "./Style.css";

//This code belongs to Sourabh Kothari//
const Foundation = () => {
  return (
    <div>
      <nav className="navigate">
        <h1>  Food App</h1>
        <ul>
        <li>
            <Link to="/loginpage">Login Page</Link>
          </li>
          <li>
            <Link to="/findrecipe">Find Recipe</Link>
          </li>
          <li>
            <Link to="/">Home Page</Link>
          </li>
        </ul>
      </nav>

      <section className="">
       
      </section>
      <Outlet />
    </div>
  );
};

export default Foundation;
