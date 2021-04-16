import React from 'react';
import { useState } from 'react';
import Button from '@material-ui/core/Button';

import { PopUp, Content } from './';

function getCap(name) {
  let s = name;
  return s[0].toUpperCase() + s.slice(1);
}

export default function SearchLI(props) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const { word } = props;

  return (
    <div>
      <li className="search-results-row" onClick={() => setButtonPopup(true)}>
        <span>{getCap(word.name)}</span>
      </li>
      <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div className="popup-inner-content">
          <Button className="close-btn" onClick={() => setButtonPopup(false)}>
            <img
              src="https://image.flaticon.com/icons/svg/747/747953.svg"
              alt="close-btn"
            />
          </Button>
          <Content word={word} />
        </div>
      </PopUp>
    </div>
  );
}
