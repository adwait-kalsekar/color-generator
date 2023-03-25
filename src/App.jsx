import { useState } from 'react';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

import Form from './Form';
import ColorList from './ColorList';

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10));

  const changeColors = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <main>
      <section>
        <ToastContainer />
        <Form changeColors={changeColors} />
        <ColorList colors={colors} />
      </section>
    </main>
  );
};
export default App;
