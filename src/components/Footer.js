import React from 'react';
import '../assets/Main.css';

function Footer(props) {
    return (
        <>
        <footer className='footer1'>
            <div className='F-MainBox flex-column'>

            <div className='logoBox'></div>
            <h5 className='logoTex'>ARTS COUNCIL <br /> KARACHI </h5>
            <h6>@ 2010</h6>
            <h6>Privacy Trems</h6>
            </div>
            <div className='F-production'>
                <ul className='F-items'>
                    <h3>Production</h3>
                    <li className='F-item'>
                        Festivel
                    </li>
                    <li className='F-item'>
                        Event
                    </li>
                    <li className='F-item'>
                        Dogotal
                    </li>
                </ul>
            </div>
            <div className='F-activities'>
            <ul className='F-items'>
            <h3>Activities</h3>
                    <li className='F-item'>
                        Festivel
                    </li>
                    <li className='F-item'>
                        Event
                    </li>
                    <li className='F-item'>
                        Dogotal
                    </li>
                </ul>
            </div>
            <div className='F-about'>
            <ul className='F-items'>
            <h3>About</h3>
            <li className='F-item'>
                        Arts Council
                    </li>
                    <li className='F-item'>
                        Hostory
                    </li>
                    <li className='F-item'>
                        Governing Body
                    </li>
                    <li className='F-item'>
                        Over Team
                    </li>
                    <li className='F-item'>
                        Contact us
                    </li>
                </ul>
            </div>
            <div className='F-venues'>
            <ul className='F-items'>
            <h3>Venues</h3>
                    <li className='F-item'>
                    studio1
                    </li>
                    <li className='F-item'>
                    studio2
                    </li>
                    <li className='F-item'>
                        studio3
                    </li>

                </ul>
            </div>


        </footer>
        </>
    );
}



export default Footer;