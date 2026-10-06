# scripts/tests

Fixtures comparées par les tests. Elles décrivent le JSON Karabiner, donc les valeurs de `key_code`, pas les noms français des enums.

`firefoxRedoSample` décrit aujourd'hui un document complet `{ title, rules }`. `createRule` renvoie une liste de manipulators. Cet écart fait échouer `scripts/core/rules.test.ts`. Si tu modifies ce sample, aligne-le sur l'appel réel du test, documenté dans `docs/bonnes-pratiques.md`, section Tests.

Les nouveaux attendus restent des fonctions dans ce dossier. Le test qui les consomme reste à côté du code exercé.
