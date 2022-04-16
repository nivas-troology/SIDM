const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RegistrationFormSchema = new Schema({
    createAt: { type: String },
        category:{ type: String },
        typeOfApplicant:{ type: String },
        subCategoryDoccument:{ type: String },
        financialDoccument:{ type: String },
        nameOfCompany:{ type: String },
        addressl1:{ type: String },
        addressl2:{ type: String },
        state:{ type: String },
        city:{ type: String },
        pincode:{ type: String },
        name:{ type: String },
        designation:{ type: String },
        email:{ type: String,
            lowercase: true },
        mobileNumber:{ type: String },
        panNumber:{ type: String,
            uppercase: true },
        gstinOfCompany:{ type: String },
        documentGstCertificate: { type: String },
        dateOfCompany:{ type: String },
        sidmMember:{ type: String },
        sidmMemberShipNumber:{ type: String },
        association:{ type: String },
        associationName:{ type: String },
        registeredOrganization:{ type: String },
   nameRegisteredOrganization:[], 
        aboutCompany:{ type: String },
        sidmChampionAwards:{ type: String },
        isappreciation:{ type: String },
        appreciationDocuments:{ type: String },
        campareAchivement:{ type: String },
        mudp:{ type: String },
        productLink:{ type: String },
        exhibit1:{ type: String },
        exhibit2:{ type: String },
        status: { type: String },
})

module.exports = mongoose.model('RegistrationForm', RegistrationFormSchema);