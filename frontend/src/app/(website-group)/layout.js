import Header from "@/components/website/global/Header";
import Footer from "@/components/website/global/Footer";
import getMe from "@/services/auth";

export const dynamic = 'force-dynamic';

export default async function WebsiteLayout({ children }) {
  const { user } = await getMe()
  return (
    <>
      <Header user={user} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}