import {db} from '../Util/admin'
import * as firebase from 'firebase'

export const loginUser = (request : any, response:any) => {
    const user = {
        email: request.body.email,
        password: request.body.password
    }
    firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(data => {
            return data.user.getIdToken()
        })
        .then(token => {
            return response.json({token})
        })
}

export const signUpUser = (request : any , response : any) =>{
    const newUser = {
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        phoneNumber: request.body.phoneNumber,
        country: request.body.country,
		password: request.body.password,
		confirmPassword: request.body.confirmPassword,
        username: request.body.username,
        admin: request.body.admin
    }
    let token : string
    let userId : string
    db
    .doc(`/users/${newUser.username}`)
    .get()
    .then((doc) => {
        if (doc.exists) {
            return response.status(400).json({ username: 'this username is already taken' });
        } else {
            return firebase
                    .auth()
                    .createUserWithEmailAndPassword(
                        newUser.email,
                        newUser.password
                );

        }
    })
    .then((data) => {
        userId = data.user.uid;
        return data.user.getIdToken();
    })
    .then((idtoken) => {
        token = idtoken;
        const userCredentials = {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            username: newUser.username,
            phoneNumber: newUser.phoneNumber,
            country: newUser.country,
            email: newUser.email,
            createdAt: new Date().toISOString(),
            admin: false,
            userId
        };
        return db
                .doc(`/users/${newUser.username}`)
                .set(userCredentials);
    })
    .then(()=>{
        return response.status(201).json({ token });
    })
    .catch((err) => {
        console.error(err);
        if (err.code === 'auth/email-already-in-use') {
            return response.status(400).json({ email: 'Email already in use' });
        } else {
            return response.status(500).json({ general: 'Something went wrong, please try again' });
        }
    });
}

export const updateUserDetails = (request : any, response : any) => {
    const document = db.collection('users').doc(`${request.user.username}`);
    document.update(request.body)
    .then(() => {
        response.json({message : 'Updated Succesfully'})
    })
    .catch(err => {
        console.log(err)
        return response.json(500).json({
            message: 'Cannot Updated the Value'
        })
    })
}

export const getUserDetails = (request : any, response : any) => {
    let userData : {[key : string] : any}  = {}

    db
        .doc(`/users/${request.user.username}`)
        .get()
        .then(doc => {
            if(doc.exists){
                userData.credentials = doc.data();
                return response.json(userData)
            }
        })
        .catch(err => {
            console.error(err)
            return response.status(500).json({error : err.code})
        })
}

export const makeAdmin = (request : any, response : any) => {
    if(!request.user.admin){
        return response.status(403).json({message: 'Not Authorized'})
    }

    const document = db.collection('users').doc(`${request.body.username}`);
    document.update('admin', true)
    return response.status(200).send('user is now a admin')
}

