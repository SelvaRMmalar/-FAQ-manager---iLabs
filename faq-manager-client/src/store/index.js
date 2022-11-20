import { useState, useRef, useEffect, useMemo } from 'react';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import reducers from './reducer';
import { createAxios } from '../Config/axios';

const createConfigureStore = async () => {
  const store = createStore(reducers, compose(applyMiddleware(thunk, promise)));

  const persist = await persistStore(store);
  createAxios(store);
  return { store, persist };
};

export function useStore() {
  const alive = useRef(true);

  const [store, setStore] = useState();
  const [persist, setPersist] = useState();

  useEffect(() => {
    const configStore = async () => {
      try {
        const { store, persist } = await createConfigureStore();

        if (alive.current) {
          setStore(store);
          setPersist(persist);
        }
      } catch (error) {
        // handle error
      }
    };

    configStore();
    setTimeout(() => {
      return () => {
        alive.current = false;
      };
    }, 3000);
  }, []);

  /**
   * Check the store created successfully
   * @type {boolean}
   */
  const isReady = useMemo(() => {
    return store !== null && persist !== null;
  }, [store, persist]);
  return { store, persist, isReady };
}
export default createConfigureStore;
