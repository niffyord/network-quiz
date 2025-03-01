# CBT Quiz Platform

A simple web-based Computer-Based Training (CBT) quiz platform that allows users to take quizzes and see their score at the end.

## Features

- Clean, modern user interface
- Multiple-choice questions with immediate feedback
- Score calculation and detailed results review
- Mobile-friendly responsive design

## How to Use

1. Open `index.html` in your web browser
2. Click the "Start Quiz" button
3. Select your answer for each question and click "Next Question"
4. View your results and review your answers at the end
5. Click "Take Quiz Again" to restart

## Adding More Questions

To add more questions to the quiz, edit the `quizData` array in the `script.js` file. Each question should be added as an object with the following properties:

```javascript
{
    question: "Your question text here",
    options: [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
    ],
    correctAnswer: 0 // Index of the correct answer (0-based)
}
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)

## Future Enhancements

- Timer functionality
- Different quiz categories
- User authentication and score tracking
- Question randomization
