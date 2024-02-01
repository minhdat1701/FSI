//data
var users = [
  {
    id: 1,
    first_name: "Eamon",
    last_name: "Harhoff",
    email: "eharhoff0@imageshack.us",
    gender: "Male",
    age: 76,
    salary: 18888,
  },
  {
    id: 2,
    first_name: "Laney",
    last_name: "Whittam",
    email: "lwhittam1@issuu.com",
    gender: "Female",
    age: 42,
    salary: 15018,
  },
  {
    id: 3,
    first_name: "Lynett",
    last_name: "Twinberrow",
    email: "ltwinberrow2@gov.uk",
    gender: "Female",
    age: 99,
    salary: 13343,
  },
  {
    id: 4,
    first_name: "Madella",
    last_name: "Kliesl",
    email: "mkliesl3@ft.com",
    gender: "Female",
    age: 56,
    salary: 5248,
  },
  {
    id: 5,
    first_name: "Simona",
    last_name: "Knee",
    email: "sknee4@sciencedaily.com",
    gender: "Female",
    age: 61,
    salary: 14376,
  },
  {
    id: 6,
    first_name: "Cord",
    last_name: "McMurthy",
    email: "cmcmurthy5@wordpress.org",
    gender: "Male",
    age: 86,
    salary: 9514,
  },
  {
    id: 7,
    first_name: "Obed",
    last_name: "Beaven",
    email: "obeaven6@msn.com",
    gender: "Male",
    age: 91,
    salary: 18463,
  },
  {
    id: 8,
    first_name: "Elayne",
    last_name: "Smeuin",
    email: "esmeuin7@wsj.com",
    gender: "Female",
    age: 96,
    salary: 19907,
  },
  {
    id: 9,
    first_name: "Robin",
    last_name: "Picford",
    email: "rpicford8@typepad.com",
    gender: "Female",
    age: 55,
    salary: 14975,
  },
  {
    id: 10,
    first_name: "Patsy",
    last_name: "Ochterlonie",
    email: "pochterlonie9@latimes.com",
    gender: "Female",
    age: 93,
    salary: 9716,
  },
  {
    id: 11,
    first_name: "Madelina",
    last_name: "Henrion",
    email: "mhenriona@alibaba.com",
    gender: "Female",
    age: 81,
    salary: 12932,
  },
  {
    id: 12,
    first_name: "Godard",
    last_name: "Sciacovelli",
    email: "gsciacovellib@opera.com",
    gender: "Male",
    age: 90,
    salary: 16655,
  },
  {
    id: 13,
    first_name: "Padget",
    last_name: "Gore",
    email: "pgorec@washington.edu",
    gender: "Male",
    age: 34,
    salary: 8029,
  },
  {
    id: 14,
    first_name: "Birdie",
    last_name: "Davidovich",
    email: "bdavidovichd@tamu.edu",
    gender: "Female",
    age: 49,
    salary: 17407,
  },
  {
    id: 15,
    first_name: "Lisbeth",
    last_name: "Pride",
    email: "lpridee@epa.gov",
    gender: "Female",
    age: 94,
    salary: 14993,
  },
  {
    id: 16,
    first_name: "Saundra",
    last_name: "Ousbie",
    email: "sousbief@acquirethisname.com",
    gender: "Male",
    age: 44,
    salary: 15423,
  },
  {
    id: 17,
    first_name: "Allayne",
    last_name: "Cluatt",
    email: "acluattg@nifty.com",
    gender: "Male",
    age: 78,
    salary: 13206,
  },
  {
    id: 18,
    first_name: "Burke",
    last_name: "Christoforou",
    email: "bchristoforouh@un.org",
    gender: "Male",
    age: 84,
    salary: 13712,
  },
  {
    id: 19,
    first_name: "Maryanne",
    last_name: "Stoakes",
    email: "mstoakesi@rambler.ru",
    gender: "Female",
    age: 63,
    salary: 18235,
  },
  {
    id: 20,
    first_name: "Larisa",
    last_name: "Bartelet",
    email: "lbarteletj@studiopress.com",
    gender: "Female",
    age: 65,
    salary: 6594,
  },
];

// YOUR CODE HERE
// problem01
function problem01() {
  // Use forEach to get first_name and last_name of all users
  // and put it an array then return that array
  var fullNameArray = [];
  users.forEach(function (user) {
    var fullName = user.first_name + " " + user.last_name;
    fullNameArray.push(fullName);
  });
  console.log(fullNameArray);
}
problem01();

// problem02
function problem02() {
  // return an array of user which is male and age is under 40
  var maleUsersUnder40 = users.filter(function (user) {
    return user.gender === "Male" && user.age < 40;
  });

  console.log(maleUsersUnder40);
}
problem02();

// problem03
function problem03() {
  // return an array of full name
  var fullNames = users.map(function (user) {
    return user.first_name + " " + user.last_name;
  });

  console.log(fullNames);
}
problem03();

// problem04
function problem04() {
  // return new array of user where the key of each record in new array is camelCase
  function toCamelCase(str) {
    return str.replace(/_([a-z])/g, function (match, char) {
      return char.toUpperCase();
    });
  }

  var transformedArray = users.map(function (user) {
    var transformedUser = {};
    for (var key in user) {
      if (user.hasOwnProperty(key)) {
        var camelCaseKey = toCamelCase(key);
        transformedUser[camelCaseKey] = user[key];
      }
    }
    return transformedUser;
  });

  console.log(transformedArray);
}
problem04();

