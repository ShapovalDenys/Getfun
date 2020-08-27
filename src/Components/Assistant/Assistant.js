import React from 'react';

import './Assistant.scss';

const Assistant = () => (
  <section className="assistant">
    <div className="assistant__card">
      <img className="assistant__card-photo" src="./img/img_photo.png" alt="card photo"></img>
      <div className="assistant__card-description">
        <h4 className="assistant__card-name">Michaella</h4>
        <span className="assistant__card-position">Personal Financial Assistant</span>
      </div>
    </div>
  </section>
);

export default Assistant;
