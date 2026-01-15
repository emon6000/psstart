import React, { useState } from "react";
import FormManagementImm from "./FormManagementImm";

const Immutability = () => {
  let [List, setList] = useState([]);
  let [item, setItem] = useState("");
  
  const AddToList = () => {
    List.push(item);  //mutable operation
    setList([...List]); //immutable operation

    // setItem
  }
  const deleteData=(element)=>{
    const filteredData=List.filter((e)=>e!==element);
    setList([...filteredData]);
  }

  return(
  <div>
    <br />
    <br />
    <p>item : {item}</p>
    <p>Items: {List.length}</p>
    <input type="text" onChange={(e)=>setItem(e.target.value)}/>
    <button onClick={() => AddToList()}>Add Item</button>

    <table>
        <tbody>
            {
                List.length !== 0 ? (
                    List.map((element,i)=>
                    (
                        <tr key={i.toString()}>
                            <td>{element}</td>
                            <td>
                                <button onClick={()=>{deleteData(element)}}>Delete</button>
                            </td>
                        </tr>
                    ))
                )
                :
                (<tr>No Items</tr>)
            }
        </tbody>
    </table>
  </div>
  );
  
};

export default Immutability;
