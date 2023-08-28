// Importing Section //
import React, { useRef } from 'react';
import { TopNav } from './TopNav';
import './Home.css';
import { NavLink, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";
import "swiper/css/free-mode";
import 'swiper/swiper-bundle.min.css';
import HomeCard from './HomeCard';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



//Import images
import logoshesha from './images/logoshesha.png';
import amagwinya from './images/amagwinya.png';
import fries from './images/fries.webp';
import chickenWrap from './images/chickenWrap.jpg';
import chickenBreyanni from './images/chickenBreyanni.webp';
import fishFishers from './images/fishFishers.jpg';
import curryFood from './images/curryFood.webp';
import beaconPork from './images/beaconPork.jpg';



export const Home = () => {
  //const recipeElRef = useRef();
  const pancakeIngredientsEl = useRef();
  const burgerEl = useRef();
  const shushiEl = useRef();
  const tandooriChickenEl = useRef();
  const butternutrisottoEl = useRef();
  const minestroneSoupEl = useRef();
  const chickenTetrazziniEl = useRef();

  return (<>

    <TopNav />
    {/*Header Section*/}
    <header className="masthead_Home">
      <div className="container h-100">
        <div className="col-12 text-center">
          <h1 className="fw-light" style={{ position: "relative", top: "250px", fontSize: "80px", }}>Quick Dinner Ideas</h1>
          <p className="text-center text-light my-5" style={{ position: "relative", left: "1%", top: "80px", fontSize: "20px", }}>Explore More Recipes</p>
        </div>
      </div>
    </header>
    {/*Header Section*/}

    <p className="text-center text-dark my-5" style={{ position: "relative", left: "14%", top: "10px", fontSize: "23px", }}>Get out of your dinner rut! Add a twist to your favourite chicken recipes, or try something new.</p>



    {/*Card Image Section Started*/}
    <h1 className="text-center text-dark my-5" style={{ position: "relative", left: "13%", top: "120px", fontSize: "3.8rem", }}> Weekend Recipes</h1>

    <hr className='hr2' style={{ width: '30%', color: "black", }} /> {/* Adjust the width as needed */}
    <hr className='hr5' style={{ width: '30%', color: "black", }} /> {/* Adjust the width as needed */}


    <div className="container" style={{ position: "relative", top: "180px", left: "13%", }}>
      <div className="row">
        <div className="col-md-3">
          <div className="card" style={{ border: "none", }} >
            <img src="images/4x4-Bread.webp" className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "600", }}>4x4 Bread</h4>
              <p className="card-text" style={{ position: "relative", top: "10px", }}>Preparation time: 10min<br />
                Cooking time: 40min<br />
                Serves: 6</p>
              <a href="/BreadForTimes" style={{ backgroundColor: "transparent", color: "red", border: "none", textDecoration: "none", }}>Read More</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" style={{ border: "none", }} >
            <img src="images/pasta.jpeg" className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "600", }}>Creamy Pasta & Tomato</h4>
              <p className="card-text" style={{ position: "relative", top: "10px", }}> Preparation time: 15min<br />
                Cooking time: 35min<br />
                Serves: 4</p>
              <a href="/CreamyPasta" style={{ backgroundColor: "transparent", color: "red", border: "none", textDecoration: "none", }}>Read More</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" style={{ border: "none", }}>
            <img src="images/meatBalls.jpg" className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "600", }}>Meat Balls</h4>
              <p className="card-text" style={{ position: "relative", top: "10px", }}>Preparation time: 1hour<br />
                Cooking time: 45min<br />
                Serves: 3</p>
              <a href="/MeatBalls" style={{ backgroundColor: "transparent", color: "red", border: "none", textDecoration: "none", }}>Read More</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" style={{ border: "none", }}>
            <img src="images/Taco.jpg" className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "600", }}>Carne Asada Tacos</h4>
              <p className="card-text" style={{ position: "relative", top: "10px", }}>Preparation time: 5min<br/>
                Cooking time: 4 - 8mins per side<br/>
                Serves: 1/2 pound</p>
              <a href="/CarneTacos" style={{ backgroundColor: "transparent", color: "red", border: "none", textDecoration: "none", }}>Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*End Card Image Section Started*/}


    {/*Slider images section started*/}
    <h1 className="text-center text-dark my-5" style={{ position: "relative", left: "13%", top: "220px", fontSize: "3.8rem", }}> Special Recipes</h1>
      <hr className='hr3'></hr>
      <hr className='hr4'></hr>
      <p className="text-center text-dark my-5" style={{ position: "relative", top: "165px",left:"13%", fontSize: "20px", }}>Fast, simple, delicious flavours!</p>
      <div className="container py-4 px-4 justify-content-center" style={{ position: "relative",left:"13%", top: "180px", }}>
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          slidesPerView={5}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            }
          }}
        >

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: amagwinya, price: '10 mins', title: 'Magwinya', }} />
            <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border: "none", height: "50px", }} onClick={() => pancakeIngredientsEl.current.click()} ><NavLink ref={pancakeIngredientsEl} to='/ViewIngredients' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: fries, price: '35 mins', title: 'Fries' }} />
            <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border: "none", height: "50px", }} onClick={() => burgerEl.current.click()} ><NavLink ref={burgerEl} to='/ViewIngredientsburger' hidden />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: chickenWrap, price: '15 mins', title: 'Chicken Wrap' }} />
            <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border: "none", height: "50px", }} onClick={() => shushiEl.current.click()} ><NavLink ref={shushiEl} to='/shushi' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: chickenBreyanni, price: '23 mins', title: 'Chicken Breyanni' }} />
            <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border: "none", height: "50px", }} onClick={() => tandooriChickenEl.current.click()} ><NavLink ref={tandooriChickenEl} to='/TandooriChicken' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: fishFishers, price: '45 mins', title: 'Fish Fishers' }} />
            <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border: "none", height: "50px", }} onClick={() => butternutrisottoEl.current.click()} ><NavLink ref={butternutrisottoEl} to='/ButternutRisotto' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: curryFood, price: 'R45', title: 'Japanese Curry' }} />
            <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border: "none", height: "50px", }} onClick={() => minestroneSoupEl.current.click()} ><NavLink ref={minestroneSoupEl} to='/minestroneSoup' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: beaconPork, price: 'R10', title: 'Home Cured Pork' }} />
            <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border: "none", height: "50px", }} onClick={() => chickenTetrazziniEl.current.click()} ><NavLink ref={chickenTetrazziniEl} to='/chickenTetrazzini' />View Recipe</Button>
          </SwiperSlide>
        </Swiper>
      </div>
    {/*End the slider images section*/}


    {/* Video Section*/}
    <section className='section1'>
    <h2 className="text-center text-dark my-5" style={{ position: "relative", top: "102px", fontSize: "50px", fontWeight: "600", }}>Our Latest Videos</h2>
    <hr className='hr6'></hr>
    <hr className='hr7'></hr>
    <p className="text-center text-dark my-5" style={{ position: "relative", top: "50px", fontSize: "20px", }}>Watch our new videos and learn how to make any kind of food <br />by clicking our latest Videos below.</p>
    
    <Container style={{ position: "relative", top:"-290px", left:"3%",}}>
      <Row>
        <Col xs>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/UJi0fS1SxHg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>;
        </Col>
        <Col xs={{ order: 12 }}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/8Er5fjgOhhc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        </Col>
      </Row>
    </Container>
    </section>

    <header className="masthead_Home" style={{ position: "relative", top: "28vh", }}>
      <div className="container h-100">
        <div className="col-12 text-center">
          <h1 className="fw-light" style={{ position: "relative", top: "250px", }}>Explore Recipes - Learn & enjoy</h1>
          <p className="text-center text-light my-5" style={{ position: "relative", left: "1%", top: "80px", fontSize: "20px", }}>Explore More Recipes</p>
        </div>
      </div>
    </header>

    {/*Products Section */}
    <h2 className="text-center text-success my-5" style={{ position: "relative", left: "13%", top: "250px", fontSize: "50px", fontWeight: "600", }}>Products</h2>
    <hr className='hr8'></hr>
    <hr className='hr9'></hr>

    <p className="text-center text-dark my-5" style={{ position: "relative", left: "13%", top: "200px", fontSize: "25px", }}>You can also Visit <br />Our high-quality fresh and frozen chicken products are a South African favourite!</p>

    {/* End Products Section */}

   
    {/*Footer Section Started*/}
    <div className="footer" style={{ background: "grey", }}>
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <a href='/Home'><img src={logoshesha} alt="logoshesha.png" style={{ color: "white", }} /><em style={{ fontSize: "30px", textDecoration: "none", }}></em></a>
          <div className="sb_footer-links_div">
            <h2>Contact</h2>
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
            <h2>Resources</h2>
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
            <h2>Quick Links</h2>
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
