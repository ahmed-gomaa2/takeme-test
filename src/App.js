import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {getCategories} from "./store/actions/categories.action";
import {useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import Categories from "./screens/Categories/Categories";
import Category from "./screens/Category/Category";
import Localization from "./screens/Localization/Localization";

function App(props) {
  useEffect(() => {
    props.getCategories();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} exact element={<Categories />} />
        <Route path={'/:id'} exact element={<Category />} />
        <Route path={'/localization'} exact element={<Localization />} />
      </Routes>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    categories: state.categories.categories
  }
}
export default connect(mapStateToProps, {getCategories}) (App);
