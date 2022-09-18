import { useEffect } from 'react'
import { useRouter } from 'next/router'

function Page() {
  const router = useRouter()

  useEffect(() => {
    router.push('/stack/front-end', undefined, { shallow: true })
  }, [])

  return null
}

export default Page
