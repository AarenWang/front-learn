# L3 - 函数与 this

## 本课时目标
- 掌握 TypeScript 中函数的类型声明和签名
- 理解函数重载的使用场景和语法
- 深入理解 `this` 参数的概念和应用
- 实现一个类型安全的事件委托工具函数

## 1. 函数类型签名

### 1.1 基本函数类型声明

```typescript
// 函数声明类型
function add(a: number, b: number): number {
  return a + b;
}

// 函数表达式类型
const multiply = function(a: number, b: number): number {
  return a * b;
};

// 箭头函数类型
const divide = (a: number, b: number): number => a / b;

// 函数类型别名
type MathOperation = (a: number, b: number) => number;

const subtract: MathOperation = (a, b) => a - b;

// 对象中的方法类型
const calculator = {
  add: (a: number, b: number): number => a + b,
  multiply: function(a: number, b: number): number {
    return a * b;
  }
};
```

### 1.2 可选参数和默认参数

```typescript
// 可选参数
function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return `${firstName} ${lastName}`;
  }
  return firstName;
}

// 默认参数
function createGreeting(name: string, greeting: string = 'Hello'): string {
  return `${greeting}, ${name}!`;
}

// 剩余参数
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

// 参数解构
function processUser({ name, age }: { name: string; age: number }): string {
  return `User ${name} is ${age} years old`;
}
```

## 2. 函数重载

### 2.1 基本重载语法

```typescript
// 函数重载：为同一个函数提供多个类型签名
function processInput(input: string): string;
function processInput(input: number): number;
function processInput(input: boolean): boolean;

function processInput(input: string | number | boolean): string | number | boolean {
  if (typeof input === 'string') {
    return input.toUpperCase();
  }
  if (typeof input === 'number') {
    return input * 2;
  }
  return !input;
}

// 使用
const result1 = processInput('hello');    // string
const result2 = processInput(42);         // number
const result3 = processInput(true);       // boolean
```

### 2.2 实际应用场景

```typescript
// HTTP 请求库的重载设计
interface ApiResponse<T> {
  data: T;
  status: number;
  headers: Record<string, string>;
}

// GET 请求重载
function fetchApi(url: string): Promise<ApiResponse<any>>;
function fetchApi<T>(url: string, parser: (data: any) => T): Promise<ApiResponse<T>>;

async function fetchApi<T>(
  url: string, 
  parser?: (data: any) => T
): Promise<ApiResponse<T>> {
  const response = await fetch(url);
  const rawData = await response.json();
  const data = parser ? parser(rawData) : rawData;
  
  return {
    data,
    status: response.status,
    headers: Object.fromEntries(response.headers.entries())
  };
}

// 使用示例
const userResponse = await fetchApi('/api/users', (data) => ({
  id: data.id,
  name: data.name
}));

const rawResponse = await fetchApi('/api/status');
```

### 2.3 重载的最佳实践

```typescript
// 好的重载设计：参数数量不同
function createElement(tag: string): HTMLElement;
function createElement(tag: string, props: Record<string, any>): HTMLElement;
function createElement(tag: string, props: Record<string, any>, children: any[]): HTMLElement;

// 避免：参数数量相同但类型不同
// ❌ 容易产生歧义
// function getValue(key: string): string;
// function getValue(key: number): number;

// ✅ 更好的设计
function getValue<T>(key: string): T;
```

## 3. this 参数

### 3.1 this 的类型问题

```typescript
// 在普通函数中 this 的类型推断问题
class Counter {
  private count = 0;
  
  // ❌ this 的类型是 any
  increment() {
    this.count++;
  }
  
  // ❌ 在回调中 this 丢失
  startCounting() {
    setTimeout(function() {
      // this 是 window 或 undefined
      this.count++; // 错误
    }, 1000);
  }
}
```

### 3.2 使用 this 参数

```typescript
// 显式声明 this 的类型
class Counter {
  private count = 0;
  
  // ✅ 显式声明 this 类型
  increment(this: Counter): void {
    this.count++;
  }
  
  // ✅ 在回调中保持 this 类型
  startCounting(this: Counter): void {
    setTimeout(() => {
      this.count++; // ✅ 正确
    }, 1000);
  }
  
  // ✅ 使用 bind 时也能保持类型安全
  getCount(this: Counter): number {
    return this.count;
  }
}
```

### 3.3 this 参数在实际应用中的使用

```typescript
// 事件处理器中的 this
interface EventHandler<T = Event> {
  (this: HTMLElement, event: T): void;
}

// 工具函数
function addEventListener<T = Event>(
  element: HTMLElement,
  event: string,
  handler: EventHandler<T>
): void {
  element.addEventListener(event, handler);
}

// 使用
const button = document.getElementById('myButton')!;

addEventListener.call(button, 'click', function(this: HTMLElement, e) {
  console.log('Button clicked:', this.id);
  this.classList.add('active');
});
```

## 4. 实战：事件委托工具函数

### 4.1 需求分析

创建一个类型安全的事件委托工具函数，支持：
- 委托到父元素
- 选择器匹配
- 自定义事件类型
- 回调函数的 this 绑定

### 4.2 实现步骤

