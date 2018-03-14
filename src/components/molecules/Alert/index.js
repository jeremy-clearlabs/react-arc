import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { font, palette } from 'styled-theme';

import { Block, IconButton } from 'components';

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  background-color: ${palette('grayscale', 8)};
  border-color: ${palette('grayscale', 0)};
  ${props =>
    props.type &&
    css`
      color: ${palette(props.type, 1)};
      background-color: ${palette(props.type, 2)};
      border-color: ${palette(props.type, 2)};
    `};
`;

const StyledBlock = styled(Block)`
  line-height: 2.5em;
  ${props =>
    props.dismissable &&
    css`
      display: flex;
      justify-content: space-between;
    `};
`;

class Alert extends Component {
  static propTypes = {
    children: PropTypes.node,
    dismissable: PropTypes.bool,
    onClose: PropTypes.func,
    type: PropTypes.oneOf([
      'primary',
      'secondary',
      'success',
      'danger',
      'alert'
    ])
  };

  static defaultProps = {
    onClose: () => {}
  };

  state = {
    isOpen: true
  }

  handleClose = () => {
    // TODO Animation
    this.setState({ isOpen: false })
    this.props.onClose() // If the user wants to take action after the close
  }

  shouldBeClosed = () => !this.state.isOpen

  render() {
    const { children, dismissable, type, ...props } = this.props;
    return this.shouldBeClosed() ? null : (
      <Wrapper type={type} role="alert" {...props}>
        <StyledBlock dismissable={dismissable}>
          {children}
          {dismissable && (
            <IconButton
              icon="close"
              palette={type || 'white'}
              reverse
              right
              aria-label="Close"
              onClick={this.handleClose}
            />
          )}
        </StyledBlock>
      </Wrapper>
    );
  }
}

export default Alert;
