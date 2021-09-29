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
    if (position < 1 || position > this.chain.length - 1 || typeof position !== 'number') {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.push(`(${value})`);
    return this;
  },

  removeLink(position) {
    this.obj.splice(position -1, 1);
    return this;
  },
  
  reverseChain() {
    this.reverseChain();
    return this;
  },

  finishChain() {
    let result = `${this.chain.join('~~')}`;
    this.obj = [];
    return result;
  }
};
