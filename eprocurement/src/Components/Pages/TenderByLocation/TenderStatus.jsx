import { useState } from "react";
import { Form, Select, Button } from "antd";
import { fetchTendersByStatus } from "../../../Authentication"; // Adjust according to your file structure
import "./Tender.css"
const { Option } = Select;

const TenderByStatus = () => {

  const handleHomeClick = () => {
    window.location.href = '/';
  };
  const [tenders, setTenders] = useState([]);
  const [status, setStatus] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleStatusChange = (value) => {
    setStatus(value);
  };

  const onFinish = async (values) => {
    const { status } = values;
    setStatus(status);
    const data = await fetchTendersByStatus(status);
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
        <h1>Tender Search by Status</h1>
        <br />
        <p className="ptext">
          Please select a status from the dropdown to search for tenders.
        </p>
        <br />
        <Form.Item
          label="Tender Status"
          name="status"
          rules={[{ required: true, message: "Please select a status" }]}
        >
          <Select placeholder="Select a status" onChange={handleStatusChange}>
            <Option value="To Be Opened">To Be Opened</Option>
            <Option value="Technical Bid Opening">Technical Bid Opening</Option>
            <Option value="Technical Evaluation">Technical Evaluation</Option>
            <Option value="Financial Bid Opening">Financial Bid Opening</Option>
            <Option value="Financial Evaluation">Financial Evaluation</Option>
            <Option value="AOC">AOC</Option>
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
          <h2>Tenders with Status: {status}</h2>
          <div className="tender-results">
            <ul>
              {tenders.length > 0 ? (
                tenders.map((tender) => (
                  <p key={tender._id}>
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
                    <br /><br/>
                    <hr /><br/>
                  </p>
                ))
              ) : (
                <p>No tenders found.</p>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default TenderByStatus;