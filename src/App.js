import { Button, Form, Input, Typography, message } from "antd";
import './App.css';

function App() {
  const login = ()=>{
    message.success("Login Succesfull");
  };
  return (
    <div className="loginbg">
      <Form className="loginForm" onFinish={login}>
      <Typography.Title style={{color:"blue"}}>Welcome!</Typography.Title>
        <Form.Item rules={[{
            required: true,
            type: "email",
            message: "Please enter valid email",
          },
        ]} 
        label='Email' name={'myEmail'}>
          <Input placeholder='Enter your email'/>
        </Form.Item>
        <Form.Item rules={[{
            required: true,
            message: "Please enter correct password",
          },
        ]}  label='Password' name={'myPassword'}>
          <Input.Password placeholder='Enter your password'/>
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default App;
