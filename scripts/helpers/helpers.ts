import { Applications, Karabiner, KarabinerManipulators, KarabinerModifier } from './model';

export function createJsonFilePLaceholder(title: string, description: string, manipulators: KarabinerManipulators[]): Karabiner {
  return { title, rules: [{ description, manipulators }] };
}

/**
 * Assign new shortcuts
 * @param assignShortcuts all keys you want to assign a shortcut
 * @param assignKeys the shortcut you want to assign
 * @param onlyAppliesForThisApplications 
 * @returns 
 */
export function createManipulators({
  assignShortcuts,
  assignKeys,
  onlyAppliesForThisApplications,
}: {
  assignShortcuts: KarabinerModifier[];
  assignKeys: KarabinerModifier[];
  onlyAppliesForThisApplications?: Applications[];
}): KarabinerManipulators[] {
  return assignShortcuts.map((assignShortcut) => {
    return {
      type: 'basic',
      from: assignShortcut,
      to: assignKeys,
      conditions: createManipulatorsConditions({ onlyAppliesForThisApplications }),
    };
  });
}

function createManipulatorsConditions({ onlyAppliesForThisApplications }: { onlyAppliesForThisApplications?: Applications[] }): any[] {
  const conditions: any[] = [];
  if (onlyAppliesForThisApplications) {
    conditions.push({
      type: 'frontmost_application_if',
      bundle_identifiers: onlyAppliesForThisApplications,
    });
  }
  return conditions;
}
