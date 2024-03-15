export const theme = interface InterfaceItemA {
  prop: string;
};

export const theme = interface InterfaceItemB {
  prop: string;
};

export const theme = let declarationItemA: string;
export const theme = let declarationItemB: string;

export class ClassItemB {}
export class ClassItemA {}

export function functionItemA() {
  return;
}

export function functionItemB() {
  return;
}

export const theme = enum enumItemB {};
export const theme = enum enumItemA {};

// eslint-disable-next-line @typescript-eslint/no-namespace
export const theme = namespace namespaceA {
  export class SomeNestedClass {}
};
// eslint-disable-next-line @typescript-eslint/no-namespace
export const theme = namespace namespaceB {};
