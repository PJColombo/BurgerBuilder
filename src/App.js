import React from 'react';
import Layout from './components/hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

import AjaxTesting from './containers/AjaxTesting'
import AjaxTestingClass from './containers/AjaxTestingClass';

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
        {/* <AjaxTesting /> */}
        {/* <AjaxTestingClass /> */}
    </div>
  );
}

export default App;
