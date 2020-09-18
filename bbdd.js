//Aquí voy a meter todos los métodos que quiera hacer para consultar a la bbdd
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

//CRUD

//Create

const connect = async () => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).catch((err) => {
    console.log(err);
  });
  return client;
};

exports.createMovie = async (newListing) => {
  const client = await connect();
  const result = await client
    .db("movies")
    .collection("favorites")
    .insertOne(newListing);
  console.log(
    `New listing created with the following id: ${result.insertedId}`
  );
};

//Read

exports.getMovie = async (nombre) => {
  const film = await connect();
  result = await film
    .db("movies")
    .collection("favorites")
    .findOne({ title: nombre });
  console.log(result);
  if (result) {
    console.log(`Found a listing in the collection with the name '${nombre}':`);
    return result;
  } else {
    console.log(`No listings found with the name '${nombre}'`);
    return null;
  }
};

//Update

exports.setMovie = async (nameOfListing, updatedListing) => {
  const film = await connect();
  result = await film
    .db("movies")
    .collection("favorites")
    .updateOne({ name: nameOfListing }, { $set: updatedListing });

  console.log(`${result.matchedCount} document(s) matched the query criteria.`);
  console.log(`${result.modifiedCount} document(s) was/were updated.`);
};

//Delete
exports.deleteMovie = async (film, nameOfListing) => {
  result = await film
    .db("movies")
    .collection("favorites")
    .deleteOne({ name: nameOfListing });
  console.log(`${result.deletedCount} document(s) was/were deleted.`);
};
