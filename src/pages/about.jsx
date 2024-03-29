import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Taylor Clay</title>
        <meta
          name="description"
          content="I’m Taylor Clay, a high-impact, fully remote software engineer."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Taylor Clay, a high-impact, fully remote software engineer.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                As a frontend software engineer, my interests are in what you
                might call the &quot;back of the frontend.&quot; Designing
                robust API contracts, optimizing web performance, and
                architecting large features are my particular areas of
                expertise. While I necessarily need to handle render code, my
                real enthusiasm is reserved for these more foundational aspects
                of frontend development.
              </p>
              <p>
                In my professional approach, I prioritize business outcomes.
                This certainly originates from my interest in small businesses
                and entrepreneurial endeavors. For me, technical decisions are
                never isolated from business objectives; rather, they are
                integral to achieving those goals. Within the tech stack,
                I&apos;m especially fond of the React ecosystem and have a
                strong affinity for Next.js. Its capabilities align well with my
                desire to produce work that is both technically excellent and
                beneficial from a business perspective.
              </p>
              <p>
                Beyond my primary role, I identify as an indie hacker, managing
                a few side business projects in my spare time. Leveraging the
                same tech stack across all my ventures has streamlined my
                workflow considerably. Outside the tech arena, my interests also
                include real estate investment, both personally and as a limited
                partner. This offers a refreshing counterbalance to my
                day-to-day work and provides a different kind of challenge that
                I find highly stimulating.
              </p>
              <p>
                If this sounds like it was written by ChatGPT, that&apos;s
                because it was.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://www.linkedin.com/in/taylor-clay/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:contact@taylorclay.dev"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                contact@taylorclay.dev
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
