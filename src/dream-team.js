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
export default function createDreamTeam(members) {
  let firstLet =[];
  if (Array.isArray(members)) {
    members.map (el => {
        if (typeof(el) === "string"){
          firstLet.push(el.trim().slice(0, 1).toUpperCase());
     }
    });
     return firstLet.sort().join('');  
} else return false;
}
