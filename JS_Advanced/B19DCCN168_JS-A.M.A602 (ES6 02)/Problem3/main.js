const removeDuplicates = (persons) => {
  const ids = new Set();
  const uniquePersons = [];

  for (const person of persons) {
    if (!ids.has(person.id)) {
      ids.add(person.id);
      uniquePersons.push(person);
    }
  }

  return uniquePersons;
};

const people = [
  { id: 1, name: "Dung", age: 20 },
  { id: 2, name: "Diu", age: 20 },
  { id: 3, name: "Ky", age: 20 },
  { id: 1, name: "Hai", age: 22 },
];

console.log(removeDuplicates(people));
