import SearchBar from "../../components/SearchBar/SearchBar";
import "./homepage.scss";
import { useState, useEffect } from "react";

function HomePage() {
  {
    /*const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/api/test')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('Error fetching data:', error));
    }, []);*/
  }
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            cupiditate veniam, libero quam voluptate voluptatem repudiandae
            laudantium quia animi commodi? Molestias asperiores laudantium
            mollitia sunt consectetur amet eos nam tempora?
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awards</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Properties</h2>
            </div>
          </div>
          {/*<div>
            <h3>{message}</h3>
        </div>*/}
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="background-image" />
      </div>
    </div>
  );
}

export default HomePage;
