import * as Handlebars from 'handlebars';
import { DeclarationHierarchy, DeclarationReflection } from 'typedoc';
import { PageEvent } from 'typedoc';

export function if_show_type_hierarchy() { Handlebars.registerHelper(
    'ifShowTypeHierarchy',
    function (
      this: PageEvent<DeclarationReflection>,
      options: Handlebars.HelperOptions,
    ) {
      const typeHierarchy = this.model?.typeHierarchy as DeclarationHierarchy;
      return typeHierarchy && typeHierarchy.next
        ? options.fn(this)
        : options.inverse(this);
    },
  ); }
