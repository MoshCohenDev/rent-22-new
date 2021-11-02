import firebase, {firebaseDb, firebaseStorage,} from "boot/firebase";

export default {
  setSearch({commit}, value) {
    commit('setSearch', value)
  },
  async getContracts({commit}, val) {
    let section = []
    let contract = val.value
    await firebaseDb.collection(`contracts/${contract}/sections/`).get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log(doc.id, " => ", doc.data());
          section.push(doc.data())
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    commit('getContracts', section)

  },
  setContracts({commit, dispatch}, data) {
    let contract = data.contract
    let id = data.id
    commit('setSections', data)
    firebaseDb.doc(`contracts/${contract}/sections/${id}`).set(data)
  },
  insertSections({commit}, data) {
    console.log(data)
    commit('insertSections',data)
  },
  addChildSection({commit, dispatch}, data) {
    let contract = data.contract
    let temp = {}
    let children = {}
    children[data.childId] = data.name
    temp.children = children
    let id = data.id
    commit('setChild', {id, children})
    firebaseDb.doc(`contracts/${contract}/sections/${id}`).set(temp, {merge: true})
  },
  uploadPhoto({commit}, img) {
    let storageRef = firebaseStorage.ref();
    let mountainsRef = storageRef.child(`Photos of the apartment/${img.name}`);
    return mountainsRef.put(img)
      .then(imageData => {
        return imageData.ref.getDownloadURL()
          .then(url => {
            return url;
          });
      });
  },
  deleteFile({commit}, img) {
    let storageRef = firebaseStorage.ref();
    let mountainsRef = storageRef.child(`Photos of the apartment/${img.name}`);
    return mountainsRef.delete(img)
      .then(imageData => {
        return imageData.ref.getDownloadURL()
          .then(url => {
            return url;
          });
      });
  },
  // async deleteItemById({commit}, id) {
  //   commit('deleteItemById', id)
  //   const data = await firebaseDb.collection("contracts").
  //   doc(contract).collection('sections').doc(id).delete();
  //   debugger
  //   return data
  // }

}
