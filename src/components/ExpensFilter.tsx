import React from "react";
import { Categories } from "../App";
interface Props{
    onSelectCategory:(x:string)=>void;
}
function ExpensFilter({onSelectCategory}:Props) {
  return (
    
    <div className="mb-3" >
      <select className="form-select" onChange={(event) => onSelectCategory(event.target.value)}>
        <option value={""}>AllCategories</option>
        {Categories.map(item => <option key={item} value={item}>{item}</option>)}
      </select>
    </div>
    
  );
}

export default ExpensFilter;
