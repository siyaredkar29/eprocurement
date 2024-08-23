import { useState } from "react";
import { Form, Input, Button, Row, Col, DatePicker, Select, Radio, message } from "antd";
import axios from "axios";
import "./Downloads.css";

const { Option } = Select;

const TenderForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const onFinish = async (values) => {
    try {
      const token = localStorage.getItem("token"); // Or wherever your token is stored
      const res = await axios.post(
        "http://localhost:9000/tenders/create",
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSubmitted(true);
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="backimg">
      <Form
        name="tender_form"
        layout="vertical"
        className="tender-search-form"
        onFinish={onFinish}
      >
        <h1>Submit Tender Information</h1>
        <br />
        <p className="ptext">Please fill in the details of the tender.</p>
        <br />
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              label="Tender ID"
              name="tenderId"
              rules={[{ required: true, message: "Please enter Tender ID" }]}
            >
              <Input placeholder="Please enter Tender ID" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter name" }]}
            >
              <Input placeholder="Please enter name" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              label="Location"
              name="location"
              rules={[{ required: true, message: "Please enter location" }]}
            >
              <Input placeholder="Please enter location" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Organisation"
              name="organisation"
              rules={[{ required: true, message: "Please enter organisation" }]}
            >
              <Input placeholder="Please enter organisation" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              label="Category"
              name="category"
              rules={[{ required: true, message: "Please select category" }]}
            >
              <Select placeholder="Please select category">
                <Option value="service">Service</Option>
                <Option value="goods">Goods</Option>
                <Option value="works">Works</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Product Category"
              name="productCategory"
              rules={[
                { required: true, message: "Please select product category" },
              ]}
            >
              <Select placeholder="Please select product category">
                <Option value="environmental">Environmental</Option>
                <Option value="medical">Medical</Option>
                <Option value="civil">Civil</Option>
                <Option value="IT">IT</Option>
                <Option value="food">Food</Option>
                <Option value="electrical">Electrical</Option>
                <Option value="marine">Marine</Option>
                <Option value="chemical">Chemical</Option>
                <Option value="furniture">Furniture</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          
          <Col span={12}>
            <Form.Item
              label="Classification"
              name="classification"
              rules={[
                { required: true, message: "Please enter classification" },
              ]}
            >
              <Input placeholder="Please enter classification" />
            </Form.Item>
          </Col>
        
          <Col span={12}>
            <Form.Item
              label="Status"
              name="status"
              rules={[{ required: true, message: "Please select status" }]}
            >
              <Select placeholder="Please select status">
                <Option value="To Be Opened Tenders">
                  To Be Opened Tenders
                </Option>
                <Option value="Technical Evaluation">
                  Technical Evaluation
                </Option>
                <Option value="Technical Bid Opening">
                  Technical Bid Opening
                </Option>
                <Option value="Financial Evaluation">
                  Financial Evaluation
                </Option>
                <Option value="Financial Bid Opening">
                  Financial Bid Opening
                </Option>
                <Option value="AOC">AOC</Option>
              </Select>
            </Form.Item>
          </Col>
          </Row>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              label="Cancelled"
              name="cancelled"
              rules={[
                { required: true, message: "Please select if cancelled" },
              ]}
            >
              <Radio.Group>
                <Radio value={true}>Yes</Radio>
                <Radio value={false}>No</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Re-tendered"
              name="rerendered"
              rules={[
                { required: true, message: "Please select if re-rendered" },
              ]}
            >
              <Radio.Group>
                <Radio value={true}>Yes</Radio>
                <Radio value={false}>No</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item className="form-buttons">
          <Button className="submitt" type="primary" htmlType="submit">
            Create Tender
          </Button>
        </Form.Item>
      </Form>

      {submitted && (
  message.success("Submitted Successfully", 3) &&
  setTimeout(() => {
    window.location.reload();
  }, 3000) // Delay the reload for 3 seconds
)}

    </div>
  );
};

export default TenderForm;