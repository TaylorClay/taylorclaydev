import { useEffect, useState } from 'react';
import { styled } from '@compiled/react';
import { Link } from '@nextui-org/react';

import MainPageLayout from '../components/MainPageLayout';

const ResumeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  /* Extra small devices */
  @media (max-width: 600px) {
    //width: 100vw;
  }

  /* Small devices */
  @media (min-width: 600px) {
    //width: 100vw;
  }

  /* Medium devices */
  @media (min-width: 768px) {
    //width: 95vw;
  }

  /* Large devices */
  @media (min-width: 992px) {
    //width: 75vw;
  }

  /* Extra large devices */
  @media (min-width: 1250px) {
    //width: 60vw;
  }

  @media (min-width: 1400px) {
    //width: 50vw;
  }

  @media (min-width: 1600px) {
    //width: 45vw;
  }
`;

export default function Resume() {
  const [resumeVisible, setResumeVisible] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Give the Google Doc iFrame 200ms to load before showing a plain link
    setTimeout(() => setShowFallback(true), 200)
  }, [])

  return (
    <MainPageLayout title={'Resume'}>
      <ResumeWrapper>
        <Link
          href="https://docs.google.com/document/d/e/2PACX-1vRWx-mmx3AcIrEa3s0imdcs9_31JORqMvY9jgWTf36augRqABWYeV1c0pSk21BYewM_eoOOB7SVQ7CQ/pub?embedded=true"
          icon
          block
          css={{
            display: !resumeVisible && showFallback ? 'block' : 'none',
          }}
        >
          Resume
        </Link>
        <div css={{
          visibility: resumeVisible ? 'block' : 'hidden',
        }}>
          <iframe
            src="https://docs.google.com/document/d/e/2PACX-1vRWx-mmx3AcIrEa3s0imdcs9_31JORqMvY9jgWTf36augRqABWYeV1c0pSk21BYewM_eoOOB7SVQ7CQ/pub?embedded=true"
            height={resumeVisible ? "100%" : '0'}
            width={resumeVisible ? "100%" : '0'}
            sandbox=""
            title="Taylor Clay\'s Resume"
            loading="eager"
            onLoad={() => setResumeVisible(true)}
          />
        </div>
      </ResumeWrapper>
    </MainPageLayout>
  );
}
