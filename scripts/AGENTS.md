# scripts

Point d'entrée du générateur. Le détail des couches est dans `docs/architecture.md`. Les conventions d'écriture sont dans `docs/bonnes-pratiques.md`.

`main.ts` est le seul orchestrateur. Il parcourt `jsonFileNames`, sérialise `jsonFiles[name]` avec une indentation de 2, et écrit `assets/complex_modifications/<nom>.json` via `createFile`.

- Ajouter un fichier ici ne le fait pas générer. L'enregistrement se fait dans `scripts/core/model.ts`.
- Ne pas écrire d'autres chemins, ni d'autres noms que ceux du registre.
- Ne pas rendre `main` synchrone ni changer `createFile` : l'écriture actuelle est le callback de `fs.writeFile`.
