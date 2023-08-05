import React from "react";
import Card from "./Card";
function Hero() {
  return (
    <div>
      <main >
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 fst-italic">
              Title of a longer featured blog post
            </h1>
            <p className="lead my-3">
              Multiple lines of text that form the lede, informing new readers
              quickly and efficiently about what’s most interesting in this
              post’s contents.
            </p>
            <p className="lead mb-0">
              <a href="#" className="text-white bg-primary px-3 py-1 fw-bold">
                Donate
              </a>
            </p>
          </div>
        </div>

        <div className="container mx-auto row">
     
        <Card />
        <Card />
       <hr />
        </div>
      </main>
    </div>
  );
}

export default Hero;
