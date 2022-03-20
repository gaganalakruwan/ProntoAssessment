import * as DB from '../DBService';

export const saveNote = (data, callBack) => {
    DB.insertData(
        [
            {
                table: 'DOCUMENT',
                columns: `subject,note,dateTime`,
                values: '?,?,?',
                params: [
                    data.subject,
                    data.note,
                    data.date,
                ],
            },
        ],
        (res, err) => {
            callBack(res, err);
        },
    );
};

export const deleteNote = (callBack) => {

    DB.deleteData(
        [
            {
                table: 'DOCUMENT',
                query: '',
                params: [],
            },
        ],
        (resp, err) => {
            callBack(resp, err);
        },
    );

};

export const getNoteById = (docId, callBack) => {
    DB.searchData(
        'SELECT * FROM DOCUMENT WHERE docId=?',
        [docId],
        (resp, err) => {
            callBack(resp, err);
        },
    );
}

export const getAllNote = (callBack) => {
    DB.searchData(
        'SELECT * FROM DOCUMENT',
        [],
        (resp, err) => {
            callBack(resp, err);
        },
    );
}