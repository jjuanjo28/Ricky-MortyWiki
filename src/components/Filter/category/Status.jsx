import React from "react";
import FilterBTN from "../FilterBTN";

const Status = ({ updateStatus, updatePageNumber }) => {
  let status = ["Alive", "Dead", "Unknown"];
  const collapseOne = document.querySelectorAll("#collapseOne");

  function change() {
    if (collapseOne[0].classList[2] == "show") {
      collapseOne[0].classList.remove("show");
    } else {
      collapseOne[0].classList.add("show");
    }
  }
  return (
    <div className="accordion-item">
      <h2 onClick={change} className="accordion-header" id="headingOne">
        <button
          style={{ backgroundColor: "white" }}
          className="accordion-button collapsed"
          type="button"
        >
          {" "}
          Status{" "}
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse">
        <div className="accordion-body d-flex flex-wrap gap-3">
          {status.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="status"
              task={updateStatus}
              updatePageNumber={updatePageNumber}
              input={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
