const mongoose=require('mongoose');
const validator=require('validator');

const NurseSchema=new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name'],
        trim: true
      },
      age: {
        type: Number,
        required: [true, 'Please provide your age'],
        min: [18, 'You must be at least 18 years old'],
        max: [120, 'You must be at most 120 years old']
      },
      sex: {
        type: String,
        required: [true, 'Please provide your sex'],
        enum: ['Male', 'Female', 'Other']
      },
      address: {
        street: {
          type: String,
          required: [true, 'Please provide your street address'],
          trim: true
        },
        city: {
          type: String,
          required: [true, 'Please provide your city'],
          trim: true
        },
        state: {
          type: String,
          required: [true, 'Please provide your state'],
          trim: true
        },
        zip: {
          type: String,
          required: [true, 'Please provide your zip code'],
          trim: true
        }
      },
      email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
      },
      aadharCard: {
        type: String,
        required: [true, 'Please provide your Aadhar card number'],
        unique: true,
        validate: {
          validator: function(v) {
            return /^\d{12}$/.test(v);
          },
          message: 'Please provide a valid Aadhar card number'
        }
      },
      previousWorkExperience: {
        type: String,
        required: [true, 'Please provide your previous work experience']
      },
      cv: {
        type: String,
        required: [true, 'Please provide your CV']
      },
      education: [{
        collegeName: {
          type: String,
          required: [true, 'Please provide your college name']
        },
        yearOfPassing: {
          type: Number,
          required: [true, 'Please provide your year of passing']
        }
      }],
      stateCouncil: {
        type: String,
        required: [true, 'Please provide your state council']
      },
      councilRegistrationNumber: {
        type: String,
        required: [true, 'Please provide your council registration number'],
        unique: true
      }
})

const Nurse=new mongoose.model('Nurse',NurseSchema);

module.exports=Nurse;