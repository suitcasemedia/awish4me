import { connect } from 'react-redux'
import { fetchWishes, fetchWishesSuccess, fetchWishesFailure } from '../actions/wishes';
import WishesList from '../components/WishesList';


const mapStateToProps = (state) => {

  return { 
    
    wishesList: state.wishes.wishesList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWishes: () => {
      dispatch(fetchWishes()).then((response) => {
        
            !response.error ? dispatch(fetchWishesSuccess(response)) : dispatch(fetchWishesFailure(response.error));
          });
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(WishesList);