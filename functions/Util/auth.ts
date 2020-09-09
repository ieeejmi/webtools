import {admin , db} from './admin'

export default (req : any, res : any,  next : any) =>{
    let idToken
    if(req.headers.authoriztion && req.headers.authoriztion.startsWith('Bearer ')){
        idToken = req.headers.authoriztion.split('Bearer ')[1]
    }
    else {
        console.error('No token found')
    }

    admin
        .auth()
        .verifyIdToken(idToken)
        .then(decodedToken => {
            req.user = decodedToken
            return db.collection('users').where('userID', '==', req.user.uid).limit(1).get()
        })
        .then(data => {
            req.user.username = data.docs[0].data().username
            req.user.admin = data.docs[0].data().admin()
            return next()
        })
}
