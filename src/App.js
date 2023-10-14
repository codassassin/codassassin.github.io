import { useContext, useEffect, useState } from 'react';
import './App.scss';
import Loader from './pages/Loader/Loader';
import Main from './pages/Main/Main';
import DevToolsForbidden from './pages/Forbidden/DevToolsForbidden';
import { ApplicationContext } from './context/ApplicationContext';
import GeolocationForbidden from './pages/Forbidden/GeolocationForbidden';

function App() {
  const {forbidden, locationForbidden} = useContext(ApplicationContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        setLoading(false);
      }, 4500)
    });

    return () => {
      window.removeEventListener('load', () => {});
    }
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {locationForbidden ? (
            <GeolocationForbidden />
            ) : (
              <>
                {forbidden ? (
                  <DevToolsForbidden />
                ) : (
                  <Main />
                )}
              </>
            )
          }
        </>
      )}
    </>
  );
}

export default App;
