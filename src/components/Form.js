import { useState } from "react";
import { ButtonStyle } from "../styleFactory";

function Form() {

  const [username, setName] = useState('');

  const getResults = (e) => { 
    e.preventDefault();
    console.log('Form submitted!', username);
  }

  return (
    <form onSubmit={getResults} className="flex flex-col max-w-xs">
      <input 
        type="text" 
        placeholder="Twitter Handle" 
        name="username"
        onChange={e => setName(e.target.value )}
        className="mt-3 rounded-md shadow-md"
      />
      
      <button className={ButtonStyle('primary')}>
        Submit
      </button>
    </form>
  );
}

export default Form;
