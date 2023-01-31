import { Formik, Form } from "formik";
import Questions from "./Questions";

const styels = {
  btn: {
    background: "green",
    padding: "1rem 4.5rem",
    color: "#fff",
    borderRadius: "5px",
    border: "solid green",
  },
};

const QuestionForm = ({ questionnaires }) => {
  const initialFormValues = () => {
    const values = {};
    questionnaires.forEach((questionnaire) => {
      questionnaire.questions.forEach((question) => {
        values[question.description] = null;
      });
    });

    return values;
  };

  const initialValues = initialFormValues();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.table(values);
      }}
    >
      {({ handleChange }) => (
        <Form>
          {questionnaires.map((questionnaire, i) => (
            <Questions
              key={i}
              handleChange={handleChange}
              questions={questionnaire.questions}
            />
          ))}
          <button type="submit" style={styels.btn}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default QuestionForm;
