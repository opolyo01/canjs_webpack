module.exports = {
    lesslint: {
        src: ['src/styles/*.less'],
        options: {
            csslint: {
                'known-properties': false
            }
        }
    }
};