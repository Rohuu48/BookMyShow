import firebase from "../firebase";

const getList = movie =>
  new Promise(function(resolve, reject) {
    const db = firebase.firestore();
    var list = [];
    db.collection(`${movie}`)
      .get()
      .then(query => {
        query.forEach(docu => {
          list = list.concat(docu.data());
        });
        if (list.length > 0) {
          resolve(list);
          reject([]);
        }
      });
  });

export const route = movie => {
  return dispatch => {
    getList(movie).then(item => dispatch({ type: "ROUTE", payload: item }));
  };
};
