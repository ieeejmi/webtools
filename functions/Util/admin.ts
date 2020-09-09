import * as admin from 'firebase-admin'

const db = admin.firestore()
export {db, admin}

admin.initializeApp();

