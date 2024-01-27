export default function Invoice({ onHandleCloseInvoice, customer }) {
  return (
    <div className="invoice-receipt">
      <div className="title">
        <h4 className="text-green">Invoice</h4>
        <p style={{ cursor: "pointer" }} onClick={onHandleCloseInvoice}>
          &#10006;
        </p>
      </div>
      <img src={customer.itemUrl} alt="item" />

      <ul>
        <li>
          <div>
            <h5>Date</h5>
            <p>Feb 10, 2024</p>
          </div>
          <div>
            <h5>Customer Name</h5>
            <p>{customer.userName}</p>
          </div>
          <div>
            <h5>Delivery Type</h5>
            <p>{customer.deliveryType}</p>
          </div>
          <div className="item-description">
            <div className="flex">
              <h5>Item description</h5>
              <h6>Qty</h6>
            </div>
            <div className="flex">
              <p>
                {customer.item} <span>{customer.totalExpense}</span>
              </p>
              <p>{customer.quantity}</p>
            </div>
          </div>
        </li>

        <h4 className="total">Total: {customer.totalExpense}</h4>
      </ul>
    </div>
  );
}
