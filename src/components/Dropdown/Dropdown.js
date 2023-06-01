import { useState } from 'react';
import s from './Dropdown.module.css';

export default function Dropdown({ filterTweets }) {
  const [selectedOption, setSelectedOption] = useState('show all');

  const handleOptionChange = e => {
    setSelectedOption(e.target.value);
    filterTweets(e.target.value);
  };

  return (
    <div>
      <select
        className={s.dropdown}
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="show all">Show All</option>
        <option value="follow">Follow</option>
        <option value="followings">Followings</option>
      </select>
    </div>
  );
}
