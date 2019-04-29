import React from 'react';
import { connect } from 'dva';
import hc from './Header.css';
import './base.css';
// import './icon.css'
import './../../../node_modules/bootstrap/dist/css/bootstrap.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className={hc.header}>
                    <div className={hc.con}>
                        <div class={hc.headerContainl}>
                            <a>
                                <img src="http://dushu.fandengds.com/static/images/logo.png" />
                            </a>
                        </div>
                        <div class={hc.headerContainR}>
                            <ul className=" clearfix">
                                <li><a href="/">首页</a></li>
                                <li>
                                    <a href="javascript:;" title="全部书籍">全部书籍
                                    <i className="iconfont icon-down"></i>
                                    </a>
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
                                </li><li><a href="/dsk.html">读书卡</a></li>
                                <li>
                                    <a href="javascript:;" title="招商加盟">招商加盟<i className="iconfont icon-down"></i></a>
                                    <dl>
                                        <dd><a href="/daili.html" title="樊登读书">樊登读书</a></dd>
                                        <dd><a href="/zhaoshan.html" title="樊登书店">樊登书店</a></dd>
                                    </dl>
                                </li>
                                <li><a href="/help.html">帮助中心</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default connect()(Header);