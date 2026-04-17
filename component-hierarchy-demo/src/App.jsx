import Header from "./components/Header";
import ItemCard from "./components/ItemCard";

function App() {
 const teamData = [
  { id: 1, name: "Amanda", role: "Fullstack Developer" },
  { id: 2, name: "Syifa", role: "Backend Engineer" },
  { id: 3, name: "Neteyam", role: "UI/UX Designer" },
 ];

 return (
  <div style={{ fontFamily: "Segoe UI, Tahoma, sans-serif" }}>
   <Header title="Tim Project Fullstack Web Developer MERN 2026" />

   <div
    style={{
     display: "flex",
     justifyContent: "center",
     flexWrap: "wrap",
     padding: "40px",
    }}
   >
    {teamData.map((member) => (
     <ItemCard key={member.id} name={member.name} role={member.role} />
    ))}
   </div>
  </div>
 );
}

export default App;
