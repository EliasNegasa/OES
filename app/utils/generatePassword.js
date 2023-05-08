import _ from "lodash";

export default function generatePassword(firstname, lastname) {
  return firstname.substring(0, 1).toUpperCase() + lastname;
}
