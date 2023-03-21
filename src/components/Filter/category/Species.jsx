import React from "react";
import FilterBTN from "../FilterBTN";
const Species = ({ updateSpecies, updatePageNumber }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  const collapseTwo = document.querySelectorAll("#collapseTwo");
  function change() {
    if (collapseTwo[0].classList[2] == "show") {
      collapseTwo[0].classList.remove("show");
    } else {
      collapseTwo[0].classList.add("show");
    }
  }

  return (
    <div className="accordion-item ">
      <h2 onClick={change} className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button">
          {" "}
          Species{" "}
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse show">
        <div className="accordion-body d-flex flex-wrap gap-3">
          {species.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="species"
              task={updateSpecies}
              updatePageNumber={updatePageNumber}
              input={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Species;
