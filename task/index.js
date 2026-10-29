const users = [
  {
    id: 101,
    name: "  alex JOHNSON ",
    dob: "1992-06-15",
    salary: "55000",
    skills: ["html", "css", "javascript"]
  },
  {
    id: 102,
    name: "  maria  smith  ",
    dob: "1988-11-03",
    salary: "72000",
    skills: ["react", "node", "css"]
  },
  {
    id: 103,
    name: "john doe",
    dob: "1996-02-25",
    salary: "48000",
    skills: ["vue", "javascript", "html"]
  }
];

// TASK 1: STRING OPERATIONS

function formatName(name) {
  return name
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .map(word =>
      word.charAt(0).toUpperCase() +
      word.slice(1).toLowerCase()
    )
    .join(" ");
}

const formattedNames = users.map(user =>
  formatName(user.name)
);

console.log("Task 1 - Formatted Names:");
console.log(formattedNames);

// TASK 2: ARRAY OPERATIONS

const allSkills = users.flatMap(user => user.skills);

const uniqueSkills = [...new Set(allSkills)].sort();

const javascriptUsers = users.filter(user =>
  user.skills.some(skill =>
    skill.toLowerCase() === "javascript"
  )
);

console.log("\nTask 2 - Unique Sorted Skills:");
console.log(uniqueSkills);

console.log("Users knowing JavaScript:", javascriptUsers.length);

// TASK 3: NUMBER OPERATIONS

const salaries = users.map(user => Number(user.salary));

const totalSalary = salaries.reduce(
  (total, salary) => total + salary,
  0
);

const salaryStats = {
  average: Math.round(totalSalary / salaries.length),
  highest: Math.max(...salaries),
  lowest: Math.min(...salaries)
};

console.log("\nTask 3 - Salary Statistics:");
console.log(salaryStats);

// TASK 4: DATE OPERATIONS

function calculateAge(dob) {
  const birthDate = new Date(dob + "T00:00:00");
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const currentMonth = today.getMonth();
  const birthMonth = birthDate.getMonth();

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth &&
      today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

const usersWithAge = users.map(user => ({
  ...user,
  name: formatName(user.name),
  dob: new Date(user.dob + "T00:00:00"),
  age: calculateAge(user.dob)
}));

const oldestUser = usersWithAge.reduce((oldest, user) =>
  user.dob < oldest.dob ? user : oldest
);

console.log("\nTask 4 - Users with Age:");

console.log(
  usersWithAge.map(user => ({
    name: user.name,
    dob: user.dob.toISOString().slice(0, 10),
    age: user.age
  }))
);

console.log("Oldest User:");
console.log({
  name: oldestUser.name,
  age: oldestUser.age
});
