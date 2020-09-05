import db from "../Firebase/config";

export const addBoard = async (board) => {
  try {
    await db.collection("boardDetails").add(board);
    return true;
  } catch (error) {
    return error;
  }
};

export const getBoards = async () => {
    try {
      const snapshot = await db.collection("boardDetails").get();
      const boards = snapshot.docs.map((x) =>({ ...x.data(), id: x.id }));
      return boards;
    } catch (error) {
      return [];
    }
  };

export const getBoard = async (id) => {
    try {
      const board = await db.collection("boardsDetails").doc(id).get();
      return { ...board.data(), id: board.id };
    } catch (error) {
      return error;
    }
  };

export const deleteBoard = async (id) => {
  try {
    await db.collection("boardDetails").doc(id).delete();
    return true;
  } catch (error) {
    return error;
  }
};

export const Copy1 = obj => JSON.parse(JSON.stringify(obj));
  