import React, { Component } from 'react'
import '../App.css'
import '../index.css'
import {fetchWishes } from '../actions/wishes'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import Modal from 'react-modal'
import FontIcon from 'material-ui/FontIcon'
import Expand from 'mui-icons/fontawesome/expand'
import TwitterIcon from 'mui-icons/fontawesome/twitter'
import WindowClose from 'mui-icons/fontawesome/times'
import {Link} from 'react-router-dom'


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}

class WishesList extends Component {

  componentDidMount() {
      const { fetchWishes} = this.props;
      fetchWishes();    
  }
  state = { modalImage : '',
            modalOpen: false,   
  }

  openModal = (imgUrl) => {
    this.setState(() => ({ 
      modalImage: imgUrl    
    }))
    this.setState(() => ({  
      modalOpen: true,    
    }))
  }
  
  closeModal = () => {
    this.setState(() => ({
      modalOpen: false,
      
    }))
    this.setState(() => ({ 
      modalImage: ''    
    }))
  }
  
  renderWishes(wishes) {
    
    return wishes.wishes.map((wish) => {
      const {image_url,tweet_url} = wish
      const TwitterUrl = `https://twitter.com/intent/tweet?text=I%20love%20this:%20${tweet_url}`
      return (
        
        <li  className="o-layout__item u-1/1 u-1/3@tablet u-1/4@desktop wish-drawing-card" key={wish.id}>
          <Paper zDepth={2} className="u-margin-bottom-large">
            <Card >
              
              <CardHeader
                title={wish.text}
                subtitle={`Favourites: ${wish.favorite_count} ,Retweets: ${wish.retweet_count}`}
                style={{paddingRight:'0px'}}
              />
                <div       
                  style={{backgroundImage:`url(${image_url})`}}
                  onClick={()=> {this.openModal(image_url)}}
                  className="o-crop--4by3 c-wish-drawing"
                />
                <CardActions>
                  <div className="u-padding-top-small u-light-grey">
                    <FlatButton   onClick={()=> {this.openModal(image_url)}} >
                      <Expand/>
                    </FlatButton>
                    <FlatButton >
                      <a className="twitter-share-button" href={TwitterUrl}>
                        <TwitterIcon />
                      </a>
                    </FlatButton>
               
                    
                  </div>
                </CardActions>   
              </Card>
            </Paper>
                 
        </li>
      );
    });
  }
  render(){
   
    const { wishes, loading, error } = this.props.wishesList;
    if(loading) {
      return <div className="u-margin-top-small" className="o-layout o-layout--center"> <Subheader>Your wish is my command...</Subheader><div className="u-padding-top-small">  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-dual-ring" ><circle cx="50" cy="50" fill="none" stroke-linecap="round" r="20" stroke-width="4" stroke="#666" stroke-dasharray="22.83185307179586 22.83185307179586" transform="rotate(192.3 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"/></circle></svg> </div></div>      
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    return (
      <div className="o-wrapper">
        <div className="o-layout o-layout--center"  >
          <div className="u-margin-bottom-small"> <Subheader>{wishes.wishes.length} wishes granted so far</Subheader></div>
          <ul className="o-layout">
            {this.renderWishes(wishes)}
          </ul>
        </div>
        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >     
          <div className="c-modal_inner_"  >
            <div className="c-modal__close-button u-padding-left-small"  onClick={()=> {this.closeModal()}}><WindowClose/></div>
            <img  className="c-modal__img"  onClick={()=> {this.closeModal()}} src={this.state.modalImage}  />
          </div>
        </Modal>
      </div>
    );
  }
}
export default WishesList