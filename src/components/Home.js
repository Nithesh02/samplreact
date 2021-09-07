import MyNavBar from "./Nav";
import heroImage from "../assets/MERN.png";
import laptopVector from "../assets/laptop-vector.png";
import mongo1 from "../assets/MongoDB.png";
import express1 from "../assets/express.png";
import react1 from "../assets/react2.png";
import node1 from "../assets/node.png";



import "../App.css";

function HeroSection(){
    return(
        <div className="hero" style={{width:'100%'}}>
             
            <div class="container">
                <div class="py-5 row" style={{alignItems: 'center'}}>
                    <div class="col-md-6"><img src={heroImage} alt='hero' className='hero-image'/> </div>
                        <div class="text-center mt-5 mb-5 col-md-6">
                            <h2 class="text-light mb-4 poppins">
                            <span class="text-green">MERN</span> Stack Training</h2>
                            <p class="text-secondary">We provide courses on MERN stack Web Development. <br/>
                            We have a team of experienced developers who can help you learn! <br/>
                            Join us and experience the fun of Web Development.
                            </p>
                            <button type="button" class="mt-4 poppins btn btn-light">Get Started</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

function CTAI(){
    return(
        <div class="cta-1 bg-accent">
                <div class="container">
                    <div class="py-5 row" style={{alignItems: 'center'}}>
                        <div class="text-center col-md order-md-last">
                            <img src={laptopVector} alt="laptop" class="laptop-vector"/></div>
                                <div mdpull="6" class="text-center text-md-start col-md order-md-first">
                                    <h2 class="mb-4 poppins">Wanna know a secret?</h2>
                                    <p class="text-secondary">We got <span class="text-green text-bold"> awesome </span>
                                    trainers to walk you through the whole training process and guide you towards success!</p>
                                    <p class="text-secondary">We'll help you keep up with industry standards and learn the
                                    <span class="text-green text-bold"> latest technologies </span> 
                                    to help you fit in with the fast paced tech world.</p>
                                    <button type="button" class="mt-4 poppins btn btn-dark">Great, I'm in!</button>
                                </div>
                    </div>
                </div>
            </div>
    )
}

function WhatIsItem(){
    return(
        <div class="what-is-mern">
            <div class="container">
                <h2 class="text-light mb-4 poppins">What is <span class="text-green">MERN</span> Stack?</h2>
                <div class="container">
                    <div class="mern row">
                        <div class="col-md-3 col-sm-6">
                            <img src={mongo1} alt="mongo" class="mongo-logo"/>
                            <h4 class="text-light mb-4">MongoDB</h4>
                            <p class="text-secondary">MongoDB is a free and open-source cross-platform document-oriented 
                            database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents 
                            with schemas.</p>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <img src={express1} alt="express" class="express-logo"/>
                            <h4 class="text-light mb-4">Express JS</h4>
                            <p class="text-secondary">Express is a minimal and flexible Node.js web application framework 
                            that provides a robust set of features for web and mobile applications.</p>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <img src={react1} style={{height:'500'}} alt="react" class="react-logo"/>
                            <h4 class="text-light mb-4">React JS</h4>
                            <p class="text-secondary">React is a JavaScript library for building user interfaces. 
                            It is maintained by Facebook and a community of individual developers and companies.</p>
                        </div>
                        <div class="col-md-3 col-sm-6">
                        <img src={node1} alt="node" class="node-logo"/>
                            <h4 class="text-light mb-4">Node JS</h4>
                            <p class="text-secondary">Node.js is an open-source, cross-platform JavaScript run-time 
                            environment that executes JavaScript code outside a web browser.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Subscribe(){
    return(
        <div class="subscribe">
            <div class="container"><h2 class="mb-4 poppins">
                <span class="text-green">Subscribe</span> to our newsletter</h2>
                <p class="text-secondary">Subscribe to our newsletter for latest updates on our sessions!</p>
                <form class="subscribe-form">
                    <input type="text" class="form-control" placeholder="Enter your email"/>
                    <button class="btn btn-dark mt-3 poppins">Subscribe</button>
                </form>
            </div>
        </div>
    )
}

function Footer(){
    return(
        <div class="footer">
            <div class="container">
                <div class="py-5 row">
                    <div class="text-md-start col-md-4">
                        <h4 class="mb-4" style={{color:'white'}}>About Us</h4>
                        <p class="text-secondary">We are a team of experienced developers who can help 
                        you learn Web development with MERN Stack!</p>
                    </div>
                    <div class="text-md-start col-md-4">
                        <h4 class="mb-4" style={{color:'white'}}>Quick Links</h4>
                        <a class="footer-link" href="/">Home</a><br/>
                        <a class="footer-link" href="/about">About Us</a><br/>
                        <a class="footer-link" href="/contact">Contact Us</a><br/>
                    </div>
                </div>
                <hr/>
                <p class="py-3 text-secondary text-center"> © 2021 MERN Stack Training. All Rights Reserved.</p>
                
            </div>
        </div>
        
    )
}
function Home(){
    return(
        <div>
            <MyNavBar/>
            <HeroSection/>
            <CTAI/>  
            <WhatIsItem/>
            <Subscribe/>
            <Footer/>
        </div>
    )
}

export default Home;