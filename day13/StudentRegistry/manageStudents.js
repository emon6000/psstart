const fs = require('fs').promises;

async function main() {
    try{
        const data = await fs.readFile('database.json','utf-8');
        const students = JSON.parse(data);
        // console.log(students);
        const newStudent = {
            id: 4,
            name: 'Rahim',
            cgpa: 3.5
        }
        students.push(newStudent);
        const updatedData = JSON.stringify(students,null,2);
        await fs.writeFile('database.json',updatedData);
        console.log('Student added successfully');
    }
    catch(err){
        console.log(err);
    }
}

main();