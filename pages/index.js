import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Loader from '../components/Loader'

export default function Home() {
  return (
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
  )
}
