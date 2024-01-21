const { Client } = require('pg');

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "test",
    database: "testdb",
})

client.connect();

let arr;

client.query(`select * from book`, (err, result) => {
    if (!err) {
        console.table(result.rows);
        arr = result.rows;
    } else {
        console.error('Помилка отримання даних:', err);
    }
    client.end();
})

console.log(arr);


// const newData = {
//     book_id: 5,
//     title: 'title5',
//     isbn: 'isbn5',
//     publisher_id: 5,
//     weight: 45
// }

// const insertQuery = `
//     INSERT INTO book (book_id, title, isbn, publisher_id, weight)
//     VALUES ($1, $2, $3, $4, $5)
//     RETURNING *;`;

// client.query(
//     insertQuery,
//     [newData.book_id, newData.title, newData.isbn, newData.publisher_id, newData.weight],
//     (err, result) => {
//         if (!err) {
//             console.log('Data inserted successfully:');
//             console.log(result.rows[0]); // Повернені дані
//         } else {
//             console.error('Error inserting data:', err);
//         }

//         client.end();
//     }
// );
