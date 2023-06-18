import { RootState } from '@/App/store/store';
import StepOne from '@/Pages/StepOne/StepOne';
import StepTwo from '@/Pages/StepTwo/StepTwo';
import StepThree from '@/Pages/StepThree/StepThree';

import { useSelector } from 'react-redux';

const Step = () => {
  const progress = useSelector((state: RootState) => state.progressBar.progress);

  let stepContent;
  switch (progress) {
    case 0:
      stepContent = <StepOne />;
      break;
    case 50:
      stepContent = <StepTwo />;
      break;
    case 100:
      stepContent = <StepThree />;
      break;
    default:
      break;
  }

  return stepContent;
};

export default Step;
