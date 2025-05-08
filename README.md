# 1. What Are Some Differences Between Interfaces and Types in TypeScript?

If we want to know the differences between interfaces and types, first we have to learn what types and interfaces are.

If I tell you in short, in TypeScript, `type` is used to create a **type alias**. Type alias means giving a custom name to a type or a group of types. It’s like defining our own data vocabulary where we give our custom name and make it our own personal type.

### Example 1:

```ts
type Name = string;
const myName: Name = "Khushi";
```

### Example 2:

```ts
type Student = {
  name: string;
  age: number;
  contactNo?: string;
  gender: string;
  address: string;
};

const student1: Student = {
  name: "Tom",
  age: 50,
  gender: "male",
  contactNo: "0170000000",
  address: "Dhaka",
};
```

---

An interface is also similar to a type. It's a way to define the shape or structure of an object. It tells us which properties and types an object must have.

### Example:

```ts
interface Person {
  name: string;
  age: number;
}

const user: Person = {
  name: "Alice",
  age: 25,
};
```

Both interface and type are powerful tools that help us define the shape of data. At first glance, they might seem similar, but there are important differences between them. So now let’s learn about the core differences between interface and type.

---
## Differences Between Interfaces and Types: 

## 1. Type Representation

- **Type alias** can define:
  - primitive types (`string`, `number`, `boolean`)
  - union types (`string | number`)
  - intersection types (`TypeA & TypeB`)
  - tuple types (`[number, string]`)

You can't define these using interfaces. Interfaces are primarily used for defining the shape of objects and class contracts.

---

## 2. Syntax Differences

Both `type` and `interface` can describe the shape of an object or a function signature. But their syntax differs.

### Type Alias:

```ts
type Point = {
  x: number;
  y: number;
};

type SetPoint = (x: number, y: number) => void;
```

### Interface:

```ts
interface Point {
  x: number;
  y: number;
}

interface SetPoint {
  (x: number, y: number): void;
}
```

---

## 3. Extending and Composing

**Interfaces** are built to be extended using the `extends` keyword:

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}
```

**Types** can be extended using intersection (`&`) types:

```ts
type Person = {
  name: string;
};

type Employee = Person & {
  employeeId: number;
};
```

---

## 4. Declaration Merging

**Interfaces support merging.** If we declare the same interface more than once, TypeScript merges them:

```ts
interface Animal {
  name: string;
}

interface Animal {
  age: number;
}

const dog: Animal = { name: "Rex", age: 5 };
```

**Types cannot be merged.** Type aliases cannot be declared more than once — TypeScript will throw an error.

```ts
type Animal = { name: string };
//  Error: Duplicate identifier
// type Animal = { age: number };
```

---

## 5. Object-Oriented Programming

In object-oriented programming, **interfaces** are better suited because they can extend classes and support inheritance. This makes interfaces an ideal choice when working with OOP paradigms, as they provide a more structured approach and ensure consistency across derived classes.

---

## 6. Use Cases Comparison

| Feature                | Interface | Type        |
|------------------------|-----------|-------------|
| Object shapes          | Yes       | Yes         |
| Functions              | Yes       | Yes         |
| Unions & Intersections | No        | Yes         |
| Primitives             | No        | Yes         |
| Declaration merging    | Yes       | No          |
