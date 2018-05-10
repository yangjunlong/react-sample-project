/**
 * Jsx简介
 * 
 * @author  Yang,junlong at 2018-05-10 15:55:17 build.
 * @version $Id$
 */

import React, { Component } from 'react';

const user = {
	firstName: 'Harper',
	lastName: 'Perez'
};

function formatName(user) {
	return user.firstName + ' ' + user.lastName;
}

const element = (
	<h1>
		Hello, {formatName(user)}!
	</h1>
);


// JSX 是一个表达式
function getGreeting(user) {
  if (user) {
    return element;
  } else {
    return <h1>Hello, Stranger.</h1>;
  }
}

class Jsx extends Component {
  render() {
    return (
      <div className="Jsx">
        {element}
        {getGreeting(user)}
      </div>
    );
  }
}

export default Jsx;