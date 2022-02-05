const admin = require("firebase-admin");
const serviceAccount = require("./admin_cert.json");
const { getFirestore } = require("firebase-admin/firestore");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://undecided-demo.firebaseio.com",
});

const db = getFirestore();
const auth = admin.auth();

module.exports = {
  db,
  auth,
};
