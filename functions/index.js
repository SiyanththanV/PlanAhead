const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

const createNotif = (notification => {
    return admin.firestore().collection('notifications').add(notification).then(doc => console.log('notif added', doc))
})

exports.projCreated = functions.firestore.document('projects/{projectId}').onCreate(doc => {
    const project = doc.data();
    const notif = {
        content: 'Added a new project',
        user: `${project.authorFirstName} ${project.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotif(notif)
})

exports.userJoin = functions.auth.user().onCreate(user => {
    return admin.firestore().collection('users').doc(user.uid).get().then((doc) => {
        const newUser = doc.data();
        const notif = {
            content: 'New user has joined',
            user: `${newUser.firstname} ${newUser.lastname}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotif(notif)
    })
})
