# 数据结构与算法

1. 包(Bag)
1. 栈(Stack)
1. 队列(Queue)
1. 线性表(List)
1. 迭代器(Iterator)
1. 字典(Dictionary)
1. 散列(Hash)
1. 树(Tree)
1. 堆
1. 图

## 包(Bag)

包是没有特定次序的对象的有限集合，包中可以包含重复项。

1. +getCurrentSize(): integer  获取包中对象个数。
2. +isEmpty(): boolean  查看包是否为空。
3. +add(newEntry: T):boolean 添加对象newEntry到包中，并返回是否成功添加。
4. +remove(): T 删除包中的任意一项，如果成功删除，则返回被删除项，否则放回null。
5. +remove(anEntry: T): boolean 删除包中一个指定的项，如果有多项则删除首次出现的项，返回是否成功删除指定项。
6. +clear():  void  清空包
7. +getFrequency(anEntry: T): integer 返回指定项anEntry在包中出项的次数。
8. +contains(anEntry: T): boolean 测试包中是否包含指定项anEntry。
9. +toArray(): T[] 将包中的所有项转换成数组。

数组实现包

1. -removeEntry(int index): T 删除包中指定位置的项。
1. -getIndexOf(T: anEntry): integer 获取指定项在包中的位置，如果不存在则返回-1。
