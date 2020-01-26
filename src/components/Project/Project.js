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
            <Card title="Projects">
                <Card.Grid style={gridStyle}>lorem ipsum dolor sit amet consectetuer adipiscing elit</Card.Grid>
                <Card.Grid style={gridStyle}>lorem ipsum dolor sit amet consectetuer adipiscing elit</Card.Grid>
                <Card.Grid style={gridStyle}>lorem ipsum dolor sit amet consectetuer adipiscing elit</Card.Grid>
                <Card.Grid style={gridStyle}>lorem ipsum dolor sit amet consectetuer adipiscing elit</Card.Grid>
                <Card.Grid style={gridStyle}>lorem ipsum dolor sit amet consectetuer adipiscing elit</Card.Grid>
                <Card.Grid style={gridStyle}>lorem ipsum dolor sit amet consectetuer adipiscing elit</Card.Grid>
            </Card>
        </SiteLayout>
    )
}

export default Project;
