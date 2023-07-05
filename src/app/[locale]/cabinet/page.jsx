import { getServerSession } from "next-auth/next";
import { authConfig } from "@/configs";
import Image from "next/image";

export default async function Cabinet() {
  const session = await getServerSession(authConfig);
  return (
    <div>
      <h2>Session of {session?.user?.name}</h2>
      {session?.user?.image && (
        <Image
          src={session.user.image}
          width={50}
          height={50}
          alt="User LOGO"
        />
      )}
    </div>
  );
}
