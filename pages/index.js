import NextLink from 'next/link';
import Link from '@nextui-org/react/link';
import '@compiled/react';

import MainPageLayout from '../components/MainPageLayout';

export default function Home() {
  return (
    <MainPageLayout title={'Home'}>
      <h1>About Taylor</h1>

      <h2>General</h2>
      <ul>
        <li>I'm not passionate about writing code; but, I am passionate about making the web faster and creating delightful user experiences, which happens to involve writing code</li>
        <li>I'm a pretend extrovert at work</li>
        <li>I have full stack experience, but much prefer working on the front end (namely JavaScript with React)</li>
        <li>I'm proactive in knowledge sharing via both verbal and written communication</li>
        <li>I always wanting to learn, you can take a look at my <NextLink href="/resources"><Link color="secondary">resources page</Link></NextLink> to see some of my sources that I keep up on</li>
        <li>I'm extremely eager to continuously learn (growth mindset). I believe in radical ownership. I lead with empathy. I'm dedicated to creating delightful user experiences.</li>
        <li></li>
      </ul>

      <h2>Mistakes</h2>
      <ul>
        <li>Bulldozing over product managers with my ideas</li>
        <li>Telling a product manager something “couldn't” be done instead of it was just difficult</li>
        <li>Responding when I'm mad/upset instead of cooling down first</li>
        <li>Taking the hardest projects to work towards promotion instead of delegating to my team to help them grow</li>
      </ul>

      <h2>Things I'm actively working on improving</h2>
      <ul>
        <li>I catch myself trying/wanting to please my boss instead of being more objective in my thinking / priority of tasks</li>
        <li>I care about always making forward progress that I move to quickly or forget to zoom out and look at the bigger picture</li>
        <li>I overextend myself trying to be helpful (e.g. volunteering to take over on-call for a colleague out sick), which takes away from time to complete my core work</li>
      </ul>

      <h2>Things I look for in a job</h2>
      <ul>
        <li>Autonomy</li>
        <li>Interesting problems</li>
        <li>Transparency
          <ul>
            <li>Business metrics</li>
            <li>Employee retention</li>
          </ul>
        </li>
        <li>Mentorship/Coaching</li>
        <li>Growth</li>
        <li>Freedom</li>
        <li>Efficient internal processes
          <ul>
            <li>Business red tape</li>
            <li>Developer tools</li>
          </ul>
        </li>
        <li>Work Life Balance
          <ul>
            <li>Weekly hours expectation</li>
            <li>On-call</li>
          </ul>
        </li>
        <li>Remote culture</li>
        <li>Psychological safety</li>
      </ul>
    </MainPageLayout>
  );
}
