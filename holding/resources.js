// import MainPageLayout from 'components/MainPageLayout';
// import useTheme from '@nextui-org/react/use-theme';
// import Link from '@nextui-org/react/link';
// import Text from '@nextui-org/react/text';
//
// const LinkListItem = ({ href, text}) => {
//   const { isDark } = useTheme();
//   return (
//     <li>
//       <Link block color={isDark ? "success" : "primary"} href={href}>
//         {text}
//       </Link>
//     </li>
//   );
// }
//
// export default function Resources() {
//   // TODO: Figure out how to do thumbnails / preview links
//   return (
//     <MainPageLayout title={'Resources'}>
//       <h1 h1>Resources</h1>
//
//       <h2>Websites</h2>
//       <ul>
//         <LinkListItem href="https://www.reddit.com/r/HTML+Web_Development+WebdevTutorials+css+html5+javascript+learnjavascript+learnreactjs+learnwebdev+node+reactjs+typescript+web_design+webdev/" text="Web Development Multi-reddit" />
//         <LinkListItem href="https://news.ycombinator.com/front" text="HackerNews" />
//       </ul>
//
//       <h2>Books</h2>
//       <ul>
//         <LinkListItem href="https://www.patterns.dev/" text="Patterns" />
//         <LinkListItem href="https://justjavascript.com/" text="Just JavaScript" />
//         <LinkListItem href="https://javascript.info/" text="The Modern JavaScript Tutorial" />
//       </ul>
//
//       <h2>Podcasts</h2>
//       <ul>
//         <li><h3>Technical</h3></li>
//           <ul>
//             <LinkListItem href="https://syntax.fm/" text="Syntax - Tasty Web Development Treats by Wes Bos & Scott Tolinski" />
//             <LinkListItem href="https://changelog.com/jsparty" text="JS Party: JavaScript, CSS, Web Development by Changelog Media" />
//             <LinkListItem href="https://topenddevs.com/podcasts/javascript-jabber" text="JavaScript Jabber by Top End Devs" />
//             <LinkListItem href="https://shoptalkshow.com/about/" text="Shop Talk by Dave Rupert and Chris Coyier" />
//             <LinkListItem href="https://changelog.com/podcast" text="The Changelog: Software Development, Opensource by Changelog Media" />
//           </ul>
//         <li><h3>Industry</h3></li>
//           <ul>
//             <LinkListItem href="https://www.frontendhappyhour.com/" text="Front End Happy Hour by Ryan Burgess" />
//             <LinkListItem href="https://techleadjournal.dev/" text="Tech Lead Journal by Henry Suryawirawan" />
//             <LinkListItem href="https://www.thoughtworks.com/en-us/insights/podcasts/technology-podcasts" text="Thoughtworks Technology Podcast by Thoughtworks" />
//             <LinkListItem href="https://stackoverflow.blog/podcast/" text="The Stack Overflow Podcast by Stack Overflow" />
//             <LinkListItem href="https://www.infoq.com/engineering-culture-podcast/" text="Engineering Culture by InfoQ" />
//           </ul>
//
//         <h2>Newsletters</h2>
//         <ul>
//           <LinkListItem href="https://tldr.tech/" text="TLDR" />
//         </ul>
//
//         <h2>Courses</h2>
//         <ul>
//           <LinkListItem href="https://frontendmasters.com/" text="Frontend Masters" />
//         </ul>
//       </ul>
//     </MainPageLayout>
//   );
// }
