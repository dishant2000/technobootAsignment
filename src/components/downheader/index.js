import React from 'react'
import './index.css'
import { IoLocation } from 'react-icons/io5'
import {FaTelegramPlane,FaPhoneAlt} from 'react-icons/fa'
const brandLogo = {
    display : "flex",
    flexDirection : "column"    
}
const rightBar = {
    display: "flex",
    flexDirection: "row"
}
const rightBar_location = {
    display: "flex",
    flexDirection: "row",
    alignItems : "center",
    justifyContent : "center",
    margin : "0 10px",
    
}
const rightBar_wrapper_o = {
    display: "flex",
    flexDirection: "column"

}
function DownHeader() {
    return (
        <div className="nav-bottom-pannel">
            <div className="nav-brand-panel container">
                <div style={brandLogo}>
                   <span style = {{
                        fontSize : "xx-large",
                        fontWeight : "900",
                        textAlign : "left"
                   }}>
                        FOX.
                   </span>
                   <span style = {{
                       fontSize : "smaller",
                       textAlign : "left",
                       fontWeight : "700"
                   }}
                    
                   >
                        UNIVERSITY
                   </span>
                </div>

                <div style={rightBar}>
                    <div style={rightBar_location}>
                        <div style = {{
                            marginRight : "10px"
                        }}>

                            <FaTelegramPlane style={{
                                fontSize: "20px",
                                color: "rgb(255,20,98)"
                            }} />
                        </div>
                        <div style={rightBar_wrapper_o}>
                            <div style = {{textAlign : "start",fontSize : "small",fontWeight : "bold"}}>Email</div>
                            <div style = {{fontSize : "smaller",fontWeight :"500"}}>yourmail@gmail.com</div>
                        </div>
                    </div>
                    <div style={rightBar_location}>
                        <div style = {{
                            marginRight : "10px"
                        }}>

                            <FaPhoneAlt style={{
                                fontSize: "20px",
                                color: "rgb(255,20,98)"
                            }} />
                        </div>
                        <div style={rightBar_wrapper_o}>
                            <div style = {{textAlign : "start",fontSize : "small",fontWeight : "bold"}}>Call</div>
                            <div style = {{fontSize : "smaller",fontWeight :"500"}}>Call us : (+12) 325 3456</div>
                        </div>
                    </div>
                </div>
                <div className = "apply-btn">
                    <button >Apply Now</button>
                </div>
            </div>
        </div>
    )
}

export default DownHeader
