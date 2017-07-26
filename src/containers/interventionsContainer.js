import React, {Component} from 'react'
import {connect} from 'react-redux';
import getInterventions from '../actions/getInterventions';
import { InterventionsList } from '../components';

const mapStateToProps = (state) => {

  return {
    interventionList: state.interventionList,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInterventions: () => {dispatch(getInterventions())},
  }
};

class InterventionsListContainer extends Component {

  componentDidMount(){
    this.props.getInterventions();
  }


  render() {
    const { interventionList } = this.props;

      return (
      	<InterventionsList interventionList={interventionList} />
  	);
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(InterventionsListContainer);
