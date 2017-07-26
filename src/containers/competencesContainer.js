import React, {Component} from 'react'
import {connect} from 'react-redux';
import getCompetences from '../actions/getCompetences';
import { CompetencesList } from '../components';

const mapStateToProps = (state) => {

  return {
    interventionList: state.interventionList,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCompetences: () => {dispatch(getCompetences())},
  }
};

class CompetencesListContainer extends Component {

  componentDidMount(){
    this.props.getInterventions();
  }


  render() {
    const { interventionList } = this.props;

      return (
      	<CompetencesList interventionList={interventionList} />
  	);
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CompetencesListContainer);
