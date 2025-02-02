import { Anchor } from '../core/Anchor'

export function AboutSite() {
  return (
    <>
      <h1>About this site</h1>

      <h2>Technology stack</h2>
      <p>
        Built with React, TypeScript, and CSS-in-JS, leveraging Vite as the build tool. There's also
        some MDX sprinkled in since writing with Markdown is a tad bit easier. The site prioritizes
        accessibility and responsive design through:
      </p>
      <ul>
        <li>Fluid typography and spacing using CSS clamp</li>
        <li>Custom CSS implementation for enhanced control</li>
        <li>Semantic HTML and ARIA-compliant markup</li>
        <li>Accessibility testing via Axe DevTools, VoiceOver, and keyboard navigation</li>
      </ul>

      <h2>Css and styling</h2>
      <p>
        This site uses pseudo-elements for decorative background shapes and uses a color palette
        that I put together that resonated with me. I would like to come back through and re-work
        some of the responsive elements and add additional imagery and animation, but I focused
        first on the structure of the site. Iterations to come.
      </p>

      <h2>Testing</h2>
      <p>
        I actually rather like writing tests. However, I haven't had a moment to set things up here
        yet.
      </p>

      <h2>Development practices and philosophy</h2>
      <p>
        I'm fairly pragmatic. Designs and code go through an iterative lifecycle and is transient. I
        try to write clean, modular code that is easily testable while ensuring it makes sense to my
        future self or others who may come along. I think about the developer experience just as
        much as I think about the user experience. I have a girl scout mentality and will often
        clean files up while I am in them, especially if there are new standards that the code does
        not meet. This is of course balanced with current priorities and complexities of current
        code contributions. Sometimes the updates belong in another PR to make code reviews easier.
      </p>

      <h2>Code quality</h2>
      <p>
        I am a HUGE fan of using automated tooling to ensure consistent and maintainable code. It
        helps when performing code reviews and jumping from team to team when the code syntax and
        formatting are consistent. Developers don't have to think too much about formatting and can
        focus on the code. Linters can also help prevent mistakes and improve code.
      </p>

      <h2>Development environment, tools, and apps</h2>
      <p>
        While I have used IntelliJ Idea, especially when working in Java or Groovy code, I prefer
        VsCode for most everything else. Other tools and applications that I find useful and helps
        me be more efficient include:
      </p>
      <ul>
        <li>Command line</li>
        <li>Numi</li>
        <li>Obsidian</li>
        <li>Raycast</li>
        <li>Rectangle</li>
        <li>Shottr</li>
      </ul>

      <h2>Code reviews</h2>
      <p>
        Code reviews are invaluable learning opportunities that strengthen team collaboration and
        code quality. I highly encourage devs to ask questions, share insights, and engage in
        constructive discussions. These reviews ensure consistent standards while fostering
        knowledge sharing and skill development across the team. Regular, thoughtful code reviews
        help maintain technical excellence while building a culture of continuous improvement and
        mentorship. That being said, I didn't have anyone review my code before merging for this
        project, so there are likely improvements that can be made.
      </p>
      <p>
        Feel free to{' '}
        <Anchor href="https://github.com/avo/gio" target="_blank">
          take a look at my code
        </Anchor>
        and share your thoughts. I'm always open to improving and learning.
      </p>

      <h2>Gratitude</h2>
      <p>This site was created with great appreciation to developers who have contributed to:</p>
      <ul>
        <li>Emotion</li>
        <li>Eslint</li>
        <li>Github</li>
        <li>Mdx</li>
        <li>Prettier</li>
        <li>React</li>
        <li>React Router DOM</li>
        <li>Typescript</li>
        <li>Vite</li>
        <li>VsCode</li>
        <li>Yarn</li>
      </ul>
    </>
  )
}
