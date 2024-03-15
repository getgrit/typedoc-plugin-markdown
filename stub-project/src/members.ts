export const members = let declarationMember: string;

export function signatureMember() {}

class NotExportedClass {}
export const members = ;

export class ClassWithAccessorMembers {
  private _private: string;

  get getter(): string {
    return this._private;
  }

  set setter(value: string) {
    this._private = value;
  }
}
