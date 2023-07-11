import { Admin } from "@/components";
const isAuth = true;
const role = "Admin";
export default async function Cabinet() {
  return (
    <div>
      <h2>Session of Admin</h2>
      {isAuth && role === "Admin" && <Admin />}
      {isAuth && role === "User" && <User />}
    </div>
  );
}
