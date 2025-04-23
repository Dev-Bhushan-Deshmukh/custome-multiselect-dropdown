import React, { useEffect, useState } from "react";

import classes from "./dropdown.module.css";
import { transformToObject } from "../../utility/transformToObject";
import { selectAll } from "../../utility/selectAll";
import { searchItems } from "../../utility/searchItem";
import { handleCheck } from "../../utility/handleCheck";
import { GrFormSearch } from "react-icons/gr";
export const Dropdown = ({data,title}) => {
  const [itemsList, setItemsList] = useState([]);
  const [itemsListCopy, setItemsListCopy] = useState([]);
  const[selectAllIndicator,setSelectAllIndicator]=useState(false)
  const[searchResults,setSearchResults]=useState([]);
  useEffect(() => {
    const transformedArray = transformToObject(data);
    setItemsList(transformedArray);
    setItemsListCopy(transformedArray);
  }, []);



  return (
    <div className={classes["dropdown-container"]}>
      <p>{title}</p>
      <input type="text" id={classes.searchbar}
      onChange={(e)=>searchItems(e,setItemsList,itemsList,itemsListCopy,setSearchResults)}
      />
      <div className={classes["checkbox-flex"]}>
        <input
          type="checkbox"
          name="Select All"
          id="Select All"
          checked={selectAllIndicator}
          onChange={(e) => selectAll(e, itemsList, setItemsList,setSelectAllIndicator)}
        />
        <label htmlFor="Select All">Select All</label>{" "}
      </div>
      <div className={classes.listcontainer}>
        {itemsList.map((item,index) => (
          <div  className={classes["checkbox-flex"]}>
            <input
              type="checkbox"
              checked={item.checked}
              name={item.itemName}
              id={item.itemName}

onChange={(e)=>handleCheck(e,index,itemsList,setItemsList,setSelectAllIndicator)}


            />
            <label htmlFor={item.itemName}>{item.itemName}</label>

            {searchResults.includes(item) && <GrFormSearch />}
          </div>
        ))}
      </div>
    </div>
  );
};
