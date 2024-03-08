import _ from 'lodash';

function component(){
    const element = document.createElement('div');
    //Lodash, is now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

document.body.appendChild(component());

//couldn't get the configuration up for the life of me