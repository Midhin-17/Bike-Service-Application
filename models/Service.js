import mongoose from "mongoose";
// const { Schema } = mongoose;

const serviceSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    phone: {
        type: String,
    },
    status: {
            type: String,
            required: true
        },  
    

});

export default mongoose.model("Service", serviceSchema);
