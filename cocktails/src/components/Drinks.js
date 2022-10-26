import React, { useEffect } from 'react';
import Loading from './Loading';
import Cocktails from './Cocktails';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

function Drinks() {
  const [loading, setLoading] = React.useState(true);
  const [drinks, setDrinks] = React.useState([]);

  const fetchDrinks = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const drinks = await response.json();
      setLoading(false);
      setDrinks(drinks);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDrinks();
  }, []);

  if (loading) return <Loading />;
  return (
    <div className='cocktails'>
      <Cocktails data={drinks.drinks} />
    </div>
  );
}

export default Drinks;
