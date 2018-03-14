import React from 'react'
import { storiesOf } from '@storybook/react'
import {Block, Heading, Label} from 'components'
import theme from './default'

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
const randStr = () => Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)

storiesOf('Themes', module)
  .add('Headings', () => (
    <Block>
      <Heading>h1. {lorem}</Heading>
      <Heading level={2}>h2. {lorem}</Heading>
      <Heading level={3}>h3. {lorem}</Heading>
    </Block>
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
    <Block>
      {Object.keys(theme.palette).map(kind => (
        <Block key={randStr()}>
          <Heading>{kind}</Heading>
          <Block style={{ display: "flex"}}>
            {theme.palette[kind].map(color => (
              <Block key={randStr()}  style={{ margin: 10}}>
                  <Block style={{ width: 50, height: 50, backgroundColor: color }} />
                  <Label>{color}</Label>
              </Block>
            ))}
          </Block>
        </Block>
      ))}
    </Block>
  ))
//   .add('reverse', () => (
//     <Atom reverse>Hello</Atom>
//   ))
