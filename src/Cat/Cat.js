import React from 'react';


// export function Cat() {
//     return (
//       <h2>Cat Component</h2>
//     )
// }

// export const Cat = () => {
//   return (
//     <div>This is Cat</div>
//   )
// };


// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const catCard = {
    display: 'flex',
    flexDirection: 'column'
  };
  const catInfo = {
    fontWeight: 'bold'
  };

  return (
    <div style={catCard}>
      <h3>Cat</h3>
      <div><span style={catInfo}>Name:</span> {props.name}</div>
      <div><span style={catInfo}>Age:</span> {props.age}</div>
      <div><span style={catInfo}>Color:</span> {props.color}</div>
      { props.children }
    </div>
  )
}
