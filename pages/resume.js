import { useEffect, useState } from 'react';
import { styled } from '@compiled/react';
import { Link } from '@nextui-org/react';

import MainPageLayout from '../components/MainPageLayout';

const ResumeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default function Resume() {
  const [resumeVisible, setResumeVisible] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Give the Google Doc iFrame 200ms to load before showing a plain link
    setTimeout(() => setShowFallback(true), 1000)
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
            fontSize: '2rem',
          }}
        >
          Resume
        </Link>
        <div css={{
          visibility: resumeVisible ? 'block' : 'hidden',
          maxWidth: resumeVisible ? "950px" : '0',
          height: '90%',
        }}>
          <iframe
            src="https://docs.google.com/document/d/e/2PACX-1vRWx-mmx3AcIrEa3s0imdcs9_31JORqMvY9jgWTf36augRqABWYeV1c0pSk21BYewM_eoOOB7SVQ7CQ/pub?embedded=true"
            height={resumeVisible ? "100%" : '0'}
            width={resumeVisible ? "100%" : '0'}
            title="Taylor Clay\'s Resume"
            loading="eager"
            onLoad={() => setResumeVisible(!navigator.userAgentData.mobile)}
          />
        </div>
      </ResumeWrapper>
    </MainPageLayout>
  );
}
