// OBJECTS VS. ARRAYS 

// LIGHTNING EXERCISE 1: Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.

const car = {
    make: "Ford",
    model: "Mustang",
    color: "Red",
    yearBuilt: 2015
};

console.log(car.color, car.yearBuilt, car.make, car.model);



// LIGHTNING EXERCISE 2: Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

const animalNames = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]

// LOG NAMES IN ARRAY
console.log(animalNames);

// LOG NAMES INDIVIDUALLY 
for (let i = 0; i < animalNames.length; i++) {
    console.log(animalNames[i]);
}



// LIGHTNING EXERCISE 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.

const family = [
    {
        name: "Dennis Reynolds",
        age: 42
    },
    {
        name: "Mac",
        age: 43
    },
    {
        name: "Charlie Kelly",
        age: 42
    },
    {
        name: "Dee Reynolds",
        age: 42
    },
    {
        name: "Frank Reynolds",
        age: 76
    }
];

// LOG EACH VALUE OF NAME KEY
for (member of family) {
    console.log(`${member.name}`)
}



// SETTING AND ACCESSING VALUES IN OBJECTS

// LIGHTNING EXERCISE 1: Given the object below, output each of the values to the console using dot notation.

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
};

console.log(wardrobe.height);
console.log(wardrobe.manufacturer);
console.log(wardrobe.contents);
console.log(wardrobe.depth);
console.log(wardrobe.width);



// LIGHTNING EXERCISE 2: Use dot notation to output all of the dimensions of the Empire State Building to the console.

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
};

// OUTPUT VALUES ONLY
const empireStateBuildingDimensions = [empireStateBuilding.stories, empireStateBuilding.height, empireStateBuilding.squareFeet, empireStateBuilding.eastWestLength, empireStateBuilding.northSouthLength];

console.log(empireStateBuildingDimensions);
// OUTPUT FULL PROPERTY
function returnDimensions(obj) {
    for(key in obj) {   
        if(key === "stories" || key === "height" || key === "squareFeet" || key === "eastWestLength" || key === "northSouthLength") console.log(key, obj[key])
    }
};
returnDimensions(empireStateBuilding);


// LIGHTNING EXERCISE 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.

const address = empireStateBuilding["address"];
const constructionDate = empireStateBuilding["constructionDate"];
const cost = empireStateBuilding["cost"];
const owner = empireStateBuilding["owner"];
const architect = empireStateBuilding["architect"];

const remainingProperties = [address, constructionDate, cost, owner, architect];
// OUTPUT LIST OF REMAINING PROPERTIES
for (let i = 0; i < remainingProperties.length; i++) {
    console.log(remainingProperties[i]);
};



// ARRAYS AS VALUES

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
};

// LIGHTNING EXERCISE 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console

const ptInstructors = nashvilleSoftwareSchool.instructors.partTime;
const ftInstructors = nashvilleSoftwareSchool.instructors.fullTime;

for (let i = 0; i < ptInstructors.length; i++) {
    console.log(ptInstructors[i])
};

for (let i = 0; i < ftInstructors.length; i++) {
    console.log(ftInstructors[i])
};


// LIGHTNING EXERCISE 2: Output only Andy and Zoe in the console.

console.log(nashvilleSoftwareSchool.instructors.fullTime[4]);
console.log(nashvilleSoftwareSchool.instructors.partTime[0]);
