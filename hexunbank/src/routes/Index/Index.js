import React from 'react';
import { connect } from 'dva';
// import './Index.css';
import './../../../node_modules/bootstrap/dist/css/bootstrap.css';

//引入模块
import Header from './../../components/Header/Header';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Header/>
            </div>
        )
}
}
export default connect()(Index);