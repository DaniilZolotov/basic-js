import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

 export default function createDreamTeam(/* members */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
/*export default function createDreamTeam(members) {
	let reg = /[A-Z]/g;
	let arr = [];
	for (let i=0; i<members.length; i++){
	if(typeof members[i] === "string" && members[i].length>0){
			arr.push(members[i].match(reg))
	}
}
	let str = arr.sort().join(' ');
	if(arr.length==0||typeof members !='object'){
		return false;
	}
	else{
		return str;
	}
}*/