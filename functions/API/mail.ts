import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';

admin.initializeApp();


const senderEmail ='senderusername@gmail.com'
const senderPassword = 'senderpassword'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: senderEmail,
        pass: senderPassword
    }
})

exports.welcomeEmail = functions.auth.user().onCreate(user => {
    admin.auth().setCustomUserClaims(user.uid, {
        level: 100
    })

    const email = user.email
    let mailoptions = {
        from: senderEmail,
        to: email,
        subject: 'Welcome to IEEE',
        text: '',
        template:'index'
    }

    transporter.sendMail(mailoptions, (err: any, data: any) => {
        if(err){
            console.log(err)
        }
        else {
            console.log("email sent")
        }
    })
})


exports.makeSecretary = functions.https.onCall((data, context) => {
    const email = data.email
    admin.auth().getUserByEmail(email)
    .then(user => {
        if(user.customClaims && (user.customClaims as any).level === 300){
            return;
        }
        return admin.auth().setCustomUserClaims(user.uid, {
            level: 300
        })
    })

})

exports.eventCreated = functions.firestore
    .document("events/{eventID}")
    .onCreate((snap, context) => {
        //send notifications to users specified in the event
    })


exports.eventNotification = functions.https
    .onCall((data, context) => {

    // get all the users of a given level and send them email

})
