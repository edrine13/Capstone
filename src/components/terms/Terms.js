import InfoValidation from './InfoValidation';
import LoanAppProcess from './LoanAppProcess';
import LoanTerms from './LoanTerms';
import TermsHead from './TermsHead';
import TermsOfService from './TermsOfService';
import LoanAppApproval from './LoanAppApproval';
import LoanAppRejection from './LoanAppRejection';
import Disbursement from './Disbursement';
import Repayments from './Repayments';
import PayrollDeduction from './PayrollDeduction';
import Default from './Default';

const Terms = () => {
  return (
    <section className="container my-5">
      <TermsHead />
      <TermsOfService />
      <LoanTerms />
      <InfoValidation />
      <LoanAppProcess />
      <LoanAppApproval />
      <LoanAppRejection />
      <Disbursement />
      <Repayments />
      <PayrollDeduction />
      <Default />
    </section>
  );
};

export default Terms;
