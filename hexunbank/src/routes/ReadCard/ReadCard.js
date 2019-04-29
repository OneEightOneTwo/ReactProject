import React from 'react';
import { connect } from 'dva';
import hc from './ReadCard.css';
import './../../../node_modules/bootstrap/dist/css/bootstrap.css';

//引入模块
import Header from './../../components/Header/Header';

class ReadCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
  
    render() {
        return (
            <div>
                <Header/>  
                <div class={hc.lunbotu}></div>
            </div>
        )
    }
}
export default connect()(ReadCard);