import React, {useContext} from 'react';
import {Button, Col, Flex, Form, Input, Layout, Row} from "antd";
import {Typography} from 'antd';
import {observer} from "mobx-react-lite";
import {StoreContext} from "../../store";
import {useNavigate} from "react-router-dom";

const {Title, Text} = Typography;
const {Content} = Layout;

type FieldType = {
  email: string
  password: string,
  confirm: string
}

const RegistrationForm = observer(() => {
  const {userStore} = useContext(StoreContext);
  const navigate = useNavigate();


  const onFinish = (values: FieldType) => {
    userStore.register(values.email, values.password, values.confirm);
  };

  const onClickNavigate = () => {
    navigate('/auth');
  }

  return (
    <Content style={{marginTop: '100px'}}>
      <Row justify={'center'} style={{textAlign: "center"}}>
        <Col xxl={{span: 8, offset: 0}}
             xl={{span: 10, offset: 0}}
             lg={{span: 12, offset: 0}}
             md={{span: 16, offset: 0}}
             sm={{span: 24, offset: 0}}>
          <Title level={2} style={{textAlign: 'center', marginBottom: '30px'}}>Sign Up</Title>
          <Form
            name="registerForm"
            initialValues={{remember: true}}
            onFinish={onFinish}
            wrapperCol={{offset: 2, span: 14}}
            labelCol={{span: 8}}
          >
            <Form.Item<FieldType>
              label="Email"
              name="email"
              rules={[{required: true, message: 'Invalid email!', type: 'email'}]}
            >
              <Input/>
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[{required: true, message: 'Invalid password!', min: 4}]}
            >
              <Input.Password/>
            </Form.Item>
            <Form.Item<FieldType>
              label="Confirm Password"
              name="confirm"
              rules={[{required: true, message: 'Invalid password!', min: 4}]}
            >
              <Input.Password/>
            </Form.Item>
            <Flex align={'center'} vertical>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
              <Text type="secondary"
                    style={{display: "block", textAlign: "center"}}>
                Already have an account?
              </Text>
              <Button type="link"
                      onClick={onClickNavigate}>
                Sign In
              </Button>
            </Flex>
          </Form>
        </Col>
      </Row>
    </Content>
  );
});


export default RegistrationForm;