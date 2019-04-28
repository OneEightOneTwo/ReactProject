import React from 'react';
import { connect } from 'dva';
import  './Index.css';
import './../../../node_modules/bootstrap/dist/css/bootstrap.css';


function Index() {
  return (
      <div>主页
          <div>
          <span className="label label-default">Default</span>
          <span className="label label-primary">Primary</span>
          <span className="label label-success">Success</span>
          <span className="label label-info">Info</span>
          <span className="label label-warning">Warning</span>
          <span className="label label-danger">Danger</span>

          </div> 

      </div>
  );
}

Index.propTypes = {
};

export default connect()(Index);
