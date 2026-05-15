
import Profilepage from "@/components/website/profile/Profilepage";
import getMe from "@/services/auth";


export const dynamic = 'force-dynamic';

export default async function ProfilePage() {
    const { user } = await getMe()
    return (
        <Profilepage user={user} />
    );
}