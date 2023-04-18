import bcrypt from "bcrypt";

export default function encryptPassword(password) {
  return bcrypt.hashSync(password, 8);
}
