function whatIsInAName(collection, source) {
    const souceKeys = Object.keys(source);
    // filter the collection
    return collection.filter(obj => {
      for (let i = 0; i < sourceKeys.length; i++) {
        if (obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
          return false;
        }
      }
      return true;
    });
  }

function whatIsInAName2(collection, source) {
    const sourceKeys = Object.keys(source);

    return collection
        .filter(obj => sourceKeys
        .every(key => obj[key] === source[key]));
}