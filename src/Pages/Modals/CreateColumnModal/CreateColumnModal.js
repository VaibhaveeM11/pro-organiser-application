import React, { useState } from "react";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./CreateColumnModal.module.css";

function CreateColumnModal(props) {
  const [colName, setColName] = useState("");
 
  const addColumnHandler = (e) => {
    e.preventDefault();
    if (!colName) {
      alert("Please Enter Column Name");
    }
    else{
      props.addColumn(colName);
    }
    
  };


  return (
    <>
      <Backdrop />
      <div className={styles.colModal}>
        <div className={styles.colHeader}>
          <span className={styles.top}>Add Column</span>
          <button 
            onClick={() => props.closeColumnModal()}
            className={styles.closebtn}
          >
            X
          </button>
        </div>
        <div className={styles.colField}>
          <span className={styles.middle}>Enter a Column Name:</span>
          <input
            onChange={(e) => setColName(e.target.value)}
            type="text"
            className={styles.column_names}
            id="column_name"
          ></input>
        </div>
        <div className={styles.colBtn}>
          <button
            onClick={(e)=>addColumnHandler(e)}
            className={styles.CreateColumn}
            id="CreateColumn"
          >
            Add Column
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateColumnModal;
