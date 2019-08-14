var Hyphenopoly = {
    require: {
        "de": "Silbentrennungsalgorithmus",
        "en-us": "Supercalifragilisticexpialidocious"
    },
    setup: {
        defaultLanguage: "de",
        selectors: {
            ".remark-slide div:not(.dontHyphenate) > p": {
              minWordLength: 4
            },
            ".remark-slide div:not(.dontHyphenate) > ul li": {
              minWordLength: 4
            },
            ".remark-slide div:not(.dontHyphenate) > ol li": {
              minWordLength: 4
            }
        }
    }
};

