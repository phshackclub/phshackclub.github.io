import React from 'react';
import SiteLayout from '../SiteLayout';
import { Card, Col, Row } from 'antd';

const Project = () => {
    
    const { Meta } = Card;
    
    return (
        <SiteLayout>
            <Row gutter={16}>
                <Col span={6}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://via.placeholder.com/150" />}
                      >
                        <Meta title="lorem ipsum" description="lorem ipsum dolor sit amet consetetur sadipscing elitr" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://via.placeholder.com/150" />}
                      >
                        <Meta title="lorem ipsum" description="lorem ipsum dolor sit amet consetetur sadipscing elitr" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://via.placeholder.com/150" />}
                      >
                        <Meta title="lorem ipsum" description="lorem ipsum dolor sit amet consetetur sadipscing elitr" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://via.placeholder.com/150" />}
                      >
                        <Meta title="lorem ipsum" description="lorem ipsum dolor sit amet consetetur sadipscing elitr" />
                    </Card>
                </Col>
            </Row>
        </SiteLayout>
    )
}

export default Project;
