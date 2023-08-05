import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "./style.css"
function HeroSection() {
  return (
    <div>
      <div class=" m-0 hero-bg text-light">
        <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 m-0 align-items-center rounded-3 border shadow-lg">
          <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 class="display-4 fw-bold lh-1">Lemma Guyya Foundation</h1>
            <p class="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
              <button
                type="button"
                class="btn btn-primary btn-lg text-light  px-4 me-md-2 fw-bold"
              >
                Donate
              </button>
          
            </div>
          </div>
          <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg ">
            <img class="rounded-lg-3" src="logo.png" alt="" width="350" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
