import { Button, Card, message } from "antd";

const Cards = ({ latestTender }) => {
    const handleApprove = () => {
       
        message.success("Tender approved successfully.");
      };
    
      const handleSendForModification = () => {
       
        message.info("Tender sent for modification.");
      };
  return (
    <div>
      <Card className="tender-card" >
        <p><strong>Name:</strong> {latestTender.name}</p>
        <p><strong>Location:</strong> {latestTender.location}</p>
        <p><strong>Organization:</strong> {latestTender.organisation}</p>
        <p><strong>Classification:</strong> {latestTender.classification}</p>
        <p><strong>Status:</strong> {latestTender.status}</p>
        <p><strong>Category:</strong> {latestTender.category}</p>
        <p><strong>Product Category:</strong> {latestTender.productCategory}</p>
        <p><strong>Cancelled or Re-rendered:</strong> {latestTender.cancelled ? "Cancelled" : "Re-rendered"}</p>

        <div className="approval-buttons">
          <Button className="approve-button" type="success"
          style={{marginBottom:'15px'}} onClick={handleApprove}>
            Approve
          </Button>
          <Button className="modification-button" type="danger" onClick={handleSendForModification}>
            Send for Modification
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Cards;