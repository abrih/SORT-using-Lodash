import { useState } from "react";
import "./App.css";

const List = ({ list, onRemoveItem }) => {

const [sort, setSort] = useState("NONE");
const handleSort = (sortKey) => {
  setSort(sortKey);
};







  return (
    <ul>
      <li>
        <span><button type="button" onClick={() => handleSort("TITLE")}>Title</button></span>
        <span> <button type="button" onClick={() => handleSort("AUTHOR")}>Author</button></span>
        <span><button type="button" onClick={() => handleSort("COMMENT")}>Comments</button></span>
        <span> <button type="button" onClick={() => handleSort("POINT")}> Points </button> </span>
        <span>Actions</span>
      </li>

      {list.map((item) => ( <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} /> ))}
    </ul>
  );
};

export default App;
