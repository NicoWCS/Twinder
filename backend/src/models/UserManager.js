const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(item) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      item.title,
    ]);
  }

  update(item) {
    return this.database.query(
      `update ${this.table} set age = ?, pseudo = ?, description = ? where id = ?`,
      [item.age, item.pseudo, item.description, item.id]
    );
  }
}

module.exports = UserManager;
