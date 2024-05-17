const compareVersion = (version1, version2) => {
    if (version1.length === version2.length) {
        if (parseFloat(version1) === parseFloat(version2)) {
            return 0;
        }
        else if (parseFloat(version1) > parseFloat(version2)) {
            return 1;
        } 
        else {
            return -1;
        }
    }
    else if (version1.length > version2.length) {
        return 1;
    } 
    else {
        return -1;
    }
};

exports.compareVersion = compareVersion;