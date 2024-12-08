// import React from "react";
// import '../css/Home.css';

// const Home = () => {
//     return (
//         <div>
//             <div className="rectangle">
//                 <p className="text">Free shipping on orders above 999/-</p>
//                 <div className="callus-container">
//                     <p className="callus">Call us on: 999999999</p>
//                 </div>
//             </div>
//             <div className="navbar">
//                 <div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;



import React from "react";
import '../css/Home.css';
import './Produt'
import logo from '../assets/eefc66cd70960daab6449206c3540858.png'; // Ensure to import the logo correctly
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import productimg1 from '../assets/prod-img1.jpeg'
import productimg2 from '../assets/prod-img2.jpeg'
import productimg3 from '../assets/prod-img3.jpeg'
import starimg from '../assets/starimg.png'
import insta from '../assets/instaicon.png'
import facebook from '../assets/facebook.png'
import thread from '../assets/thread.png'
import indeed from '../assets/indeed.png'
import youtube from '../assets/youtube.png'
// import searchbarimg from '../assets/searchbarimg.png'

const products = [
    { id: 1,  image: productimg1, name: "Monsterra", des: "Indoor Plant, Low maintenance", img: starimg, price: 299, strickprice:359 },
    { id: 2,  image: productimg2, name: "Monsterra", des: "Indoor Plant, Low maintenance", img: starimg, price: 299 , strickprice:359},
    { id: 3,  image: productimg3, name: "Monsterra", des: "Indoor Plant, Low maintenance", img: starimg, price: 299 , strickprice:359},
    { id: 4,  image: productimg1, name: "Monsterra", des: "Indoor Plant, Low maintenance", img: starimg, price: 299, strickprice:359 },
    { id: 5,  image: productimg2, name: "Monsterra", des: "Indoor Plant, Low maintenance", img: starimg, price: 299 , strickprice:359},
    { id: 6,  image: productimg3, name: "Monsterra", des: "Indoor Plant, Low maintenance", img: starimg, price: 299, strickprice:359 },
    { id: 7,  image: productimg1, name: "Monsterra", des: "Indoor Plant, Low maintenance", img: starimg, price: 299, strickprice:359 },
    { id: 8,  image: productimg2, name: "Monsterra", des: "Indoor Plant, Low maintenance", img: starimg, price: 299 , strickprice:359},
    { id: 9,  image: productimg3, name: "Monsterra", des: "Indoor Plant, Low maintenance", img: starimg, price: 299, strickprice:359 },
];
const Home = () => {
    return (
        <div>
            {/* Announcement Bar */}
            <div className="rectangle">
                <p className="text pt-2">Free shipping on orders above 999/-</p>
                <div className="callus-container">
                    <p className="callus pt-2">Call us on: 999999999</p>
                </div>
            </div>

            {/* Navigation Bar */}
            <div className="navbar">
                <div className="navbar-content">
                    {/* Logo */}
                    <div className="logo-container">
                        <img src={logo} alt="Chaperone Logo" className="logo" />
                        <h5>Chaperone</h5>
                    </div>

                    {/* Menu Items */}
                    <div className="menu">
                        <a href="/" className="menu-item">Home</a>
                        {/* <select placeholder= "Produts" className="list">
                        
                        
                       
                            <option href="/product" >Samsung</option>
                            <option>Samsung</option>

                            <option>Samsung</option>
                            
                        </select>
                         */}
                         <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Product
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/product">Samsung</a>
          <a class="dropdown-item" href="#">Nokia</a>
          <a class="dropdown-item" href="#">Apple</a>
          
        </div>
      </li>
                            
                        <a href="/tools" className="menu-item">Tools</a>
                        <a href="/services" className="menu-item">Our Services</a>
                        <a href="/blog" className="menu-item">Blog</a>
                        <a href="/about" className="menu-item">Our Story</a>
                        <a href="/faqs" className="menu-item">FAQs</a>
                    </div>

                    {/* Search and Profile/Cart Icons */}
                    <div className="search-profile">
                        
                        <div className="icons">
                            <a href="/profile" className="icon">My Profile</a>
                            <a href="/cart" className="icon">Cart</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-3"> 
            {/* <span><img src={searchbarimg} className="searchbar-img"/></span> */}
            <input
                            type="text"
                            className="search-bar"
                            placeholder="Search Plant"
                            
                        />
                        
            </div>

            <div className="button-container">
                <button className="plant-button text-center">Plants</button>
                <button className="post-button text-center">Posts</button>
            </div>
            <div className="desc-container">
                <p className="des">
                Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.
                </p>
            </div>
            {/* nursery */}
            <div className="nursery-coniner">
                <h4 className="nursery">Nursery</h4>
            </div>
        
        <div className="d-flex flex-row">

        
            <div className="nu-container">
                <div className="display-container">
                    <img className="circle-img mt-3 " alt="img" src={img1}/>
                    <p className="para">Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
                </div>
            </div>
            <div className="img2">
                <div className="display-container">                  
                    <img className="circle-img mt-3" alt="img" src={img2}/>
                    <p className="para">Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
                </div>
            </div>
            <div className="img3">
                <div className="display-container">
                    <img className="circle-img mt-3 " alt="img" src={img3}/>
                    <p className="para">Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
                </div>
            </div>
            <div className="img4">
                <div className="display-container">
                    <img className="circle-img mt-3" alt="img" src={img4}/>
                    <p className="para text-center">Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
                </div>
            </div>
            <div className="img5">
                <div className="display-container">
                    <img className="circle-img mt-3 " alt="img" src={img5}/>
                    <p className="para">Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
                </div>
            </div>
            <div className="img6">
                <div className="display-container">
                    <img className="circle-img mt-3" alt="img" src={img1}/>
                    <p className="para">Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
                </div>
            </div>
        </div>

        <div className="main-container">
            {/* filter */}
            <div className="filter">
                <div className="filter-container">
                    <div className="filterborder-container">
                        <div className="filter-row">
                            <p className="filter-para">Filter</p>
                            <p className="filter-clear">CLEAR ALL</p>
                        </div>
                        <hr className="mt-0"/>
                        <div className="filter-row">
                            <p className="filter-typesofplant">Type of Plants</p>
                            <p className="filter-clear">+</p>
                        </div>
                        <hr className="mt-0"/>
                        <div className="filter-row">
                            <p className="filter-para">Price</p>
                            <p className="filter-clear">+</p>
                        </div>
                        <hr className="mt-0"/>
                        <div className="filter-row">
                            <p className="filter-para">Nursery</p>
                            <p className="filter-clear">+</p>
                        </div>
                        <hr className="mt-0"/>
                        <div className="filter-row">
                            <p className="filter-ideal">Ideal Plants Location</p>
                            <p className="filter-clear">+</p>
                        </div>
                        <hr className="mt-0"/>
                        <div className="filter-row">
                            <p className="filter-indoor">Indoor/ Outdoor</p>
                            <p className="filter-clear">+</p>
                        </div>
                        <hr className="mt-0"/>
                        <div className="filter-row">
                            <p className="filter-para">Maintenance</p>
                            <p className="filter-clear">+</p>
                        </div>
                        <hr className="mt-0"/>
                        <div className="filter-row">
                            <p className="filter-plant">Plant Sze</p>
                            <p className="filter-clear">+</p>
                        </div>
                        <hr className="mt-0"/>
                        <div className="filter-row">
                            <p className="filter-water">Water Schedule</p>
                            <p className="filter-clear">+</p>
                        </div>
                        <hr className="mt-0"/>
                        <div className="filter-row">
                            <p className="filter-para">Color</p>
                            <p className="filter-clear">+</p>
                        </div>
                        <hr className="mt-0"/>
                        <div className="filter-row">
                            <p className="filter-para">Seasonal</p>
                            <p className="filter-clear">+</p>
                        </div>
                        <hr className="mt-0"/>
                        <div className="filter-row">
                            <p className="filter-light">Light effect</p>
                            <p className="filter-clear">+</p>
                        </div>
                        <hr className="mt-0"/>
                        
                    </div>

                </div>
            </div>

            <div className="products-container m-5">
                
                <div>
                <div className="d-flex">
                    <div>
                    <p className="prod">300 products</p>
                    </div>
                    <div>
                    <button className="product-btn mt-0">SORT BY</button>
                    </div>
                </div>
                </div>

                <div className="product-grid">
                    {products.map((product) => (
                        <>
                        <div className="d-flex flex-column">
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} className="product-img" />
                            <button className="product-btn ml-0">View Product</button>

                        </div>
                        <div className="monstero-card">
                            <div>
                            <p className="product-name ml-0">{product.name}</p>
                            <p className="product-des mt-0 ml-0">₹{product.des}</p>
                            <img src={starimg} alt="star" className="stars pt-0 ml-0" /><span className="m-4 mt-1 span1">4.9</span> 
                            <div className="d-flex">
                            <p className="product-price span2 ml-0 mr-4">₹{product.strickprice}</p>
                            <p className="product-price ml-0">₹{product.price}</p>
                            </div>
                            
                            <div className="d-flex">
                            <button className="add-btn ml-0">- Add to cart +</button>
                            <button className="buy-btn">Buy on Rent</button>
                            </div>
                            
                            </div>
                        </div>
                        </div>
                        </>


                    ))}
                </div>
                <div className="d-flex justify-content-center">
                    <button className="view-btn mt-2">View More</button>
                </div>
                
                
            </div>

            


        </div>

        <div className="footer-container">
            <div className="d-flex">
                <div className="mr-2 ml-2">
                    <h3 className="subscribe-heading">SUBSCRIBE TO OUR NEWSLETTER</h3>
                    <p className="subscribe-des">Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necesbus enim</p>
                    <input type="text" className="subscribe-input" placeholder="Enter your Email Address"/>
                    <br/>
                    <button className="subscribe-btn">Subscribe</button>
                </div>
                <div className="ml-5">
                    <h3 className="about-heading">ABOUT US</h3>
                    <div className="about-container">
                    <p className="about-list mt-3 mb-0">Our Story</p>
                    <p className="about-list mb-0">Blogs</p>
                    <p className="about-list mb-0">Careers</p>
                    <p className="about-list mb-0">Contact Us</p>
                    <p className="about-list mb-0">Help & Support</p>
                    </div>
                </div>
                <div className="ml-5">
                    <h3 className="about-heading">OUR SERVICES</h3>
                    <div className="about-container">
                    <p className="about-list mt-3 mb-0">Book Maali</p>
                    <p className="about-list mb-0">Plant Day Care</p>
                    <p className="about-list mb-0">Rent Plants</p>
                    <p className="about-list mb-0"> Plants & Pots</p>
                    <p className="about-list mb-0">Gardening Tools</p>
                    </div>
                </div>
                <div className="ml-5">
                    <h3 className="about-heading">USEFUL LINKS</h3>
                    <div className="useful-container">
                    <p className="about-list mb-0 mt-3">My Account</p>
                    <p className="about-list mb-0">Orders & Returns</p>
                    <p className="about-list mb-0">Track Order</p>
                    <p className="about-list mb-0">Terms & Conditions</p>
                    <p className="about-list mb-0">Privacy Policy</p>
                    <p className="about-list mb-0">Replacement Policy</p>
                    </div>
                </div>
                <div className="ml-5">
                    <h3 className="about-heading">GET IN TOUCH</h3>
                    <div className="address-container">
                        <p className="about-list  mt-3">Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003</p>
                        <br/><br/>
                        <p className="about-list mt-2">Call:<br/>
                            +919958287272
                        </p>
                        <br/>
                        <p className="about-list">Email:<br/>
                            care@chaperoneplants.com
                        </p>

        
                    </div>
                </div>
            
            </div>
            <div>
                <h3 className="foo-heading">CHAPERONE</h3>
                <p className="paragraph">Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
                <p className="foo-heading">Follow Us On</p>
                <div className="socialmedia-icon-container">
                    <img className="icon m-2" src={insta} alt="insta-icon"/>
                    <img className="icon m-2" src={facebook} alt="insta-icon"/>
                    <img className="icon m-2" src={thread} alt="insta-icon"/>
                    <img className="icon m-2" src={indeed} alt="insta-icon"/>
                    <img className="icon m-2" src={youtube} alt="insta-icon"/>
    
                </div>
            </div>

            <div className="mt-5">
                <hr className="line"/>
            </div>
            <p className="reserved">© 2023, chaperone.com All rights reserved.</p>
        </div>
        
    </div>
    );
};

export default Home;
