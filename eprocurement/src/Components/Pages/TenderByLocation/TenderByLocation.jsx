import { useState } from "react";
import { Form, Input, Button } from "antd";
import { fetchTendersByLocation } from "../../../Authentication";
import "./Tender.css";

const TenderByLocation = () => {
  const handleHomeClick = () => {
    window.location.href = '/';
  };
  const [tenders, setTenders] = useState([]);
  const [location, setLocation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onFinish = async (values) => {
    const { location } = values;
    setLocation(location);
    const data = await fetchTendersByLocation(location);
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
        <h1>Tender Search by Location</h1><br></br>
        <p className="ptext">
          Please type in the location, the search will return a list of tenders
          and related information based on the location entered.
        </p><br></br>
        
        <Form.Item
          label="Tender Search By Location"
          name="location"
          rules={[
            { required: true, message: "Please enter the city or location" },
          ]}
        >
          <Input placeholder="Please enter the city or location" />
        </Form.Item>

        <Form.Item className="form-buttons">
          <Button className="submitt" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      {submitted && (
        
          <div className="tender-results-container">
          <h2 className="tendershead">Tenders in {location}</h2>
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
                    <hr />
                    <br></br>
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

export default TenderByLocation;
