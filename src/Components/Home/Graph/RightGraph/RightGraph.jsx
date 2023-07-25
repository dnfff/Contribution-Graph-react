import { useState } from 'react'

import View from "../View/View"

import "./RightGraph.css"

function RightGraph() {

  const [view, useView] = useState(false);

//   const food = [
//     {id: 1, name: 'cheese', price: 10},
//     {id: 2, name: 'milk', price: 20},
//     {id: 3, name: 'bread', price: 30},
//  ];

//  let res = food.map(function(item) {
//     return <tr key={item.id}>
//        <td>{item.name}</td>
//        <td>{item.price}</td>
//     </tr>;
//  });

 return (
  <div className='rightGraph'>
    <div onMouseDownCapture={() => useView(!view)} className='rightGraph__block'></div>

    {
      view && (<View />)
    }

  </div>
 )
}

export default RightGraph