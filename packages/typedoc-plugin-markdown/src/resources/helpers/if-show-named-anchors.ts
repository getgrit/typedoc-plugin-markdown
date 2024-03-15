import * as Handlebars from 'handlebars';
import { PageEvent } from 'typedoc';
import { MarkdownTheme } from '../../theme';

export function if_show_named_anchors(theme: MarkdownTheme) { Handlebars.registerHelper(
    'ifShowNamedAnchors',
    function (this: PageEvent, options: Handlebars.HelperOptions) {
      return theme.namedAnchors ? options.fn(this) : options.inverse(this);
    },
  ); }
