import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  
  obj: [],

  getLength() {
    return this.obj.length;
  },

  addLink(value) {
    this.obj.push(`( ${value} )`);
    return this;
    
  },

  removeLink(position) {
    if (typeof(position) !== 'number' || position < 1 || position > this.getLength()) {
      this.obj = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.obj.splice(position-1, 1);
    return this;
  },

  reverseChain() {
    this.obj.reverse();
    return this;
  },

  finishChain() {
    let result = this.obj.join('~~');
    this.obj = [];
    return result;
  },
};
