import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import Header from './components/header/Header';
import ProductsList from './components/productsList/ProductsList';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <ProductsList />
      </main>
      <Footer />
    </Provider>
  );
}

export default App;
