import React from 'react';
import Card from './Card';

function Cocktails({ data }) {
  const dataElements = data.map((el) => {
    return (
      <Card key={el.idDrink}>
        <div className='image'>
          <img src={el.strDrinkThumb} alt='a drink' className='drink-img' />
        </div>
        <div className='drink-desc'>
          <h1 className='drink-title'>{el.strDrink}</h1>
          <h3 className='drink-glass'>{el.strGlass}</h3>
          <p className='drink-type'>{el.strAlcoholic}</p>
          <button className='drink-btn'>details</button>
        </div>
      </Card>
    );
  });
  return (
    <div className='section-cocktails'>
      <h1 className='cocktails-title'>Cocktails</h1>
      <div className='container'>{dataElements}</div>
    </div>
  );
}

export default Cocktails;
