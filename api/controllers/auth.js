import User from "../../models/User.js";
import  bcrypt from "bcryptjs";



//user registration
export const register = async function(req, res) {
try{
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(req.body.password, salt);

const newUser= new User({
username: req.body.username,
email: req.body.email,
password: hash,

});

await newUser.save();
res.send ("User has been created")
}
catch(err){
    res.status(500).json(err);
}

};

//user login by using bcrypt compare

export const login = async function(req, res) {
    try{
    const user = await User.findOne({username: req.body.username});
    if(!user)  
    return res.status(404).json("user not found");
    

    const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password);
    if(!isPasswordCorrect) 
    return res.status(404).json("Incorrect Username or Password");
    res.status(200).json(user);
 }
    catch(err){
        res.status(500).json(err);
    }
};


