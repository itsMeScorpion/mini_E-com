import React from 'react';
import CollapsibleExample from './Navbar';
import Category from './Category';
import SubCategory from './Subcategory';
import History from '../History';
import Home from './Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Variant from './Variant';
import SubVariant from './SubVariant';
import { useSelector } from 'react-redux';
const App = () => {
  const { issignedin } = useSelector((state) => state.oauth);
  return (
    <div>
      <BrowserRouter>
      <CollapsibleExample />
      {issignedin ? (
        <Switch>
          {/* <Route exact path="/" component={Header}></Route> */}
          <Route path="/Category" component={Category}></Route>
          <Route path="/SubCategory" component={SubCategory}></Route>
          <Route path="/Variant" component={Variant}></Route>
          <Route path="/SubVariant" component={SubVariant}></Route>
        </Switch>
      ) : null}
    </BrowserRouter>
    </div>
  );
};

export default App;
