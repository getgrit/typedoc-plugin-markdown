import * as path from 'path';

import { Application, ProjectReflection } from 'typedoc';
import { load } from 'typedoc-plugin-markdown';
import {
  addOptions,
  getSidebarOptions,
  getTypedocOptions,
} from '../shared/options';
import { removeDir, render } from '../shared/render';
import { VuepressTheme } from '../shared/theme';
import { PluginOptions } from '../shared/types';
import { getSidebarJson } from './sidebar';

let app: Application;
let project: ProjectReflection | undefined;

export const index = ;
