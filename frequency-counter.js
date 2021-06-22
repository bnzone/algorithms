// Given two strings, write a function to determine if the second string is an
// anagram of the first.

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const obj1 = {};
  const obj2 = {};

  for (let key of str1) {
    obj1[key] = (obj1[key] || 0) + 1;
  }

  for (let key of str2) {
    obj2[key] = (obj2[key] || 0) + 1;
  }

  for (let key in obj1) {
    if (!(key in obj2)) {
      return false;
    }

    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

validAnagram('texttwisttime', 'timetwisttext');
