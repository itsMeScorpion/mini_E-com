import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Category from './Category';
import SubCategory from './Subcategory';
import { ToastContainer, toast } from 'react-toastify';
import Variant from './Variant';
import SubVariant from './SubVariant';
import { useDispatch, useSelector } from 'react-redux';
import { resetsuccessmessage, seterrormessage } from '../action';
import Home from './Home';
import Navbar from './Navbar';

const toastConfig = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

function App() {
  const { setsuccessmessage, seterrormessage } = useSelector(
    (state) => state.oauth
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (setsuccessmessage) {
      toast.success(setsuccessmessage, toastConfig);
      dispatch(resetsuccessmessage());
    } else if (seterrormessage) {
      toast.error(seterrormessage, toastConfig);
      dispatch(resetsuccessmessage());
    }
  }, [setsuccessmessage, seterrormessage]);
  const { issignedin } = useSelector((state) => state.oauth);
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      {issignedin ? (
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/Category" component={Category}></Route>
          <Route path="/SubCategory" component={SubCategory}></Route>
          <Route path="/Variant" component={Variant}></Route>
          <Route path="/SubVariant" component={SubVariant}></Route>
        </Switch>
      ) : null}
    </BrowserRouter>
  );
}

export default App;
