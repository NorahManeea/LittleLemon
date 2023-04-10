import React from 'react';
import Logo from "./../assets/Asset 20@4x.png";
import "/Users/nouram/Downloads/Capstone/src/layouts/Footer.css";

const Footer = () => {
  return (
    <div>
        <div className="footer-background">
            <div className="footer-container">
                
                <div className="footer-content">
                <img src={ Logo } alt="Little Lemon logo" />
                    <div className="locations">
                        <h5>LOCATIONS</h5>
                        <ul>
                            <li>Accra</li>
                            <li>Kumasi</li>
                            <li>Cape Coast</li>
                            <li>Tamale</li>
                        </ul>
                    </div>
                    <div className="opening-times">
                        <h5>OPENING TIMES</h5>
                        <ul>
                            <li>Mon - Wed: 10:30AM - 12:00AM</li>
                            <li>Fri: 12:00PM - 1:00AM</li>
                            <li>Sat - Sun: 10:30AM - 12:00AM</li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h5>CONTACT US</h5>
                        <ul>
                            <li>96 Abafom Road, North Ridge - Accra</li>
                            <li>Tel: 020 7928 0678</li>
                            <li>Email: info@littlelemon.com</li>
                        </ul>
                    </div>
            </div>
            
        </div>
        </div>
        <div className="copyright">
                <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
            </div>
    </div>
  )
}

export default Footer