import * as SQLite from 'expo-sqlite';
import { DB_NAME } from './constants';

const db = SQLite.openDatabase(DB_NAME);

export const createTable = () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'create table if not exists menuitems (id integer primary key not null, uuid text, name text, price text, description text, image text, category text);'
        );
      },
      reject,
      resolve
    );
  });
};

export const dropTable = () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql('drop table if exists menuitems;');
      },
      reject,
      resolve
    );
  });
};

export const getMenuItems = () => {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql('select * from menuitems', [], (_, { rows }) => {
        resolve(rows._array);
      });
    });
  });
};

export const saveMenuItems = async (menuItems) => {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql(
        `insert into menuitems (uuid, name, price, description, image, category) values ${menuItems
          .map(
            (item) =>
              `("${item.id}", "${item.title}", "${item.price}", "${item.description}", "${item.image}", "${item.category}")`
          )
          .join(', ')};`,
        [],
        () => resolve(),
        (_, error) => {
          console.log('error', error);
        }
      );
    });
  });
};

export const filterByQueryAndCategories = (query, activeCategories) => {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql(
        'select * from menuitems where title like ?',
        [`%${query}%`],
        (_, { rows }) => {
          resolve(
            rows._array.filter((item) =>
              activeCategories.includes(item.category)
            )
          );
        }
      );
    });
  });
};
