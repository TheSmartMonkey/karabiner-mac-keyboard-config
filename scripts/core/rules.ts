import { Applications, Karabiner, KarabinerDeviceIdentifier, KarabinerManipulators, KarabinerModifier } from './model';

// TODO: Regroupe in 1 file
export function createJsonFilePLaceholder(title: string, description: string, manipulators: KarabinerManipulators[]): Karabiner {
  return { title, rules: [{ description, manipulators }] };
}

/**
 * Assign new shortcuts
 * @param assignShortcuts all keys you want to assign a shortcut
 * @param assignKeys the shortcut you want to assign
 * @param onlyAppliesForThisApplications
 * @param onlyAppliesForTheseDevices
 * @returns
 */
export function createRule({
  assignShortcuts,
  assignKeys,
  onlyAppliesForThisApplications,
  onlyAppliesForTheseDevices,
}: {
  assignShortcuts: KarabinerModifier[];
  assignKeys: KarabinerModifier[];
  onlyAppliesForThisApplications?: Applications[];
  onlyAppliesForTheseDevices?: KarabinerDeviceIdentifier[];
}): KarabinerManipulators[] {
  return assignShortcuts.map((assignShortcut) => {
    return {
      type: 'basic',
      from: assignShortcut,
      to: assignKeys,
      conditions: createManipulatorsConditions({ onlyAppliesForThisApplications, onlyAppliesForTheseDevices }),
    };
  });
}

function createManipulatorsConditions({
  onlyAppliesForThisApplications,
  onlyAppliesForTheseDevices,
}: {
  onlyAppliesForThisApplications?: Applications[];
  onlyAppliesForTheseDevices?: KarabinerDeviceIdentifier[];
}): any[] {
  const conditions: any[] = [];
  if (onlyAppliesForThisApplications) {
    conditions.push({
      type: 'frontmost_application_if',
      bundle_identifiers: onlyAppliesForThisApplications,
    });
  }
  if (onlyAppliesForTheseDevices) {
    conditions.push({
      type: 'device_if',
      identifiers: onlyAppliesForTheseDevices,
    });
  }
  return conditions;
}
