import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utills/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';

import { Provider } from 'react-redux';
import PrivateRoute from './components/common/PrivateRoute';
import store from './store'
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Landing from './components/Layout/Landing'
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/create-profile/CreateProfile';
import EditProfile from './components/edit-profile/EditProfile';
import AddExperience from './components/add-credentials/AddExperience';
import AddEducation from './components/add-credentials/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import HomePage from './components/HomePage/HomePage';
import NewsPage from './components/NewsPage/NewsPage';
import ArticlePage from './components/ArticlePage/ArticlePage';
import ReviewPage from './components/ReviewPage/ReviewPage';
import NewsOne from './components/NewsPage/NewsOne';
import NewsTwo from './components/NewsPage/NewsTwo';
import NewsThree from './components/NewsPage/NewsThree';
import NewsFour from './components/NewsPage/NewsFour';
import NewsFive from './components/NewsPage/NewsFive';
import ArticleOne from './components/ArticlePage/ArticleOne';
import ArticleTwo from './components/ArticlePage/ArticleTwo';
import ArticleThree from './components/ArticlePage/ArticleThree';
import ReviewOne from './components/ReviewPage/ReviewOne';
import ReviewTwo from './components/ReviewPage/ReviewTwo';
import ReviewThree from './components/ReviewPage/ReviewThree';
import ReviewFour from './components/ReviewPage/ReviewFour';
import ReviewFive from './components/ReviewPage/ReviewFive';
import ReviewSix from './components/ReviewPage/ReviewSix';
import Search from './components/search';
import News from './components/NewsPage';
import Article from './components/ArticlePage';
import Review from './components/ReviewPage';

//Check for token
if(localStorage.jwtToken){
  //Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //Check for expired token 
  const currentTime = Date.now() /1000;
  if (decoded.exp < currentTime) {
    //Logout user
    store.dispatch(logoutUser());
    //Clear current Profile
    store.dispatch(clearCurrentProfile());

    //Redirect to login
    window.location.href='/';
  }
}

class App extends Component {
  render() {
    return (
     <Provider store = {store}>
     <Router>
       <Switch>
       <div className="App">
          {/* <Navbar/> */}
          <Route exact path="/" component={Landing} />
          {/* <div className="container"> */}
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/profiles" component={Profiles}/>
            <Route exact path="/profile/:handle" component={Profile}/>
            
            <PrivateRoute exact path="/dashboard" component={Dashboard}/>
            
            <PrivateRoute exact path="/create-profile" component={CreateProfile}/>
            
            <PrivateRoute exact path="/edit-profile" component={EditProfile}/>
           
            <PrivateRoute exact path="/add-experience" component={AddExperience}/>
          
            <PrivateRoute exact path="/add-education" component={AddEducation}/>
          
            <PrivateRoute exact path="/feed" component={Posts}/>
            
            <PrivateRoute exact path="/post/:id" component={Post}/>
           
            <PrivateRoute exact path="/home" component={HomePage}/>
            
            <PrivateRoute exact path="/news" component={NewsPage}/>
           
            <PrivateRoute exact path="/article" component={ArticlePage}/>
            
            <PrivateRoute exact path="/review" component={ReviewPage}/>
          
           
           <PrivateRoute exact path="/news/:newsNum" component={News}></PrivateRoute>
           <PrivateRoute exact path="/article/:articleNum" component={Article}></PrivateRoute>
           <PrivateRoute exact path="/review/:reviewNum" component={Review}></PrivateRoute>
           
           
            <PrivateRoute exact path="/search" component={Search}/>
           
            
            
          {/* </div> */}
   
          {/* <Footer/> */}
        </div>
        </Switch>
      </Router>
      </Provider> 
  );
}}

export default App;
