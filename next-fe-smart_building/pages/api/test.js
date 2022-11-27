export default async function handler(req, res) {
  try {
    let mysql = require("mysql");

    let connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1234",
      database: "room",
    });

    let co2Json;
    let humJson;
    let litJson;
    let pirJson;
    let temJson;
    // `select co2, room, createTime from(select * from co2 where (room, createTime) in ( select room, max(createTime) as createTime from co2 group by room) order by id desc)t group by t.room`
    let query = `select co2, room, createTime from(select * from co2 where (room, createTime) in ( select room, max(createTime) as createTime from co2 group by room) order by id desc)t group by t.room`;
    connection.query(query, async function (error, rows, fields) {
      if (!error) {
        //console.log(rows);
        //console.log(JSON.parse(JSON.stringify(rows))); // 이렇게 해야 제대로 object 방식으로 사용 가능
        co2Json = await JSON.parse(JSON.stringify(rows));
      } else {
        console.log("Error while performing Query.", error);
      }
    });

    query = `select hum, room, createTime from(select * from humidity where (room, createTime) in ( select room, max(createTime) as createTime from humidity group by room) order by id desc)t group by t.room`;
    connection.query(query, async function (error, rows, fields) {
      if (!error) {
        //console.log(rows);
        humJson = await JSON.parse(JSON.stringify(rows));
      } else {
        console.log("Error while performing Query.", error);
      }
    });

    query = `select lit, room, createTime from(select * from light where (room, createTime) in ( select room, max(createTime) as createTime from light group by room) order by id desc)t group by t.room`;
    connection.query(query, async function (error, rows, fields) {
      if (!error) {
        //console.log(rows);
        litJson = await JSON.parse(JSON.stringify(rows));
      } else {
        console.log("Error while performing Query.", error);
      }
    });

    query = `select pir, room, createTime from(select * from pir where (room, createTime) in ( select room, max(createTime) as createTime from pir group by room) order by id desc)t group by t.room`;
    connection.query(query, async function (error, rows, fields) {
      if (!error) {
        //console.log(rows);
        pirJson = await JSON.parse(JSON.stringify(rows));
      } else {
        console.log("Error while performing Query.", error);
      }
    });

    query = `select tem, room, createTime from(select * from temperature where (room, createTime) in ( select room, max(createTime) as createTime from temperature group by room) order by id desc)t group by t.room`;
    connection.query(query, async function (error, rows, fields) {
      if (!error) {
        //console.log(rows);
        temJson = await JSON.parse(JSON.stringify(rows));
        res.status(200).json({
          co2: co2Json,
          hum: humJson,
          lit: litJson,
          pir: pirJson,
          tem: temJson,
        });
      } else {
        console.log("Error while performing Query.", error);
      }
    });

    // console.log(temJson);
    // res.status(200).json({
    //   co2: co2Json,
    //   hum: humJson,
    //   lit: litJson,
    //   pir: pirJson,
    //   tem: temJson,
    // });
    connection.end();
  } catch (err) {
    res.status(404).json({ no: "err" });
  }
}
// finally {
//   //예외가 있든 없든 실행되는 부분
//   await client.$disconnect();
// }
