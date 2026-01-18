export const facultyMembers = [
  {
    id: "fac-1",
    name: "Dr. Mahamudul Hasan",
    keyRole: "chairman", // <--- THIS IS THE FIX. specific key for code logic.
    designation: "Associate Professor & Chairman",
    email: "mahamudul@cu.ac.bd",
    phone: "+880 17XXXXXXXX",
    image: "https://ui-avatars.com/api/?name=Mahamudul+Hasan&background=fff&color=0D8ABC&size=150",
    education: "Ph.D. in Artificial Intelligence, Japan",
    research: ["Machine Learning", "Natural Language Processing", "Computer Vision"],
    message: "Welcome to the dept. Discipline is key."
  },
  {
    id: "fac-2",
    name: "Partha Chakraborty",
    keyRole: "advisor", // <--- System recognizes this as Advisor
    designation: "Assistant Professor & Student Advisor",
    email: "partha@cu.ac.bd",
    phone: "+880 18XXXXXXXX",
    image: "https://ui-avatars.com/api/?name=Partha+Chakraborty&background=fff&color=0D8ABC&size=150",
    education: "M.Sc. in CSE, BUET",
    research: ["Network Security", "Cryptography", "IoT"],
    message: "My door is always open for students."
  },
  {
    id: "fac-3",
    name: "Mahfuzur Rahman",
    keyRole: "faculty", // Normal faculty member
    designation: "Lecturer",
    email: "mahfuz@cu.ac.bd",
    phone: "+880 16XXXXXXXX",
    image: "https://ui-avatars.com/api/?name=Mahfuzur+Rahman&background=fff&color=0D8ABC&size=150",
    education: "B.Sc. in CSE, CU",
    research: ["Software Engineering", "Web Technologies"],
    message: "Focus on your projects and coding skills."
  }
];

export const getFacultyById = (id) => {
  return facultyMembers.find(member => member.id === id);
};