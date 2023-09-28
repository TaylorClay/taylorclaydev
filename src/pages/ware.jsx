import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Ware() {
  return (
    <>
      <Head>
        <title>Ware - Taylor Clay</title>
        <meta
          name="description"
          content="Hardware and software I use every day."
        />
      </Head>
      <SimpleLayout
        title="Hardware and software I use every day."
        intro="Nobody asked me, but I'm going to tell you anyway."
      >
        <div className="space-y-20">
          <ToolsSection title="Software">
            <Tool title="JetBrains IDEs (WebStorm)" />
            <Tool title="GitHub Desktop">
              Call me a frontender, but a GUI is always better than the CLI.
            </Tool>
            <Tool title="ChatGPT Plus">
              It saves me so much time writing scripts or other boilerplate code.
              It is absolutely worth the money.
            </Tool>
            <Tool title="GitHub CoPilot">
              Also a great time saver without having to leave my IDE.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Hardware">
            <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2021)" />
            <Tool title="LG 35” Class UltraWide Curved WQHD HDR10 Monitor" />
            <Tool title="FIFINE USB Gaming Microphone" />
            <Tool title="Das Keyboard Model S Professional For Mac" />
            <Tool title="Logitech M510 Wireless Computer Mouse" />
            <Tool title="Twelve South Curve Laptop Stand" />
            <Tool title="KTRIO Large Gaming Mouse Pad" />
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
