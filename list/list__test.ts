import { List } from './list.ts';

const names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
console.log(names.find('Raymond'), names.size)
console.log(names.toString());
names.remove("Raymond");
console.log(names.toString());
console.log(names, names.size)