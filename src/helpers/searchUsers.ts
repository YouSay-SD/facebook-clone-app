import { firebase, db, usersRef } from '../firebase/firebaseConfig';

export const searchUser = async (search: string) => {
  // const userSnap = await db.collection(`users/${search}`).exists();
  // const users = await db.collection('users');
  // const allUsers = await usersRef.get();
  // console.log(allUsers);
  // allUsers.forEach((snapChildren: any) => {
  //   const currentUser = snapChildren;
  //   console.log(currentUser);
  //   // users.push(currentUser);
  // });

  // const userDoc = await db.collection('users').doc('YouSay');
  // console.log(userDoc);
  // userDoc.get().then(function (doc) {
  //   console.log(doc.data());
  // });

  // const getUserDoc = await userDoc.get();
  // if (getUserDoc.exists) {
  // console.log('users', getUserDoc.exists);
  // }

  // const doc = await db.collection('users').doc('YouSay');
  // doc
  //   .get()
  //   .then((docData: any) => {
  //     if (docData.exists) {
  //       console.log('exist');
  //       // document exists (online/offline)
  //     } else {
  //       console.log('no existe');
  //       // document does not exist (only on online)
  //     }
  //   })
  //   .catch((fail: any) => {
  //     console.log('ERROR');
  //     // Either
  //     // 1. failed to read due to some reason such as permission denied ( online )
  //     // 2. failed because document does not exists on local storage ( offline )
  //   });

  // const userData = users.where(search)
  // const userExiste = await firebase
  //   .database()
  //   .getInstance()
  //   .getReference('Users/');

  // const events = await db
  //   .collection('users')
  //   .get()
  //   .then((querySnapshot) => {
  //     querySnapshot.docs.map((doc) => {
  //       console.log('LOG 1', doc.data());
  //       return doc.data();
  //     });
  //   });
  // console.log('LOG 2', events);
  // return events;

  // const snapshot = await db.collection('users').get();
  // // return snapshot.docs.map((doc) => doc.data());
  // const arr = [];
  // snapshot.docs.map((doc) => arr.push(doc.data()));
  // console.log(arr);

  // const snapshot = await db.collection('users').get();
  // const documents: any = [];
  // snapshot.forEach((doc) => {
  //   // documents[doc.id] = doc.data();
  //   console.log(doc);
  //   // documents.push(doc.data());
  // });

  // const markers: any = [];
  // await db
  //   .collection('users')
  //   .get()
  //   .then((querySnapshot) => {
  //     console.log(querySnapshot);
  //     querySnapshot.docs.forEach((doc) => {
  //       console.log('ASD');
  //       console.log(doc);
  //       markers.push(doc.data());
  //     });
  //   });

  // const notesSnap: any = await db.collection('users').get();
  // const notes = [];
  // // console.log(notesSnap);
  // const arr = await notesSnap.docs.map((doc: any) => {
  //   console.log(doc.data());
  //   return doc.data();
  // });

  await db.collection('users').onSnapshot((snap: any) => {
    const users: any = [];
    // console.log(snap.doc);

    // snap.forEach((snapChildren) => {
    //   console.log(snapChildren);
    //   users.push(snapChildren.data());
    // });

    // console.log(users);
  });

  // console.log(arr);
  // notesSnap.forEach((snapChildren: any) => {
  //   console.log(snapChildren);
  //   // notes.push({
  //   //   id: snapChildren.id,
  //   //   ...snapChildren.data()
  //   // })
  // });

  // console.log(markers);

  // console.log(documents);

  // const users: any = [];

  // if (search) {
  //   const userSnap = await db.collection(`users/${search}/userData`).get();
  //   console.log(userSnap);

  //   if (userSnap) {
  //     userSnap.forEach((snapChildren: any) => {
  //       const currentUser = snapChildren.data();
  //       users.push(currentUser);
  //     });
  //   }
  // }
  // return users;
};
