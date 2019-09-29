import firebase from "../firebase";

export const route = movie => dispatch => {
  const db = firebase.firestore();
  var list = [];
  db.collection(`${movie}`)
    .get()
    .then(query => {
      query.forEach(docu => {
        list = list.concat(docu);
      });
      dispatch({ type: "ROUTE", payload: list });
    });
};
