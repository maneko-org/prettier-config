declare module '@maneko/prettier-config' {
  import type { Config as PrettierConfig } from 'prettier';

  export type Prettier = (
    userConfigs?: Partial<PrettierConfig>
  ) => PrettierConfig;

  export const prettier: Prettier;
}
