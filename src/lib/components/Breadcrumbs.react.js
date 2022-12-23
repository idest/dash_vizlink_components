import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Breadcrumbs is a component to aid in app navigation.
 * It takes a list of objects, each with a `label` property,
 * It also takes in a value which corresponds to the label
 * of the currently active item.
 * It renders a navigation bar, with items laid out sequentially in
 * the order they were provided. The active item is displayed as text,
 * while all other items are displayed as links, which when clicked are set
 * as the current active item.
 */
export default class Breadcrumbs extends Component {
    render() {
        const {
          id,
          setProps,
          items,
          value,
          color,
          activeColor,
          backgroundColor,
          hoverColor
        } = this.props;

        return (
          <StyledNav id={id}>
            <StyledOl backgroundColor={backgroundColor}>
              {(items || []).map((item, idx) => (
                item.label === value
                  ? (
                    <StyledLi color={color} activeColor={activeColor}>
                      <strong>
                        {item.label}
                      </strong>
                    </StyledLi>
                  )
                  : (
                    <StyledLi >
                      <StyledA
                        href="#!"
                        data-label={item.label}
                        onClick={
                          e => setProps({ value: e.target.dataset.label})
                        }
                        color={color}
                        hoverColor={hoverColor}
                      >
                        {item.label}
                      </StyledA>
                    </StyledLi>
                  )
              ))}
            </StyledOl>
          </StyledNav>
        );
    }
}

const StyledNav = styled.nav`
  box-sizing: 'border-box'
`;

const StyledOl = styled.ol`
  background-color: ${
    props => props.backgroundColor ? props.backgroundColor : 'white'
  };
  padding: 4px 8px;
  padding-top: 8px;
  margin-bottom: 0px;
  list-style: none;
`;

const NBSP = '\\00a0';

const StyledLi = styled.li`
  color: ${props => props.activeColor ? props.activeColor : '#0a2d4d'};
  padding: 0 3px;
  display: inline-block;
  & + &:before {
    color: ${props => props.color ? props.color : '#0060B6'};
    content: ">${NBSP}";
  }
`;

const StyledA = styled.a`
  color: ${props => props.color ? props.color : '#0060B6'};
  text-decoration: none;
  &:hover { 
    color: ${props => props.hoverColor ? props.hoverColor : '#00A0C6'};
    text-decoration:none; 
    cursor:pointer;  
  }
`;

Breadcrumbs.defaultProps = {};

Breadcrumbs.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The list of items displayed in the navigation bar.
     */
    items: PropTypes.arrayOf(
        PropTypes.shape({
          /**
           * Label for the breadcrumb item.
           */
          label: PropTypes.string,
        })
      ),

    /**
     * The label of the active item.
     */
    value: PropTypes.string,

    /**
     * The default color of the items.
     */
    color: PropTypes.string,

    /**
     * The color of the active item.
     */
    activeColor: PropTypes.string,

    /**
     * The background color of the bar.
     */
    backgroundColor: PropTypes.string,

    /**
     * The color of the link items when hovered.
     */
    hoverColor: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};
