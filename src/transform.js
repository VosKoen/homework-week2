
function groupAdultsByAgeRange(people) {
  return people.reduce((groupedByAge, person) => {
    if(person.age < 21) {
      groupedByAge.'20 and younger'.push(person);
    } else if(person.age < 31) {
      groupedByAge.'21-30'.push(person);
    } else if(person.age < 41) {
      groupedByAge.'31-40'.push(person);
    } else if(person.age < 51) {
      groupedByAge.'41-50'.push(person);
    } else {
      groupedByAge.'21 and older'.push(person);
    }
    return groupedByAge
  })
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;
