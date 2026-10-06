import { firefoxRedoSample } from '../tests/samples';
import { KarabinerKeyCodes, KarabinerModifierKeys } from './model';
import { createRule } from './rules';

describe('rules', () => {
  it('should create a rule', () => {
    // Given
    const assignShortcuts = [
      {
        modifiers: {
          mandatory: [KarabinerModifierKeys.LEFT_CONTROL],
        },
        key_code: KarabinerKeyCodes.Y,
      },
    ];
    const assignKeys = [
      {
        modifiers: [KarabinerModifierKeys.LEFT_COMMAND, KarabinerModifierKeys.LEFT_SHIFT],
        key_code: KarabinerKeyCodes.Z,
      },
    ];
    // When
    const rule = createRule({ assignShortcuts, assignKeys });

    // Then
    expect(rule).toEqual(firefoxRedoSample());
  });
});
