import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "AI Engineer",
          "Free-lance Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 51,
      }}
    />
  );
}

export default Type;
