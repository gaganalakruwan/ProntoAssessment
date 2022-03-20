export const tableData = [
  {
    name: 'DOCUMENT',
    columns: [
      {
        name: 'docId',
        dataType: 'INTEGER',
        isPrimaryKey: true,
        autoIncrement: true,
        shouldNotAllowNull: true,
      },
      {
        name: 'subject',
        dataType: 'TEXT',
        isPrimaryKey: false,
        autoIncrement: false,
        shouldNotAllowNull: true,
      },
      {
        name: 'note',
        dataType: 'TEXT',
        isPrimaryKey: false,
        autoIncrement: false,
        shouldNotAllowNull: false,
      },
      {
        name: 'dateTime',
        dataType: 'TEXT',
        isPrimaryKey: false,
        autoIncrement: false,
        shouldNotAllowNull: false,
      },
    ],
  },
  {
    name: 'REGISTER',
    columns: [
      {
        name: 'userId',
        dataType: 'INTEGER',
        isPrimaryKey: true,
        autoIncrement: true,
        shouldNotAllowNull: true,
      },
      {
        name: 'username',
        dataType: 'TEXT',
        isPrimaryKey: false,
        autoIncrement: false,
        shouldNotAllowNull: true,
      },
      {
        name: 'email',
        dataType: 'TEXT',
        isPrimaryKey: false,
        autoIncrement: false,
        shouldNotAllowNull: false,
      },
      {
        name: 'password',
        dataType: 'TEXT',
        isPrimaryKey: false,
        autoIncrement: false,
        shouldNotAllowNull: false,
      },
    ],
  },
];
