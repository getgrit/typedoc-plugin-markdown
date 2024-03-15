/**
 * comments
 */
export class ReflectionClass {}

export const reflections = interface CallableReflection {
  (): string;
}

export const reflections = interface IndexableReflection {
  [index: number]: string;
}

export const reflections = enum EnumReflection {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
};

export class ImplementedClass implements ReflectionClass {}
