import React, { useContext, useEffect, useState } from 'react';
import './ShopSection.scss';
import MainContext from '../../../../../context/Context';

import ShopCards from '../ShopCards/ShopCards';

const ShopSection = () => {


  const { data } = useContext(MainContext);
  const [sort, setSort] = useState(null);
  const [inpValue, setInpValue] = useState("");

  function handleSortChange(e) {
    const value = e.target.value;
    if (value === "default") {
      setSort(null);
    } else {
      const [field, order] = value.split("-");
      setSort({ field, order });
    }
  }

  return (
    <section className="shop__section">
      <div className="shop__section__wrapper container">
        <div className='d-flex gap-4 mt-3 mb-3 cards__section__btns'>
          <input type="text" value={inpValue} onChange={(e) => setInpValue(e.target.value)} />

          <select onChange={handleSortChange} className='form-select'>
            <option value="default">Default</option>
            <option value="title-asc">A-Z</option>
            <option value="title-desc">Z-A</option>
          </select>

          <select onChange={handleSortChange} className='form-select'>
            <option value="default">Default</option>
            <option value="price-asc">Low to High</option>
            <option value="price-desc">High to Low</option>
          </select>
        </div>

        <div className='d-flex flex-wrap justify-content-between'>
          {data && data
            .filter((item) => item.title.toLowerCase().includes(inpValue.toLowerCase()))
            .sort((a, b) => {
              if (!sort) return 0;

              const { field, order } = sort;
              if (field === 'title') {
                return order === 'asc' ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]);
              } else if (field === 'price') {
                return order === 'asc' ? a[field] - b[field] : b[field] - a[field];
              }
              return 0;
            })
            .map((product) => (
              <ShopCards
                key={product._id}
                product={product}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;


