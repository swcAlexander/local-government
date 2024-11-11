import mongoose, { Schema } from "mongoose";

const objectSchema = new Schema({
    account: String,
    year: Number,
    totalArea: Number,
    livinSpace: Number,
    numberOfRooms: Number,
    empty: Boolean,
    ownership: {
        name: String,
        surname: String,
        fatherName: String,
        birthday: Date,
        dateOfRegistration: Date,
        dateOfDischarge: Date,

    },
    
})