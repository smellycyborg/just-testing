// TODO: host app in redux
// TODO: make api calls to airtable

import { useState } from 'react';
import Airtable from 'airtable';
import './App.css';

let db: Airtable
// db = new Airtable({ apiKey:  }).base

const App: React.FC = () => {

  const [nameForSearch, setNameForSearch] = useState<string>('');
  const [classListSearched, setClassListSearched] = useState<Array<string>>([]);
  const [searchForNameSuccess, setSearchForNameSuccess] = useState<boolean>(false);

  const inputAndButtComponent = (
    <div className=''>
      <input type='name' onChange={
        (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameForSearch(event.target.value)
      }} />
      <button >srch</button>
    </div>
  );

  const renderThisOrThat: Function = () => {
    const noNameFoundInSearch: boolean = !searchForNameSuccess
    if (noNameFoundInSearch) {
      return inputAndButtComponent;
    }

    return classListSearched.map((i: string, index: number) => {
      return (
        <div>
          <h6><small>classes</small></h6>

          <h6><small>students</small></h6>
        </div>
      )
    });
  }

  const searchForName: Function = (event: React.MouseEvent<Element, MouseEvent>, 
    name: string) => {

  }

  return (
    <div className='container'>
      { renderThisOrThat() }
    </div>
  );
}

export default App;
