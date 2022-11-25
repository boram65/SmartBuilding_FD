export default function handler(req, res) {
  try {
    let mysql = require("mysql");

    let connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1234",
      database: "room",
    });

    let query = `select co2, room, createTime from(select * from co2 where (room, createTime) in ( select room, max(createTime) as createTime from co2 group by room) order by id desc)t group by t.room`;
    connection.query(query, function (error, rows, fields) {
      if (!error) {
        console.log(rows);
        console.log(JSON.parse(JSON.stringify(rows))); // 이렇게 해야 제대로 object 방식으로 사용 가능
        res.status(200).json({ ok: rows });
      } else {
        console.log("Error while performing Query.", error);
      }
    });

    connection.end();

    // res.status(200).json({ ok: "hello" });
  } catch (err) {
    res.status(404).json({ no: "err" });
  }
}
// finally {
//   //예외가 있든 없든 실행되는 부분
//   await client.$disconnect();
// }
