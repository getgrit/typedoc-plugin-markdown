import * as Handlebars from 'handlebars';
import { ReflectionKind, SignatureReflection } from 'typedoc';

export function if_show_returns() { Handlebars.registerHelper(
    'ifShowReturns',
    function (this: SignatureReflection, options: Handlebars.HelperOptions) {
      return this.type && !this.parent?.kindOf(ReflectionKind.Constructor)
        ? options.fn(this)
        : options.inverse(this);
    },
  ); }
