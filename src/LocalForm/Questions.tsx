import { useEffect, useState } from "react";
import Question from "./Question";

const Questions = ({ questions, handleChange }) => {
  const [filterOut, setFilterOut] = useState([]);
  const [filteredQuestion, setFilteredQuestion] = useState([]);

  useEffect(() => {
    setFilteredQuestion(
      questions.filter((question) => !filterOut.includes(question.description))
    );
  }, [filterOut]);

  function handleSkip(position, value) {
    if (questions[position].skipable && value === "no") {
      setFilterOut((prev) => [...prev, questions[position].description]);
    }
    if (questions[position].skipable && value === "yes") {
      setFilterOut((prev) =>
        prev.splice(prev.indexOf(questions[position].description), 1)
      );
    }
  }

  return filteredQuestion.map((question, i) => (
    <Question
      key={i}
      handleChange={handleChange}
      question={question}
      handleSkip={handleSkip}
    />
  ));
};
export default Questions;
