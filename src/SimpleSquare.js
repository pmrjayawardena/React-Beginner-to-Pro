import PropTypes from 'prop-types';
import React from 'react';
import './square.css';

export default function SimpleSquare({size,color}){


    const sizeWithPx = `${size}px`;
    const style = {
        width: sizeWithPx,
        height:sizeWithPx,
        backgroundColor:color,
    };


    return(
        <div style={style} className="Square">

        </div>
    );
}


SimpleSquare.propTypes = {

    color:PropTypes.string,
    size:PropTypes.number.isRequired,
};
SimpleSquare.defaultProps = {
    color: 'black',

};