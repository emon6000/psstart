import React from 'react';
const role = 'admin';
const App = () => {
  return (
      // (()=>{
        // if (role === 'admin') {
        //   return <h1>Welcome, Admin!</h1>;
        // } else {
        //   return <h1>Welcome, User!</h1>;
        // }
        role==='admin'?<h1>Welcome, Admin!</h1>:<h1>Welcome, User!</h1>
      // })()
  );
};

export default App;