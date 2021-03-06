import React, {Component} from 'react'
import './index.css'

import {Flex, Icon, Button, Toast} from 'antd-mobile'

import {Redirect} from 'react-router-dom'

import {bindActionCreators} from 'redux'

import {connect} from 'react-redux'

import {actions as loginActions} from "../../redux/modules/login/action";

class Login extends  Component{
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
    }
    // 挂载函数
    componentWillMount() {
    }
    render() {
        const {location: {state}, userInfo} = this.props;
        if (userInfo && userInfo.token) {
            if(state && state.from) {
                return <Redirect to={state.from} />
            }
            return <Redirect to="/" />;
        }
            return (
                <div className="login_content">
                    <div className="login_form_content">
                        <Flex className='login_f_li_content'>
                            <div className="login_f_left">
                                <img style={{width: '3rem', height: '3rem'}} src="https://app.dev.9kbs.com/h5/static/img/public/phone.png" alt=""/>
                            </div>
                            <div className="login_f_middle">
                                <input onChange={this.handleInput.bind(this)} name="userName"  type="text" placeholder="请输入您的手机号码/登录名" />
                            </div>
                            <div className="login_f_right">
                                <Icon type="cross-circle" />
                            </div>
                        </Flex>
                        <Flex style={{marginTop: '.5rem'}} className='login_f_li_content'>
                            <div className="login_f_left">
                                <img style={{width: '3rem', height: '3rem'}} src="https://app.dev.9kbs.com/h5/static/img/public/password.png" alt=""/>
                            </div>
                            <div className="login_f_middle">
                                <input onChange={this.handleInput.bind(this)} name="password" type="password" placeholder="请输入您的密码" />
                            </div>
                            <div className="login_f_right">
                                <Icon type="cross-circle" />
                            </div>
                        </Flex>
                        <div className="public_button">
                            <Button type="primary" onClick={this.handleSubmit.bind(this)}>登录</Button>
                        </div>
                        <div className="public_button">
                            <Button type="primary" onClick={this.handleGetUserInfo.bind(this)}>测试获取用户信息</Button>
                        </div>
                    </div>
                </div>
            )
    }
    handleInput = (e) => {
        // console.log(e.target);
        // console.log(e.target.name);
        // console.log(e.target.value);
        switch (e.target.name) {
            case 'userName':
                return this.setState({
                    userName: e.target.value
                });
            case 'password':
                return this.setState({
                    password: e.target.value
                });
        }
    };
    handleSubmit = () => {
      console.log('提交', this.state);
      let form = {
          username: this.state.userName,
          password: this.state.password
      };
      this.props.loginActions.requestLogin(form)
    };
    handleGetUserInfo = () => {
        // console.log(this.props.userInfo);
        console.log(this.props)
    };
    // 组件加载完
    componentDidMount() {

        console.log(this.props)
    }
    // 在组件接收到了新的 props 或者 state 即将进行重新渲染前
    componentWillUpdate() {
    }

    // 在组件接收到了新的 props 或者 state 即将进行重新渲染后
    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    // 组件卸载
    componentWillUnmount() {
    }
}

const mapStateToProps = (state, props) => {
    return {
        userInfo: state.login.res
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginActions: bindActionCreators(loginActions, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Login)
// export default Test
