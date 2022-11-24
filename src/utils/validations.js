import { comparePassword } from "../services/crypto.js";
import User from "../models/User.js";

export async function existUser(id) {
  const user = await User.findById(id);
  return user ? true : false;
}

export function validateInfoUser(data) {
  for (var prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (data[prop] === "" || data[prop] === " ") {
        return {
          res: false,
          error: `La propiedad ${prop} no puede estar vacia.`,
        };
      }
      if (typeof data[prop] === "undefined") {
        return {
          res: false,
          error: `Falta la propiedad ${prop}.`,
        };
      }
    }
  }
  return { res: true };
}

export async function validatePassword(email, password) {
  const user = await User.findOne({ email: email }).exec();
  return await comparePassword(password, user.password);
}
