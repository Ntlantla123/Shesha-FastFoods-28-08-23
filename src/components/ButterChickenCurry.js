import React from 'react'
import { MDBContainer } from "mdb-react-ui-kit";
import { TopNav } from './TopNav';
import './ButterChicken.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';



import logoshesha from './images/logoshesha.png';

export default function ChickenTikka() {
    return (<>
        <TopNav />
        <section className="section_ButterChicken" style={{ backgroundColor: "rgb(248, 248, 248)", height: "20vh", width: "125%", }}>
            <h4 className="text-start text-light my-5" style={{ position: "relative", top: "30px", left: "10%", fontSize: "40px", fontWeight: "600", }}>Make your Butter Chicken Curry.</h4>
        </section>

        {/*Paragraph and Heading Section*/}
        <p className="text-start text-dark my-5" style={{ position: "relative", top: "-10px", left: "13%", fontSize: "20px", }}>WATCH: 9-MINUTE BUTTER CHICKEN CURRY CHALLENGE</p>

        <h4 className="text-start text-dark my-5" style={{ position: "relative", top: "30px", left: "13%", fontSize: "30px", fontWeight: "600", }}>Before watching the video, small introduction about <span style={{ color: "red", }}>Butter Chicken Curry</span></h4>

        <p className="text-start text-dark my-5" style={{ position: "relative", top: "30px", left: "13%", fontSize: "25px", }}>Butter chicken, traditionally known as murgh makhani (pronounced [mʊrɣ ˈməkʰaːni]), is an Indian dish originating in Delhi. It is a type of curry made from chicken with a spiced tomato and butter (makhan) sauce. Its sauce is known for its rich texture. It is similar to chicken tikka masala, which uses a tomato paste.</p>
        {/* End Paragraph and Heading Section*/}

        {/* Video Section*/}
        <MDBContainer style={{ position: "relative", left: "12%", }}>
            <div className="ratio ratio-16x9" style={{ width: "60%", }}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/mbpnMFGn8Vs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            </div>
            <p style={{ fontSize: "30px", }}>Watch: Butter Chicken Curry <a href=''>#butterchicken</a> </p>
        </MDBContainer>


        <h4 className="text-start text-dark my-5" style={{ position: "relative", top: "90px", left: "13%", fontSize: "30px", fontWeight: "600", }}>Lastest Recipe Videos</h4>

        <MDBContainer style={{ position: "relative", left: "12%", top: "100px", }}>
            <MDBRow>
                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/4Z-FnoNJ2Yk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                   </div>
                    <p style={{ fontWeight: "600", }}>Watch: How to Meal Prep Butter Chicken <br />|Easy and Delicious Recipe for</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/JxSwBpEiYeQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ fontWeight: "600", }}>This is how i make Butter<br />Chicken Dhaba style</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/D_fYk8mBaF4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ fontWeight: "600", }}>Watch: Butter Chicken | Chicken Butter <br /> Masala | Chicken Recipe Non Veg Curries </p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/RKNogWbAivY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ fontWeight: "600", }}>Butter Chicken Recipe| How to make Chicken at home <br />Chicken Makhani | Chef Sanjyot Keer</p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        <MDBContainer style={{ position: "relative", left: "12%", top: "150px", }}>
            <MDBRow>
                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/LisRSoQ-YZk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ fontWeight: "600", }}>How To Make Restaurant Style Butter Chicken At Home | Butter Chicken Recipe <br />| Indian Chicken Gravy</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>

                        <iframe width="560" height="315" src="https://www.youtube.com/embed/6YXKclPp9co" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <p style={{ fontWeight: "600", }}>Watch: Butter chicken</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/AXrxFOZlN8M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ fontWeight: "600", }}>Famous Butter Chicken Recipe | Guest ho jaynge Diwane itna Delicious Butter Chicken Khaa Kar</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/MalEH8DsKrs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ fontWeight: "600", }}>Watch: EASY BUTTER CHICKEN RECIPE | MURGH MAKHANI WITH A TWIST</p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        {/*End Video Section*/}

        {/*Footer Section Started*/}
        <div className="footer" style={{ background: "grey", position: "relative", top: "260px", }}>
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

                <hr></hr>

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
