export default function Header(props) {
 return (
  <header
   style={{
    backgroundColor: "#2c3e50",
    color: "white",
    padding: "20px",
    textAlign: "center",
   }}
  >
   <h1>{props.title}</h1>
  </header>
 );
}
