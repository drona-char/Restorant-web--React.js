import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './Homecomponent';
import Contact from './contactcomponent';
import About from './aboutuscomponent';
import DishDetail from './DishDetail';
import Header from './Headercomponent';
import Footer from './Footercomponent';
import {Switch,Route,Redirect ,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';  
 import {postComment,fetchDishes,fetchComments,fetchPromos, fetchLeaders} from '../redux/ActionCreator';
 import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps =state =>{
  return{
    dishes:state.dishes,
    Comments:state.Comments,
    Promotions:state.Promotions,
    Leaders:state.Leaders
  }
}

const mapDispatchToProps =(dispatch)=>({
  postComment:(dishId,rating,author,comment) => dispatch(postComment(dishId,rating,author,comment)),
  fetchDishes:()=>dispatch(fetchDishes()), 
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders:()=> dispatch(fetchLeaders())

})


class Main extends Component{

  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }
  
  
  render() {

    const HomePage =()=>{
      return(
        <Home dish={this .props.dishes.dishes.filter((dish)=>dish.featured)[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishesErrMess={this.props.dishes.errMess}  
        promotion={this.props.Promotions.promotions.filter((promotion)=>promotion.featured)[0]}
        promoLoading={this.props.Promotions.isLoading}
        promoErrMess={this.props.Promotions.errMess}
        leader ={this.props.Leaders.leaders.filter((leader)=>leader.featured)[0]}
        leaderLoading={this.props.Leaders.isLoading}
        leaderErrMess={this.props.Leaders.errMess}
          />
      );
    }

    const DishWithId =({match})=>{
      return(
        <DishDetail dish={this.props.dishes.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId,10))[0]} 
        isLoading={this.props.dishes.isLoading}
        errMess={this.props.dishes.errMess}
        Comments={this.props.Comments.comments.filter((comment)=>comment.dishId=== parseInt(match.params.dishId,10))}
        commentsErrMess={this.props.Comments.errMess}
        postComment={this.props.postComment}
        />
      
        )

    }
  return (
    <div >
      <Header/>
      <TransitionGroup>
      <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
      <Switch location={this.props.location}>
        <Route path="/home" component={HomePage}/>
        <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes}/>}/>
        <Route path ="/menu/:dishId" component={DishWithId}  />
        <Route exact path="/contactus" component={Contact} />
        <Route exact path="/aboutus" component={()=> <About Leaders={this.props.Leaders}/>} />
        <Redirect to="/home"/>
      </Switch>
      </CSSTransition>
      </TransitionGroup>

      
      <Footer/>

    </div>
  );
}
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
