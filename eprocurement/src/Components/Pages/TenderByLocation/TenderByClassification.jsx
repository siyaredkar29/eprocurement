import { useState } from "react";
import { Form, Button, Select } from "antd";
import { fetchTendersByClassification } from "../../../Authentication"; // Replace with your actual fetch function
import "./Tender.css"

const { Option } = Select;

const TenderByClassification = () => {
  const handleHomeClick = () => {
    window.location.href = '/';
  };
  const [tenders, setTenders] = useState([]);
  const [classification, setClassification] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onFinish = async (values) => {
    const { classification } = values;
    setClassification(classification);
    const data = await fetchTendersByClassification(classification); // Replace with your actual fetch function
    setTenders(data);
    setSubmitted(true);
  };

  return (
    <div className="backimg">
      <button className="homebutton" onClick={handleHomeClick}>BACK</button>
      <Form
        name="tender_search"
        layout="vertical"
        className="tender-search-form"
        onFinish={onFinish}
      >
        <h1>Tender Search by Classification</h1>
        <br />
        <p className="ptext">
          Please select a classification, the search will give a list of tenders
          and related information based on the selected classification.
        </p>
        <br />
        <Form.Item
          label="Tender Search By Classification"
          name="classification"
          rules={[
            { required: true, message: "Please select a classification" },
          ]}
        >
          <Select placeholder="Please select a classification">
            <Option value="Environmental">Environmental</Option>
            <Option value="Infrastructure">Infrastructure</Option>
            <Option value="Healthcare">Healthcare</Option>
            <Option value="Technology">Technology</Option>
            <Option value="Research">Research</Option>
            <Option value="Supply">Supply</Option>
            <Option value="Energy">Energy</Option>
            <Option value="Culture">Culture</Option>
            <Option value="Office Supplies">Office Supplies</Option>
            <Option value="Education">Education</Option>
          </Select>
        </Form.Item>

        <Form.Item className="form-buttons">
          <Button className="submitt" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      {submitted && (
        <div className="tender-results-container">
          <h2>Tenders: {classification}</h2>
          <div className="tender-results">
            <ul>
              {tenders.length > 0 ? (
                tenders.map((tender) => (
                  <ul key={tender._id}>
                    <strong>Name:</strong> {tender.name}
                    <br />
                    <strong>Location:</strong> {tender.location}
                    <br />
                    <strong>Organization:</strong> {tender.organisation}
                    <br />
                    <strong>Classification:</strong> {tender.classification}
                    <br />
                    <strong>Status:</strong> {tender.status}
                    <br />
                    <strong>Category:</strong> {tender.category}
                    <br />
                    <strong>Product Category:</strong> {tender.productCategory}
                    <br />
                    <strong>Expire:</strong> {tender.expire}
                    <br />
                    <strong>Cancelled or Re-rendered:</strong>{" "}
                    {tender.cancelled ? "Cancelled" : "Re-rendered"}
                    <br /><br></br>
                    <hr /><br></br>
                  </ul>
                ))
              ) : (
                <li>No tenders found.</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default TenderByClassification;