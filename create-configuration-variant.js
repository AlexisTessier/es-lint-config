module.exports = function createConfigurationVariant({
    envNode = true
} = {}) {
    return {
        "env": {
            "es6": true,
            "node": envNode
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

            //main parameter, options, callback, dependency injection
            "max-params": ["error", 4],
            
            "no-lone-blocks": "error",
            "no-unused-expressions": ["error", { "allowTernary": true }]
        }
    }
}