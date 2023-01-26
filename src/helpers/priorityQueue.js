class PriorityQueue {
    constructor() {
      this.elements = [];
    }
  
    isEmpty() {
      return this.elements.length === 0;
    }
  
    add(element, priority) {
      this.elements.push({element, priority});
      this.elements.sort((a, b) => a.priority - b.priority);
    }
  
    poll() {
      return this.elements.shift().element;
    }
  }
  
export {PriorityQueue}