import React from 'react';

const cockpit = (props) => {
  const buttonStyle = {
    textAlign:'center',
    backgroundColor: 'orange',
    padding: '16px',
    margin:'10px 0 0 0'
  }

  if(props.showPerson){
    buttonStyle.backgroundColor = 'orangered';
  }

  let classes = [];
  if(props.persons.length <= 1) {
    classes.push('red');
  }

  if(props.persons.length <= 2) {
    classes.push('bold');
  }

  return (
    <div>
      <h1>Hi, I am React Developer.</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <button
        style={buttonStyle}
        onClick={props.clicked}>Click Me!!!</button>
    </div>
  );
}

export default cockpit;
