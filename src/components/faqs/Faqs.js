import React, { useState } from 'react';
import style from './Faqs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-center">Frequently Asked Questions</h1>
      <h6 className="text-center pb-5">Link Coop</h6>
      <div id="accordion">
        <div className={`card ${style['cursor-pointer']} mb-2`}>
          <div className="card-header">
            <h6
              onClick={() => handleClick(0)}
              className="d-flex justify-content-between"
            >
              Q-How to apply for a loan?
              {activeIndex === 0 ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </h6>
            {activeIndex === 0 && (
              <ol>
                <li>Upload your documents on the given link or send to</li>
                <li> Linkcooperative@gmail.com</li>

                {/* {activeIndex === 0 && ( */}
                <li>Expect a call from Welcome associates</li>
                {/* )} */}
              </ol>
            )}
          </div>
        </div>

        <div className={`card ${style['cursor-pointer']} mb-2`}>
          <div className="card-header">
            <h6
              onClick={() => handleClick(1)}
              className="d-flex justify-content-between"
            >
              Q-How much can I barrow?
              {activeIndex === 1 ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </h6>
            {activeIndex === 1 && (
              <ol>
                <li>If you are Employed: P 20,000 to P 1,000,000</li>
                {/* )} */}
                {/* {activeIndex === 1 && ( */}

                <li>If you are Self-Employed: P 50,000 to P 3,000,000</li>
              </ol>
            )}
          </div>
        </div>
        <div className={`card ${style['cursor-pointer']} mb-2`}>
          <div className="card-header">
            <h6
              onClick={() => handleClick(2)}
              className="d-flex justify-content-between"
            >
              Q-How long does it take to get a loan?
              {activeIndex === 2 ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </h6>
            {activeIndex === 2 && (
              <ol>
                <li>
                  Loan process depends if the client submitted all the complete
                  documents and participate in credit verification
                </li>

                {/* )} */}
                {/* {activeIndex === 2 && ( */}

                <li>For smooth transaction it may run for 1-3 working days</li>
              </ol>
            )}
          </div>
        </div>
        <div className={`card ${style['cursor-pointer']} mb-2`}>
          <div className="card-header">
            <h6
              onClick={() => handleClick(3)}
              className="d-flex justify-content-between"
            >
              Q-What are the requirements needed?
              {activeIndex === 3 ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </h6>
            {activeIndex === 3 && <p>For Employed:</p>}
            <ol>
              {activeIndex === 3 && <li>2 months recent payslip</li>}
              {activeIndex === 3 && <li>COE</li>}
              {activeIndex === 3 && <li>Two (2) government Ids</li>}
              {activeIndex === 3 && <li>Utility Bill</li>}
            </ol>
            <span></span>
            {activeIndex === 3 && <p>For Self-Employed:</p>}{' '}
            <ol>
              {activeIndex === 3 && <li>Two (2) government Ids</li>}
              {activeIndex === 3 && <li> 3 months bank statement</li>}
              {activeIndex === 3 && <li>Business Permit</li>}
              {activeIndex === 3 && <li>Utility Bill</li>}
              {activeIndex === 3 && <li>latest ITR (optional)</li>}
              {activeIndex === 3 && <li>3 Trade References</li>}
            </ol>
          </div>
        </div>
        <div className={`card ${style['cursor-pointer']} mb-2`}>
          <div className="card-header">
            <h6
              onClick={() => handleClick(4)}
              className="d-flex justify-content-between"
            >
              Q-How can i know the status of my application?
              {activeIndex === 4 ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </h6>
            {activeIndex === 4 && (
              <ol>
                <li>
                  You may check your status at
                  https://link-coop-alpha.vercel.app/ and click Loan Status in
                  the homepage.
                </li>
              </ol>
            )}
            {activeIndex === 4 && <></>}
          </div>
        </div>
        <div className={`card ${style['cursor-pointer']} mb-2`}>
          <div className="card-header">
            <h6
              onClick={() => handleClick(5)}
              className="d-flex justify-content-between"
            >
              Q-How much is the monthly interest rate?
              {activeIndex === 5 ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </h6>
            {activeIndex === 5 && (
              <ol>
                <li>
                  WFP offers a competitive rate for as low as 1.39% up to 3.5%
                  for Unsecured Loan and 1.0% -2.35% for Secured Loan, depending
                  on the loan products and customer's credit profile.
                </li>
              </ol>
            )}
            {activeIndex === 5 && <></>}
          </div>
        </div>
        <div className={`card ${style['cursor-pointer']} mb-2`}>
          <div className="card-header">
            <h6
              onClick={() => handleClick(6)}
              className="d-flex justify-content-between"
            >
              Q-How will I know that my loan is approved?
              {activeIndex === 6 ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </h6>
            {activeIndex === 6 && (
              <ol>
                <li>
                  You will receive a phone call from our sales associates to
                  schedule you for loan release.
                </li>
              </ol>
            )}
            {activeIndex === 6 && <></>}
          </div>
        </div>
        <div className={`card ${style['cursor-pointer']} mb-2`}>
          <div className="card-header">
            <h6
              onClick={() => handleClick(7)}
              className="d-flex justify-content-between"
            >
              Q-Is there an application fees?
              {activeIndex === 7 ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </h6>
            {activeIndex === 7 && (
              <ol>
                <li>
                  Loan application is free. However, once the loan is disbursed
                  processing fee and notarial fee will be deducted from loan
                  disbursement.
                </li>
              </ol>
            )}
            {activeIndex === 7 && <></>}
          </div>
        </div>
        <div className={`card ${style['cursor-pointer']} mb-2`}>
          <div className="card-header">
            <h6
              onClick={() => handleClick(8)}
              className="d-flex justify-content-between"
            >
              Q-Where to submit my documents?
              {activeIndex === 8 ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </h6>
            {activeIndex === 8 && (
              <ol>
                <li>
                  You can submit your documents at sales@welcomefinanceinc.com
                  OR upload through the URL link received by SMS.
                </li>
              </ol>
            )}
            {activeIndex === 8 && <></>}
          </div>
        </div>
        <div className={`card ${style['cursor-pointer']} mb-2`}>
          <div className="card-header">
            <h6
              onClick={() => handleClick(9)}
              className="d-flex justify-content-between"
            >
              Q-Can I cancel my application?
              {activeIndex === 9 ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </h6>
            {activeIndex === 9 && (
              <ol>
                <li>
                  Technically you can cancel your application anytime as long as
                  you inform us.
                </li>
              </ol>
            )}
            {activeIndex === 9 && <></>}
          </div>
        </div>
      </div>
    </div>
  );
}
