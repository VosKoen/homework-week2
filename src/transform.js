function groupAdultsByAgeRange(people) {
  return people.reduce(
    (groupedByAge, person) => {
      if (person.age < 18) return groupedByAge;
      else if (person.age < 21) {
        groupedByAge["20 and younger"].push(person);
      } else if (person.age < 31) {
        groupedByAge["21-30"].push(person);
      } else if (person.age < 41) {
        groupedByAge["31-40"].push(person);
      } else if (person.age < 51) {
        groupedByAge["41-50"].push(person);
      } else {
        groupedByAge["51 and older"].push(person);
      }
      return groupedByAge;
    },
    {
      "20 and younger": [],
      "21-30": [],
      "31-40": [],
      "41-50": [],
      "51 and older": []
    }
  );
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;
