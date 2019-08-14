import React from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

import AjaxTesting from './containers/AjaxTesting'

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
        {/* <AjaxTesting /> */}
      </Layout>
    </div>
  );
}

export default App;
