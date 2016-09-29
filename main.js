const ps = require('./pair-students');
const studentsFilePath = `${__dirname}/${process.argv[2] || 'students.txt'}`;

ps.readStudentFile(studentsFilePath)
  .then(ps.writePairsFile)
  .then(() => console.log('New pairs generated!'))
  .catch(console.error)
