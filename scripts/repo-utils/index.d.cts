export const USE_ESM: boolean;
export const IS_BABEL_8: () => boolean;
export function commonJS(metaUrl: string): {
  __dirname: string;
  __filename: string;
  require: NodeRequire;
};
export const repoRoot: string;
export const itNoESM: jest.It;
export const itESM: jest.It;
export function itGteNoESM(version: string): jest.It;
export function itGteESM(version: string): jest.It;
export function itGte(version: string): jest.It;
export function itLt(version: string): jest.It;
export function itNegate(it: jest.It): jest.It;
export function itSatisfies(version: string): jest.It;
export function itBabel7GteNoESM(version: string): jest.It;
export const itNoWin32: jest.It;
export const itBabel8: jest.It;
export const itBabel7: jest.It;
export const itBabel7NoESM: jest.It;
export const itDummy: jest.It;
export const describeBabel7: jest.Describe;
export const describeBabel7NoESM: jest.Describe;
export const describeBabel8: jest.Describe;
export function describeGte(version: string): jest.Describe;
export function describeSatisfies(version: string): jest.Describe;
