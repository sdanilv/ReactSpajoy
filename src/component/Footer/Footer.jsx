import React from "react";
import  s from "./Footer.module.scss"

const Footer = props => {
    return <div className={s.footer}>
        {/*<Section1 />*/}
        <footer id="contact" >
            <div >
                <div >
                    <div >
                        <div >
                            <h2 >Spajoy</h2>
                            <ul >
                                <li ><a href="#"><span ></span></a></li>
                                <li ><a href="#"><span ></span></a>
                                </li>
                                <li ><a href="#"><span ></span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div >
                        <div >
                            <h2 >Меню</h2>
                            <ul >
                                <li><a href="#" >Shop</a></li>
                                <li><a href="#" >About</a></li>
                                <li><a href="#" >Journal</a></li>
                                <li><a href="#" >Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div >
                        <div >
                            <h2 >Help</h2>
                            <div >
                                <ul >
                                    <li><a href="#" >Shipping Information</a></li>
                                    <li><a href="#" >Returns &amp; Exchange</a></li>
                                    <li><a href="#" >Terms &amp; Conditions</a></li>
                                    <li><a href="#" >Privacy Policy</a></li>
                                </ul>
                                <ul >
                                    <li><a href="#" >FAQs</a></li>
                                    <li><a href="#" >Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div >
                            <h2 >Have a Questions?</h2>
                            <div >
                                <ul>
                                    <li><span >203 Fake St. Mountain
                                        View, San Francisco, California, USA</span></li>
                                    <li><a href="#"><span >+2 392 3929
                                            210</span></a></li>
                                    <li><a href="#"><span ></span><span
                                        >info@yourdomain.com</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <div >

                        <p>
                            All rights reserved | This template is made with <i
                                                                                aria-hidden="true"></i> by <a
                            href="https://colorlib.com" target="_blank">Colorlib</a>

                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
};

export default Footer;
