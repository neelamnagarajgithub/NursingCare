let data = [];
const fs=require('fs');
for (let i = 1; i < 10; i++) {
  let entry = {
    "name": `Name ${i}`,
    "age": 30,
    "sex": i % 2 === 0 ? "Male" : "Female",
    "address": {
      "street": `Street ${i}`,
      "city": `City ${i}`,
      "state": `State ${i}`,
      "zip": `Zip ${i}`
    },
    "email": `email${i}@example.com`,
    "aadharCard": `12345678901${i}`,
    "previousWorkExperience": `${i} years at Company ${i}`,
    "cv": `Link to CV or CV data ${i}`,
    "education": [
      {
        "collegeName": `College ${i}`,
        "yearOfPassing": 2000 + i
      },
      {
        "collegeName": `College ${i + 10}`,
        "yearOfPassing": 2010 + i
      }
    ],
    "stateCouncil": `State ${i} Nursing Council`,
    "councilRegistrationNumber": `N123456${i}`
  }
  data.push(entry);
}

fs.writeFileSync(__dirname+'/nursedata.json',JSON.stringify(data));
 console.log("data pushed successfully");