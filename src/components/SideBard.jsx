import React from 'react';
import "../css/sideBar.css";
import { HomeOutlined, AppstoreOutlined, AppstoreAddOutlined, DashboardOutlined } from '@ant-design/icons';

const SideBard = () => {
    return (
        <>
            <div className="side-bar">
                <h4>AmazonTrucho</h4>
                <div className="elements-side-bar">
                    <a href="/"><HomeOutlined /> Home</a>
                    <a href="/"><AppstoreOutlined /> Products</a>
                    <a href="/"><AppstoreAddOutlined /> My Productos</a>
                    <a href="/"><DashboardOutlined /> Dashboard</a>
                </div>
            </div>
        </>
    )
}

export default SideBard
