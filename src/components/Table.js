import React, { useEffect, useState } from "react";
import '../App.css';

function Table() {

   const [num, setNum] = useState('');
   const [loading, setLoading] = useState(true);
   const arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

   useEffect(() => {
      load();
   }, [])

   const load = () => {
      setTimeout(() => {
         setLoading(false);
      }, 2000)
   }

   return (
      <div className="App">
         {loading && <div className="App">
            <div class="loader"></div>
            <h2 className="h2">Loading...</h2>
         </div>}
         {loading === false && <div className="App">
            <h2 className="h2">Table Generator</h2>
            <input type="number" class="input" autoFocus value={num} onChange={e => setNum(e.target.value)} />
            <div className="div">
               {num > 0 && arrs.map(arr => {
                  return (
                     <p key={arr} className="p">{`${num} x ${arr} = ${num * arr}`}</p>
                  )
               })}
            </div>
         </div>}
      </div>
   );
}

export default Table;
