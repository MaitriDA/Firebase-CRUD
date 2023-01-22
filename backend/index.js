const express = require("express");
const cors = require("cors");
const {Details,db} = require("./config.js");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const snapshot = await Details.get();
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});

app.post("/create", async (req, res) => {
  const data = req.body;
  await Details.add({ data });
  res.send({ msg: "User Added" });
});

app.get("/getByID/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const snapshot = await Details.get();
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  var detail={};
  for(let i=0;i<list.length;i++){
    if(list[i].id===id){
      detail=list[i];
      break;
    }
  }
  res.send(detail);
});

const createMenuItem = async (record) => {
  console.log(record);
  try {
      await db.collection("details").add(record);
      console.log('Records created.');
  } catch (error) {
      console.log(`Error at createRecord --> ${error}`);
  }
};

let database = require('./csvjson.json');

// for (let index = 0; index < database.length; index++) {
//   let element = {
//     ID:database[index].ID,
//     Name:database[index].Name,
//     Location:database[index].Location,
//     Gender:database[index].Gender,
//     Date:database[index].Date,
//     Time:database[index].Time,
//     Image:database[index].Image
//   }
//   createMenuItem(element);
// }

app.listen(4000, () => console.log("Up & RUnning *4000"));