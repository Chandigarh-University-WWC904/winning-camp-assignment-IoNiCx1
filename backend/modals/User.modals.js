import mongose from 'mongose'
const Userschema=mongose.schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        unique:true,
        required:true

    },
    password:{
        type:String,
        required:true,
    }
})