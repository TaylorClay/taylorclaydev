import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoReact from '@/images/logos/react.svg'
import logoNeon from '@/images/logos/neon.svg'
import logoPuppeteer from '@/images/logos/puppeteer.svg'
import logoAirtable from '@/images/logos/airtable.svg'

const stack = [
  {
    name: 'Next',
    description:
      'Application abstraction',
    link: { href: 'https://nextjs.org', label: 'nextjs.org' },
    logo: null,
  },
  {
    name: 'React',
    description:
      'Rendering abstraction',
    link: { href: 'https://react.dev', label: 'react.dev' },
    logo: logoReact,
  },
  {
    name: 'Prisma',
    description:
      'ORM abstraction',
    link: { href: 'https://www.prisma.io', label: 'prisma.io' },
    logo: null,
  },
  {
    name: 'Neon',
    description:
      'Postgres',
    link: { href: 'https://neon.tech', label: 'neon.tech' },
    logo: logoNeon,
  },
  {
    name: 'Puppeteer',
    description:
      'Browser automation',
    link: { href: 'https://pptr.dev', label: 'pptr.dev' },
    logo: logoPuppeteer,
  },
  {
    name: 'Airtable',
    description:
      'Data aggregator',
    link: { href: 'https://www.airtable.com', label: 'airtable.com' },
    logo: logoAirtable,
  },
]

const componentStack = {
  Next: NextIcon,
  Prisma: PrismaIcon,
}

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function NextIcon() {
  return (
    <svg className="h-8 w-8 text-zinc-800 dark:text-zinc-100" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M4.5 4.5L4.90534 4.20725C4.77836 4.03144 4.55252 3.95753 4.34617 4.02425C4.13981 4.09098 4 4.28313 4 4.5H4.5ZM7.5 14C3.91015 14 1 11.0899 1 7.5H0C0 11.6421 3.35786 15 7.5 15V14ZM14 7.5C14 11.0899 11.0899 14 7.5 14V15C11.6421 15 15 11.6421 15 7.5H14ZM7.5 1C11.0899 1 14 3.91015 14 7.5H15C15 3.35786 11.6421 0 7.5 0V1ZM7.5 0C3.35786 0 0 3.35786 0 7.5H1C1 3.91015 3.91015 1 7.5 1V0ZM5 12V4.5H4V12H5ZM4.09466 4.79275L10.5947 13.7927L11.4053 13.2073L4.90534 4.20725L4.09466 4.79275ZM10 4V10H11V4H10Z" fill="currentColor">
        </path>
      </g>
    </svg>
  );
}

function PrismaIcon() {
  return (
    <svg className="h-8 w-8 text-zinc-800 dark:text-zinc-100" viewBox="-27 0 310 310"
         xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"
         fill="currentColor">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <path
            d="M254.312882,235.518775 L148.000961,9.74987264 C145.309805,4.08935083 139.731924,0.359884549 133.472618,0.0359753113 C127.198908,-0.384374336 121.212054,2.71925839 117.939655,8.08838662 L2.63252565,194.847143 C-0.947129465,200.604248 -0.871814894,207.912774 2.8257217,213.594888 L59.2003287,300.896318 C63.5805009,307.626626 71.8662281,310.673635 79.5631922,308.384597 L243.161606,259.992851 C248.145475,258.535702 252.252801,254.989363 254.421072,250.271225 C256.559881,245.57581 256.523135,240.176915 254.32061,235.511047 L254.312882,235.518775 Z M230.511129,245.201761 L91.6881763,286.252058 C87.4533189,287.511696 83.388474,283.840971 84.269448,279.567474 L133.866738,42.0831633 C134.794079,37.6396542 140.929985,36.9364206 142.869673,41.0476325 L234.684164,236.021085 C235.505704,237.779423 235.515611,239.809427 234.711272,241.575701 C233.906934,243.341974 232.369115,244.667163 230.503401,245.201761 L230.511129,245.201761 Z"
            fill="currentColor" fillRule="nonzero">
          </path>
        </g>
      </g>
    </svg>
  );
}

export default function Stack() {
  return (
    <>
      <Head>
        <title>Stack - Taylor Clay</title>
        <meta
          name="description"
          content='My "indie hacker" tech stack.'
        />
      </Head>
      <SimpleLayout
        content='My "indie hacker" tech stack.'
        intro="These are just a few of the main tools I use on my side projects. The full list of tools/libraries/technologies/etc. I use / have used is simply too long to reasonably cover."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {stack.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                {project.logo ? (<Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />) : componentStack[project.name]()}
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
