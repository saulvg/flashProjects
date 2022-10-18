import { useState } from 'react';
export const Play = () => {
  const [exercise, setExercise] = useState('');
  console.log(exercise);

  if (exercise === 'youChoose') {
    return <div>hola</div>;
  }
  return (
    <div className='choose-exercise'>
      <div>
        <button onClick={() => setExercise('youChoose')}>You choose</button>
      </div>
      <div>
        <button onClick={() => setExercise('random')}>Random</button>
      </div>
    </div>
  );
};
