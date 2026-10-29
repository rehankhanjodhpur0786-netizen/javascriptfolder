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

function formatName(name) {
    return name
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .map(word=>
      word.charAt(0).toUpperCase() +
      word.slice(1).toLowerCase()
    )
    .join(" ");
}

const formattedNames = users.map(users =>
  formatName(users.name)
);

console.log("task 2 - Formatted Names:");
console.log(formattedNames);

const allSkills = users.flatMap(users => users.skills);

const uniqueSkills = [...new Set(allSkills)].sort();

const javascriptUsers = users.filter(user =>
  user.skills.some(skill =>
    skill.toLowerCase() === "javascript"
  )
);

console.log("\nTask 2 - Unique sorted Skills:");
console.log(uniqueSkills);

console.log("Users knowing javascript:", javascriptUsers.length);

const Salaries = users.map(user => parseInt(user.salary));

const totalSalary = Salaries.reduce(
  (total, Salary) => total + Salary,
   0
  );

  const SalaryStatus =