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

}
