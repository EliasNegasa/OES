export default function generatePassword(firstname) {
  return firstname + Date.now();
}
