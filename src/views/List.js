import React, { useState, useEffect } from 'react';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const List = ({ title }) => {
  const url = 'https://cs464p564-frontend-api.vercel.app/api/countries';

  const [list, setList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setList(data);
        setIsLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="container my-4">
      <h1 className="text-center mb-4">{title}</h1>

      {!isLoaded && <div className="text-center">Loading...</div>}

      <ul className="list-unstyled">
        {list.map((item) => (
          <React.Fragment key={item.id}>
            <li className="card mb-4 shadow-sm" style={{ overflow: 'hidden' }}>
              <div className="card-body text-center">
                <h3 className="card-title">{item.name}</h3>

                {item.flag_png && (
                  <div className="d-flex justify-content-center">
                    <img
                      src={item.flag_png}
                      alt={item.flag_alt || `Flag of ${item.name}`}
                      className="img-fluid"
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                        maxHeight: '200px',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                )}

                <p className="card-text">
                  <strong>Population: </strong>
                  {item.population ?? 'Not available'}
                </p>
                <p className="card-text">
                  <strong>GDP: </strong>
                  {item.gdp_billions
                    ? `$${item.gdp_billions} billion`
                    : 'Not available'}
                </p>
                <p className="card-text">
                  <strong>Official Languages: </strong>
                  {item.official_languages && item.official_languages.length > 0
                    ? item.official_languages.join(', ')
                    : 'Not available'}
                </p>
              </div>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </main>
  );
};

export default List;
