import React, { Component } from "react";
import Navbar from "../Navbar";
class Dashboard extends Component {
  state = {
    output: [
      {
        name: "navbar",
        number: "1",
        brand: "userBrand",
        backgroundColor: "dark",
        color: "dark",
        hasSerchBox: false,
        linksPosition: "middle", //can be left or right
        children: [
          {
            name: "link",
            text: "Home"
          },
          {
            name: "link",
            text: "About"
          },
          {
            name: "link",
            text: "Contact"
          },
          {
            name: "dropdown",
            children: [
              {
                name: "dropdownLink",
                text: "link1"
              },
              {
                name: "dropdownLink",
                text: "link2"
              },
              {
                name: "divider"
              },
              {
                name: "dropdownLink",
                text: "link3"
              }
            ]
          }
        ]
      },
      {
        name: "sidebar",
        number: "1",
        title: "SideBar",
        backgroundColor: "dark",
        color: "dark",
        hasSerchBox: false,
        linksPosition: "middle"
      }
    ]
  };
  render() {
    const {
      name,
      number,
      backgroundColor: bg,
      brand,
      children,
      hasSerchBox,
      color,
      linksPosition
    } = this.state.output;

    //getOutput function returns an html element to be appended
    //in case of navbar preconfig
    const getNavbarLinksPosition = () => {
      switch (linksPosition) {
        case "left":
          return "mr";
        case "middle":
          return "mx";
        case "right":
          return "ml";
        default:
          return "mr";
      }
    };
    const getOutput = () => {
      switch (name) {
        /*starting of Navbar config */
        case "navbar": {
          return (
            <nav
              class={`navbar navbar-expand-lg navbar-${color ||
                "light"} bg-${bg || "light"}`}
            >
              <a class="navbar-brand" href="#">
                {brand}
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon" />
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class={`navbar-nav ${getNavbarLinksPosition()}-auto`}>
                  {children.map(ch => {
                    if (ch.name === "link") {
                      //in link case
                      return (
                        <li class="nav-item ">
                          <a class="nav-link" href="#">
                            {ch.text}
                          </a>
                        </li>
                      );
                    } else if (ch.name === "dropdown") {
                      //in dropdown case
                      return (
                        <li class="nav-item dropdown">
                          <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Dropdown
                          </a>
                          <div
                            class="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                          >
                            {ch.children.map(chCh => {
                              if (chCh.name === "dropdownLink") {
                                return (
                                  <a class="dropdown-item" href="#">
                                    {chCh.text}
                                  </a>
                                );
                              } else if (chCh.name === "divider") {
                                return <div class="dropdown-divider" />;
                              }
                            })}
                          </div>
                        </li>
                      );
                    } //ending of dropdown case
                  })}
                </ul>
                {hasSerchBox && (
                  <form class="form-inline my-2 my-lg-0">
                    <input
                      class="form-control mr-sm-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      class="btn btn-outline-success my-2 my-sm-0"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                )}
              </div>
            </nav>
          );
        }
        /*Ending of Navbar config */
        default:
          return "";
      }
    };

    return (
      <div className="dashboard">
        <Navbar
          NavbarClass="dashboard__navbar"
          hasInnerContainer={true}
          signed={true}
        />

        <div className="dashboard__boxs-container  ">
          {/*<div className="dashboard__code-box">code</div>*/}
          <div className="mic-container ">
            <button className="dashboard__mic-button">
              <div className="dashboard__text-box ">text</div>
              <i className="fas fa-microphone fa-3x dashboard__mic-icon" />
              <span className="one" />
              <span className="two" />
              <span className="three" />
            </button>
          </div>
        </div>
        <div className="browser-view">
          <div className="browser-view__inner">
            <div id="output" className="browser-view__user-output">
              {getOutput()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
