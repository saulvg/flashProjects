import { memo, useState } from 'react';

export const List = memo(({ verbs, selectVerb, selectIdiom, chooseIiom }) => {
  if (verbs.lenght === 0) return <p>No results</p>;
  return (
    <>
      <div className='selectIdiom'>
        <button
          className='idiom'
          onClick={() => {
            selectIdiom('English');
          }}
        >
          English
        </button>
        <button className='idiom' onClick={() => selectIdiom('Spanish')}>
          Spanish
        </button>
      </div>
      <menu>
        {verbs.map((verb) => {
          return (
            <li
              key={verb.id}
              onClick={() => {
                selectVerb(verb.id);
              }}
            >
              {chooseIiom === 'English' ? verb.baseForm : verb.spanish}
            </li>
          );
        })}
      </menu>
    </>
  );
});
