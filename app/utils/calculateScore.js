// const express = require('express');
// const router = express.Router();
// const db = require('../models');

// // Route to calculate a student's score for an exam
// router.post('/exam/score', async (req, res) => {
//   try {
//     const studentId = req.body.studentId;
//     const examId = req.body.examId;
//     const studentAnswers = req.body.answers;

//     // Retrieve the correct answers for the exam
//     const exam = await db.Exam.findByPk(examId, { include: { model: db.Question, include: db.Answer } });

//     // Calculate the student's score
//     let score = 0;
//     exam.Questions.forEach((question, index) => {
//       const studentAnswer = studentAnswers[index];
//       const correctAnswer = question.Answers.find(answer => answer.isCorrect);

//       if (studentAnswer === correctAnswer.id) {
//         score += 1; // award one point for each correct answer
//       }
//     });

//     // Save the student's score to the database
//     const result = await db.Result.create({
//       enrollment_id: studentId,
//       exam_id: examId,
//       score: score
//     });

//     res.status(200).json({ score: score });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error calculating score' });
//   }
// });

// module.exports = router;
