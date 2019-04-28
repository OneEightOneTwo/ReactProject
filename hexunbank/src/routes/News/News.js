import React from 'react';
import { connect } from 'dva';
import  './News.css';

function News() {
  return (
      <div>新闻页</div>
  );
}

News.propTypes = {
};

export default connect()(News);
