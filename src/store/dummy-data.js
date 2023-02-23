import loanProductImage1 from '../images/loan_Products/img1.jpg';
import loanProductImage2 from '../images/loan_Products/img2.jpg';
import loanProductImage3 from '../images/loan_Products/img3.jpg';
import loanProductImage4 from '../images/loan_Products/img4.jpg';
import loanProductImage5 from '../images/loan_Products/img5.jpg';
import loanProductImage6 from '../images/loan_Products/img6.jpg';
import style from './AboutUs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export const DummyData = [
  {
    id: 1,
    icon: (
      <FontAwesomeIcon
        icon={faThumbsUp}
        className={style['svg-logo']}
        size="3x"
      />
    ),
    title: 'Easy and Convenient',
    description:
      'Too busy? Apply anytime, anywhere. Link Coop is fast and online. You can apply for a loan using your mobile phone or desktop.',
  },
  {
    id: 2,
    icon: (
      <FontAwesomeIcon
        icon={faHandHoldingDollar}
        className={style['svg-logo']}
        size="3x"
      />
    ),
    title: 'Flexible Payment Options',
    description:
      'Too busy? Apply anytime, anywhere. Link Coop is fast and online. You can apply for a loan using your mobile phone or desktop.',
  },
  {
    id: 3,
    icon: (
      <FontAwesomeIcon
        icon={faCircleCheck}
        className={style['svg-logo']}
        size="3x"
      />
    ),
    title: 'Safe and Secure',
    description:
      'Your information is safe with us. We take information confidentiality seriously. ',
  },
];

export const DummyLoanProducts = [
  {
    id: 1,
    title: 'Short Term Loan',
    text: 'Short term loans through Link Coop is a great option for small businesses or for personal use.',
    image: loanProductImage1,
  },
  {
    id: 2,
    title: 'Long Term Loan',
    text: 'Link Coop low-cost long term loan program that provides more flexibility in terms of payments and structure.',
    image: loanProductImage2,
  },
  {
    id: 3,
    title: 'Educational Loan',
    text: 'Link Coop understands the challenges posed by the pandemic to jobs and businesses. We help parents with educational loan so that they can send their children to school.',
    image: loanProductImage3,
  },
  {
    id: 4,
    title: 'Calamity Loan',
    text: 'The Link Coop  Calamity Loan is a financial aid to assist members who are affected by calamities.',
    image: loanProductImage4,
  },
  {
    id: 5,
    title: 'Appliance Loan',
    text: 'Get your appliances fixed and in tip-top condition with Link Coop Appliance Loan.',
    image: loanProductImage5,
  },
  {
    id: 6,
    title: 'Cash Advance',
    text: 'Link Coop cash advances are the perfect solution for quickly and easily getting quick access to money, when you need it most.',
    image: loanProductImage6,
  },
];
