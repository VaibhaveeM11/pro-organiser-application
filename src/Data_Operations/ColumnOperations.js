import db from "../Firebase/config";

export const addColumn = async (column) => {
  try {
    const columnRef = await db.collection("columnDetails").add(column);
    return columnRef.id;
  } catch (error) {
    return error;
  }
};

export const getColumns = async (boardId) => {
  try {
    const snapshot = await db
      .collection("columnDetails")
      .where("boardId", "==", boardId)
      .get();
    const boards = snapshot.docs.map((d) => ({ ...d.data(), id: d.id }));
    return boards;
  } catch (error) {
    return [];
  }
};

export const updateColumn = async (id, column) => {
  try 
  {
    await db.collection('columnDetails').doc(id).update(column);
    return true;
  } 
  catch (error)
  {
    return error;
  }
};

export const deleteColumn=async(id)=>{
    try{
        await db.collection('columnDetails').doc(id).delete();
        return true;
    }
    catch(error){
        return error;

    }
}

export const Copy2 = obj => JSON.parse(JSON.stringify(obj));