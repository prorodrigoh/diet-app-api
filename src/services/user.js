// import { ObjectId } from "mongodb";
import { getUserCollection } from "../gateway/mongo";

export const createUser = async (firstName, lastName, DOB, email) => {
  const col = await getUserCollection();
  const insertedResults = await col.insertOne({
    createAt: Date.now(),
    firstName,
    lastName,
    DOB,
    email,
  });

  return insertedResults.insertedId;
};

export const getUser = async () => {
  const col = await getUserCollection();
  const ret = col.find({});
  return ret.toArray();
};

export const getUserByEmail = async (email) => {
  const col = await getUserCollection();
  const ret = col.find({
    email: {
      $regex: `.*${email}.*`,
    },
  });
  return ret.toArray();
};

// export const updUserName = async (oldName, newName) => {
//     const col = await getUserCollection()
//     const old = await getUserByName(oldName)
//     // update
//     const result = col.updateOne(
//         { _id: old.id },                // filter
//         { $set: { name: newName } },    // mongo set function
//     )
//     // return 1 or 0
//     return (`Total of modified documents: ${result.modifiedCount}`)
// }

export const delUserByEmail = async (email) => {
  const col = await getUserCollection();
  const target = await getUserByEmail(email);
  const result = col.deleteOne(target._id);
};
