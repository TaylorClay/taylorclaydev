import MainPageLayout from '../components/MainPageLayout';

export default function Resources() {
  // TODO: Figure out how to do thumbnails / preview links
  return (
    <MainPageLayout title={'Resources'}>
      <h1>Resources</h1>

      <h2>Blogs</h2>
      <ul>
        <li>I'm not passionate about writing code; but, I am passionate about making the web faster and creating delightful user experiences, which happens to involve writing code</li>
        <li>I'm a pretend extrovert at work</li>
        <li>I have full stack experience, but much prefer working on the front end (namely JavaScript with React)</li>
        <li>I'm proactive in knowledge sharing via both verbal and written communication</li>
        <li></li>
      </ul>

      <h2>Websites</h2>
      <ul>
        <li>Web Development Multi-reddit</li>
        <li>HN</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <h2>Books</h2>
      <ul>
        <li></li>
      </ul>

      <h2>Podcasts</h2>
      <ul>
        <li>Hard Skills</li>
          <ul>
            <li>single-threaded: a software developer podcast by Jenn Creighton</li>
            <li>Syntax - Tasty Web Development Treats by Wes Bos & Scott Tolinski</li>
            <li>JS Party: JavaScript, CSS, Web Development by Changelog Media</li>
            <li>Front End Happy Hour by Ryan Burgess</li>
            <li>JavaScript Jabber by Top End Devs</li>
            <li>Shop Talk by Dave Rupert and Chris Coyier</li>
            <li>Tech Load Journal by Henry Suryawirawan</li>
            <li>The Stack Overflow Podcast by Stack Overflow</li>
            <li>Thoughtworks Technology Podcast by Thoughtworks</li>
            <li>The Changelog: Software Development, Opensource by Changelog Media</li>
          </ul>
        <li>Soft Skills</li>
          <ul>
            <li>Manager Tools by Manager Tools</li>
            <li>Career Tools by Manager Tools</li>
            <li>Masters of Scale by Reid Hoffman</li>
            <li>Engineering Culture by InfoQ</li>
            <li>Mostly Mistakes by Jono Grayson & Dave Amadi</li>
          </ul>
      </ul>
    </MainPageLayout>
  );
}
