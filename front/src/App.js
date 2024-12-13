



import React from 'react';
import FormComponent from './components/FormComponent';

const App = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div>
      <FormComponent
        title="Sign in as Player"
        fields={[
          { id: 'username', name: 'username', type: 'text', label: 'Username', placeholder: 'Enter your username', required: true },
          { id: 'password', name: 'password', type: 'password', label: 'Password', placeholder: 'Enter your password', required: true },
        ]}
        buttonText="Sign In"
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;


// function App() {
//   return (
//     <>
//     <h3>
//       hi
//     </h3>
//     </>
//   );
// }

// export default App;
