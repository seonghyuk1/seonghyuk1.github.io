import React, { useState } from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Hospital Infomation</h3>
          <ul className="sidebarList">
            <li
              className="sidebarListItem active"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              지도
            </li>
            <li
              className="sidebarListItem active"
              onClick={() => {
                window.scrollTo({
                  top: 600,
                  behavior: "smooth",
                });
              }}
            >
              검색하기
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Hospital Graph</h3>
          <ul className="sidebarList">
            <li
              className="sidebarListItem active"
              onClick={() => {
                window.scrollTo({
                  top: 1100,
                  behavior: "smooth",
                });
              }}
            >
              병상수 TOP 10위 보기
            </li>
            <li
              className="sidebarListItem active"
              onClick={() => {
                window.scrollTo({
                  top: 1600,
                  behavior: "smooth",
                });
              }}
            >
              TOP 5 상세비교 레이터 차트 보기
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
