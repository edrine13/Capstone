import React from 'react';
import Terms from '../components/terms/Terms';
import ScrollToTop from '../helper/ScrollToTop';

const TermsPage = () => {
  return (
    <React.Fragment>
      <Terms />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default TermsPage;
