import mongoose, { Schema } from "mongoose";
import { handlleSaveError, runValidateAtupdate } from "./hooks";

const membersSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    fatherName: { type: String, required: true },
    birthday: { type: Date, required: true },
    dateOfRegistration: { type: Date, required: true },
    dateOfDischarge: { type: Date, required: true }
});

const groundSchema = new Schema({
    residentialBuildingMaintenance: {
        type: Number,
        default: 0,
    },
    personalFarm: {
        type: Number,
        default: 0,
    },
    shareOfArableLand: {
        type: Number,
        default: 0,
    },
    shareOfHayfield: {
        type: Number,
        default: 0,
    },
    rentOfArableLand: {
        type: Number,
        default: 0,
    },
    rentOfHayfield: {
        type: Number,
        default: 0,
    },
    useingOfArableLand: {
        type: Number,
        default: 0,
    },
    useingOfHayfield: {
        type: Number,
        default: 0,
    },
    
})
const objectSchema = new Schema({
    account: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    totalArea: {
        type: Number,
        required: true,
    },
    livinSpace: {
        type: Number,
    },
    numberOfRooms: {
        type: Number,
    },
    empty: {
        type: Boolean,
        default: false,
    },
    ownership: membersSchema,
    householdMembers: {type: [membersSchema]},
    ground: {type: groundSchema, required: true, }
    
}, { versionKey: false, timestamps: true })

objectSchema.pre('findOneAndUpdate', runValidateAtupdate);
objectSchema.post('findOneAndUpdate', handlleSaveError);
objectSchema.post('save', handlleSaveError);

const Object = mongoose.model("Object", objectSchema);
export default Object;