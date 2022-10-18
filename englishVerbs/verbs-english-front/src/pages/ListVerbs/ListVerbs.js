import { useEffect, useState, useMemo, useCallback } from 'react';
import { Search } from '../../components/Search';
import { List } from '../../components/List';
import { Card } from '../../components/Card';
//import { Play } from '../../components/Play';

const ListVerbs = () => {
  const [verbs, setVerbs] = useState([]);
  const [filter, setFilter] = useState('');
  const [selected, setSelected] = useState(null);
  const [mode, setMode] = useState('List of Verbs');
  const [chooseIiom, setChooseIdiom] = useState('English');
  //useEffect que realiza una peticion al back al cargar la pagina
  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(process.env.REACT_APP_BACKEND);

      try {
        const json = await response.json();
        setVerbs(json.data);
      } catch (error) {
        console.error(error);
      }
    };
    loadData();
  }, []);

  //Devulve la lista de verbos filtrados
  const filterVerbs = useMemo(() => {
    if (!filter) return verbs;
    return verbs.filter(
      (verb) =>
        verb.baseForm.toLowerCase().includes(filter.toLowerCase()) ||
        verb.spanish.toLowerCase().includes(filter.toLowerCase())
    );
  }, [verbs, filter]);

  //Event handler del filtro
  const handleFilter = useCallback((e) => {
    setFilter(e.target.value);
  }, []);

  //Funcion que establece el verbo seleccionado
  //useCallback se emplea para memoriazar una funcion y que solo se ejecute si cambia la 'condicion'
  const selectVerb = useCallback(
    //busca entre toda la lista de verbos una que tenga el mismo id que le pasamos como parametro
    (id) => {
      setSelected(verbs.find((verb) => verb.id === id));
    },
    [verbs]
  );

  const selectIdiom = (idiom) => {
    setChooseIdiom(idiom);
  };

  //useEffect que cambia el estado de selected cada vez que cambia el valor de filterVerbs
  useEffect(() => {
    setSelected(filterVerbs[0]);
  }, [filterVerbs]);

  const next = () => {
    setSelected(verbs[Number(selected.id)]);
  };

  return (
    <main>
      <header>
        <h1>English Verbs</h1>

        <div>
          <p>Select mode:</p>
          <select onChange={(e) => setMode(e.target.value)}>
            <option value={'List of verbs'}>List of Verbs</option>
            <option value={'play'}>Play</option>
          </select>
        </div>
      </header>

      <section className='app'>
        {/* Search */}
        <Search handleFilter={handleFilter} />

        {/* Contact List */}
        <List
          verbs={filterVerbs}
          selectVerb={selectVerb}
          selectIdiom={selectIdiom}
          chooseIiom={chooseIiom}
        />

        {/* Card */}
        <Card verb={selected} mode={mode} chooseIiom={chooseIiom} next={next} />
      </section>
    </main>
  );
};

export default ListVerbs;
