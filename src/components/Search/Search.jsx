import React from 'react';
import styles from "../../css/Search.module.scss"
const Search = ({ setSearch , setPageNumber }) => {

    var searchBtn = (e) => {
        e.preventDefault();
    } 
    return (
        <form
    className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
  >
  <input
  onChange={(e) => {
    setPageNumber(1);
    setSearch(e.target.value);
  }}
  placeholder="Search for characters"
  className={styles.input}
  type="text"
/>
<button
  onClick={searchBtn}
  className={`${styles.btn} btn btn-primary fs-5`}
>
  Search
</button>

  </form>
    );
}

export default Search;
