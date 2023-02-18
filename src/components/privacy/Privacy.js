import PrivacyPart1 from './PrivacyPart1';
import PrivacyPart2 from './PrivacyPart2';
import PrivacyPart3 from './PrivacyPart3';

const Privacy = () => {
  return (
    <section className="container my-5">
      <h1 class=" text-center pb-1">Privacy Policy</h1>
      <h6 class=" text-center pb-3">Link Coop</h6>
      <PrivacyPart1 />
      <PrivacyPart2 />
      <PrivacyPart3 />
    </section>
  );
};

export default Privacy;
