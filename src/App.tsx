import { GlobalStyles } from "./component/styles/GlobalStyles";
import { Todo } from "./component/Todo/Todo";

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <Todo />
    </div>
  );
}

export default App;
