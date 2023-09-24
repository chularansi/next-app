import React, { Suspense } from 'react';
import UserTable from './UserTable';
import { Linden_Hill } from 'next/font/google';
import Link from 'next/link';

interface Props {
  searchParams: {
    sortOrder: string;
  };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  // This is a server page that can access query string
  // console.log(sortOrder);
  return (
    <>
      <h1>Users</h1>
      <Link className="btn btn-success" href={'/users/new'}>
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
