import bcrypt from "bcryptjs";

export async function encrypt(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

export async function comparePassword(password, currentPassword) {
  try {
    return await bcrypt.compare(password, currentPassword);
  } catch (error) {
    console.log("Error: ", error)
  }
}
