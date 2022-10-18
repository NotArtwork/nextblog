import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Loader from '../components/Loader'

import toast from 'react-hot-toast'

const Home = () => {
  return (
    <div>
    <div className={styles.container}>
      <Loader show />
      <Link prefetch={true} href={{
      // href="/someguy22"
      pathname: '/[username]',
      query: { username: 'someguy22' }
      }}>
        <a>This Dude's Profile</a>
        </Link>
 </div>
        <button onClick={() => toast.success('hello toast')}> Please No! </button>
    </div>
  )
}

export default Home