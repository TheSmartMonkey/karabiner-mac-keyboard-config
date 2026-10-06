import { Karabiner, KarabinerDevices, KarabinerKeyCodes, KarabinerModifierKeys } from '../core/model';
import { createJsonFilePLaceholder, createRule } from '../core/rules';

/**
 * Sur le Keychron B1 Pro, la touche en haut à gauche écrit @ et #,
 * celle à côté du shift écrit < et >. Le clavier du Mac ne change pas.
 */
export function createKeychronB1ProJsonFile(): Karabiner {
  const inferieurVersArobas = createRule({
    assignShortcuts: [
      {
        modifiers: {
          optional: [KarabinerModifierKeys.ANY],
        },
        key_code: KarabinerKeyCodes.INFERIEUR,
      },
    ],
    assignKeys: [
      {
        key_code: KarabinerKeyCodes.AROBAS,
      },
    ],
    onlyAppliesForTheseDevices: [KarabinerDevices.KEYCHRON_B1_PRO],
  });
  const arobasVersInferieur = createRule({
    assignShortcuts: [
      {
        modifiers: {
          optional: [KarabinerModifierKeys.ANY],
        },
        key_code: KarabinerKeyCodes.AROBAS,
      },
    ],
    assignKeys: [
      {
        key_code: KarabinerKeyCodes.INFERIEUR,
      },
    ],
    onlyAppliesForTheseDevices: [KarabinerDevices.KEYCHRON_B1_PRO],
  });
  return createJsonFilePLaceholder('Personal keys', 'Keychron B1 Pro : @ et # en haut à gauche, < et > à côté du shift', [
    ...inferieurVersArobas,
    ...arobasVersInferieur,
  ]);
}
