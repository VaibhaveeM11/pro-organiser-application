import React, { useState } from "react";
import styles from "./CreateBoard.module.css";
import { addBoard } from "../../Data_Operations/BoardOperations";
import Loader from "../Modals/Loader/Loader";

function CreateBoard(props) {
  
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [members, setMembers] = useState("");
  const [type, setType] = useState("");


  const saveBoard = (e) => {
    e.preventDefault();
    const team = members.split(",").map((x) => x.trim());
    const boardDetails = {
      boardName: name,
      teamMembers: team,
      boardType: type,
    };
   
    addBoard(boardDetails)
      .then((created) => {
        if (created) {
          setLoading(true);
          props.history.push("/");
        } else {
          alert("Could not add Board");
        }
      })
      .catch((err) => {
        alert("Could not add Board. Some error occured.");
      });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.head}>
          <p>Create a Board</p>
          <form onSubmit={saveBoard}>
            <label htmlFor="name">Enter a name for your board</label>
            <input
              required
              className={styles.fields}
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="eg.Agile Sprint Board"
            ></input>
            <label htmlFor="team">Add your team members</label>
            <input
              required
              className={styles.fields}
              type="text"
              id="team"
              onChange={(e) => {
                setMembers(e.target.value);
              }}
              placeholder="Add your Team (separated by commas)"
            ></input>
            <label htmlFor="type">Enter the type of your board</label>
            <input
              required
              className={styles.fields}
              type="text"
              id="type"
              onChange={(e) => {
                setType(e.target.value);
              }}
              placeholder="eg.Design UX"
            ></input>
            <button
              type="submit"
              className={styles.CreateBoard}
              id="CreateBoard"
            >
              Create
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default CreateBoard;
