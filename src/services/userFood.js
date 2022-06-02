// import { ObjectId } from "mongodb";
import { getUserFoodCollection } from "../gateway/mongo";

export const createUserFood = async (
  userId,
  foodName,
  foodStdWeight,
  foodStdCalorie
) => {
  const col = await getUserFoodCollection();
  const insertedResults = await col.insertOne({
    createAt,
    userId,
    foodName,
    foodStdWeight,
    foodStdCalorie,
  });

  return insertedResults.insertedId;
};

export const getUserFood = async () => {
  const col = await getUserFoodCollection();
  const ret = col.find({});
  return ret.toArray();
};

export const getUserFoodByUserId = async ({ _id }) => {
  const col = await getUserFoodCollection();
  const ret = col.find({
    userId: { _id },
  });
  return ret.toArray();
};

// export const updUserName = async (oldName, newName) => {
//     const col = await getUserFoodCollection()
//     const old = await getUserByName(oldName)
//     // update
//     const result = col.updateOne(
//         { _id: old.id },                // filter
//         { $set: { name: newName } },    // mongo set function
//     )
//     // return 1 or 0
//     return (`Total of modified documents: ${result.modifiedCount}`)
// }

// export const delUserByEmail = async (email) => {
//   const col = await getUserFoodCollection();
//   const target = await getUserByEmail(email);
//   const result = col.deleteOne(target._id);
// };
