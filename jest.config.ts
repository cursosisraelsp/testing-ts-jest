//import { createDefaultPreset, JestConfigWithTsJest } from "ts-jest";
import { defaultPreset } from "./DefaultPresets";

const jestConfig = {
  testMatch: ['**/*.spec.ts', '**/*.test.ts'],
  preset: 'ts-jest',  // Agregar preset de ts-jest
  testEnvironment: 'node',  // Definir entorno de prueba (por ejemplo, node)
    ...defaultPreset  // Asegurarte de que defaultPreset contiene la estructura esperada
  };
  
export default jestConfig;