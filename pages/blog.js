import { useMemo } from 'react';
import NextLink from 'next/link';
import Link from '@nextui-org/react/link';

import MainPageLayout from '../components/MainPageLayout';
import { getSortedPostsData } from '../lib/posts';

export default function Blog({ allPostsData }) {
  const listOfPosts = useMemo(() => (
      allPostsData.map(
        ({ id, title }) => (
          <li key={id}>
            <NextLink href={`/posts/${id}`}>
              <Link>
                {title}
              </Link>
            </NextLink>
          </li>
        ))
      .sort(({ id1, id2 }) => id1 < id2)
    ), [allPostsData])

  return (
    <MainPageLayout title={'Blog'}>
      <h1>Blog</h1>
      <section>
        <ul>
          {listOfPosts}
        </ul>
      </section>
    </MainPageLayout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}
