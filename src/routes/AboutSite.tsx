import { Anchor } from '../core/Anchor';

export function AboutSite() {
  return (
    <>
      <h1>About this site</h1>
      <p>
        This site was created with great appreciation to developers who have contributed to:
        <ul>
          <li>Vite</li>
          <li>React</li>
          <li>Typescript</li>
          <li>Emotion</li>
          <li>React Router DOM</li>
          <li>Yarn</li>
          <li>Eslint</li>
          <li>Prettier</li>
          <li>VsCode</li>
          <li>Github</li>
        </ul>
      </p>

      <p>
        When spinning up this site, I initially started off using CRA but it felt a bit clunky and
        dependencies were outdated. I switched to Vite and found it a much better experience. I also
        opted to write my own css with some tools to clamp my typography and space for a more fluid
        and responsive layout. The site follows accessibility best practices. Testing was performed
        using Axe DevTools, VoiceOver, and keyboard.
      </p>

      <p>Stylistically, the background shapes were created using pseudo-elements.</p>

      <p>
        Feel free to{' '}
        <Anchor href="https://github.com/avo/gio" target="_blank">
          take a look at my code
        </Anchor>
        . I opted to leave it public so that it could be used as a sample of my coding practice.
      </p>

      <h2>Tech stack</h2>
      <p>
        I enjoy working in{' '}
        <Anchor href="https://react.dev/" target="_blank">
          React
        </Anchor>
        ,{' '}
        <Anchor href="https://www.typescriptlang.org/" target="_blank">
          Typescript
        </Anchor>
        , and using CSS in JS, which this site uses{' '}
        <Anchor href="https://emotion.sh/" target="_blank">
          Emotion
        </Anchor>{' '}
        for. I prefer using css variables, though I have worked with Less and Sass in the past. I
        haven't found a need for adding in Less or Sass anymore with the combination of css
        variables and CSS in JS. Though if there's a need to create design tokens in various
        formats, I recommend using{' '}
        <Anchor href="https://github.com/amzn/style-dictionary" target="_blank">
          Amazon's style dictionary
        </Anchor>
        . I recently created a proof of concept for the design team looking to create a universal
        design system and thought this worked pretty well for their needs.
      </p>

      <h2>Eslint and Prettier</h2>
      <p>
        I am a HUGE fan of using linting and formatting tools. It helps when performing code reviews
        and jumping from team to team when the code syntax and formatting are consistent. Developers
        don't have to think too much about formatting and can focus on the code. Linters can also
        help prevent mistakes and improve code.
      </p>

      <h2>IDEs</h2>

      <p>
        While I have used IntelliJ Idea, especially when working in Java or Groovy code, I prefer
        VsCode for most everything else.
      </p>
    </>
  );
}
