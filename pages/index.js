import { Login } from "../views/auth/Login/Login";
import { Register } from "../views/auth/Register/Register";


export default function Home() {
  return (
    <div className="home">
      <h1>HOME NEXT desde rama martin</h1>
      <Login />
      <Register />
    </div>
  );
}
