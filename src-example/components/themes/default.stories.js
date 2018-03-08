import React from 'react'
import { storiesOf } from '@storybook/react'
import theme from './default'

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

storiesOf('Themes', module)
  .add('Headings', () => (
    <div>
      <h1>h1. {lorem}</h1>
      <h2>h2. {lorem}</h2>
      <h3>h3. {lorem}</h3>
      <h4>h4. {lorem}</h4>
      <h5>h5. {lorem}</h5>
      <h6>h6. {lorem}</h6>
    </div>
  ))
  .add('Font', () => (
    <div>
      <div>
        <div>Primary Font: {theme.fonts.primary}</div>
      </div>
      <div>
        <pre>Preformatted font: {theme.fonts.pre}</pre>
      </div>
      <div>
        <blockquote>Quote font: {theme.fonts.quote}</blockquote>
      </div>
    </div>
  ))
  .add('colors', () => (
    <div>
      {Object.keys(theme.palette).map((kind, kindIndex) => (
        <section key={kindIndex}>
          <div>{kind}</div>
          <ul>
            {theme.palette[kind].map((color, paletteIndex) => (
              <li key={paletteIndex}>
                <div>
                  <div style={{ width: 50, height: 50, backgroundColor: color }} />
                  <div>{color}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  ))
//   .add('reverse', () => (
//     <Atom reverse>Hello</Atom>
//   ))
