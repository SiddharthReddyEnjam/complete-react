import Main from "./components/Main";
import data from "./data";
import React from "react";

function App() {
  const [questions, setQuestions] = React.useState(data);

  const questionElements = questions.map((question) => {
    return <Main key={question.id} {...question} />;
  });

  return (
    <div className="app">
      <h1 className="app-heading">Questions And Answers About Login</h1>
      <div className="section--main">{questionElements}</div>
    </div>
  );
}

export default App;
