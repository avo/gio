import { Anchor } from '../core/Anchor';
import { BlockQuote } from '../core/Blockquote';
import { heading1, headingEm } from '../styles/typography';

export function About() {
  return (
    <>
      <h1 css={heading1}>
        Anna Vo<em css={headingEm}>, principal software engineer @ Acquia</em>
      </h1>
      <p>Hello and welcome!</p>

      <p>
        I’m a frontend developer specializing in building user-friendly UI components with a strong
        emphasis on accessibility, consistency, and usability. Currently, as a principal software
        engineer on the frontend services team at Acquia, I consistently drive improvements in the
        developer experience, establish standards and best practices, and onboard and mentor new
        team members. My contributions include reviewing designs for pattern reuse and technical
        feasibility, writing code, unit and end-to-end tests, and documentation. Additionally, I
        perform code reviews and collaborate across departments to drive consistency, usability, and
        accessibility across multiple applications.
      </p>

      <p>
        With a focus on detail and a certification in UX, I create accessible and inclusive
        experiences while enhancing the developer experience for any team I join. My journey began
        as a fullstack developer, but my joy for the frontend led me to specialize. With nearly two
        decades of development experience, predominantly in an agile CI/CD environment, I have
        worked with teams creating software as a service (SaaS). This includes working on older
        monolithic software, newer microservices, mono-repos, and micro-frontends.
      </p>

      <p>
        My current tech stack includes, but is not limited to, React, Typescript, Jest and
        Playwright with the occasional update to a Java backend for frontend (BFF). For more about
        my work experience, check out my{' '}
        <Anchor href="https://www.linkedin.com/in/annavo/" target="_blank">
          LinkedIn profile
        </Anchor>{' '}
        or{' '}
        <Anchor href="https://github.com/avo" target="_blank">
          Github account
        </Anchor>
        .
      </p>

      <h2>Some key achievements</h2>

      <ul>
        <li>
          Leading the promotion, creation, and adoption of a core component library, significantly
          accelerating code delivery and client value.
        </li>
        <li>
          Initiating an accessibility process to achieve WCAG AA 2.1 standards, training teams in
          testing, auditing components and applications, and documenting best practices for
          accessible coding, including the creation of Voluntary Product Accessibility Templates
          (VPATs) and Accessibility Conformance Reports (ACRs).
        </li>
      </ul>

      <h2>Notables</h2>

      <ul>
        <li>
          User experience certified - General UXC, Interaction Design Specialty #1002598 through
          Nielsen Norman Group (NN/g){' '}
        </li>
        <li>
          Versed in both technology and design - Formally educated in both computer programming and
          fine arts with an emphasis on graphic design
        </li>
        <li>
          Leadership - 7+ years in tech leadership or senior role and working toward improving the
          developer experience
        </li>
        <li>
          Accessibility advocate - experience introducing and implementing a software accessibility
          practice within the software project lifecyle
        </li>
      </ul>

      <h2>Personal</h2>

      <p>
        Outside of work, I enjoy reading, listening to audiobooks, and staying active by running,
        biking, hiking and other workouts. I also enjoy painting, crocheting, sewing, and exploring
        various arts and crafts. I'm a huge fan of science fiction and fantasy. In my downtime, I
        enjoy gaming, having spent countless hours in the World of Warcraft and Diablo.
      </p>

      <h2>What others say about me</h2>

      <BlockQuote cite="Sam Kvale, Software Engineer">
        <p>
          Anna Vo is a stand-out, amazing software developer and leader. Any team would work better,
          get more done, build a better product, and have more fun doing it with Anna on their team.
        </p>

        <p>
          I appreciate her ability to effectively communicate. When a problem surfaces, she has a
          knack for being able to find the right person to talk to, communicate the issue with
          clarity, and dig in to solve it. She always finds good solutions. She is a champion of
          accessibility, code standards, performance, and building a quality product with the
          customer in mind.
        </p>

        <p>
          Anna's software skills in the React ecosystem, and the intricacies of CSS, are
          outstanding. On top of writing well tested, clear code she has a perspective that includes
          so much more than just development. As a front end lead developer, she creates an
          atmosphere of collaboration, a whole team cohesion with developers, product, and UX;
          something that seems so rare in the tech industry.
        </p>

        <p>I can't imagine a more qualified person.</p>
      </BlockQuote>

      <BlockQuote cite="Callie de Roussan, Product Designer">
        <p>
          During my time working with Anna, I learned what it means to be a systems thinker. She is
          one of those people who possesses the unique ability to see how a system—the components
          and underlying framework—can be reworked to become something much greater.
        </p>

        <p>
          Her focus, determination, and respect for iterative product development allows her to
          break down large initiatives into actionable work—all while keeping her team inspired by
          the vision of a better future.
        </p>

        <p>She leads with kindness, curiosity and genuine empathy for user pain.</p>
      </BlockQuote>

      <BlockQuote cite="Mark Skelton, Software Engineer">
        <p>
          Anna was a fantastic coworker during the time I worked with her at Widen. She has a sharp
          eye for detail which helps her create fantastic user experiences and she possesses a true
          empathy for users. Anna spearheaded our accessibility effort including mentoring other
          engineers (including myself) in accessibility best practices. Anna is a great collaborator
          who is always looking for the best way to create user experiences, not simply blindly
          creating code, but actively participating in design discussions bringing her experience as
          a developer to the table to enable the team to build the best possible experience. I would
          highly recommend Anna!
        </p>
      </BlockQuote>
    </>
  );
}
