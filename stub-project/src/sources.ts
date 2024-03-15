export const sources = interface SomeInterface {
  prop: string;
};

export class SomeClass implements SomeInterface {
  prop: string;
}

export class AnotherClass extends SomeClass {
  prop: string;
  constructor() {
    super();
  }
}

export const sources = interface AnotherInterface extends SomeInterface, SomeClass {
  prop2: number;
}
