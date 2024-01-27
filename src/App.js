import { useEffect, useState, useRef } from "react";
import BarChart from "./BarChart.js";
import { expenditureData, userTransactionData, platforms } from "./Data.js";
import "./mobile.css";
import Invoice from "./Invoice.js";
import Orders from "./Orders.js";
import MiniGraph from "./MiniGraph.js";
import MainNavBar from "./MainNavBar.js";
import SideBar from "./SideBar.js";
import MainSection from "./MainSection.js";

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [customer, setCustomer] = useState({});
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navEl = useRef(null);

  function handleShowInvoice(user) {
    setModalIsOpen(true);
    setCustomer(user);
  }

  function handleCloseInvoice() {
    setModalIsOpen(false);
  }

  const [isDark, setIsDark] = useState(false);

  useEffect(
    function () {
      if (sideBarVisible) navEl.current.style.left = 0;
      else navEl.current.style.left = "-100%";
    },
    [sideBarVisible]
  );

  useEffect(
    function () {
      if (isDark) {
        document.documentElement.style.setProperty(
          "--backgroundmode-bg",
          "rgb(18, 18, 18)"
        );
        document.documentElement.style.setProperty(
          "--components-bg",
          "rgb(41,41,41)"
        );
        document.documentElement.style.setProperty(
          "--main-text-color",
          "rgb(255,255,255)"
        );
        document.documentElement.style.setProperty(
          "--main-nav-bg",
          "rgb(41,41,41)"
        );
      } else {
        document.documentElement.style.setProperty(
          "--backgroundmode-bg",
          "#fafafa"
        );
        document.documentElement.style.setProperty(
          "--components-bg",
          "rgb(255,255,255)"
        );
        document.documentElement.style.setProperty(
          "--main-text-color",
          "rgb(0,0,0)"
        );
        document.documentElement.style.setProperty(
          "--main-nav-bg",
          "rgb(255,255,255)"
        );
      }
    },
    [isDark]
  );

  return (
    <div className="main">
      <SideBar isDark={isDark} onSetDark={setIsDark} navEl={navEl} />
      <div className="main-container">
        <MainNavBar isDark={isDark} onShowSideBar={setSideBarVisible} />
        <MainSection>
          <div className="main-graph">
            <div className="heading">
              <h4>Sales Trend</h4>
              <div>
                <div className="select">
                  <p>Sort By:</p>
                  <select>
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Yearly</option>
                  </select>
                </div>
              </div>
            </div>
            <BarChart />
          </div>
          <div className="side-graphs">
            {expenditureData.map((data) => (
              <MiniGraph data={data} key={data.description} />
            ))}
          </div>
        </MainSection>
        <MainSection>
          <Orders
            onHandleShowInvoice={handleShowInvoice}
            userData={userTransactionData}
            platformsData={platforms}
          />
        </MainSection>
      </div>
      {sideBarVisible && (
        <div
          className="background-blur"
          onClick={() => setSideBarVisible(false)}
        ></div>
      )}

      {modalIsOpen && (
        <>
          <div
            className="background-blur"
            onClick={() => setModalIsOpen(false)}
          ></div>
          <Invoice
            onHandleCloseInvoice={handleCloseInvoice}
            customer={customer}
          />
        </>
      )}
    </div>
  );
}
