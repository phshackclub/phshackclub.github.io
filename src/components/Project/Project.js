import React from 'react';
import SiteLayout from '../SiteLayout';
import { Card } from 'antd';

const Project = () => {
    
    const gridStyle = {
      width: '25%',
      textAlign: 'center',
    };
    
    return (
        <SiteLayout>
            <h1>Project</h1>
            <br />
            <Card title="Card Title">
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
            </Card>
        </SiteLayout>
    )
}

export default Project;
