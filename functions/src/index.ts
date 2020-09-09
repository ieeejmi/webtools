import * as functions from 'firebase-functions';
import * as express from 'express'
import auth from '../Util/auth'
import * as userAuth from '../API/user'

const app = express()

app.post('/login', userAuth.loginUser)
app.post('/signUp', userAuth.signUpUser)
app.post('/updateProfile', auth, userAuth.updateUserDetails)
app.post('/makeAdmin', auth, userAuth.makeAdmin)
app.get('/user', auth, userAuth.getUserDetails)

export const api = functions.https.onRequest(app)
