
import Checkout from '@/components/website/checkout/Checkoutcomp'
import getMe from '@/services/auth'



export default async function page() {
  const { user } = await getMe()

  return (
    <Checkout user={user} />
  )
}
