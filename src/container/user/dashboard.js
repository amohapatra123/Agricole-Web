import React, { useState, useEffect } from "react";
import "../../styles/dash.css";
import { Row, Col } from "reactstrap";
import firebase from "../../firebase";
export default function Dashboard(props) {
  const [open, setOpen] = useState(false);
  const [detect, setDetect] = useState(true);
  const [shop, setShop] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("auth")) {
      return;
    } else {
      props.history.push("/");
    }
  });
  return (
    <div className="main-dash">
      <div style={{ marginLeft: open ? "0px" : "-200px" }} className="sidebar">
        <div>PlantMedic</div>
        <ul>
          <li
            onClick={() => {
              setDetect(true);
              setSearch(false);
              setShop(false);
            }}
          >
            Detect Disease
          </li>
          <li
            onClick={() => {
              setDetect(false);
              setSearch(false);
              setShop(true);
            }}
          >
            Explore Shops
          </li>
          <li
            onClick={() => {
              setDetect(false);
              setSearch(true);
              setShop(false);
            }}
          >
            Search
          </li>
          <li
            onClick={() => {
              sessionStorage.setItem("auth", false);
              props.history.push("/");
            }}
          >
            Logout
          </li>
        </ul>
      </div>
      <div>
        <div style={{ marginTop: "10px", cursor: "pointer" }}>
          <img
            src="https://img.icons8.com/carbon-copy/100/000000/menu.png"
            alt="menu"
            width="50px"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="main-dash-inner">
          {detect ? <Detect /> : null}
          {shop ? <Explore /> : null}
          {search ? <Search /> : null}
        </div>
      </div>
    </div>
  );
}

const Detect = () => {
  return (
    <a
      href="http://localhost:7777/predict"
      target="blank"
      style={{ textDecoration: "none", color: "unset" }}
    >
      <div className="detect-main">
        <div className="detect-upload">
          <div>
            <img
              src="https://img.icons8.com/officel/80/000000/upload.png"
              alt="upload"
              width="50px"
            />
          </div>

          <div className="upload-text">Upload Image</div>
        </div>
      </div>
    </a>
  );
};

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wikiSearchReturnValues: [],
      wikiSearchTerms: "",
    };
  }

  useWikiSearchEngine = (e) => {
    e.preventDefault();

    this.setState({
      wikiSearchReturnValues: [],
    });

    const pointerToThis = this;

    var url = "https://en.wikipedia.org/w/api.php";

    var params = {
      action: "query",
      list: "search",
      srsearch: this.state.WikiSearchTerms,
      format: "json",
    };

    url = url + "?origin=*";
    Object.keys(params).forEach((key) => {
      url += "&" + key + "=" + params[key];
    });

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        // console.log(response);

        for (var key in response.query.search) {
          pointerToThis.state.wikiSearchReturnValues.push({
            queryResultPageFullURL: "no link",
            queryResultPageID: response.query.search[key].pageid,
            queryResultPageTitle: response.query.search[key].title,
            queryResultPageSnippet: response.query.search[key].snippet,
          });
        }
      })
      .then(function (response) {
        for (var key2 in pointerToThis.state.wikiSearchReturnValues) {
          // console.log(pointerToThis.state.wikiSearchReturnValues);
          let page = pointerToThis.state.wikiSearchReturnValues[key2];
          let pageID = page.queryResultPageID;
          let urlForRetrievingPageURLByPageID = `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=info&pageids=${pageID}&inprop=url&format=json`;

          fetch(urlForRetrievingPageURLByPageID)
            .then(function (response) {
              return response.json();
            })
            .then(function (response) {
              page.queryResultPageFullURL =
                response.query.pages[pageID].fullurl;

              pointerToThis.forceUpdate();
            });
        }
      });
  };

  changeWikiSearchTerms = (e) => {
    this.setState({
      WikiSearchTerms: e.target.value,
    });
  };

  render() {
    let wikiSearchResults = [];
    // console.log(this.state.wikiSearchReturnValues);

    for (var key3 in this.state.wikiSearchReturnValues) {
      wikiSearchResults.push(
        <div className="searchResultDiv" key={key3}>
          <h3>
            <a
              href={
                this.state.wikiSearchReturnValues[key3].queryResultPageFullURL
              }
            >
              {this.state.wikiSearchReturnValues[key3].queryResultPageTitle}
            </a>
          </h3>
          <span className="link">
            <a
              href={
                this.state.wikiSearchReturnValues[key3].queryResultPageFullURL
              }
            >
              {this.state.wikiSearchReturnValues[key3].queryResultPageFullURL}
            </a>
          </span>
          <p
            className="description"
            dangerouslySetInnerHTML={{
              __html: this.state.wikiSearchReturnValues[key3]
                .queryResultPageSnippet,
            }}
          ></p>
        </div>
      );
    }

    console.log(wikiSearchResults);

    return (
      <Row className="search-main">
        <Col xs={{ size: 12 }} md={{ size: 6, offset: 2 }} className="mb-3">
          <input
            type="text"
            value={this.state.WikiSearchTerms || ""}
            onChange={this.changeWikiSearchTerms}
            placeholder="Search"
            className="input-search"
          />
        </Col>
        <Col xs={{ size: 12 }} md={{ size: 3 }} className="mb-3">
          <div className="search-button" onClick={this.useWikiSearchEngine}>
            Search
          </div>
        </Col>
        <Col
          xs={{ size: 12 }}
          md={{ size: 10, offset: 2 }}
          className="search-result"
        >
          {wikiSearchResults}
        </Col>
      </Row>
    );
  }
}
const Explore = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    firebase
      .database()
      .ref("shops")
      .on("value", (s) => {
        let list = [];
        s.forEach((snap) => {
          list.push(snap.val());
        });
        setData(list);
      });
  }, [query]);
  return (
    <div className="shop-main">
      <div>
        <input
          type="text"
          name="query"
          value={query}
          placeholder="Search shop by city"
          onChange={(e) => setQuery(e.target.value)}
          className="shop-search"
        />
      </div>

      {data.length > 0 ? (
        <>
          {data
            .filter((item) => item.city.toLowerCase() === query.toLowerCase())
            .map((item) => {
              return (
                <div className="shop-card">
                  <div>
                    <strong>Shop Name:</strong>
                    {item.name}
                  </div>
                  <div>
                    <strong>Phone Number:</strong>
                    {item.number}
                  </div>
                  <div>
                    <strong>Email:</strong>
                    {item.email}
                  </div>
                  <div>
                    <strong>Area:</strong>
                    {item.area}
                  </div>
                  <div>
                    <strong>Pincode:</strong>
                    {item.pin}
                  </div>
                </div>
              );
            })}
        </>
      ) : null}
    </div>
  );
};
