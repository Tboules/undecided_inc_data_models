const firebase = require("./firebase");
const { auth, db } = firebase;

const addUserRecord = async () => {
  try {
    const user = await auth.getUser("");

    const res = await db.collection("users").doc(user.uid).set({
      email: user.email,
      phone: "",
      createdAt: user.metadata.creationTime,
      access: "",
      company: "",
      planes: [],
    });

    console.log(res);
  } catch (e) {
    console.log("error", e);
  }
};

addUserRecord();
