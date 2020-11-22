import './App.css';
import { Quiz } from './Components/Quiz';
import { quizQuestions } from './QuizData/QuizQuestions';
import { randomiseQuizQuestions } from './Calculations/RandomiseQuizQuestions';

function App() {
  const randomQuestions = randomiseQuizQuestions(quizQuestions);
  return (
    <div className="App">
      <Quiz randomQuestions={randomQuestions}/>
    </div>
  );
}

export default App;
