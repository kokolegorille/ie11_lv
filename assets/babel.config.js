// module.exports = api => {
//     api.cache(true);
  
//     const presets = [
//         '@babel/preset-env'
//     ]

//     const plugins = []
  
//     return {
//       presets,
//       plugins
//     };
//   }

module.exports = api => {
    api.cache(false);
  
    const presets = [
        [
            '@babel/preset-env',
            {
                "corejs": "3.12",
                "useBuiltIns": "entry",
                "targets": {
                    browsers: [
                        "edge >= 17",
                        "ie >= 11",
                    ]
                }
            }
        ]
    ]

    const plugins = [
        ["@babel/plugin-proposal-decorators",{"decoratorsBeforeExport":true}],
        ["@babel/plugin-proposal-class-properties"],
    ]
  
    return {
      presets,
      plugins
    };
  }

// module.exports = api => {
//     // api.cache(true);
//     api.cache(false);
  
//     const presets = [
//         // '@babel/preset-env'
//       [
//           '@babel/preset-env',
//           {
//             // "corejs": {"version": 3},
//             "corejs": {"version": 3},
//             // "useBuiltIns": "usage",
//             "useBuiltIns": "entry",
//             // "modules": false,
//             "targets": {
//                 // "edge": "17",
//                 // // "firefox": "60",
//                 // // "chrome": "67",
//                 // // "safari": "11.1",
//                 // "ie": "11"

//                 browsers: [
//                     "edge >= 16",
//                     "safari >= 9",
//                     "firefox >= 57",
//                     "ie >= 11",
//                     "ios >= 9",
//                     "chrome >= 49"
//                 ]

//                 // browsers: '> 1%, IE 11, not dead'
//             }
//           }
//         ]
//     ]

//     const plugins = [
//         ["@babel/plugin-proposal-decorators",{"decoratorsBeforeExport":true}],
//         ["@babel/plugin-proposal-class-properties"],

//         // ["@babel/transform-runtime", {"corejs": 3}]
//         // ["@babel/plugin-transform-runtime", {"corejs": 3}]
//         // ["@babel/transform-runtime"]

//         // [
//         //     "@babel/plugin-transform-runtime", 
//         //     {
//         //         "absoluteRuntime": false,
//         //         // "corejs": false,
//         //         "helpers": true,
//         //         "regenerator": true,
//         //         "corejs": 3
//         //     }
//         // ]

//         // ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
//         // ["@babel/plugin-proposal-class-properties", { "loose": true }]
//     ]
  
//     return {
//       presets,
//       plugins
//     };
//   }