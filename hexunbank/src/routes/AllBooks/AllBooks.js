import React from 'react';
import { connect } from 'dva';
import hc from './AllBooks.css';
import './../../../node_modules/bootstrap/dist/css/bootstrap.css';

//引入模块
import Header from './../../components/Header/Header';

class AllBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
  
    render() {
        return (
            <div>
                <Header/>
                <div className={hc.lunbotu}></div>
            </div>
        )
    }
}
export default connect()(AllBooks);