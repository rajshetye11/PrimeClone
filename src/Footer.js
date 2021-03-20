import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light._SY32_FMpng_.png" className="footimg"/>
            <a href="#" style={{color:"rgb(39,182,201)",marginLeft:"300px"}}> Terms and Privacy Notice 
            <div>&nbsp;</div>Send Us Feedback
            <div>&nbsp;</div>Help
            </a>
            <p style={{color:"#fff",marginLeft:"490px",marginTop:"20px"}}>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
        </div>
    )
}

export default Footer
