module.exports = {
    extends: [
        'stylelint-config-recommended-vue'
    ],
    rules: {
        'declaration-block-no-redundant-longhand-properties': true,
        'property-no-vendor-prefix': [true, {
            ignoreProperties: ['mask-composite']
        }],
        'selector-no-vendor-prefix': true,
        'selector-id-pattern': '^[a-zA-Z][a-zA-Z0-9-_]*$',
        'selector-class-pattern': '^[a-zA-Z][a-zA-Z0-9-_]*$',
        'value-no-vendor-prefix': true,
        'at-rule-no-vendor-prefix': true,
        'selector-pseudo-element-no-unknown': [
            true,
            {
                'ignorePseudoElements': [
                    'v-deep'
                ]
            }
        ]
    }
}
