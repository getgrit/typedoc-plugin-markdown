import { ClassWithTypeParams } from './generics';
import { _someCallback_ } from './signatures';

export const types = let htmlElement: HTMLElement;

export const types = let externalReference: HTMLElement;

export const types = const externalReferenceInsideTypeParams = new ClassWithTypeParams<
  HTMLElement,
  Error
>();

export const types = let stringType: string;

export const types = const stringLiteralType = 'blue';

export const types = type unionType = 'ease-in' | 'ease-out';

export const types = type unionTypeWithSymbols =
  | ' '
  | 'string'
  | 'strong|with|pipes'
  | 'type`with`backticks'
  | '*';

export const types = type unionTypeWithSymbolsDeclarations = {
  bar: ' ' | 'string' | 'strong|with|pipes' | 'type`with`backticks' | '*';
};

export const types = let literalType: {
  valueZ: string;
  valueY: { (): string };
  valueX: {
    valueZ: string;
    valueY: { (z: string): { a: string; b: string } };
    valueA: number[];
  };
  valueA?: number;
  valueB?: boolean;
};

export const types = const objectLiteralType = {
  '<': '<foo>',
  '<foo>': 'foo',
  '\\n': 'foo',
  '|': 'foo',
  '~': 'foo',
  prop_with_underscore: 'foo',
  'prop|with|pipes': 'foo',
  'prop`with`backticks': 'foo',
  _: 'foo',
  valueZ: '_foo_',
  valueY: function (
    cbParam: _someCallback_,
    unionParam: 'a' | 'b',
    _undercoreParam_: string,
  ) {
    return 'foo';
  },
  valueX: {
    valueZ: 'foo',
    valueY: (z: string) => {
      return { a: 'test', b: z };
    },
    valueA: [100, 200, 300],
  },
  valueA: 100,
  valueB: true,
};

export const types = let tupleType: [string, number];

export class IntersectionClassA {}
export class IntersectionClassB {}

export const types = type intersectionType = IntersectionClassA & IntersectionClassB;

export const types = const arrayType: string[] = ['Apple', 'Orange', 'Banana'];

export function restUnionTypes(
  arg: boolean[] | number,
  ...args: (string | number)[]
): any {
  return null;
}

export function generic<T>(arg: T): T {
  return arg;
}

export const types = const functionReflectionType: <T>(arg: T) => T = generic;

export const types = const typeOperatorType: unique symbol = Symbol.for('__type__');

export const types = type objectLiteralUnionType = string | { z: string };

export const types = type PartialMappedType<T> = {
  [P in keyof T]?: T[P];
};

export const types = type ReadonlyMapedType<T> = {
  readonly [P in keyof T]: T[P];
};

export const types = type ConditionalType<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : 'object';

export const types = type Bar<T, R> = (foos: ConditionalType<T>[]) => R; // defined elsewhere
export const types = const baz: Bar<string, string> = (foos) => '...';

export const types = const fooBigInt = BigInt(100); // the BigInt function
export const types = const barBigInt = 100n; // a BigInt literal
