const mongoose = require('mongoose');

const courseInfoSchema = new mongoose.Schema(
    {
        courseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course',
            
        },
        roleId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Role',
           
        },
        title: {
            type: String,
           
            trim: true,
           
        },
        description: {
            type: String,
            
            trim: true
        },
        overview: {
            type: String,
           
            trim: true
        },
        isActive: {
            type: Boolean,
            default: true
        },
        courseImage:{
            type:String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);



module.exports = mongoose.model('CourseInfo', courseInfoSchema); 