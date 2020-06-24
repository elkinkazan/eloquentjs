class Group {
  constructor() {
    this.members = [];
  }

  add (value) {
    if (!this.has(value))
      {this.members.push(value)}
  }

  delete (value) {
    this.members = this.members.filter(val => val!==value)
  }

  has (value) {
    return this.members.includes(value)
  }

  static from(arr) {
    let groupEx = new Group;
    for (let a of arr) {
      groupEx.add(a)
    }
    return groupEx;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.iter = 0;
    this.group = group;
  }

  next() {
    if (this.iter >= this.group.members.length) {return {done: true}}
    else {
    let value = { done: false,
                  value : this.group.members[this.iter]};
    this.iter++;

    return value;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
