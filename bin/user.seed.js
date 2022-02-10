const seedStuff = require("./../middlewares/seedStuff")
const UserModel = require("./../models/User.model")

const userSeed = [
    {
        email:"victor@gmail.com",
        password:"mypassword"
    },
    {
        email:"antonio@gmail.com",
        password:"mypassword"
    },
]

seedStuff(userSeed,UserModel)