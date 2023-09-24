'use client';
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from './components/ProductCard';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/authOptions';
import chula from '@/public/images/Chula.jpg';
import { Metadata } from 'next';
// import HeavyComponent from './components/HeavyComponent';
import { useState } from 'react';
// Lazy loading using the dynamic function
import dynamic from 'next/dynamic';
// import _ from 'lodash';

// const HeavyComponent = dynamic(() => import('./components/HeavyComponent'), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

// export default async function Home() {
export default function Home() {
  // const session = await getServerSession(authOptions);
  const [isVisible, setVisible] = useState(false);
  return (
    <main className="relative h-screen">
      {/* <h1>Hello {session && <span>{session.user?.name}</span>}</h1> */}
      <h1>Hello World!!!</h1>
      <button
        onClick={async () => {
          const _ = (await import('lodash')).default;
          const users = [{ name: 'c' }, { name: 'b' }, { name: 'a' }];

          const odered = _.orderBy(users, ['name']);
          console.log(odered);
        }}
      >
        Show
      </button>

      {/* <button onClick={() => setVisible(true)}>Show</button>
      {isVisible && <HeavyComponent />} */}

      <ProductCard />
      <Link href="/users">Users</Link>
      {/* <Image src={chula} alt={'photo'} /> */}
      {/* <Image
        src="https://bit.ly/react-cover"
        // alt={'photo'}
        alt={'photo'}
        // width={'300'}
        // height={'170'}
        fill
        // style={{ objectFit: 'cover' }}
        className="object-cover"
        // sizes="100vw"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
    </main>
  );
}

// export const metadata: Metadata = {
//   title: 'My Website 2', // we can override the properties of metadata of layout.tsx page.
// };

// export async function generateMetadata(): Promise<Metadata> {
//   const product: any = await fetch('');
//   return {
//     title: `${product.title}`,
//     description: '....',
//   };
// }
