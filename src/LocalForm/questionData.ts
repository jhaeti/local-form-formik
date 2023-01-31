const questionsData = [
  {
    id: 1,
    formId: 1,
    createdBy: 1,
    formStatus: 1,
    questionnaireName: null,
    questionnaires: [
      {
        name: "Pest/disease population dynamics Priority commodities and key pests/diseases",
        type: "page",
        questions: [
          {
            canSkipNextQuestion: true,
            questionPosition: 1,
            type: "radiogroup",
            name: "question1",
            title: "Do you have a Surveillance and monitoring system in place?",
            description:
              "Do you have a Surveillance and monitoring system in place?",
            choices: ["yes", "no"],
          },
          {
            skipable: true,
            questionPosition: 2,
            type: "radiogroup",
            name: "question2",
            title: "Is it for specific pests and diseases of selected crops?",
            description:
              "Is it for specific pests and diseases of selected crops?",
            choices: ["yes", "no"],
          },
          {
            questionPosition: 3,
            type: "note",
            name: "question3",
            title: "List some of the crops",
            description: "List some of the crops",
          },
        ],
      },

      // new page
      {
        name: "Pest/disease damage on selected crops and other hosts",
        type: "page",
        questions: [
          {
            canSkipNextQuestion: true,
            questionPosition: 1,
            type: "radiogroup",
            name: "question4",
            title: "Do you have Pest/disease incidence onyour farm",
            description: "Do you have Pest/disease incidence on your farm",
            choices: ["yes", "no"],
          },
          {
            skipable: true,
            questionPosition: 2,
            type: "radiogroup",
            name: "question5",
            title: "If yes, which type?",
            description: "If yes, which type?",
            choices: ["item1", "item2", "item3"],
          },
          {
            questionPosition: 3,
            type: "radiogroup",
            name: "question6",
            title: "Which crops are affected?",
            description: "Which crops are affected?",
            choices: ["item1", "item2", "item3"],
          },
          {
            questionPosition: 4,
            type: "radiogroup",
            name: "question7",
            title: "What is the Severity/threshold of the damage on crops?",
            description:
              "What is the Severity/threshold of the damage on crops?",
            choices: ["Very Severe", "Severe", "Normal", "Minimum"],
          },
          {
            questionPosition: 5,
            type: "number",
            name: "question8",
            title: "What is the total affected acreage of thefields?",
            description: "What is the total affected acreage of the\nfields?",
          },
        ],
      },
    ],
  },
];

export default questionsData;
