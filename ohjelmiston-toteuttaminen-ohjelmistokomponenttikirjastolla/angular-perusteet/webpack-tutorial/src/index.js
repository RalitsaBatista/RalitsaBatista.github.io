import _ from 'lodash';
import Print from './print';

function component() {
  const element = document.createElement('div');
  
  // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   element.onclick = Print.bind(null, 'Hello webpack!');

   return element;
 }

getComponent().then(component => {
  document.body.appendChild(component);
});
  
  /*document.body.appendChild(component());
  
 if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}*/
