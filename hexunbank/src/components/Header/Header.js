import React from 'react';
import { connect } from 'dva';
import hc from './Header.css';
import {Link} from "dva/router";
import './base.css';
// import './icon.css'
import './../../../node_modules/bootstrap/dist/css/bootstrap.css';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
  
    // runTo = () =>{
    //     console.log(this);
    //     // history.push('/news')
	// 	this.props.history.push("/news")
	// }
    render() {
        return (
            <div>
                <div className={hc.header}>
                    <div className={hc.con}>
                        <div className={hc.headerContainl}>
                            <a>
                                <img src="http://dushu.fandengds.com/static/images/logo.png" />
                            </a>
                        </div>
                        <div className={hc.headerContainR}>
                            <ul className=" clearfix">
                                <li><Link to="/">首页</Link> </li>
                                <li className={hc.allBooks} onClick={this.runTo}>
                                    <Link to="allbooks">全部书籍</Link> 
                                        {/* <a>全部书籍</a> */}
                                    <i className="iconfont icon-down"></i>
                                    <dl>
                                        <dd><a href="javascript:;" title="心灵">心灵</a></dd>

                                        <dd><a href="javascript:;" title="管理">管理</a></dd>

                                        <dd><a href="javascript:;" title="职场">职场</a></dd>

                                        <dd><a href="javascript:;" title="家庭">家庭</a></dd>

                                        <dd><a href="javascript:;" title="人文">人文</a></dd>

                                        <dd><a href="javascript:;" title="创业">创业</a></dd>

                                        <dd><a href="javascript:;" title="生活">生活</a></dd>

                                        <dd><a href="javascript:;" title="作者光临">作者光临</a></dd>

                                    </dl>
                                </li><li><Link to="readcard">读书卡</Link></li>
                                <li className={hc.bookStore}>
                                <Link to="news">招商加盟<i className="iconfont icon-down"></i></Link>
                                    <dl>
                                        <dd><a href="javascript:;" title="樊登读书">樊登读书</a></dd>
                                        <dd><a href="javascript:;" title="樊登书店">樊登书店</a></dd>
                                    </dl>
                                </li>
                                <li><Link to="help">帮助中心</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
                {/* 轮播图 */}
                {/* <div className={hc.bannner}>
                    
                </div> */}
            </div>
        )
    }
}
export default connect()(Header);