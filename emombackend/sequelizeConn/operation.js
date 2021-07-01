const sequelize = require("./connection");
const Lookup = require("./models/lookup");
const LookupType = require("./models/lookuptype");
const Note = require("./models/notes");
const Resource = require("./models/resource");
const Session = require("./models/session");
const SessionQuestion = require("./models/sessiOn_question");
const User = require("./models/user");
const Video = require("./models/videos");

const { Op } = require("sequelize");
//

// get all data
function getAllData(model) {
  // model
  //   .findAll()
  //   .then((data) => {
  //     for (dat in data) {
  //       console.log("id:,,", data[dat].id);
  //       console.log("sessTitle:,,", data[dat].sessionTitle);
  //       console.log("queId:,,", data[dat].questionsId);
  //       console.log("Unloc:,,", data[dat].otherResourcesId);
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  //or with attribute
  let cha = ["sessionTitle", "questionsId", "otherResourcesId"];

  model
    .findAll({
      attributes: cha,
      // [(sequelize.fn("COUNT", sequelize.col("id")), "ids")],
      // exclude: ['baz'] remove an attribute from result
      where: {
        id: { [Op.eq]: 1 },
      },
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

getAllData(Session);

// add data
function addData(model, data) {
  model
    .create(data)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

const data = {
  sessionTitle: "function",
  questionsId: "1,2,3..",
  otherResourcesId: "1,2,3,4...",
  unlockWeek: 1,
  videoId: 1,
};

// addData(Session, data);

// User.create({
//   username: "user",
//   fullName: "qwert",
//   password: "23456",
//   pregnancyDueDate: 12345,
//   createdAt: 12345,
//   modifiedAt: 12345,
//   isDeleted: 0,
// })
//   .then(() => {
//     User.findAll()
//       .then((data) => {
//         console.log("dara", data);
//       })
//       .catch((err) => {
//         console.log("err", err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//1
// Session.create({
//   sessionTitle: "user",
//   questionsId: "1,2,3..",
//   otherResourcesId: "1,2,3,4...",
//   unlockWeek: 1,
//   videoId: 1,
// });
// //2
// LookupType.create({
//   lookupType: "demo",
//   isDeleted: 0,
// });
// //3
// Lookup.create({
//   displayValue: "user",
//   customStringValue: "qwert",
//   lookupTypeId: "23456",
// });

// //4
// Note.create({
//   note: "werttyjklbdcxds",
//   userId: 1,
//   isCompleted: 0,
//   sessionQuestionId: 1,
//   updatedAt: 12345678,
//   createdAt: 12345,
// });
// //5
// Resource.create({
//   resourceTitle: "user",
//   resourceLink: "qwert",
//   typeId: 1,
// });
// //6
// Video.create({
//   title: "user",
//   videoLink: "qwert",
// });
// //7
// SessionQuestion.create({
//   question: "user",
// });
