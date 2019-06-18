import { injectable } from '@angular/core';
//import Sqlite and sqlite object

@injectable()
export class Database {

theConsole: string = 'SQL Messages';

options: any = {
  name: tombstone.db,
  location: 'default',
  createFromLocation: 1
}

private db: SQLiteObject


constructor(private sqlite: SQLite) {
  this.connectToDb();
}
//Open Database Connection
private connectToDb():void {
  this.sqlite.create(this.options).then((db: SQLiteObject) => {
      this.db = db;
      var sql = 'create table IF NOT EXISTS 'user'(email VARCHAR(255))';
      this.db.executeSql(sql, {}).then(() => this.theConsole += 'Execute SQL' + sql)
      .catch(e => this.theconsole += JSON.stringify(e));
      })
      .catch(e => this.console+= JSON.stringify(e));
}
//database methods below






}
