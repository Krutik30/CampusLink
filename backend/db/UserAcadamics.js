import { Schema, model } from 'mongoose'

const userAcadamicsSchema = new Schema({
        "name": String,
        "enrollment-no": Number,
        "email": String,
        "mobile": Number,
        "department": String,
        "batch": String,
        "year": Number
})

export default model("usersAcadamics", userAcadamicsSchema)