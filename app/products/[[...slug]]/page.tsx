import React from 'react';

interface Props {
  // propertie's name should be plural -> params. But, param, searchParam are not working
  params: {
    slug: string[];
  };
  searchParams: {
    searchOrder: string;
  };
}

const ProductPage = ({
  params: { slug },
  searchParams: { searchOrder },
}: Props) => {
  return (
    <div>
      ProductPage {slug} {searchOrder}
    </div>
  );
};

export default ProductPage;
