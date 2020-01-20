import React from 'react';
import SiteLayout from '../SiteLayout';
import { Card } from 'antd';

const Project = () => {
    
    const { Meta } = Card;
    
    return (
        <SiteLayout>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://via.placeholder.com/150" />}
              >
                <Meta title="lorem ipsum" description="lorem ipsum dolor sit amet consetetur sadipscing elitr" />
            </Card>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://via.placeholder.com/150" />}
              >
                <Meta title="lorem ipsum" description="lorem ipsum dolor sit amet consetetur sadipscing elitr" />
            </Card>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://via.placeholder.com/150" />}
              >
                <Meta title="lorem ipsum" description="lorem ipsum dolor sit amet consetetur sadipscing elitr" />
            </Card>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://via.placeholder.com/150" />}
              >
                <Meta title="lorem ipsum" description="lorem ipsum dolor sit amet consetetur sadipscing elitr" />
            </Card>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://via.placeholder.com/150" />}
              >
                <Meta title="lorem ipsum" description="lorem ipsum dolor sit amet consetetur sadipscing elitr" />
            </Card>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://via.placeholder.com/150" />}
              >
                <Meta title="lorem ipsum" description="lorem ipsum dolor sit amet consetetur sadipscing elitr" />
            </Card>
        </SiteLayout>
    )
}

export default Project;
