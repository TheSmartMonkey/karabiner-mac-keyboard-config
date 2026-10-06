# mac-keys

My mac keys for Karabiner config

Les conventions sont dans [docs/architecture.md](docs/architecture.md) et [docs/bonnes-pratiques.md](docs/bonnes-pratiques.md). Les agents lisent [AGENTS.md](AGENTS.md) et le fichier `AGENTS.md` le plus proche du fichier modifié.

## Getting started

Dans Karabiner-Elements, onglet **Devices**, cocher **Modify events** sur le Keychron B1 Pro. S’il apparaît plusieurs fois, cocher l’entrée qui reçoit les touches. Le câble, le Bluetooth et le 2,4 GHz sont trois appareils distincts : la case cochée pour l’un ne vaut pas pour les autres.

## vscode

### Import extensions

```sh
code --list-extensions | xargs -L 1 echo code --install-extension
```

### Ide like vscode or cursor terminal ctrl + c

Modify this identifier

```json
"from": {
    "key_code": "c",
    "modifiers": {
        "mandatory": [
            "control"
        ],
        "optional": [
            "any"
        ]
    }
},
"to": [
    {
        "key_code": "c",
        "modifiers": [
            "left_command"
        ]
    }
]
```

Add your app in the bundle_identifiers

you can find the bundle identifier in the app by running `osascript -e 'id of app "Your App"'`
