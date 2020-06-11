import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Button } from "antd"
const mapStateToProps = ({HelloWorld}) => ({...HelloWorld})
const mapDispatchToProps = dispatch => ({ dispatch })
@connect(mapStateToProps, mapDispatchToProps)
class IndexPage extends React.Component {

  state = {
    count: 0
  }

  change() {
    this.props.dispatch({type: "HelloWorld/changeText", payload: { newText: "I'm Dva!"}})
  }

  delayChange() {
    this.props.dispatch({type: "HelloWorld/changeDelay", payload: { newText: "I'm Dva!"}})
  }

  render() {
    return <div className={styles.normal}>
      {this.props.text}
      <Button onClick={()=>this.change()}>changeText</Button>
      <Button onClick={()=>this.delayChange()}>delayChange</Button>
    </div>
  }
}

IndexPage.propTypes = {
};

export default IndexPage
