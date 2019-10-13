import React, {Component} from "react";
import {Breadcrumb} from "antd";

class BreadMenu extends Component {
    render() {


        return (
            <Breadcrumb>
                <Breadcrumb.Item>{this.props.name} </Breadcrumb.Item>
                <Breadcrumb.Item></Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}

export default BreadMenu;