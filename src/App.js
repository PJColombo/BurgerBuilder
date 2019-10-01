import React from 'react';
import Layout from './components/hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

import AjaxTesting from './containers/AjaxTesting'

function App() {
  return (
    <div>
      <Layout>
        {/*<BurgerBuilder />*/}
      </Layout>
        <AjaxTesting />
    </div>
  );
}

export default App;
