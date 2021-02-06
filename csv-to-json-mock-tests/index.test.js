const { error } = require('./src/constants');

const File = require('./src/file');

const { rejects, deepStrictEqual } = require('assert');

(async () => {


    /* Empty file test case */
    {

        const filePath = './mocks/emptyFile-invalid.csv';

        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    
        const result = File.csvToJson(filePath);
    
        await rejects(result, rejection);

    }

    /* 4 items file test case */
    {

        const filePath = './mocks/fourItems-invalid.csv';

        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    
        const result = File.csvToJson(filePath);
    
        await rejects(result, rejection);

    }

    /* 3 items file test case */
    {

        const filePath = './mocks/threeItems-valid.csv'; 
        
        const result = await File.csvToJson(filePath);

        const expected = [
            {
              "id": 123,
              "name": "Erick Wendel",
              "profession": "Javascript Instructor",
              "birthDay": 1996
            },
            {
              "id": 321,
              "name": "Xuxa da Silva",
              "profession": "Javascript Specialist",
              "birthDay": 1941
            },
            {
              "id": 231,
              "name": "Joaozinho",
              "profession": "Java Developer",
              "birthDay": 1991
            }
        ];

        deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));



    }

})();