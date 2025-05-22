# mac-keys

My mac keys for Karabiner config

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
