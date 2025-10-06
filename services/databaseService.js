import { database } from "./appwrite";

const databaseService = {
  //List document
  async listDocuments(dbId, colId,queries=[]) {
    try {
      const response = await database.listDocuments(dbId, colId,queries);
      return {data: response.documents || [], error: null};
    } catch (error) {
      console.error("Error fetching document:", error.message);
      return { error: error.message };
    }
  },

  // create document
  async createDocument(dbId,colId,data, id = null){
    try {
      return await database.createDocument(dbId,colId,id || undefined,data)
    } catch (error) {
      console.error("Error creating document",error.message)
      return {error:error.message}
    }
  },

  //update Document
  async updateDocument(dbId,colId,id,data){
    try {
      return await database.updateDocument(dbId,colId,id, data);
    } catch (error) {
      console.error("Error updating Document",error.message);
      return {error:error.message};
    }  
  },

  //delete note
  async deleteDocument(dbId, colId, id){
    try {
      await database.deleteDocument(dbId,colId,id);
        return {success:true}
      
    } catch (error) {
      console.error("Error deleting document", error.message)
      return {error:error.message}
    }
  }
};

export default databaseService;