'use client';
import React from 'react';

interface Props {
  error: Error;
  // we can use reset function, when it arise temporaly issues
  reset: () => void; // This should apply when it necessary. Otherwise the user retry it unnecessaraly
}
// NextJs automatically pass error object to this file.
// we can use Sentry loging tool to log these details to view it
const ErrorPage = ({ error, reset }: Props) => {
  console.log('Error', error);
  return (
    <>
      <div>An unexpected error has occurred.</div>
      <button className="btn" onClick={() => reset()}>
        Reset
      </button>
    </>
  );
};

export default ErrorPage;
