
(() => {
  let parent, child;
  const log = console.log;
  /**
   * Object.create 第一个参数作为原型, 后一个参数作为自身属性,
   */
  /**
   * 没有原型的Object.created
   */
  parent = Object.create(null, {
    a: {
      value: "play",
      writable: true,
      enumerable: true,
      configurable: true,
    }
  })
  log(parent, '没有原型的Object.created')
  /**
   * 使用Object原型的Object.created
   */
  parent = Object.create(Object.prototype, {
    a: {
      value: "play",
      writable: true,
      enumerable: true,
      configurable: true,
    }
  })
  log(parent, '使用Object原型的Object.created')
  /**
   * 使用一个对象作为原型原型的Object.created
   */
  parent = Object.create(
    { a: 1 },
    {
      c: { value: "c", writable: false }
    });
  log(parent, '使用一个对象作为原型原型的Object.created')

  /**
   * ---------------------------------------------------------
   */

  log('------------------------------------------')
  /**
   * parent继承自Object.prototype，有一个可枚举的属性a
   * child有两个属性b和c，其中b为可枚举属性，c为不可枚举属性。
   */
  parent = Object.create(Object.prototype, {
    a: {
      value: "play",
      writable: true,
      enumerable: true,
      configurable: true,
    }
  })

  child = Object.create(parent, {
    b: {
      value: 2,
      writable: true,
      enumerable: true,
      configurable: true
    },
    c: {
      value: 3,
      writable: true,
      enumerable: false,
      configurable: true
    }
  });

  log(Object.keys(child))
  log(Object.getOwnPropertyNames(child))
  log(child.hasOwnProperty('a'), child.hasOwnProperty('b'), child.hasOwnProperty('c'))
  let keys = [];
  for (let key in child) {
    keys.push(key)
  }
  log(keys)
  /**
   * Object.keys 必须是自有属性非原型上的, 并且是要可枚举的
   * Object.getOwnPropertyNames 只要是自有属性, 不论是否可枚举
   * xxx.hasOwnProperty => 判断自有属性是否存在
   * key in  可以遍历非自有属性和自有属性,但一定要是 enumerable
   */

  /**
   * -----------------------------
    */
  log('------------------------------------------------------')
  Array.prototype.ccc = 1;
  log('Array',Array.ccc)
  log('Array.prototype',Array.prototype);

  Array.__proto__.ccc = 2;
  log('Array',Array.ccc)

  // Array.ccc = 3;
  log('Array',Array.ccc)
  log('Object.getOwnPropertyNames(Array)',Object.getOwnPropertyNames(Array))
  log('Array.hasOwnProperty("ccc")',Array.hasOwnProperty('ccc'))
  log('Array.prototype',Array.prototype)
  log('Array.__proto__',Array.__proto__)
  log('Array.constructor',Array.constructor)
  log('[].constructor',[].constructor)

})()