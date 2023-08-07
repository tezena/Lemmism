import React from "react";

function Card() {
  return (
    <div class="col-md-12">
      <div class="row g-0 border rounded overflow-hidden flex-col mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success">Posts</strong>
          <h3 class="mb-0">Art Literacy</h3>
          <div class="mb-1 text-muted">May 3/2023</div>
          <p class="mb-auto">
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </p>
          <a href="#" class="bg-primary text-light ">
           Contribute +
          </a>
        </div>
        <div class="col-auto d-none d-md-block">
          <svg
            class="bd-placeholder-img"
            width="300"
            height="300"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Thumbnail"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" />
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
              Thumbnail
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Card;
