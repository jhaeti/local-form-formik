import { useState } from "react";

import LocalForm from "./LocalForm";

const styles = {
  wrapper: {
    marginTop: "7vh",
    padding: "2rem",
  },
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.wrapper}>
      <LocalForm />
    </div>
  );
}

export default App;
