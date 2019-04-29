import React from 'react';
import { connect } from 'dva';
import  hc from './Help.css';
import './../../../node_modules/bootstrap/dist/css/bootstrap.css';

//引入模块
import Header from './../../components/Header/Header';

class Help extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
              <Header/>
                <div className={hc.lun}></div>
            </div>
        )
}
}
export default connect()(Help);

// import React from 'react';
// import { connect } from 'dva';
// import  hc from './Help.css';
// import './../../../node_modules/bootstrap/dist/css/bootstrap.css';

// //引入模块
// import Header from './../../components/Header/Header';

// class Help extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
            
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <Header/>
//                 <div className={hc.lun}></div>
//             </div>
//         )
// }
// }
// export default connect()(Help);