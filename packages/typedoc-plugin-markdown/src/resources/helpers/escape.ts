import * as Handlebars from 'handlebars';
import { escapeChars } from '../../utils';

export function escape() { Handlebars.registerHelper('escape', function (str: string) {
    return escapeChars(str);
  }); }
