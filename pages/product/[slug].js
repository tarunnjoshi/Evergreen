import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { slug } = router.query

  return <p>Here is the slug: {slug}</p>
}

export default Post