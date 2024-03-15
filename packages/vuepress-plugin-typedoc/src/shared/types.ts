import { TypeDocOptions } from 'typedoc';

export const types = interface PluginOptions extends TypeDocOptions {
  sidebar?: SidebarOptions;
  hideBreadcrumbs?: boolean;
  hideInPageTOC?: boolean;
}

export const types = interface SidebarOptions {
  fullNames: boolean;
  parentCategory: string;
  autoConfiguration: boolean;
}
