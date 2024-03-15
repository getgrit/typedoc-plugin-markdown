import * as Handlebars from 'handlebars';

import { MarkdownTheme } from '../../theme';

export function relative_url(theme: MarkdownTheme) { Handlebars.registerHelper('relativeURL', function (url: string) {
    return url
      ? theme.publicPath
        ? theme.publicPath + url
        : theme.getRelativeUrl(url)
      : url;
  }); }
