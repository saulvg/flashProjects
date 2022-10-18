import { memo, useState, useEffect } from 'react';

export const Card = memo(({ verb, mode, chooseIiom, next }) => {
  const [inputBaseForm, setInputBaseForm] = useState('');
  const [styleBaseForm, setStyleBaseForm] = useState('');

  const [inputPastForm, setInputPastForm] = useState('');
  const [stylePastForm, setStylePastForm] = useState('');

  const [inputPparticipleForm, setInputPparticipleForm] = useState('');
  const [stylePparticipleForm, setStylePparticipleForm] = useState('');

  const [inputSpanishForm, setInputSpanishForm] = useState('');
  const [styleSpanishForm, setStyleSpanishForm] = useState('');

  const check = (e) => {
    e.preventDefault();
    try {
      inputBaseForm.toLowerCase() === verb.baseForm
        ? setStyleBaseForm('rgb(199, 247, 237)')
        : setStyleBaseForm('rgb(247, 201, 199)');

      inputPastForm.toLowerCase() === verb.pastForm
        ? setStylePastForm('rgb(199, 247, 237)')
        : setStylePastForm('rgb(247, 201, 199)');

      inputPparticipleForm.toLowerCase() === verb.pastParticiple
        ? setStylePparticipleForm('rgb(199, 247, 237)')
        : setStylePparticipleForm('rgb(247, 201, 199)');

      inputSpanishForm.toLowerCase() === verb.spanish
        ? setStyleSpanishForm('rgb(199, 247, 237)')
        : setStyleSpanishForm('rgb(247, 201, 199)');
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    setInputBaseForm('');
    setStyleBaseForm('white');
    setInputPastForm('');
    setStylePastForm('white');
    setInputPparticipleForm('');
    setStylePparticipleForm('white');
    setInputSpanishForm('');
    setStyleSpanishForm('white');
  }, [verb]);

  return verb ? (
    <output>
      <div>
        {mode === 'List of verbs' ? (
          <>
            <header>
              <h2>
                {verb.baseForm} - {verb.spanish}
              </h2>
            </header>
            <dl className='verbsCard'>
              <div>
                <dt>Base form</dt>
                <dd>{verb.baseForm}</dd>
              </div>
              <div>
                <dt>Past form</dt>
                <dd>{verb.pastForm}</dd>
              </div>
              <div>
                <dt>Past participle</dt>
                <dd>{verb.pastParticiple}</dd>
              </div>
              <div>
                <dt>Spanish</dt>
                <dd>{verb.spanish}</dd>
              </div>
            </dl>
          </>
        ) : (
          <>
            <header>
              <h2>{chooseIiom === 'English' ? verb.baseForm : verb.spanish}</h2>
            </header>
            <form className='verbsCard' onSubmit={check}>
              <div>
                <label>
                  Base form
                  <input
                    value={inputBaseForm}
                    onChange={(e) => setInputBaseForm(e.target.value)}
                    style={{ backgroundColor: styleBaseForm }}
                  />
                </label>
              </div>
              <div>
                <label>
                  Past form
                  <input
                    value={inputPastForm}
                    onChange={(e) => setInputPastForm(e.target.value)}
                    style={{ backgroundColor: stylePastForm }}
                  />
                </label>
              </div>
              <div>
                <label>
                  Past participle
                  <input
                    value={inputPparticipleForm}
                    onChange={(e) => setInputPparticipleForm(e.target.value)}
                    style={{ backgroundColor: stylePparticipleForm }}
                  />
                </label>
              </div>
              <div>
                <label>
                  Spanish
                  <input
                    value={inputSpanishForm}
                    onChange={(e) => setInputSpanishForm(e.target.value)}
                    style={{ backgroundColor: styleSpanishForm }}
                  />
                </label>
              </div>
              <button type={'submit'}>
                check
                <img src='/img/check.png' alt='background'></img>
              </button>
            </form>
            <button onClick={next}>Next</button>
          </>
        )}
      </div>
    </output>
  ) : (
    <p>please select a verb...</p>
  );
});
