import Head from 'next/head';
import '@compiled/react';

import { getAllPostIds, getPostData } from '../../lib/posts';
import NavBar from '../../components/navigation/NavBar';
import NavItem from '../../components/navigation/NavItem';

export default function Post({ postData }) {
  return (
    <>
      <NavBar>
        {props => (
          <>
            <NavItem pageName={'About'} {...props} />
            <NavItem href={'blog'} pageName={'Blog'} {...props} />
            <NavItem href={'contact'} pageName={'Contact'} {...props} />
            <NavItem href={'resources'} pageName={'Resources'} {...props} />
            <NavItem href={'resume'} pageName={'Resume'} {...props} />
          </>
        )}
      </NavBar>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article css={{
        margin: '50px 5vw 0',

        '@media (min-width: 600px)': {
          marginLeft: '10vw',
          marginRight: '10vw',
        },

        '@media (min-width: 768px)': {
          marginLeft: '15vw',
          marginRight: '15vw',
        }
      }}>
        <h1>{postData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}