import { Karabiner, KarabinerKeyCodes, KarabinerModifierKeys } from '../core/model';
import { createJsonFilePLaceholder, createRule } from '../core/rules';

/**
 * Replace bracjets [] and {} windows like
 */
export function createBracketsJsonFile(): Karabiner {
  const closeCurlyBracket = createRule({
    assignShortcuts: [
      {
        modifiers: {
          mandatory: [KarabinerModifierKeys.RIGHT_OPTION],
        },
        key_code: KarabinerKeyCodes.TIRET,
      },
      {
        modifiers: {
          mandatory: [KarabinerModifierKeys.LEFT_OPTION],
        },
        key_code: KarabinerKeyCodes.TIRET,
      },
      {
        modifiers: {
          mandatory: [KarabinerModifierKeys.RIGHT_COMMAND],
        },
        key_code: KarabinerKeyCodes.TIRET,
      },
      {
        modifiers: {
          mandatory: [KarabinerModifierKeys.LEFT_COMMAND],
        },
        key_code: KarabinerKeyCodes.TIRET,
      },
    ],
    assignKeys: [
      {
        modifiers: [KarabinerModifierKeys.RIGHT_OPTION],
        key_code: KarabinerKeyCodes.PARENTESE_FERMANTE,
      },
    ],
  });
  const closeSquareBracket = createRule({
    assignShortcuts: [
      {
        modifiers: {
          mandatory: [KarabinerModifierKeys.RIGHT_OPTION],
        },
        key_code: KarabinerKeyCodes.PARENTESE_FERMANTE,
      },
      {
        modifiers: {
          mandatory: [KarabinerModifierKeys.LEFT_OPTION],
        },
        key_code: KarabinerKeyCodes.PARENTESE_FERMANTE,
      },
      {
        modifiers: {
          mandatory: [KarabinerModifierKeys.RIGHT_COMMAND],
        },
        key_code: KarabinerKeyCodes.PARENTESE_FERMANTE,
      },
      {
        modifiers: {
          mandatory: [KarabinerModifierKeys.LEFT_COMMAND],
        },
        key_code: KarabinerKeyCodes.PARENTESE_FERMANTE,
      },
    ],
    assignKeys: [
      {
        modifiers: [KarabinerModifierKeys.RIGHT_OPTION, KarabinerModifierKeys.LEFT_SHIFT],
        key_code: KarabinerKeyCodes.PARENTESE_FERMANTE,
      },
    ],
  });
  const openCurlyBracket = createRule({
    assignShortcuts: [
      {
        modifiers: {
          mandatory: [KarabinerModifierKeys.RIGHT_OPTION],
        },
        key_code: KarabinerKeyCodes.SIMPLE_GUILLEMET,
      },
      {
        modifiers: {
          mandatory: [KarabinerModifierKeys.LEFT_OPTION],
        },
        key_code: KarabinerKeyCodes.SIMPLE_GUILLEMET,
      },
      {
        modifiers: {
          mandatory: [KarabinerModifierKeys.RIGHT_COMMAND],
        },
        key_code: KarabinerKeyCodes.SIMPLE_GUILLEMET,
      },
      {
        modifiers: {
          mandatory: [KarabinerModifierKeys.LEFT_COMMAND],
        },
        key_code: KarabinerKeyCodes.SIMPLE_GUILLEMET,
      },
    ],
    assignKeys: [
      {
        modifiers: [KarabinerModifierKeys.RIGHT_OPTION],
        key_code: KarabinerKeyCodes.PARENTESE_OUVRANTE,
      },
    ],
  });
  const openSquareBracket = createRule({
    assignShortcuts: [
      {
        modifiers: {
          mandatory: [KarabinerModifierKeys.RIGHT_OPTION],
        },
        key_code: KarabinerKeyCodes.PARENTESE_OUVRANTE,
      },
      {
        modifiers: {
          mandatory: [KarabinerModifierKeys.LEFT_OPTION],
        },
        key_code: KarabinerKeyCodes.PARENTESE_OUVRANTE,
      },
      {
        modifiers: {
          mandatory: [KarabinerModifierKeys.RIGHT_COMMAND],
        },
        key_code: KarabinerKeyCodes.PARENTESE_OUVRANTE,
      },
      {
        modifiers: {
          mandatory: [KarabinerModifierKeys.LEFT_COMMAND],
        },
        key_code: KarabinerKeyCodes.PARENTESE_OUVRANTE,
      },
    ],
    assignKeys: [
      {
        modifiers: [KarabinerModifierKeys.RIGHT_OPTION, KarabinerModifierKeys.LEFT_SHIFT],
        key_code: KarabinerKeyCodes.PARENTESE_OUVRANTE,
      },
    ],
  });
  return createJsonFilePLaceholder('Personal keys', 'Exchange {} and [] and add {} to external keys', [
    ...closeCurlyBracket,
    ...closeSquareBracket,
    ...openCurlyBracket,
    ...openSquareBracket,
  ]);
}
