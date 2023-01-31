const styles = {
  formControl: {
    margin: "2rem",
    border: "2px solid #428f42",
    padding: "1rem 1.5rem",
    borderRadius: "1rem",
  },
  input: {
    display: "block",
    fontSize: "inherit",
    marginTop: "1rem",
  },
};

const Question = ({ question, handleChange, handleSkip }) => (
  <div style={styles.formControl}>
    <label>{question.description}</label>

    {question.type === "radiogroup" ? (
      question.choices.map((choice) => (
        <div key={question.description + choice}>
          <input
            type={"radio"}
            id={question.description + choice}
            name={question.description}
            value={choice}
            onChange={(e) => {
              if (question.canSkipNextQuestion) {
                handleSkip(question.questionPosition, choice);
              }
              handleChange(e);
            }}
          />
          <label htmlFor={question.description + choice}>{choice}</label>
        </div>
      ))
    ) : (
      <input
        type="text"
        name={question.description}
        onChange={handleChange}
        style={styles.input}
      />
    )}
  </div>
);

export default Question;
