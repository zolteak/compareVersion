const compareVersion = (version1, version2) => {
    let result = 0;
    
    if (version1.length === version2.length) {
        result = 0;
        
        if (parseFloat(version1) > parseFloat(version2)) {
            result = 1;
        }  
        if (parseFloat(version1) < parseFloat(version2)) {
            result = -1;
        }
    }
    if (version1.length > version2.length) {
        result = 1;
    }     
    if (version1.length < version2.length) {
        result = -1;
    }
    
    return result;
};

exports.compareVersion = compareVersion;
