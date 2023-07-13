import { Admin, User } from "@/components";
const isAuth = true;
const role = "User";
export default function Cabinet() {
  return (
    <section>
      <h2>Session of {role}</h2>
      {isAuth && role === "Admin" && <Admin />}
      {isAuth && role === "User" && <User />}
    </section>
  );
}
