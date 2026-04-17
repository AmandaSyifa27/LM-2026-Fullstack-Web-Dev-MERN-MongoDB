import Welcome from "./Welcome";
import UserCard from "./UserCard";

function App() {
 return (
  <div>
   <Welcome />

   <hr />

   <h3>Daftar Pengguna:</h3>
   <UserCard name="Amanda" email="amanda@gmail.com" />
   <UserCard name="Syifa" email="syifa@gmail.com" />
  </div>
 );
}

export default App;
