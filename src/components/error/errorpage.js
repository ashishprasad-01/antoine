import React from "react";
import { path } from "../../constants/path";
import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="fofContainer">
      <div class="text">
        <p>404</p>
      </div>
      <div class="container">
        <div class="caveman">
          <div class="leg">
            <div class="foot">
              <div class="fingers"></div>
            </div>
          </div>
          <div class="leg">
            <div class="foot">
              <div class="fingers"></div>
            </div>
          </div>
          <div class="shape">
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
          <div class="head">
            <div class="eye">
              <div class="nose"></div>
            </div>
            <div class="mouth"></div>
          </div>
          <div class="arm-right">
            <div class="club"></div>
          </div>
        </div>
        <div class="caveman">
          <div class="leg">
            <div class="foot">
              <div class="fingers"></div>
            </div>
          </div>
          <div class="leg">
            <div class="foot">
              <div class="fingers"></div>
            </div>
          </div>
          <div class="shape">
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
          <div class="head">
            <div class="eye">
              <div class="nose"></div>
            </div>
            <div class="mouth"></div>
          </div>
          <div class="arm-right">
            <div class="club"></div>
          </div>
        </div>
        <div className="homeLink">
          <NavLink to={path.root}>Click To Go Back</NavLink>
        </div>
      </div>
    </div>
  );
}
