import React from 'react';
import {Link} from 'react-router-dom';
import {PageHeader, Menu, Icon, Divider} from 'antd';
import BreadMenu from "./BreadMenu";



class Header extends React.Component {
  state = {
    current: 'home',
  };

  handleClick = e => {
    console.log('click ', e);
    console.log('click', e.key);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div>
          <Divider/>
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item  key="appstore">
          <Icon type="appstore" />
          <Link to={'/'} >Dashboard </Link>
        </Menu.Item>
        <Menu.Item key="list">
          <Link to={'/users/list'}>User Lists </Link>
        </Menu.Item>
        <Menu.Item  key="app" disabled>
          <Icon type="appstore" />
         Current Page 
        </Menu.Item>
        <Menu.Item key="create">
          <Link to={'/users/create'}> Create User  
      </Link>
        </Menu.Item>
      </Menu>
      <PageHeader
        onBack={() => null}
        title={'Create User'}
        subTitle="This is a Create User Form"
      />
      <BreadMenu name={'User List'} />
      </div>


    );
  }
}
export default Header;
