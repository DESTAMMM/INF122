import React from "react";
import '../stylesheet/Socials.css';
function Socials(props){
    return(
        <div className="link-container">
            <div className="link">
                <img src={require(`../images/${props.image1}.svg`)}
                alt="Foto del evento"/>
            </div>
            <div className="link">
                <img src={require(`../images/${props.image2}.svg`)}
                alt="Foto del evento"/>
            </div>
            <div className="link">
                <img src={require(`../images/${props.image3}.svg`)}
                alt="Foto del evento"/>
            </div>
        </div>
    );
}
export default Socials;