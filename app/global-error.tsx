'use client';
import React from 'react';

// The generic error page (error.tsx) can't handle Global errors.
// Specially, there are some functionality inside Layout.tsx file
// Therefore, we need global-error file to handle this.
const GlobalErrorPage = () => {
  return <div>Global Error Page</div>;
};

export default GlobalErrorPage;
