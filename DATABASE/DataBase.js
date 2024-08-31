import * as SQLite from 'expo-sqlite';

// Open or create the database
const db = SQLite.openDatabaseSync('database1.db');
// Initialize the database and create the table if it doesn't exist
export async function init() {
    
    try {
        
        await db.execAsync(
            `PRAGMA journal_mode = WAL;
            CREATE TABLE IF NOT EXISTS table6 (
                id INTEGER PRIMARY KEY NOT NULL,
                testid INTEGER  NOT NULL,
                options TEXT NOT NULL,
                score INTEGER 
            );`
        );
        console.log('Table created or already exists');
    } catch (error) {
        console.error('Error initializing database:', error);
    }
}
// Insert an image into the table
export async function insertIdata(db, TESTid, options) {
    const serializedOptions = JSON.stringify(options);
    try {
        await db.runAsync(
            `INSERT INTO table6 (testid, options) VALUES (?, ?);`, // The query should be a string
            [TESTid, serializedOptions] // Pass the values as an array
        );
        console.log('QUIZ inserted');
    } catch (error) {
        console.error('Error inserting QUIZ:', error);
    }
}
export async function insertscore(db, score, id) {
    try {
        await db.runAsync(
            `UPDATE table6 SET score = ? WHERE testid = ?;`, // Use UPDATE instead of INSERT
            [score, id] // Pass the score and id as parameters
        );
        console.log('Score updated');
    } catch (error) {
        console.error('Error updating score:', error);
    }
}


// Fetch all data from the table
export async function fetchdata(db) {
    try {
        const result = await  db.getAllAsync('SELECT * FROM table6');
         console.log('DATA', result);
        const array=[]
        for (const dp of result ){
            array.push({
                TESTid: dp.testid,
                options: JSON.parse(dp.options),
                score:dp.score
            });
        }
        return array;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
