export default function Orders({
  onHandleShowInvoice,
  userData,
  platformsData,
}) {
  console.log(userData);
  return (
    <>
      <div className="transaction-history">
        <div className="title">
          <h4>Last Orders</h4>
          <p className="text-green">See All</p>
        </div>
        <table>
          <tr className="description-list">
            <th className="text-light">Name</th>
            <th className="text-light">Date</th>
            <th className="text-light">Amount</th>
            <th className="text-light">Status</th>
            <th className="text-light">Invoice</th>
          </tr>
          {userData.map((user) => (
            <TransactionList
              key={user.userName}
              user={user}
              onHandleShowInvoice={onHandleShowInvoice}
            />
          ))}
        </table>
      </div>
      <section className="platform-section">
        <div className="platforms">
          <Platforms platformsData={platformsData} />
        </div>
      </section>
    </>
  );
}

function TransactionList({ user, onHandleShowInvoice }) {
  return (
    <tr className="transaction-list">
      <td className="user-avi">
        <div>
          <img src={user.aviUrl} alt={user.aviUrl} />
        </div>
        <p className="order-deets">{user.userName}</p>
      </td>
      <td className="text-light">
        <p className="order-deets">Nov 23, 2024</p>
      </td>
      <td>
        <p className="order-deets">{user.amount}</p>
      </td>
      <td className={`${user.status === "Paid" ? "text-green" : "text-red"}`}>
        <p className="order-deets">{user.status}</p>
      </td>
      <td>
        <div
          style={{ cursor: "pointer" }}
          className="invoice"
          onClick={() => onHandleShowInvoice(user)}
        >
          <div>
            <img src="invoice.png" alt={user.aviUrl} />
          </div>
          <p className="view">View</p>
        </div>
      </td>
    </tr>
  );
}

function Platforms({ platformsData }) {
  return (
    <div>
      <div className="title">
        <h4>Top Platform</h4>
        <p className="text-green">See All</p>
      </div>
      <ul>
        {platformsData.map((data) => (
          <PlatformList data={data} key={data.title} />
        ))}
      </ul>
    </div>
  );
}

function PlatformList({ data }) {
  return (
    <li>
      <h5>{data.title}</h5>
      <div className="progressbar">
        <div
          style={{ width: data.level }}
          className={`progress-level ${data.color}`}
        ></div>
      </div>
      <div className="rate">
        <p className="text-light">{data.price}</p>
        <p className="text-light">{data.rate}</p>
      </div>
    </li>
  );
}
