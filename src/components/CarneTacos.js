import React from 'react'
import './BreadForTimes.css';
import { TopNav } from './TopNav'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { NavLink, Link } from 'react-router-dom';
import logoshesha from './images/logoshesha.png';
import { Button } from 'react-bootstrap';

export default function breadForTimes() {
  return (<>
    <TopNav />
    <header className="Header_Bread12">
    </header>

    <div className="text" style={{ position: "relative", left: "20%", top: "10vh", }}>
      <h1>Carne Asanda Tacos</h1>
      <p>Carne asada tacos are delicious flank steak, Mexican-inspired street tacos! Just load up your tortilla with juicy steak bites, avocado, onion, cotija cheese, and fresh cilantro. I think we've firmly established (through the numerous recipes on this website) that I'm a lover of Mexican food.</p>
    </div>

    <img src="images/Taco.jpg" style={{ width: "80%", position: "relative", left: "20%", top: "15vh", }} class="img-thumbnail" alt="" fluid />



    {/*Start Column Section */}
    <Row style={{ position: "relative", left: "21%", top: "20vh", }}>
      <Col>
        <h4 style={{ fontWeight: "600", }}>Ingredients:</h4>
        <ul>
          <li style={{ fontSize: "20px", }}> Flank or skirt steak.</li>
          <li style={{ fontSize: "20px", }}> Marinated in a mixture of fresh orange and lime juice.</li>
          <li style={{ fontSize: "20px", }}> Oil, jalapeño.</li>
          <li style={{ fontSize: "20px", }}> Cilantro. </li>
          <li style={{ fontSize: "20px", }}> Garlic and seasonings.</li>
        </ul>
      </Col>
      <Col >
        <h4 style={{ fontWeight: "600", }}>Methods:</h4>
        <ol>
          <li style={{ fontSize: "20px", }}> Grill!</li>
          <li style={{ fontSize: "20px", }}> Usually about five-eight minutes per side.</li>
          <li style={{ fontSize: "20px", }}> Skirt steak will be at a perfect medium-rare when<br/> it reaches 135°F on an instant-read thermometer.</li>
          <li style={{ fontSize: "20px", }}> Bake at 180˚C for 40 minutes</li>
        </ol>
      </Col>
    </Row>
    {/*End Column Section */}


    {/*Start Heading & Paragraph Section */}
    <div className="text" style={{ position: "relative", left: "20%", top: "20vh", }}>
      <p style={{ position: "relative", top: "10px", fontSize: "22px", }}>A beautifully flavoured bread for your next gathering, with a little help from Royco® Tomato Bredie Dry Cook in Sauce.</p>
    </div>

    <h4 className="text-start text-dark my-5" style={{ position: "relative", left: "20%", top: "170px", fontSize: "40px", }}>Vegetarian</h4>
    <p className="text-start text-dark my-5" style={{ position: "relative", left: "20%", top: "160px", fontSize: "20px", }}> This recipe can be suitable  and also not suitable for vegetarians because some of the Carne Asanda Tacos<br/> can be having meat inside them.</p>

    <h4 className="text-start text-dark my-5" style={{ position: "relative", left: "20%", top: "170px", fontSize: "30px", }}>Family Friendly</h4>
    <p className="text-start text-dark my-5" style={{ position: "relative", left: "20%", top: "160px", fontSize: "20px", }}>Our Carne Asanda Tacos is perfect for everyone. Get them in on the<br /> mixing and enjoy the magic of the Carne Asanda Tacos.</p>
    {/*End Heading & Paragraph Section */}

    {/*Footer Section Started*/}
    <div className="footer" style={{ background: "grey",position:"relative",top:"260px", }}>
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <a href='/Home'><img src={logoshesha} alt="logoshesha.png" style={{ color: "white", }} /><em style={{ fontSize: "30px", textDecoration: "none", }}></em></a>
          <div className="sb_footer-links_div">
            <h3>Contact</h3>
            <Link to="/Contact">
              <p style={{ fontWeight: "600", color: "whitesmoke", }}><i>Linkedin</i></p>
            </Link>
            <Link to="/Lessons">
              <p style={{ fontWeight: "600", color: "whitesmoke", }}><i>Facebook</i></p>
            </Link>
            <Link to="/Recipes">
              <p style={{ fontWeight: "600", color: "whitesmoke", }}><i>GitHub</i></p>
            </Link>
          </div>
          <div className="sb_footer-links_div">
            <h3>Resources</h3>
            <Link to="https://www.youtube.com/">
              <p style={{ fontWeight: "600", color: "whitesmoke", }}>Youtube</p>
            </Link>
            <Link to="/Recipes">
              <p style={{ fontWeight: "600", color: "whitesmoke", }}>Royco Website</p>
            </Link>
            <Link to="/Recipes">
              <p style={{ fontWeight: "600", color: "whitesmoke", }}>STV</p>
            </Link>
          </div>

          <div className="sb_footer-links_div">
            <h3>Quick Links</h3>
            <Link to="/Home">
              <p style={{ fontWeight: "600", color: "whitesmoke", }}>Home</p>
            </Link>
            <Link to="/Lessons">
              <p style={{ fontWeight: "600", color: "whitesmoke", }}>Lessons</p>
            </Link>
            <Link to="/Recipes">
              <p style={{ fontWeight: "600", color: "whitesmoke", }}>Recipe</p>
            </Link>
            <Link to="/Categories">
              <p style={{ fontWeight: "600", color: "whitesmoke", }}>Categories</p>
            </Link>
          </div>
          <div className="sb_footer-links_div">
          </div>
        </div>

        <hr></hr>

        <h6 className="text-start text-dark my-5" style={{ color: "white", position: "relative", top: "20px", left: "0%", color: "black", }}>Copyright @ Shesha Food Recipe. All right reserved.</h6>
        <a href='https://www.royco.co.za/'><Button variant="light" style={{ width: "15%", }}>See All</Button>{' '}</a>
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>
            </p>
          </div>
        </div>
      </div>
    </div>
    {/*End the footer Section Started*/}


  </>
  )
}
