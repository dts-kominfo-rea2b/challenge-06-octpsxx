// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (thisCallback) => {
  const ArrData = [];

  fs.readFile(file1, { encoding:"utf-8"}, (error, data) => {
      if (error){
        return thisCallback(error, null);
      }

      let ambilData = JSON.parse(data);
      let splitData = ambilData.message.split(" ");
      ArrData.push(splitData[1]);

      fs.readFile(file2, { encoding:"utf-8" }, (error,data) => {
        if (error){
          return thisCallback(error,null);
        }

        let ambilData = JSON.parse(data);
        let splitData = ambilData[0].message.split(" ");
        ArrData.push(splitData[1]);

        fs.readFile(file3, { encoding:"utf-8" }, (error,data) => {
          if (error){
            return thisCallback(error, null);
          }

          let ambilData = JSON.parse(data);
          let splitData = ambilData[0].data.message.split(" ");
          ArrData.push(splitData[1]);


          return thisCallback(error,ArrData);

        });
      });
  });
};


// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
