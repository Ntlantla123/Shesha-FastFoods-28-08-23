import React, { useRef } from 'react';
import { TopNav } from '../components/TopNav';
import './Recipes.css';
import { NavLink, Link } from 'react-router-dom';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { FreeMode } from "swiper";
import HomeCard from './HomeCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';



//import images
import logoshesha from './images/logoshesha.png';
//Import images
//import logoshesha from './images/logoshesha.png';
import viewpancake2 from './images/viewpancake2.png';
import viewburger from './images/viewburger.png';
import shushi from './images/shushi.jpg';
import tandooriChicken from './images/tandooriChicken.jpg';
import butternutrisotto from './images/butternutrisotto.jpg';
import minestroneSoup from './images/minestroneSoup.jpg';
import chickenTetrazzini from './images/chickenTetrazzini.jpg';
import amagwinya from './images/amagwinya.png';
import fries from './images/fries.webp';
import chickenWrap from './images/chickenWrap.jpg';
import chickenBreyanni from './images/chickenBreyanni.webp';
import fishFishers from './images/fishFishers.jpg';
import curryFood from './images/curryFood.webp';
import beaconPork from './images/beaconPork.jpg';




function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block", background: "grey", }} onClick={onClick} />
  );
}

export const Recipes = () => {

  const pancakeIngredientsEl = useRef();
  const burgerEl = useRef();
  const shushiEl = useRef();
  const tandooriChickenEl = useRef();
  const butternutrisottoEl = useRef();
  const minestroneSoupEl = useRef();
  const chickenTetrazziniEl = useRef();


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },

    ]
  };

  return (<>

    <TopNav />
    <header className="masthead_recipe">
      <div className="container h-100">
        <div className="col-12 text-center">
          <h1 className="fw-light" style={{ position: "relative", top: "250px", }}>Explore Recipes - Learn & enjoy</h1>
          <p className="text-center text-light my-5" style={{ position: "relative", left: "1%", top: "80px", fontSize: "20px", }}>Explore More Recipes</p>
        </div>
      </div>
      {/*<img src="images/lessonimageheader.jpg" style={{ width: "125%", height: "90vh", position: "relative", top: "0px", }} className="Imageheader" />*/}
    </header>
    

    <h4 className="text-center text-dark my-5" style={{ position: "relative", left: "15%", top: "10px", fontSize: "50px", }}>Lunch Recipes</h4>

    <p className='text-center' style={{ position: "relative", left: "13%", fontSize:"25px", }}>Don't forget about lunch! We know you need tasty, easy lunches to get you through your day—whether you’re at work, school, or home. Browse pasta salads, quick soups, and sandwiches galore!</p>
    
    
    <div className="container py-4 px-4 justify-content-center" style={{ position: "relative", left: "12%", top: "100px", }}>
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
          <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border:"none",height:"50px", }} onClick={() => pancakeIngredientsEl.current.click()} ><NavLink ref={pancakeIngredientsEl} to='/ViewIngredients' />View Recipe</Button>
        </SwiperSlide>

        <SwiperSlide>
          <HomeCard data={{ imagesSrc: fries, price: '35 mins', title: 'Fries' }} />
          <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600",  border:"none",height:"50px", }} onClick={() => burgerEl.current.click()} ><NavLink ref={burgerEl} to='/ViewIngredientsburger' hidden />View Recipe</Button>
        </SwiperSlide>

        <SwiperSlide>
          <HomeCard data={{ imagesSrc: chickenWrap, price: '15 mins', title: 'Chicken Wrap' }} />
          <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600",  border:"none",height:"50px", }} onClick={() => shushiEl.current.click()} ><NavLink ref={shushiEl} to='/shushi' />View Recipe</Button>
        </SwiperSlide>

        <SwiperSlide>
          <HomeCard data={{ imagesSrc: chickenBreyanni, price: '23 mins', title: 'Chicken Breyanni' }} />
          <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600",  border:"none",height:"50px", }} onClick={() => tandooriChickenEl.current.click()} ><NavLink ref={tandooriChickenEl} to='/TandooriChicken' />View Recipe</Button>
        </SwiperSlide>

        <SwiperSlide>
          <HomeCard data={{ imagesSrc: fishFishers, price: '45 mins', title: 'Fish Fishers' }} />
          <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600",  border:"none",height:"50px", }} onClick={() => butternutrisottoEl.current.click()} ><NavLink ref={butternutrisottoEl} to='/ButternutRisotto' />View Recipe</Button>
        </SwiperSlide>

        <SwiperSlide>
          <HomeCard data={{ imagesSrc: curryFood, price: 'R45', title: 'Japanese Curry' }} />
          <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600",  border:"none",height:"50px", }} onClick={() => minestroneSoupEl.current.click()} ><NavLink ref={minestroneSoupEl} to='/minestroneSoup' />View Recipe</Button>
        </SwiperSlide>

        <SwiperSlide>
          <HomeCard data={{ imagesSrc: beaconPork, price: 'R10', title: 'Home Cured Pork' }} />
          <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600",  border:"none",height:"50px", }} onClick={() => chickenTetrazziniEl.current.click()} ><NavLink ref={chickenTetrazziniEl} to='/chickenTetrazzini' />View Recipe</Button>
        </SwiperSlide>
      </Swiper>
    </div>

    <CardGroup style={{position:"relative",top:"150px",left:"12%",}}>
      <Card>
        <Card.Img variant="top" src="images/food1.jpg" />
        <Card.Body>
          <Card.Title>Copycat Ronto Wraps</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"> 10 mins</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="images/food1.jpg" />
        <Card.Body>
          <Card.Title>Salad Sandwich</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"> 20 mins </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="images/food1.jpg  " />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>




    

    <h1 className="text-center text-dark my-5" style={{ position: "relative", left: "10%", top: "65vh", fontSize: "50px", }}>Quick and Easy Dinners for One Recipes</h1>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{ position: "relative", left: "10%", top: "80vh", }}>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle><h4>Ultimate French Bread Pizza</h4></MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/043.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>

        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>

        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>

        </MDBCard>
      </MDBCol>
    </MDBRow>





    {/*Footer Section Started*/}
    <div className="footer" style={{ background: "grey", }}>
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <a href='/Home'><img src={logoshesha} alt="logoshesha.png" style={{ color: "white", }} /><em style={{ fontSize: "30px", textDecoration: "none", }}></em></a>
          <div className="sb_footer-links_div">
            <h3>Contact</h3>
            <Link to="/Contact">
              <p style={{ fontWeight: "600", color: "black", }}><i>Linkedin</i></p>
            </Link>
            <Link to="/Lessons">
              <p style={{ fontWeight: "600", color: "black", }}><i>Facebook</i></p>
            </Link>
            <Link to="/Recipes">
              <p style={{ fontWeight: "600", color: "black", }}><i>GitHub</i></p>
            </Link>
          </div>
          <div className="sb_footer-links_div">
            <h3>Resources</h3>
            <Link to="https://www.youtube.com/">
              <p style={{ fontWeight: "600", color: "black", }}>Youtube</p>
            </Link>
            <Link to="/Recipes">
              <p style={{ fontWeight: "600", color: "black", }}>Royco Website</p>
            </Link>
            <Link to="/Recipes">
              <p style={{ fontWeight: "600", color: "black", }}>STV</p>
            </Link>
          </div>

          <div className="sb_footer-links_div">
            <h3>Quick Links</h3>
            <Link to="/Home">
              <p style={{ fontWeight: "600", color: "black", }}>Home</p>
            </Link>
            <Link to="/Lessons">
              <p style={{ fontWeight: "600", color: "black", }}>Lessons</p>
            </Link>
            <Link to="/Recipes">
              <p style={{ fontWeight: "600", color: "black", }}>Recipe</p>
            </Link>
            <Link to="/Categories">
              <p style={{ fontWeight: "600", color: "black", }}>Categories</p>
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

  </>)
}