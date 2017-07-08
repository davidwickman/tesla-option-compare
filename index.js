const _ = require('lodash');
const fs = require('fs');

const myModelS = ["AF02", "APF1", "APH2", "APPB", "AU01", "BCMB", "BP00", "BR00", "BS00", "BTX5", "CDM0", "CH05", "CW00", "DCF0", "DRLH", "DSH7", "DU00", "DV4W", "FG02", "FMP6", "FR04", "HC00", "HP00", "IDBA", "INPTB", "IX01", "LP01", "MDLS", "ME02", "MI01", "PBSB", "PF00", "PI01", "PK00", "PS01", "PX00", "QTTP", "RENA", "RFP2", "SC05", "SP00", "SR01", "SU00", "TM00", "TP03", "TR00", "UTPB", "WTAS", "X001", "X003", "X007", "X011", "X013", "X021", "X025", "X027", "X028", "X031", "X037", "X040", "X044", "YFFC"];

const modelDesignStudio75d = ["AF02", "APF1", "APH2", "APPB", "AU01", "BCMB", "BP00", "BR00", "BS00", "BTX5", "CDM0", "CH05", "COL1-PBSB", "CW00", "DCF0", "DRLH", "DSH5", "DU00", "DV4W", "FG02", "FMP6", "FR04", "HC00", "HP00", "IDBA", "INPTB", "IX01", "LLP1", "LP01", "ME02", "MI01", "PF00", "PI01", "PK00", "PS01", "PX00", "QTTP", "RFP2", "SC04", "SP00", "SR01", "SU00", "TM00", "TP03", "TR00", "UTPB", "WTAS", "X001", "X003", "X007", "X011", "X013", "X021", "X025", "X027", "X028", "X031", "X037", "X040", "X044", "YFCC"];

const modelS187134 = ["AF02", "APF1", "APH2", "APPB", "AU01", "BCMB", "BP00", "BR00", "BS00", "BTX5", "CDM0", "CH05", "CW00", "DCF0", "DRLH", "DSH7", "DV4W", "FG02", "FR04", "HC00", "HP00", "IDCF", "INBPB", "IX01", "LP01", "MDLS", "ME02", "MI01", "PF00", "PI01", "PK00", "PMSS", "PS01", "PX00", "QTPB", "RENA", "RFP2", "SC04", "SP00", "SR01", "SU00", "TM00", "TP03", "TR00", "UTAB", "WTAS", "X001", "X003", "X007", "X011", "X013", "X021", "X025", "X027", "X028", "X031", "X037", "X040", "X044", "YFFC"];

/**
 * Comparisons using the Model S Design Studio vs another Tesla
 */
const compareModels = (a, b, fileName = 'tesla_data') => {
    const dataOutput = `./results/${ fileName }.json`;
    const json = {
        different_options: {
            on_vehicle_a: _.difference(a, b),
            on_vehicle_b: _.difference(b, a)
        },
        same_options: _.intersection(a, b)
    };

    fs.writeFile(dataOutput, JSON.stringify(json, null, 4), (err) => {
        console.log(`File successfully written : ${ dataOutput }`);
    });
}

// Comparisons using the Model S Design Studio vs my S 75D
compareModels(myModelS, modelDesignStudio75d, "myModelS_modelDesignStudio75d");

// Comparisons using the Model S Design Studio vs a 187134 S 75D
compareModels(modelS187134, modelDesignStudio75d, "modelS187134_modelDesignStudio75d");
