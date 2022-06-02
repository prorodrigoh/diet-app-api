import { createUser } from "./services/user";
import { createUserFood, getUserFoodByUserId } from "./services/userFood";

// create a user
await createUser("Rodrigo", "Henriques", "01/01/2020", "teste@google.com");
// show all entries
const user = await getUser();
console.log(user);

const email = "teste@google.com";
const userId = await getUserByEmail(email);
// create a user
await createUserFood(userId, "Popcorner", 28, 140);
// show all entries
const foodByUser = await getUserFoodByUserId(userId);
console.log(foodByUser);
