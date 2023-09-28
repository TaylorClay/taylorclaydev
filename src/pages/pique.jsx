import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Image from "next/image";
import HowACarWorks from '@/images/how-a-car-works.png'

function TypeSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href, imgSrc }) {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      {imgSrc && <Image src={imgSrc} width="225" height="225" />}
      <Card as="article">
        <Card.Title as="h3" href={href}>
          {title}
        </Card.Title>
        <Card.Eyebrow decorate={!!event}>{event}</Card.Eyebrow>
        <Card.Description>{description}</Card.Description>
        <Card.Cta>{cta}</Card.Cta>
      </Card>
    </div>
  )
}

export default function Pique() {
  return (
    <>
      <Head>
        <title>Pique - Taylor Clay</title>
        <meta
          name="description"
          content="Stuff I'm interested in."
        />
      </Head>
      <SimpleLayout
        title="Stuff I'm interested in."
        intro=""
      >
        <div className="space-y-20">
          <TypeSection title="Sites">
            <Appearance
              event="Y Combinator"
              title="Hacker News"
              description=""
              cta="Visit"
              href="https://news.ycombinator.com/front"
              imgSrc="https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/80/a8/7a/80a87ae0-fe83-282f-fbdd-9b5b5030daaa/mza_16569760796598839789.jpg/626x0w.webp"
            />
            <Appearance
              event=""
              title="Indie Hackers"
              description=""
              cta="Visit"
              href="https://www.indiehackers.com"
              imgSrc="https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/02/d0/c7/02d0c724-bbd0-42ff-1096-76943633888e/mza_2030424167570228260.jpg/626x0w.webp"
            />
            <Appearance
              event="Alex Muir"
              title="How A Car Works"
              description=""
              cta="Watch"
              href="https://www.howacarworks.com"
              imgSrc="https://play-lh.googleusercontent.com/bKatl6QffBwkPi2J0qgAlig6Q-mI7kxAI9XLPuDkK7lWsIRivW56qiheMFSSELvuxgg"
            />
          </TypeSection>
          <TypeSection title="Books">
            <Appearance
              event="Thomas Stanley"
              title="The Millionaire Next Door"
              description=""
              cta="Read"
              href="https://www.amazon.com/Millionaire-Next-Door-Surprising-Americas/dp/1630762504/ref=tmm_hrd_swatch_0"
              imgSrc="https://m.media-amazon.com/images/I/81y4IBu7gzL._AC_UF1000,1000_QL80_.jpg"
            />
            <Appearance
              event="Julie Zhuo"
              title="The Making of a Manager"
              description=""
              cta="Read"
              href="https://www.amazon.com/Making-Manager-What-Everyone-Looks/dp/0735219567/ref=tmm_hrd_swatch_0"
              imgSrc="https://m.media-amazon.com/images/I/41SKhBKxy9L.jpg"
            />
            <Appearance
              event="Camille Fournier"
              title="The Manager's Path"
              description=""
              cta="Read"
              href="https://www.amazon.com/Managers-Path-Leaders-Navigating-Growth/dp/9352135474/ref=sr_1_4"
              imgSrc="https://m.media-amazon.com/images/I/61fpkYbl34L._AC_UF1000,1000_QL80_.jpg"
            />
            <Appearance
              event="Marshall Goldsmith"
              title="What Got You Here Won't Get You There"
              description=""
              cta="Read"
              href="https://www.amazon.com/What-Here-There-Marshall-Goldsmith/dp/B09Z2YY2BX/ref=sr_1_1"
              imgSrc="https://m.media-amazon.com/images/I/8149MPAvefL._AC_UF1000,1000_QL80_.jpg"
            />
            <Appearance
              event="Peter F. Drucker"
              title="The Effective Executive"
              description=""
              cta="Read"
              href="https://www.amazon.com/Effective-Executive-Definitive-Getting-Things/dp/0062574345/ref=tmm_hrd_swatch_0"
              imgSrc="https://m.media-amazon.com/images/I/619O1ieMN4L._AC_UF1000,1000_QL80_.jpg"
            />
            <Appearance
              event="Reed Hastings"
              title="No Rules Rules"
              description=""
              cta="Read"
              href="https://www.amazon.com/No-Rules/dp/0753553635/ref=tmm_hrd_swatch_0"
              imgSrc="https://m.media-amazon.com/images/I/516JuOUqrFL.jpg"
            />
            <Appearance
              event="Ramit Sethi"
              title="I Will Teach You To Be Rich"
              description=""
              cta="Read"
              href="https://www.amazon.com/Will-Teach-You-Rich-Second/dp/1523505745/ref=tmm_pap_swatch_0"
              imgSrc="https://m.media-amazon.com/images/I/81c9SSbG3OL._AC_UF1000,1000_QL80_.jpg"
            />
            <Appearance
              event="Dale Carnegie"
              title="How to Win Friends and Influence People"
              description=""
              cta="Read"
              href="https://www.amazon.com/How-win-Friends-Influence-People/dp/8189297813/ref=sr_1_5"
              imgSrc="https://m.media-amazon.com/images/I/71vK0WVQ4rL._AC_UF1000,1000_QL80_.jpg"
            />
            <Appearance
              event="Morgan Housel"
              title="The Psychology of Money"
              description=""
              cta="Read"
              href="https://www.amazon.com/Psychology-Money-hardback-Timeless-happiness/dp/0857199099/ref=tmm_hrd_swatch_0"
              imgSrc="https://m.media-amazon.com/images/I/81zlbsnFiYL._AC_UF1000,1000_QL80_.jpg"
            />
            <Appearance
              event="Peter Thiel"
              title="Zero to One"
              description=""
              cta="Read"
              href="https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296/ref=tmm_hrd_swatch_0"
              imgSrc="https://m.media-amazon.com/images/I/4137OkbPQ4L._SY445_SX342_.jpg"
            />
            <Appearance
              event="MJ Demarco"
              title="The Millionaire Fastlane"
              description=""
              cta="Read"
              href="https://www.amazon.com/Millionaire-Fastlane-Crack-Wealth-Lifetime/dp/0984358137/ref=tmm_hrd_swatch_0"
              imgSrc="https://m.media-amazon.com/images/I/41zc2B3TXhL._SY445_SX342_.jpg"
            />
          </TypeSection>
          <TypeSection title="Podcasts">
            <Appearance
              event="Chamath Palihapitiya, Jason Calacanis, David Sacks, and David Friedberg"
              title="All In"
              description=""
              cta="Listen"
              href="https://podcasts.apple.com/us/podcast/all-in-with-chamath-jason-sacks-friedberg/id1502871393"
              imgSrc="https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/c7/d2/92/c7d292ea-44b3-47ff-2f5e-74fa5b23db6c/mza_7005270671777648882.png/626x0w.webp"
            />
            <Appearance
              event="Sam Parr and Shaan Puri"
              title="My First Million"
              description=""
              cta="Listen"
              href="https://podcasts.apple.com/us/podcast/my-first-million/id1469759170"
              imgSrc="https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/6c/28/6d/6c286d5b-e9e9-2268-f209-0fd16b35deec/mza_6323111115700494825.jpg/626x0w.webp"
            />
            <Appearance
              event="Courtland and Channing Allen"
              title="Indie Hackers"
              description=""
              cta="Listen"
              href="https://podcasts.apple.com/us/podcast/indie-hackers/id1206165808"
              imgSrc="https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/02/d0/c7/02d0c724-bbd0-42ff-1096-76943633888e/mza_2030424167570228260.jpg/626x0w.webp"
            />
            <Appearance
              event="Mitchell Baldridge and Scott Hambrick"
              title="Stupid Tax"
              description=""
              cta="Listen"
              href="https://podcasts.apple.com/us/podcast/stupid-tax/id1705140552"
              imgSrc="https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/08/1c/bc/081cbc30-4d07-b0bd-e3a2-e8cc9ed77833/mza_4743156205592422367.png/626x0w.webp"
            />
            <Appearance
              event="Ryan Burgess, Jem Young, Stacy London, and more"
              title="Front End Happy Hour"
              description=""
              cta="Listen"
              href="https://podcasts.apple.com/us/podcast/front-end-happy-hour/id1089047924"
              imgSrc="https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/0b/c8/d4/0bc8d428-3772-bd3d-32c0-b3e55b799fa5/mza_7689557511800419761.jpg/626x0w.webp"
            />
            <Appearance
              event="Patrick O’Shaughnessy"
              title="Invest Like The Best"
              description=""
              cta="Listen"
              href="https://podcasts.apple.com/us/podcast/invest-like-the-best-with-patrick-oshaughnessy/id1154105909"
              imgSrc="https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/57/02/66/570266c2-9e24-a734-a59b-ca2d459879e4/mza_11791704660172946098.jpeg/626x0w.webp"
            />
          </TypeSection>
        </div>
      </SimpleLayout>
    </>
  )
}
