import React from "react";
import PropTypes from 'prop-types';

const AnimatedText = () => {
    return (
        <div>
            <svg viewBox="-40 -20 600 300" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                <path id="path">
                    <animate attributeName="d" from="m10,60 h0" to="m10,60 h1100" dur="15s" begin="0s" repeatCount="indefinite" />
                </path>
                <defs>
                    <filter x="0" y="0" width="1" height="1" id="solid">
                        <feFlood floodColor="black" floodOpacity="0.5" />
                        <feComposite in="SourceGraphic" operator="xor" />
                    </filter>
                </defs>
                <text fontSize="26" filter="url(#solid)">
                    <textPath xlinkHref="#path">
                        <tspan fontSize="15" x="1.2em" dy="1.5em" fill="white">Hello, My name is Shalini Tyagi and</tspan>
                        <tspan fontSize="18" x="1.2em" dy="1.5em" fill="#42c58a">I AM A FULLSTACK DEVELOPER</tspan>
                        <tspan fontSize="16" x="1.2em" dy="1.5em" fill="white">Creating modern and responsive design for Web.</tspan>
                    </textPath>
                </text>
                <text fontSize="26">
                    <textPath xlinkHref="#path">
                        <tspan fontSize="15" x="1.2em" dy="1.5em" fill="white">Hello, My name is Shalini Tyagi and</tspan>
                        <tspan fontSize="18" x="1.2em" dy="1.5em" fill="#42c58a">I AM A FULLSTACK DEVELOPER</tspan>
                        <tspan fontSize="16" x="1.2em" dy="1.5em" fill="white">Creating modern and responsive design for Web.</tspan>
                    </textPath>
                </text>
            </svg >
        </div >

    );
}

AnimatedText.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default AnimatedText;