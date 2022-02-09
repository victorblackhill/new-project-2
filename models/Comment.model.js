const {Schema,model}= require("mongoose")

const commentSchema = new Schema ({
    content:{
        type:String,
        required:true,
    },
    recipe:{
        type:Schema.Types.ObjectId,
        ref:"recipes",
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    date:{
        type:Date,
        default: Date.now()
    }
})

const CommentModel = model("comments",commentSchema)

module.exports = CommentModel