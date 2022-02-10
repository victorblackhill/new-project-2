const {Schema,model,Types}= require("mongoose")

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
        //default is used to keep the HBS version working
        default:new Types.ObjectId("61fd5cf3d5e79c5dbb40beab"),
        required:true
    },
    date:{
        type:Date,
        default: Date.now()
    }
})

const CommentModel = model("comments",commentSchema)

module.exports = CommentModel