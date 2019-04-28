import { Header } from "../styles/Header"
import React, { Component } from 'react';
import PropTypes from "prop-types"
import styled from "styled-components"



const CardBG = styled.div`
  margin-bottom: 20px;
  margin-right: 20px;
  margin-left: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 20px;
  transition: 0.5s;
  width: 300px;
  height: 300px;
  background-image: url("https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_48980557.jpg?crop=961,0,1928,2571&wid=600&hei=800&scl=3.21375");
  text-align: center;
  &:hover {
    transform: translateY(-5px);
  }
`

const Card = styled.div`
  margin-top: -26px;
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: rgba(42, 66, 107, 0.7);
`

const CardHeader = styled(Header)`
  padding-top: 45px;
  font-size: 2em;
  font-weight: 300;
  color: #fcbc80;
  height: 100px;
`
const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  margin: auto;
  align-items: center;
  justify-content: center;
  height: 50px;
`

const Tag = styled.div`
  display: inline-block;
  padding-right: 7px;
  padding-left: 7px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.2);
  margin-left: 3px;
  margin-right: 3px;
  margin-bottom: 6px;
  text-align: center;
  color: white;
`
const Button = styled.div`
    z-index: 999;
    display:inline-block;
    border:1px solid;
    border-radius: 5px;
    box-shadow: 0 0 5px -1px rgba(0,0,0,0.2);
    padding-right: 30px;
    padding-left: 30px;
    padding-top: 7px;
    padding-bottom: 7px;
    text-align: center;
    color: white;
    &:hover {
      color: #fcbc80;
    }
    margin-top: 50px;

`
class Project extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        tags: PropTypes.array.isRequired,
    };

    constructor() {
      super();

      this.state = {
        expandedView: false,
      };
      this.test = true;
    }

    changeView = () => {
      this.setState(prevState => ({
        expandedView: !prevState.expandedView
      }));
    }
    
    renderTags() {
      return (
        <TagsContainer>
          {this.props.tags.map(tag => (
            <Tag>{tag}</Tag>
          ))}
        </TagsContainer>
      )
    }

    renderCard() {
      return (
        <CardBG onClick={this.changeView}> 
          <Card>
            <CardHeader> {this.props.title} </CardHeader>
            {this.renderTags()}
            <Button onClick={this.changeView}>Details</Button>
          </Card>
        </CardBG>
      );
    }

    renderExpanded() {
      return (
        <CardBG onClick={this.changeView}> 
          <Card>
            <CardHeader> {this.props.title} </CardHeader>
            {this.renderTags()}
            <span> <Button onClick={this.changeView}>Details</Button> </span>
          </Card>
        </CardBG>
      );
    }

    render() {
      if (this.state.expandedView) {
        return this.renderExpanded();
      }
      return this.renderCard();
    }
}

export default Project