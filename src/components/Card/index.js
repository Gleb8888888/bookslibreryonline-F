import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const Card = (props) => {
return (
   <div className="CardWrapper">
      <div className="ColImg">
      <img className="Img" src={props.image} alt={props.name} />
      </div>
      <div className="ColDetail">
      <div className="Header">
         <div className="BookTitle">{props.name}</div>
      </div>
      <div className="Description">{props.author} <br></br>
      ID: {props.id}</div>
      <a className="Link" href={props.url}>
         Узнать больше
      </a>
      </div>
   </div>
);
};

Card.propTypes = {
/**
   *  Image
   */
image: PropTypes.string.isRequired,
/**
   * Title
   */
name: PropTypes.string.isRequired,
/**
   * Author
   */
author: PropTypes.string.isRequired,
/**
   * Url
   */
url: PropTypes.string.isRequired,
/**
   * id
   */
id: PropTypes.string.isRequired,
};

export default Card;