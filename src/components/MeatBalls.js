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
      <h1>Delicious Meat Balls</h1>
      <p>A meatball is ground meat rolled into a ball, sometimes along with other ingredients, such as bread crumbs, minced onion, eggs, butter, and seasoning.Meatballs are cooked by frying, baking, steaming, or braising in sauce. There are many types of meatballs using different types of meats and spices. </p>
    </div>

    <img src="images/meatBalls.jpg" style={{ width: "80%", position: "relative", left: "20%", top: "15vh", }} class="img-thumbnail" alt="" fluid />



    {/*Start Column Section */}
    <Row style={{ position: "relative", left: "21%", top: "20vh", }}>
      <Col>
        <h4 style={{ fontWeight: "600", }}>Ingredients:</h4>
        <ul>
          <li style={{ fontSize: "20px", }}> 2 cups (5.2 oz) fresh bread crumbs*</li>
          <li style={{ fontSize: "20px", }}> 3/4 cup whole milk, then more if needed.</li>
          <li style={{ fontSize: "20px", }}> 1 lb. 85% lean ground beef**</li>
          <li style={{ fontSize: "20px", }}> 1 lb. ground pork.</li>
          <li style={{ fontSize: "20px", }}> 1/2 cup finely minced yellow onion***</li>
          <li style={{ fontSize: "20px", }}> 2 large eggs.</li>
          <li style={{ fontSize: "20px", }}> 2 garlic cloves, minced (2 tsp)</li>
          <li style={{ fontSize: "20px", }}> 2 Tbsp finely chopped fresh basil.</li>
        </ul>
      </Col>
      <Col >
        <h4 style={{ fontWeight: "600", }}>Methods:</h4>
        <ol>
          <li style={{ fontSize: "20px", }}> Meat grinding. </li>
          <li style={{ fontSize: "20px", }}> Meat batter mixing. </li>
          <li style={{ fontSize: "20px", }}> Meatball shaping.</li>
          <li style={{ fontSize: "20px", }}> Boiling.</li>
        </ol>
      </Col>
    </Row>
    {/*End Column Section */}


    {/*Start Heading & Paragraph Section */}
    <div className="text" style={{ position: "relative", left: "20%", top: "20vh", }}>
      <p style={{ position: "relative", top: "10px", fontSize: "22px", }}>A beautifully flavoured bread for your next gathering, with a little help from Royco® Tomato Bredie Dry Cook in Sauce.</p>
    </div>

    <h4 className="text-start text-dark my-5" style={{ position: "relative", left: "20%", top: "170px", fontSize: "40px", }}>Vegetarian</h4>
    <p className="text-start text-dark my-5" style={{ position: "relative", left: "20%", top: "160px", fontSize: "20px", }}> This recipe is cannot be any good for Vegetarians.</p>

    <h4 className="text-start text-dark my-5" style={{ position: "relative", left: "20%", top: "170px", fontSize: "30px", }}>Family Friendly</h4>
    <p className="text-start text-dark my-5" style={{ position: "relative", left: "20%", top: "160px", fontSize: "20px", }}>Our Meat Balls is perfect for little butchers. Get them in on the<br /> mixing and enjoy the magic of the Meat balls.</p>
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

        <h6 className="text-start text-light my-5" style={{ color: "white", position: "relative", top: "20px", left: "2%", color: "white", }}>Copyright @ Shesha Food Recipe. All right reserved.</h6>

          <hr></hr>
          <h4 className="text-start text-light my-5" style={{ position: "relative", left: "2%", top: "-30px", }}>love Shesha? check out more brands from Royco®</h4>

          <a href='https://www.royco.co.za/'><Button variant="light" style={{ width: "15%",height:"50px",position:"relative",top:"-20px", left:"2%", }}>See All</Button>{' '}</a>
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
