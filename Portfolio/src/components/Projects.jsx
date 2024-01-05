import React, { useMemo, useEffect } from "react";
import { useTab } from "../utility/TabContext";
import { Box, Stack } from "@mui/material";
import prestoImg from "../assets/images/presto.svg";
import covidImg from "../assets/images/covid.svg";
import cattleImg from "../assets/images/Cow.png";
import overdraft from "../assets/images/od.svg";
import personalLoan from "../assets/images/personalLoan.png";
import creditcard from "../assets/images/credit.svg";
import gym from "../assets/images/gym.svg";
import store from "../assets/images/store.svg";
import Chip from "@mui/material/Chip";
const Projects = () => {
  const { tab } = useTab();
  useMemo(() => {
    if (tab && tab === "projects") {
      document.getElementById("projects").scrollIntoView();
    }
  }, [tab]);
  useEffect(() => {
    function handleImageLoad() {
      const blurImages = document.querySelectorAll(".smlImg");
      blurImages.forEach((span) => {
        const originalImg = span.querySelector("img");
        const projectName = span.querySelector("div");
        function loaded() {
          span.classList.add("loaded");
          projectName.classList.add("loaded");
        }
        if (originalImg.complete) {
          loaded();
        } else {
          originalImg.addEventListener("load", loaded);
        }
      });
    }

    handleImageLoad();
  }, []);

  return (
    <section className="hideSection" id="projects">
      <Box
        sx={{
          margin: { lg: "13em 5em 5em 5em", md: "13em 5em 5em 5em", xs: "1em" },
          padding: "2em",
        }}
      >
        <Stack sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
          <h1
            style={{ color: "white", alignSelf: "center", fontSize: "2.5em" }}
          >
            Projects
          </h1>
          <div className="projectPrompts">
            Below are the projects that I have worked on as a Frontend Developer
          </div>
          <div className="projectPrompts">
            These are Enterprise Level Projects
          </div>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "1em",
              flexWrap: "wrap",
              fontFamily: "Quicksand-Bold",
            }}
          >
            <div className="projectItems">
              <span className="smlImg">
                <img src={prestoImg} alt="presto" loading="lazy" />
                <div className="projectName">
                  Presto
                  <div className="projectDesc">
                    A project for sales team to compute revenue, profit/loss and
                    other financial metrics of the company
                  </div>
                  <span className="chipsContainer">
                    <Chip
                      className="chips"
                      label="Angular"
                      variant="outlined"
                    />
                    <Chip className="chips" label="HTML" variant="outlined" />
                    <Chip className="chips" label="CSS" variant="outlined" />
                    <Chip
                      className="chips"
                      label="Javascript"
                      variant="outlined"
                    />
                  </span>
                </div>
              </span>
            </div>
            <div className="projectItems">
              <span className="smlImg">
                <img src={covidImg} alt="Covid-tracker" loading="lazy" />
                <div className="projectName">
                  Covid Tracker
                  <div className="projectDesc">
                    A project to track the Covid spread within the organization
                    and provide aid to employees who need medical / logistical /
                    financial support
                  </div>
                  <span className="chipsContainer">
                    <Chip className="chips" label="React" variant="outlined" />
                    <Chip className="chips" label="Redux" variant="outlined" />
                    <Chip className="chips" label="HTML" variant="outlined" />
                    <Chip className="chips" label="CSS" variant="outlined" />
                    <Chip
                      className="chips"
                      label="Javascript"
                      variant="outlined"
                    />
                  </span>
                </div>
              </span>
            </div>
            <div className="projectItems">
              <span className="smlImg">
                <img src={personalLoan} alt="Personal-Loan" loading="lazy" />
                <div className="projectName">
                  HDFC - Personal Loan
                  <div className="projectDesc">
                    A project for HDFC bank to disburse Personal Loan to
                    customers based on various key metrics as per Bank's policy
                  </div>
                  <span className="chipsContainer">
                    <Chip
                      className="chips"
                      label="Angular"
                      variant="outlined"
                    />
                    <Chip className="chips" label="HTML" variant="outlined" />
                    <Chip className="chips" label="CSS" variant="outlined" />
                    <Chip
                      className="chips"
                      label="Javascript"
                      variant="outlined"
                    />
                  </span>
                </div>
              </span>
            </div>
            <div className="projectItems">
              <span className="smlImg">
                <img src={cattleImg} alt="Cattle Loan" loading="lazy" />
                <div className="projectName">
                  HDFC - Cattle Loan
                  <div className="projectDesc">
                    A project for HDFC bank to disburse Cattle Loan to customers
                    based on various key metrics as per Bank's policy
                  </div>
                  <span className="chipsContainer">
                    <Chip className="chips" label="React" variant="outlined" />
                    <Chip className="chips" label="HTML" variant="outlined" />
                    <Chip className="chips" label="CSS" variant="outlined" />
                    <Chip
                      className="chips"
                      label="Javascript"
                      variant="outlined"
                    />
                  </span>
                </div>
              </span>
            </div>
            <div className="projectItems">
              <span className="smlImg">
                <img src={overdraft} alt="Overdraft" loading="lazy" />
                <div className="projectName">
                  SBFC - Overdraft
                  <div className="projectDesc">
                    A project for SBFC bank to provide Overdraft facility to
                    customers based on various key metrics as per Bank's policy
                  </div>
                  <span className="chipsContainer">
                    <Chip
                      className="chips"
                      label="Angular"
                      variant="outlined"
                    />
                    <Chip className="chips" label="HTML" variant="outlined" />
                    <Chip className="chips" label="CSS" variant="outlined" />
                    <Chip
                      className="chips"
                      label="Javascript"
                      variant="outlined"
                    />
                  </span>
                </div>
              </span>
            </div>
            <div className="projectItems">
              <span className="smlImg">
                <img src={creditcard} alt="Credit Card" loading="lazy" />
                <div className="projectName">
                  Federal - Credit Card
                  <div className="projectDesc">
                    A project for Federal bank to provide Credit Card to
                    customers based on various key metrics as per Bank's policy
                  </div>
                  <span className="chipsContainer">
                    <Chip
                      className="chips"
                      label="Angular"
                      variant="outlined"
                    />
                    <Chip className="chips" label="HTML" variant="outlined" />
                    <Chip className="chips" label="CSS" variant="outlined" />
                    <Chip
                      className="chips"
                      label="Javascript"
                      variant="outlined"
                    />
                  </span>
                </div>
              </span>
            </div>
          </Stack>
          <Stack className="projectPrompts" marginTop="2em">
            Below are my own Personal Projects for learning purposes
          </Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "1em",
              flexWrap: "wrap",
              fontFamily: "Quicksand-Bold",
            }}
          >
            <div
              className="projectItems"
              onClick={() => {
                window.open("https://krishik-fitness.netlify.app");
              }}
            >
              <span className="smlImg">
                <img src={gym} alt="Fitness App" loading="lazy" />
                <div
                  className="projectName"
                  title="Go to https://krishik-fitness.netlify.app"
                >
                  Fitness App
                  <div className="projectDesc">
                    A project to help people do their workouts properly by
                    showing standard workout forms
                  </div>
                  <span className="chipsContainer">
                    <Chip className="chips" label="React" variant="outlined" />
                    <Chip className="chips" label="HTML" variant="outlined" />
                    <Chip className="chips" label="CSS" variant="outlined" />
                    <Chip
                      className="chips"
                      label="Javascript"
                      variant="outlined"
                    />
                  </span>
                </div>
              </span>
            </div>
            <div
              className="projectItems"
              onClick={() => {
                window.open("https://krishik-store.netlify.app");
              }}
            >
              <span className="smlImg">
                <img src={store} alt="Redux E-Store" loading="lazy" />
                <div
                  className="projectName"
                  title="Go to https://krishik-store.netlify.app"
                >
                  Redux E-Store
                  <div className="projectDesc">
                    A project to showcase Redux Toolkit's application using a
                    simple E-commerce scenario
                  </div>
                  <span className="chipsContainer">
                    <Chip className="chips" label="React" variant="outlined" />
                    <Chip className="chips" label="Redux" variant="outlined" />
                    <Chip className="chips" label="HTML" variant="outlined" />
                    <Chip className="chips" label="CSS" variant="outlined" />
                    <Chip
                      className="chips"
                      label="Javascript"
                      variant="outlined"
                    />
                  </span>
                </div>
              </span>
            </div>
          </Stack>
        </Stack>
      </Box>
    </section>
  );
};

export default Projects;
