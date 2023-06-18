// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { ReactComponent as Dot } from '@/assets/dot.svg';
import { ReactComponent as Done } from '@/assets/done.svg';
import { RootState } from '@/App/store/store';

import { ProgressBar, Step } from 'react-step-progress-bar';
import { useSelector } from 'react-redux';

import 'react-step-progress-bar/styles.css';
import './progressBar.scss';

const Bar = () => {
  const progress = useSelector((state: RootState) => state.progressBar.progress);
  return (
    <ProgressBar className='progressBar' filledBackground='#5558FA' height={10} percent={progress}>
      <Step>
        {({ accomplished }) => (
          <div className={`indexedStep ${accomplished ? 'accomplished' : null}`}>
            {progress === 0 ? <Dot /> : <Done />}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished }) => (
          <div className={`indexedStep ${accomplished ? 'accomplished' : null}`}>
            {progress < 50 ? null : progress === 50 ? <Dot /> : <Done />}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished }) => (
          <div className={`indexedStep ${accomplished ? 'accomplished' : null}`}>
            {progress === 100 ? <Dot /> : null}
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default Bar;
