import { Box, Slide, Typography, Zoom } from "@mui/material";
import React, { useEffect, useState } from "react";
import nehal from "../../media/nehal.jpg";
import "./About.css";

const About = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [scrolled, setScrolled] = useState(0);

  window.addEventListener("scroll", () => {
    setScrolled(document.documentElement.scrollTop);
  });

  if (scrolled >= 56) {
    setTimeout(() => {
      setChecked1(true);
    }, 600);
    setTimeout(() => {
      setChecked2(true);
    }, 800);
  }

  return (
    <Box
      id="aboutDiv"
      className="aboutContainer"
      sx={{
        width: "80%",
        margin: "10% auto",
        padding: "0% 10px",
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "25px",
      }}
    >
      <Box sx={{ borderTop: "2px solid rgb(35,53,84)", position: "relative" }}>
        <Zoom in={checked1}>
          <Typography
            className="aboutHeading"
            variant="h4"
            sx={{
              color: "rgb(191,201,232)",
              backgroundColor: "rgb(11,24,47)",
              position: "absolute",
              top: "-25px",
              padding: "0% 5% 0% 0%",
            }}
          >
            About Me
          </Typography>
        </Zoom>
        <Zoom in={checked2}>
          <Typography
            className="aboutText"
            sx={{ marginTop: "8%", color: "rgb(136,146,176)" }}
          >
            Hello! My name is{" "}
            <span style={{ color: "white" }}>Nehal Ahmad</span> and I enjoy
            creating things that live on the internet. My interest in computers
            and technology started back in when I was in my 6th grade and my
            father brought me a computer and after that day i kept doing lot of
            new things on that.
            <br />
            <br />
            After my graduation i was finding something to start my carrer in
            tech field and gratefully i came into know about{" "}
            <span style={{ color: "white" }}>Web Development</span> and started
            my journey from there. Fast-forward to today, and I’ve worked in
            many projects with lot of tech stacks.My main focus these days is
            building accessible, inclusive products.
          </Typography>
        </Zoom>
      </Box>
      <Zoom in={checked2}>
        <Box
          className="imageContainer"
          sx={{ display: "grid", justifyContent: "right" }}
        >
          <img
            className="profileImage"
            style={{ display: "block", margin: "auto", borderRadius: "5px",height:"300px" }}
            // width={"90%"} 
            // height={"100%"}
            src={nehal}
          />
        </Box>
      </Zoom>
      <div id="About"></div>
    </Box>
    // 151951
  );
};

export default About;