```typescript
// 第一步：定义基础类型
interface DelegateOptions {
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
}

type EventSelector = string;
type EventType = keyof HTMLElementEventMap;

// 第二步：定义事件处理器类型
interface DelegateHandler<T extends EventType = EventType, E = HTMLElementEventMap[T]> {
  (this: HTMLElement, event: E, target: HTMLElement): void;
}

// 第三步：函数重载声明
function delegateEvent<T extends EventType>(
  parent: HTMLElement,
  selector: EventSelector,
  eventType: T,
  handler: DelegateHandler<T>
): void;

function delegateEvent<T extends EventType>(
  parent: HTMLElement,
  selector: EventSelector,
  eventType: T,
  options: DelegateOptions,
  handler: DelegateHandler<T>
): void;

// 第四步：实现函数
function delegateEvent<T extends EventType>(
  parent: HTMLElement,
  selector: EventSelector,
  eventType: T,
  optionsOrHandler: DelegateOptions | DelegateHandler<T>,
  maybeHandler?: DelegateHandler<T>
): void {
  const options: DelegateOptions = typeof optionsOrHandler === 'object' 
    ? optionsOrHandler 
    : {};
  const handler: DelegateHandler<T> = typeof optionsOrHandler === 'function' 
    ? optionsOrHandler 
    : maybeHandler!;

  parent.addEventListener(eventType, function(this: HTMLElement, event: Event) {
    const target = (event as any).target as HTMLElement;
    const matchedElement = target.closest(selector);
    
    if (matchedElement && this.contains(matchedElement)) {
      handler.call(this, event as HTMLElementEventMap[T], matchedElement);
    }
  }, options);
}
```

### 4.3 使用示例

```typescript
// 基础使用
const container = document.getElementById('container')!;

delegateEvent(container, '.button', 'click', function(event, target) {
  console.log('Button clicked:', target.textContent);
  target.classList.add('clicked');
});

// 带选项的使用
delegateEvent(
  container,
  '.link',
  'click',
  { capture: true },
  function(event, target) {
    event.preventDefault();
    console.log('Link clicked:', target.href);
  }
);

// 自定义事件类型
interface CustomDataEvent extends CustomEvent {
  detail: { id: string; value: number };
}

delegateEvent(
  container,
  '.data-item',
  'customdata' as any,
  function(this: HTMLElement, event: CustomDataEvent, target) {
    console.log('Custom data:', event.detail);
    this.setAttribute('data-last-id', event.detail.id);
  }
);
```

## 5. 练习与作业

### 5.1 基础练习

1. **函数重载练习**
   ```typescript
   // 实现一个 formatValue 函数，支持：
   // - formatValue(number): 格式化为货币字符串
   // - formatValue(Date): 格式化为日期字符串
   // - formatValue(string[]): 用逗号连接
   ```

2. **this 参数练习**
   ```typescript
   // 为以下 Array 扩展方法添加类型
   interface Array<T> {
     first(this: Array<T>): T | undefined;
     last(this: Array<T>): T | undefined;
     groupBy<K extends keyof T>(this: Array<T>, key: K): Record<string, T[]>;
   }
   ```

### 5.2 进阶练习

3. **事件系统设计**
   ```typescript
   // 设计一个类型安全的 EventEmitter 类
   class EventEmitter<T extends Record<string, any[]>> {
     // 实现 on, off, emit 方法
     // 支持事件名称的类型检查
     // 支持事件参数的类型检查
   }
   ```

### 5.3 实战作业

4. **DOM 工具库**
   - 创建一个类型安全的 DOM 查询库
   - 包含 querySelector, querySelectorAll, closest 等方法
   - 支持泛型来指定返回的元素类型
   - 添加链式调用支持

## 6. 最佳实践

### 6.1 函数设计原则

```typescript
// ✅ 明确的参数类型和返回类型
function calculateArea(width: number, height: number): number {
  return width * height;
}

// ✅ 使用泛型提高复用性
function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// ✅ 函数重载要明确区分
function format(input: string): string;
function format(input: number): string;
function format(input: Date): string;
```

### 6.2 this 使用原则

```typescript
// ✅ 在类方法中显式声明 this
class UserManager {
  private users: User[] = [];
  
  findUser(this: UserManager, id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }
}

// ✅ 在工具函数中谨慎使用 this
function createLogger(this: Console, prefix: string) {
  return (message: string) => {
    this.log(`${prefix}: ${message}`);
  };
}

// ❌ 避免在箭头函数中使用 this 参数
// const bad = (this: SomeType, param: string) => { /* ... */ };
```

### 6.3 重载设计原则

```typescript
// ✅ 参数数量不同的重载
function createElement(tag: string): HTMLElement;
function createElement(tag: string, props: object): HTMLElement;
function createElement(tag: string, props: object, children: any[]): HTMLElement;

// ✅ 使用泛型替代复杂的重载
function getValue<T>(key: string): T | null;

// ❌ 避免容易混淆的重载
// function process(input: string): number;
// function process(input: number): string; // 容易混用
```

## 7. 课程总结

### 7.1 核心知识点回顾

1. **函数类型签名**：支持多种声明方式，包括函数声明、表达式和箭头函数
2. **函数重载**：为同一函数提供多个类型签名，提高类型安全性
3. **this 参数**：显式声明 this 类型，解决上下文丢失问题
4. **实践应用**：事件委托工具函数的设计与实现

### 7.2 关键概念

- **类型推断**：TypeScript 能自动推断函数返回类型
- **类型兼容性**：函数类型的协变和逆变规则
- **上下文类型**：根据使用位置推断函数参数类型
- **泛型约束**：限制泛型类型的范围

### 7.3 下节预告

下一课时将学习接口与类型别名，包括：
- interface 和 type 的区别与选择
- 交叉类型和联合类型
- 类型映射和条件类型基础
- 实际项目中的类型建模技巧

### 7.4 扩展阅读

- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)
- [TypeScript Deep Dive - This parameters](https://basarat.gitbook.io/typescript/type-system/this#this-parameters)
- [Practical TypeScript Migration Guide](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html)