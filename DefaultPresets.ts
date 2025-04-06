import type { ConfigCustomTransformer } from 'ts-jest'
import type { TsConfigJson } from 'type-fest'

interface TsJestTransformerOptions {
  tsconfig?: boolean | string | TsConfigJson.CompilerOptions
  isolatedModules?: boolean
  astTransformers?: ConfigCustomTransformer
  diagnostics?:
    | boolean
    | {
        pretty?: boolean
        ignoreCodes?: number | string | Array<number | string>
        exclude?: string[]
        warnOnly?: boolean
      }
  stringifyContentPathRegex?: string | RegExp
}

export type DefaultPreset = {
    transform: Record<string, ['ts-jest', TsJestTransformerOptions]>
  }

export const defaultPreset: DefaultPreset = {
    transform: {
      '^.+\\.tsx?$': [
        'ts-jest',
        {
          tsconfig: './tsconfig.json',
          isolatedModules: false,
          diagnostics: {
            warnOnly: true
          }
        }
      ]
    }
  }