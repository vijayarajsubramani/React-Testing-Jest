import './App.css';
import HelloWorld from './hello-world';
import FormData from './formData';
import Skills from './skills';
import Counter from './counter';

const App = () => {
  return (
    <div className="App">
      <HelloWorld /><hr />
      <FormData /><hr/>
      <Skills/><hr/>
      <Counter/>
    </div>
  );
}
export default App;
