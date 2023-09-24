'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const NewUserPage = () => {
  const router = useRouter();

  return (
    <>
      <h1>New User Page</h1>
      <button className="btn btn-info" onClick={() => router.push('/users')}>
        Create
      </button>
    </>
  );
};

export default NewUserPage;
