import { useState } from 'react';
import Children_Comp from './Bt4_children';

let Bt4 = () => {
  let [tenBanThan] = useState('hoang'); 

  return (
    <div>
        <h1>bt4</h1>
      <h1> component cha</h1>
      <p>Ten la: {tenBanThan}</p>
      <Children_Comp name={tenBanThan} /> 
    </div>
  );
};

export default Bt4;
