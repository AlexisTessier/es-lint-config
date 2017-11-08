module.exports = function createConfigurationVariant({
    envNode = true,
    parserOptionsEcmaVersion = 8
} = {}) {
    return {
        "env": {
            "es6": true,
            "node": envNode
        },
        "parserOptions": {
            "ecmaVersion": parserOptionsEcmaVersion,
        },
        "rules": {
            "strict": ["error", "global"],
            "indent": ["error", "tab", {"SwitchCase": 1}],
            "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
            "func-style": ["error", "declaration", {
                "allowArrowFunctions": true
            }],
            "func-names": ["error", "always"],
            "default-case": "error",
            "no-fallthrough": "error",
            "no-empty-function": "error",

            "max-params": ["error", 4],
            
            "no-lone-blocks": "error",
            "no-unused-expressions": ["error", { "allowTernary": true }],
            "no-undef": "error",
            "getter-return": "error",
            "no-dupe-args": "error",
            "no-dupe-keys": "error",
            "no-ex-assign": "error",
            "no-compare-neg-zero": "error",
            "no-cond-assign": "error",
            "no-constant-condition": "error",
            "no-duplicate-case": "error",
            "no-extra-boolean-cast": "error",
            "no-func-assign": "error",
            "no-invalid-regexp": "error",
            "no-unreachable": "error",
            "no-unsafe-finally": "error",
            "no-template-curly-in-string": "error",
            "no-unsafe-negation": "error",
            "no-irregular-whitespace": "error",
            "use-isnan": "error",
            "valid-typeof": "error",
            "no-useless-escape": "error",
            "radix": "error",
            "prefer-promise-reject-errors": "error",
            "no-throw-literal": "error",
            "no-multi-spaces": "error",
            "no-this-before-super": "error",
            "constructor-super": "error",
            "no-dupe-class-members": "error",
            "no-duplicate-imports": "error",
            "no-new-symbol": "error",
            "no-useless-computed-key": "error",
            "no-useless-constructor": "error",
            "no-useless-rename": "error",
            "no-self-assign": "error",
            "no-sequences": "error",
            "no-unmodified-loop-condition": "error",
            "no-labels": "error",
            "no-useless-concat": "error",
            "no-implied-eval": "error",
            "no-invalid-this": "error",
            "no-extra-bind": "error",
            "no-trailing-spaces": "error",

            "no-warning-comments": ["warn", {
                "terms": ["todo", "fixme", "fix", "wip", "work in progress"],
                "location": "anywhere"
            }],
            "prefer-template": "warn",
            "no-alert": "warn",
            "valid-jsdoc": "warn",
            "no-eval": "warn",
            "no-console": "warn",
            "no-debugger": "warn"
        }
    }
}