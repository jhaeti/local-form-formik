import { useEffect, useState } from "react";
import QuestionForm from "./QuestionForm";
import questionData from "./questionData";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [questionnaires, setQuestionnaires] = useState(null);

  useEffect(() => {
    if (questionData) {
      setQuestionnaires(questionData[0].questionnaires);
      setLoading(false);
    }
  }, []);
  if (loading) return <div>Loading</div>;
  return (
    <QuestionForm questionnaires={questionnaires} questionData={questionData} />
  );
};
export default Index;