// problem05
function problem05() {
  // return the average age in users
  var totalAge = users.reduce(function (sum, user) {
    return sum + user.age;
  }, 0);

  var averageAge = totalAge / users.length;
  console.log(averageAge);
}
problem05();

// problem0601
function problem0601() {
  // return an array of full name using Array.prototype.reduce
  var maleUsersUnder40 = users.reduce(function (result, user) {
    if (user.gender === "Male" && user.age < 40) {
      result.push(user);
    }
    return result;
  }, []);

  console.log(maleUsersUnder40);
}
problem0601();

// problem0602
function problem0602() {
  // return an array of user which is male and age under 40 using Array.prototype.reduce
  var fullNames = users.reduce(function (result, user) {
    var fullName = user.first_name + " " + user.last_name;
    result.push(fullName);
    return result;
  }, []);

  console.log(fullNames);
}
problem0602();

// problem0603
function problem0603() {
  // return new array where each record is in camelCase using Array.prototype.reduce
  function toCamelCase(str) {
    return str.replace(/_([a-z])/g, function (match, char) {
      return char.toUpperCase();
    });
  }

  var transformedUsers = users.reduce(function (result, user) {
    var transformedUser = {};
    for (var key in user) {
      if (user.hasOwnProperty(key)) {
        var camelCaseKey = toCamelCase(key);
        transformedUser[camelCaseKey] = user[key];
      }
    }
    result.push(transformedUser);
    return result;
  }, []);

  console.log(transformedUsers);
}
problem0603();

// problem07
function problem07() {
  // return the sorted array of user (sort by field first_name in ascending order)
  var sortedUsers = users.slice().sort(function (a, b) {
    return a.first_name.localeCompare(b.first_name);
  });
  console.log(sortedUsers);
}
problem07();

// faMap
function faMap(array, fn) {
  // implement faMap that works like Array.prototype.map
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result.push(fn(array[i], i, array));
  }
  console.log(result);
  return result;
}
// faMap([1, 2, 3, 4, 5], function (a) {
//   return a * 2;
// });

// faFilter
function faFilter(array, predicate) {
  // implement faMap that works like Array.prototype.filter
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  console.log(result);
  return result;
}
// faFilter([1, 2, 3, 4, 5], function (a) {
//   return a % 2 == 0;
// });

// faReduce
function faReduce(array, fn, defaultValue) {
  // implement faReduce that works like Array.prototype.reduce
  var result = defaultValue;
  for (var i = 0; i < array.length; i++) {
    result = fn(result, array[i], i, array);
  }
  console.log(result);
  return result;
}
// faReduce([1, 2, 3, 4, 5], function (a, b) {
//   return a + b;
// }, 0);

//problem1101
function problem1101(array, fn) {
  // map array using faReduce
  var mapFn = function (result, current) {
    result.push(fn(current));
    return result;
  };
  console.log(faReduce(array, mapFn, []));
  return faReduce(array, mapFn, []);
}
// problem1101([1, 2, 3, 4, 5], function (num) {
//   return num * num;
// });

//problem1102
function problem1102(array, fn) {
  // filter array using faReduce
  var filterFn = function (result, current) {
    if (fn(current)) {
      result.push(current);
    }
    return result;
  };

  console.log(faReduce(array, filterFn, []));
  return faReduce(array, filterFn, []);
}
// problem1102([1, 2, 3, 4, 5], function (num) {
//   return num % 2 == 0;
// });

// problem1201
function problem1201(array) {
  // implement sum array with faReduce
  var sumFn = function (result, current) {
    return result + current;
  };

  return faReduce(array, sumFn, 0);
}

function problem1202(array) {
  // implement product array with faReduce
  var productFn = function (result, current) {
    return result * current;
  };

  return faReduce(array, productFn, 1);
}

function problem1203(array) {
  // implement reverse array with faReduce
  var reverseFn = function (result, current) {
    result.unshift(current);
    return result;
  };

  return faReduce(array, reverseFn, []);
}

//getProp
function getProp(obj, path) {
  // use Array.prototype.reduce
  return path.split(".").reduce(function (value, key) {
    if (value === undefined) {
      return undefined;
    }
    return value[key];
  }, obj);
}

var student = {
  name: "Nguyen Van A",
  addresses: [
    {
      type: "personal",
      location: "Hanoi",
    },
    {
      type: "work",
      location: "Hoa Lac",
    },
  ],
  clazz: {
    frontend: {
      name: "Angular",
    },
  },
};

getProp(student, "name"); // Nguyen Van A same as student.name or student['name']
getProp(student, "addresses.0.location"); // Hanoi same as student.addresses[0].location
getProp(student, "clazz.frontend.name"); // Angular same as student.clazz.frontend.name
getProp(student, "hobbbies.name"); // undefined no field hobbies in student

// DO NOT EDIT CODE BELOW
if (window.Cypress) {
  window.jsa401 = {
    problem01,
    problem02,
    problem03,
    problem04,
    problem05,
    problem0601,
    problem0602,
    problem0603,
    problem07,
    faMap,
    faFilter,
    faReduce,
    problem1101,
    problem1102,
    problem1201,
    problem1202,
    problem1203,
    getProp,
  };
}
