const AbstractManager = require("./AbstractManager");

class MatchManager extends AbstractManager {
  constructor() {
    super({ table: "match" });
  }

  insert(profilId) {
    return this.database.query(
      `insert into ${this.table} (fav, user_id, profil_id) values (1, 1, ?)`,
      [profilId]
    );
  }

  update(item) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = MatchManager;
