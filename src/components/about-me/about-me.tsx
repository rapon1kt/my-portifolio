import React from "react";
import "./about-me.css";
import { Typography } from "@mui/joy";
import { Hash, Heart } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="about-me">
      <div className="left-corner">
        <Typography
          className="about-me-title"
          startDecorator={<Hash strokeWidth={3} size={30} />}
        >
          About Me
        </Typography>
        <Typography className="my-description">
          Hi everyone, i am
          <Typography className="colored"> Gustavo Raponi Silva </Typography>
          from
          <Typography className="colored"> Itajubá, Brasil</Typography>. I am
          currently attending high school and intend to enter the Federal
          University of Itajubá (UNIFEI). I'm a technology enthusiast with a
          positive mindset and a wild desire to learn new things. Since
          beginning my journey as a Front-End Student, I have continuously
          worked to improve my skills and optimize my projects more and more.
          <br /> <br />
          Apart from coding, some other activities that I love to do!
        </Typography>
        <Typography className="list">
          <Typography
            startDecorator={<Heart className="heart" />}
            className="hobbies"
          >
            Voleyball
          </Typography>
          <Typography
            startDecorator={<Heart className="heart" />}
            className="hobbies"
          >
            Playing Games
          </Typography>
          <Typography
            startDecorator={<Heart className="heart" />}
            className="hobbies"
          >
            Study Philosophy
          </Typography>
        </Typography>
        <Typography className="quote">
          <i>
            "Everything is empty, everything is the same and everything was!"
          </i>
          <Typography className="quote">-Friedrich, Nietzsche</Typography>
        </Typography>
      </div>
      <div className="right-corner">
        <img src="programming.png" alt="programming me" />
      </div>
    </section>
  );
}
