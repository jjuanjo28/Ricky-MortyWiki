import React from "react";
import FilterBTN from "../FilterBTN";
const Gender = ({ updatePageNumber, updateGender }) => {
  let gender = ["Female", "Male", "Genderless", "unknown"];

  const collapseTree = document.querySelectorAll("#collapseTree");

  function change() {
    if (collapseTree[0].classList[2] == "show") {
      collapseTree[0].classList.remove("show");
    } else {
      collapseTree[0].classList.add("show");
    }
  }
  return (
    <div className="accordion-item ">
      <h2 onClick={change} className="accordion-header" id="headingTree">
        <button className="accordion-button collapsed" type="button">
          {" "}
          Gender{" "}
        </button>
      </h2>
      <div id="collapseTree" className="accordion-collapse collapse show">
        <div className="accordion-body d-flex flex-wrap gap-3">
          {gender.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="Gender"
              task={updateGender}
              updatePageNumber={updatePageNumber}
              input={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gender;
