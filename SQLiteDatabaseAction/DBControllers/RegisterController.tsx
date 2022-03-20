import * as DB from '../DBService';

export const saveNote = (data, callBack) => {
    DB.insertData(
        [
            {
                table: 'REGISTER',
                columns: `username,email,password`,
                values: '?,?,?',
                params: [
                    data.username,
                    data.email,
                    data.password,
                ],
            },
        ],
        (res, err) => {
            callBack(res, err);
        },
    );
};

export const getUserById = (username, callBack) => {
    DB.searchData(
        'SELECT * FROM REGISTER WHERE username=?',
        [username],
        (resp, err) => {
            callBack(resp, err);
        },
    );
}