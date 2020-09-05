import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { getBoards } from "../../Data_Operations/BoardOperations";
import Loader from "../Modals/Loader/Loader";

function Home() {
  
  const [loading, setLoading] = useState(true);
  const [boardData, setBoardData] = useState([]);

  useEffect(() => {
    getBoards()
      .then((boardData) => {
        setBoardData(boardData);
        setLoading(false);
      })
      .catch(() => {
        setBoardData([]);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <p className={styles.bhead}>Boards</p>
          {boardData.length === 0 && (
            <p className={styles.noboardMsg}>
              You haven't created any boards. Kindly click on the 'Create Board'
              button in the navigation bar to create a board.
            </p>
          )}

          <div className={styles.Boardlink}>
            {boardData.map((x) => (
              <Link
                className={styles.btnBoard}
                to={{
                  pathname: `/board/${x.id}`,
                  state: {
                    id: x.id,
                    boardName: x.boardName,
                    teamMembers: x.teamMembers,
                  },
                }}
                key={x.id}
              >
                {x.boardName}
                <div className={styles.txt}></div>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
}
export default Home;
