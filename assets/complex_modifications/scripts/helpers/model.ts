import { createBracketsJsonFile } from '../rules/brackets';
import { createFirefoxRedoJsonFile } from '../rules/firefox-redo';
import { createWindowsNumberKeysJsonFile } from '../rules/pc-replace-keys';

export enum KarabinerModifierKeys {
  ANY = 'any',
  RIGHT_OPTION = 'right_option',
  LEFT_OPTION = 'left_option',
  RIGHT_SHIFT = 'right_shift',
  LEFT_SHIFT = 'left_shift',
  RIGHT_COMMAND = 'right_command',
  LEFT_COMMAND = 'left_command',
  RIGHT_CONTROL = 'right_control',
  LEFT_CONTROL = 'left_control',
}

export enum KarabinerKeyCodes {
  TIRET = 'equal_sign',
  PARENTESE_OUVRANTE = '5',
  PARENTESE_FERMANTE = 'hyphen',
  SIMPLE_GUILLEMET = '4',
  PARAGRAPHE = '6',
  Y = 'y',
  Z = 'w',
  W = 'z',
}

export enum Applications {
  FIREFOX = '^org\\.mozilla\\.firefox$',
}

export enum jsonFileNames {
  // PC_OPTION = 'pc-option-keys',
  PC_REPLACE = 'pc-replace-keys',
  BRACKETS = 'brackets',
  FIREFOX_REDO = 'firefox-redo',
}

export const jsonFiles: Record<string, Karabiner> = {
  // 'pc-option-keys': {} as Karabiner,
  'pc-replace-keys': createWindowsNumberKeysJsonFile(),
  brackets: createBracketsJsonFile(),
  'firefox-redo': createFirefoxRedoJsonFile(),
};

export type Karabiner = {
  title: string;
  rules: [
    {
      description: string;
      manipulators: KarabinerManipulators[];
    },
  ];
};

export type KarabinerManipulators = {
  type: 'basic';
  from: KarabinerModifier; // Shortcut you want
  to: KarabinerModifier[]; // Character you want
};

export type KarabinerModifier = {
  modifiers: KarabinerMandatoryModifier | KarabinerModifierKeys[];
  key_code: KarabinerKeyCodes;
};

export type KarabinerMandatoryModifier = {
  mandatory?: KarabinerModifierKeys[];
  optional?: KarabinerModifierKeys[];
};
