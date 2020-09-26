//Aquí voy a meter todos los métodos que quiera hacer para consultar a la bbdd
var { MongoClient, ObjectId } = require("mongodb");
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
  if (result) {
    console.log(
      `Found a listing in the collection with the name '${newListing}':`
    );
    return result;
  } else {
    console.log(`No listings found with the name '${newListing}'`);
    return null;
  }
};

//Read

exports.getMovie = async (nombre) => {
  const client = await connect();
  result = await client
    .db("movies")
    .collection("favorites")
    .findOne({ Title: nombre });
  console.log(result);
  if (result) {
    console.log(`Found a listing in the collection with the name '${nombre}':`);
    return result;
  } else {
    console.log(`No listings found with the name '${nombre}'`);
    return null;
  }
};

// Esto debe leerse en la Home
exports.getFilmsDetail = async () => {
  const client = await connect();
  result = await client.db("movies").collection("favorites").find().toArray();
  console.log("se cargan todas las pelis");
  if (result) {
    return result;
  } else {
    return null;
  }
};

//Update

exports.setMovie = async (id, film) => {
  console.log("+++++++");
  console.log(film);
  console.log(id);
  const client = await connect();
  result = await client
    .db("movies")
    .collection("favorites")
    .updateOne(
      { _id: ObjectId(id) },

      {
        $set: {
          Title: film.Title,
          Year: film.Year,
          Director: film.Director,
          Actors: film.Actors,
          Genre: film.Genre,
          Awards: film.Awards,
          Runtime: film.Runtime,
          Poster: film.Poster,
        },
      }
    );
  if (result) {
    //console.log("cambios: " + result.nModified);
    return result;
  } else {
    return null;
  }
};

//Delete
exports.deleteMovie = async (nameOfListing) => {
  console.log(nameOfListing);
  const client = await connect();
  const result = await client
    .db("movies")
    .collection("favorites")
    .deleteOne({ Title: nameOfListing });
  console.log(`${result.deletedCount} document(s) was/were deleted.`);
  if (result) {
    console.log(
      `Found a listing in the collection with the name '${nameOfListing}':`
    );
    return result;
  } else {
    console.log(`No listings found with the name '${nameOfListing}'`);
    return null;
  }
};
