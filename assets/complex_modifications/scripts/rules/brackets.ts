import { Karabiner, KarabinerKeyCodes, KarabinerModifierKeys } from '../helpers/model';
import { createJsonFilePLaceholder, createManipulators } from '../helpers/helpers';

/**
 * Replace bracjets [] and {} windows like
 */
export function createBracketsJsonFile(): Karabiner {
  const closeCurlyBracket = createManipulators({
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
  const closeSquareBracket = createManipulators({
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
  const openCurlyBracket = createManipulators({
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
  const openSquareBracket = createManipulators({
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
