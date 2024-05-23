const compareVersion = (version1, version2) => {
    let result = 0;
    
    if (version1.slice(0, version1.indexOf('.')) === version2.slice(0, version2.indexOf('.'))) {              
        if (parseFloat(version1.slice(version1.indexOf('.') + 1)) > version2.slice(version2.indexOf('.') + 1)) {
            result = 1;
        }  
        if (parseFloat(version1.slice(version1.indexOf('.') + 1)) < version2.slice(version2.indexOf('.') + 1)) {
            result = -1;
        }
        
    }
    if (version1.slice(0, version1.indexOf('.')) > version2.slice(0, version2.indexOf('.'))) {
        result = 1;
    }     
    if (version1.slice(0, version1.indexOf('.')) < version2.slice(0, version2.indexOf('.'))) {
        result = -1;
    }
    
    return result;
};

exports.compareVersion = compareVersion;
