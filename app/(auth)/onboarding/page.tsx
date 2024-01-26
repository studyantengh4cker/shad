import { currentUser } from "@clerk/nextjs";
import AccountSetup from "../__components/account-setup";
import { fetchUser } from "@/lib/actions/user.action";

export default async function OnboardingPage() {
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings

  const userInfo = await fetchUser(user.id);
  if (userInfo) return null;

  return (
    <main className="h-screen p-10">
      <p>Hello, {user.firstName}!</p>
      <h1 className="text-3xl font-bold mb-10">
        Let's finish setting up your account.
      </h1>
      <AccountSetup id={user.id} name={user.firstName} />
    </main>
  );
}
