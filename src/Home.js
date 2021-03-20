import React from 'react'
// import Amazonlogo from './images/amazon1.png'
import './Home.css'
import { Link } from "react-router-dom"

function Home(props) {
    return (
        <div className="home">
            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/1102620_MLP_1440x675_apv189_V3._CR575,0,865,675_AC_.jpg" className="sign"/>
            <p className="k">Welcome to Prime Video</p>
            <p className="t">Join Prime to watch the latest movies, TV shows<br/> 
                and award-winning Amazon Originals</p>
                <br/>
            <Link to="/movie"><button className= "button button2 ">Login To Join Prime</button></Link>
            
            <div className="w">
                <img src="https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/IN-Living-Room-V2._CB524587855_._CR0,0,865,675_AC_.jpg" className="img2"/>
                <div className="w1">
                    <p className="k2">Great Entertainment</p>
                    <p className="t2">With your Prime membership, you have access to exclusive <br/>
                         Amazon Originals, blockbuster Bollywood movies, regional <br/>
                         movies and more.</p>
                         <br/>
                         <Link to="/movie"><button className= "button button2 " style={{marginLeft:"10px"}}>Get Started</button></Link>
                </div>
            </div>
            <div className="y">
                <img src="https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/PRIME_multi-benefit_MAGNET_2X._CB1519820207_SY1200_FMJPG_.jpg"/>
                <div className="y1">
                    <p className="k3">One membership, many benefits</p>
                    <p className="t3">Your Prime membership now also includes ad-free music <br/>
                    along with unlimited free, fast delivery on eligible items, <br/>
                    exclusive access to deals & more.</p>
                    <br/>
                    <Link to="/movie"><button className= "button button2 " >Get Started</button></Link>
                    <p className="t4">*Go to amazon.in/prime for more information</p>
                </div>
            </div>
            <div className="z">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/MLP_Template_Image_Left._CR0,0,865,675_AC_.jpg"/>
                <p className="k4">Even better with Fire TV Stick</p>
                <p className="t5">The biggest movies and TV shows are always better on a <br/>
                    big screen. Simply plug in your Amazon Fire TV Stick and <br/>
                    stream on any HDTV. Press the voice button on the remote <br/>
                    and say the name of the title you want to watch to find <br/>
                    it in seconds.</p>
                    <br/>
                    <Link to="/movie"><button className= "button button2 " style={{marginLeft:"740px"}}>Get Started</button></Link>            </div>
            <div className="r">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_Devices.jpg" className="i2"/>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_Download_IN.jpg" className="i3"/>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/300x300_Tile_1.png" className="i4"/>
                <div className="o">
                    <p>Watch Anywhere
                        <br/>
                        <span className="g7">Enjoy from the web or with the Prime<br/>
                            Video app on your phone, tablet, or select <br/>
                        Smart TVs — on up to 3 devices at once.</span>
                    </p>

                    <p className="o1"> Download and Go
                    <br/>
                    <span className="g1">Watch offline on the Prime Video app<br/>
                     when you download titles to your iPhone, <br/>
                     iPad, Tablet, or Android device.</span>
                    </p>

                    <p className="o2"> Data Saver
                    <br/>
                    <span className="g2">Control data usage while downloading <br/>
                    and watching videos on select phones or <br/>
                    tablets.</span>
                    </p>

                </div>
            </div>
            <img src="https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/IN-kids-30Jan._CB1517304519_SY1200_FMJPG_.jpg" className="h"/>
            <div className="z1">
                <p className="k8">Family Friendly</p>
                <p className="t8">The biggest movies and TV shows are always better on a<br/>
                    big screen. Simply plug in your Amazon Fire TV Stick and<br/>
                    stream on any HDTV. Press the voice button on the remote <br/>
                    and say the name of the title you want to watch to find <br/>
                    it in seconds.</p>
                    <br/>
                    <Link to="/movie"><button className= "button button2 " style={{marginLeft:"140px"}}>Get Started</button></Link>

            </div>
            <div className="gr">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light._SY32_FMpng_.png" className="p1"/>
            <a href="#" style={{color:"rgb(39, 182, 201)",marginTop: "50px",marginLeft: "-250px"}}>Terms and Privacy Notice &nbsp; &nbsp;&nbsp; &nbsp;
                Send us feedback &nbsp; &nbsp;&nbsp;  Help </a>
            <p style={{color:"#fff",marginLeft: "490px",marginTop: "20px"}}>© 1996-2020, Amazon.com, Inc. or its affiliates
            </p>
        </div>
        </div>
    )
}

export default Home
