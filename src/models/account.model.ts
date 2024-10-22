export class Account {
  username?: string;
  password?: string;
  gmail?: string;
  phone?: string;
  gender?: boolean;
  constructor({ username, password, gmail, phone, gender }) {
    if (username !== undefined) this.username = username;
    if (password !== undefined) this.password = password;
    if (gmail !== undefined) this.gmail = gmail;
    if (phone !== undefined) this.phone = phone;
    if (gender !== undefined) this.gender = gender;
  }
}
