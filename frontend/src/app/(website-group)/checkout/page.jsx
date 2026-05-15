
import Checkout from '@/components/website/checkout/Checkoutcomp'
import getMe from '@/services/auth'



export const dynamic = 'force-dynamic';

export default async function page() {
  const { user } = await getMe()

  return (
    <Checkout user={user} />
  )
}
