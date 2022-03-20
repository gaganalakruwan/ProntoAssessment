import SQLite from 'react-native-sqlite-storage';
import {tableData} from './TableData';

const db = SQLite.openDatabase({
  name: 'pronto.db',
  location: 'default',
});

export const createTables = () => {
  db.transaction(
    tx => {
      tableData.forEach(table => {
        const queryString = createTableMakeQueryString(table);
        tx.executeSql(
          queryString,
          [],
          (tx, response) => {
            // console.log('Table Creation', response);
          },
          (tx, error) => {
            // console.log('Table Creation', error);
          },
        );
      });
    },
    error => {},
    success => {},
  );
};

const createTableMakeQueryString = tableQuery => {
  try {
    let query = `CREATE TABLE IF NOT EXISTS ${tableQuery.name} (`;
    let count = 0;
    tableQuery.columns.forEach(column => {
      query += `${column.name} ${column.dataType} 
      ${
        column.isPrimaryKey
          ? 'PRIMARY KEY'
          : column.autoIncrement
          ? 'AUTOINCREMENT'
          : ''
      }
      ${column.shouldNotAllowNull ? 'NOT NULL' : ''}
      ${count < tableQuery.columns.length - 1 ? ',' : ''}`;
      count++;
    });
    query += '); ';
    return query;
  } catch (error) {}

  return null;
};

//INSERT QUERY
export const insertData = (data, callBack) => {
  try {
    db.transaction(
      tx => {
        data.forEach(table => {
          let queryString = `INSERT INTO ${table.table} (${table.columns}) VALUES (${table.values})`;

          tx.executeSql(
            queryString,
            table.params,
            (tx, response) => {
              // console.log('Insert Data', response);
            },
            (tx, error) => {
              // console.log('Insert Data', error);
            },
          );
        });
      },
      error => {
        callBack(null, error); //notify caller
      },
      success => {
        callBack(success ?? 'success', null); //notify caller
      },
    );
  } catch (error) {
    callBack(null, error); //notify caller
  }
};

//SEARCH QUERY
export const searchData = (query, params, callBack) => {
  try {
    db.executeSql(
      query,
      params,
      (tx, response) => {
        if (tx && tx.rows && tx.rows.raw()) {
          return callBack(tx.rows.raw(), null); //notify caller
        }
      },
      (tx, error) => {
        callBack(null, error); //notify caller
      },
    );
  } catch (error) {
    callBack(null, error); //notify caller
  }
};
