import firebase from "../firebase";

const getList = movie =>
  new Promise(function(resolve, reject) {
    const db = firebase.firestore();
    var list = [];
    db.collection(`${movie}`)
      .get()
      .then(query => {
        query.forEach(docu => {
          list = list.concat(docu);
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

export const like = (genre, id, likes) => {
  return dispatch => {
    const db = firebase.firestore();

    db.collection(`${genre}`)
      .doc(`${id}`)
      .set({ Likes: Number(likes + 1) }, { merge: true })
      .then(doc => dispatch({ type: "LIKE" }));
  };
};

export const dislike = (genre, id, likes) => {
  return dispatch => {
    const db = firebase.firestore();

    db.collection(`${genre}`)
      .doc(`${id}`)
      .set({ Likes: Number(likes - 1) }, { merge: true })
      .then(() => dispatch({ type: "DISLIKE" }));
  };
};

export const bookTickets = (genre, movieid, tickets) => {
  return dispatch => {
    const db = firebase.firestore();

    db.collection(`${genre}`)
      .doc(`${movieid}`)
      .set({ Tickets: Number(tickets - 1) }, { merge: true })
      .then(() => dispatch({ type: "BOOKTICKETS" }));
  };
};

export const bookings = movieid => {
  return dispatch => {
    const db = firebase.firestore();
    var list = [];
    db.collection("User")
      .get()
      .then(query => {
        query.forEach(doc => {
          if (doc.data().ID === movieid) {
            list = list.concat(doc.data());
          }
        });
        dispatch({ type: "BOOKED", payload: list });
      });
  };
};
