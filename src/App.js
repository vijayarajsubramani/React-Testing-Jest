import './App.css';
import HelloWorld from './hello-world';
import FormData from './formData';
import Skills from './skills';
import Counter from './counter';
import User from './Api-test/users';

const App = () => {
  return (
    <div>
      {/* <HelloWorld /><hr />
      <FormData /><hr/>
      <Skills/><hr/>
      <Counter/><hr/> */}
      <User/>
    </div>
  );
}
export default App;
