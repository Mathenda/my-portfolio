import React, { useState, useRef, useEffect } from "react";
import "../App.css"

export default function MouseFadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => entry.isIntersecting && setVisible(true));
      });
      observer.observe(domRef.current);
    }, []);
    return (
      <div
        className={`Mfade-in-section ${isVisible ? 'Mis-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
}

