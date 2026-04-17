export default function ItemCard(props) {
 return (
  <div
   style={{
    border: "1px solid #bdc3c7",
    padding: "20px",
    margin: "10px",
    borderRadius: "8px",
    backgroundColor: "#ecf0f1",
    width: "200px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
   }}
  >
   <h3 style={{ margin: "0 0 10px 0", color: "#2980b9" }}>{props.name}</h3>
   <p style={{ margin: 0, color: "#7f8c8d", fontWeight: "bold" }}>
    {props.role}
   </p>
  </div>
 );
}
