// function filterTree(treeData, f) {
//     treeData.forEach((node, index) => {
//       // eslint-disable-next-line no-unused-vars
//       const { children, ...rest } = node;
//       if (!f(node)) {
//         treeData.splice(index, 1);
//       }
//       if (children && children.length > 0) {
//         filterTree(children, f);
//       }
//     });
//   }


//   function flatTree(tree, pid = null) {
//     if (!Array.isArray(tree)) {
//       throw Error('输入的tree的数据类型期望是个数组');
//     }
//     return tree.reduce((prev, curr) => {
//       const { children, ...rest } = curr;
//       if (!children) {
//         return [...prev, { ...rest, pid }];
//       }
//       return [...prev, { ...rest, pid }].concat(flatTree(children, curr.id));
//     }, []);
//   }

//   const treeData = [
//     {
//       children: [
//         {
//           children: null,
//           icon: 'doctor',
//           id: 'A5DBD582ED4946A3AFD7A4DFA232DC78',
//           name: '医师门户',
//           path: '/gateway/doctor',
//           sort: 1100,
//           type: '0',
//         },
//       ],
//       icon: null,
//       id: '675BD9795B00416AB1FA0451EE07859A',
//       name: '门户管理',
//       path: null,
//       sort: 1000,
//       type: '0',
//     },

//     {
//       children: [
//         {
//           children: [
//             {
//               children: null,
//               icon: null,
//               id: '947D15083DB94EF6808C7A42364C6A93',
//               name: '机构管理',
//               path: '/department/department',
//               sort: 13110,
//               type: '0',
//             },
//             {
//               children: null,
//               icon: null,
//               id: '2F82FEDD76A241488A5D19ACBE55ED50',
//               name: '证照管理',
//               path: '/department/license',
//               sort: 13120,
//               type: '0',
//             },
//             {
//               children: null,
//               icon: null,
//               id: '8E178DC71BE64A7497D9FDF079544433',
//               name: '生产厂家',
//               path: '/department/globeManufactures',
//               sort: 13130,
//               type: '0',
//             },
//             {
//               children: null,
//               icon: null,
//               id: 'F4879C685BFC4DE0B46E2236397DC147',
//               name: '医院管理',
//               path: '/department/hospitalManage',
//               sort: 13150,
//               type: '0',
//             },
//             {
//               children: null,
//               icon: null,
//               id: 'BE66370D29A14075BA32C0B57E9A23A0',
//               name: '区域管理',
//               path: '/department/areaManage',
//               sort: 13155,
//               type: '0',
//             },
//             {
//               children: null,
//               icon: null,
//               id: 'B978C33FA8454C05820AB6FCCC1C3922',
//               name: '国家管理',
//               path: '/department/countryManage',
//               sort: 13160,
//               type: '0',
//             },
//             {
//               children: null,
//               icon: null,
//               id: '783455144FB64D2690F65B902DDC8708',
//               name: '行政区划',
//               path: '/department/administrativeArea',
//               sort: 13165,
//               type: '0',
//             },
//           ],
//           icon: 'department',
//           id: '8161578D35B94080A67E6C416993139E',
//           name: '机构',
//           path: '/department',
//           sort: 13100,
//           type: '0',
//         },
//         {
//           children: [
//             {
//               children: null,
//               icon: null,
//               id: 'FE76499CD92C41D3B8BC4C9305B02580',
//               name: '人员档案',
//               path: '/person/personInfo',
//               sort: 13210,
//               type: '0',
//             },
//           ],
//           icon: 'role',
//           id: '7608FF0F021E47EE88C56C6E08D070BB',
//           name: '人员',
//           path: '/person',
//           sort: 13200,
//           type: '0',
//         },
//         {
//           children: [
//             {
//               children: null,
//               icon: null,
//               id: '805F201EA81F42AD9DD7A90A7F50B6F6',
//               name: '全局疫苗',
//               path: '/vaccineSetting/globeVaccines',
//               sort: 13310,
//               type: '0',
//             },
//             {
//               children: null,
//               icon: null,
//               id: 'AA3E2D87A7934B79BBF039191277D9E8',
//               name: '疫苗属性',
//               path: '/vaccineSetting/manufacturesVaccineInfo',
//               sort: 13320,
//               type: '0',
//             },
//             {
//               children: null,
//               icon: null,
//               id: '6586F04652CA47898983E6403D128E33',
//               name: '价格管理',
//               path: '/vaccineSetting/priceBook',
//               sort: 13330,
//               type: '0',
//             },
//             {
//               children: null,
//               icon: null,
//               id: 'AA53D86095BE4C63B8A147C64FB1D1E5',
//               name: '类别管理',
//               path: '/vaccineSetting/vaccineTypeManage',
//               sort: 13340,
//               type: '0',
//             },
//             {
//               children: null,
//               icon: null,
//               id: 'BB8F0E1E827A44DBB80D4FAB146EB455',
//               name: '禁忌症管理',
//               path: '/vaccineSetting/contraindicationConfig',
//               sort: 13350,
//               type: '0',
//             },
//             {
//               children: null,
//               icon: null,
//               id: '931E7A34E5014C658D67FC06B4D82F18',
//               name: '疫苗说明书',
//               path: '/vaccineSetting/instructions',
//               sort: 13360,
//               type: '0',
//             },
//             {
//               children: null,
//               icon: null,
//               id: 'D632F7CD076A4D1A92B96B9CE23E748C',
//               name: '储位管理',
//               path: '/vaccineSetting/storageInfo',
//               sort: 13370,
//               type: '0',
//             },
//           ],
//           icon: 'vaccine',
//           id: '2B27C508F6D44E1E95EC2F22751B289D',
//           name: '疫苗',
//           path: '/vaccineSetting',
//           sort: 13300,
//           type: '0',
//         },
//         {
//           children: [
//             {
//               children: null,
//               icon: null,
//               id: 'EB4D99971A034EC499F1CEC0637F45EC',
//               name: '疾病管理',
//               path: '/disease/diseaseManage',
//               sort: 13710,
//               type: '0',
//             },
//           ],
//           icon: 'disease',
//           id: 'F84889379C49448A88D3E13D1D3E6F55',
//           name: '疾病',
//           path: '/disease',
//           sort: 13400,
//           type: '0',
//         },
//         {
//           children: [
//             {
//               children: null,
//               icon: null,
//               id: '5856EB31A49F4745971900336239EE08',
//               name: '全局字典',
//               path: '/basicInfo/globalDictionary',
//               sort: 13510,
//               type: '0',
//             },
//             {
//               children: null,
//               icon: null,
//               id: 'A3C9A89D4E9646C69B2BD013A849BD88',
//               name: '门诊日设置',
//               path: '/basicInfo/outpatientDayConfig',
//               sort: 14530,
//               type: '0',
//             },
//             {
//               children: null,
//               icon: null,
//               id: '96057709DF844A3698942681F5EC3B04',
//               name: '全局字典类型',
//               path: '/basicInfo/dictionaryType',
//               sort: 14560,
//               type: '0',
//             },
//             {
//               children: null,
//               icon: null,
//               id: '504327CD9CAA43748F71719D887288A5',
//               name: '免疫程序模板',
//               path: '/basicInfo/algorithm',
//               sort: 14570,
//               type: '0',
//             },
//             {
//               children: null,
//               icon: null,
//               id: '21BEAA3F90A246C29805DD22D2369D98',
//               name: '免疫程序设置',
//               path: '/basicInfo/setAlgorithm',
//               sort: 14580,
//               type: '0',
//             },
//           ],
//           icon: 'basicInfo',
//           id: '52560592D4C14D688EA6A983BFD63D7B',
//           name: '通用',
//           path: '/basicInfo',
//           sort: 13500,
//           type: '0',
//         },
//         {
//           children: [
//             {
//               children: [
//                 {
//                   children: null,
//                   icon: null,
//                   id: 'DF2FEBD13085402FB9C9DCB1609B7411',
//                   name: '用户管理-添加',
//                   path: '/resource/sysUser/SysUser/handleAdd',
//                   sort: 1500,
//                   type: '1',
//                 },
//                 {
//                   children: null,
//                   icon: null,
//                   id: 'CADF6AB925924279B30117563EF709A8',
//                   name: '用户管理-修改',
//                   path: '/resource/sysUser/SysUser/handleAdd',
//                   sort: 1501,
//                   type: '1',
//                 },
//                 {
//                   children: null,
//                   icon: null,
//                   id: '450A00CC136F4D1ABBC34C62232129DD',
//                   name: '用户管理-删除',
//                   path: null,
//                   sort: 1503,
//                   type: '1',
//                 },
//               ],
//               icon: null,
//               id: '689D40DA5FFE4FDBAF6C97C1FB9008A8',
//               name: '用户管理',
//               path: '/resource/sysUser',
//               sort: 13710,
//               type: '0',
//             },
//             {
//               children: null,
//               icon: null,
//               id: '7C09AE8957F44E6498DF9915F367806C',
//               name: '角色管理',
//               path: '/resource/role',
//               sort: 13720,
//               type: '0',
//             },
//             {
//               children: null,
//               icon: null,
//               id: '844D3A9862184E0E8CE99DC78D817A2F',
//               name: '资源管理',
//               path: '/resource/resource',
//               sort: 13730,
//               type: '0',
//             },
//           ],
//           icon: 'resource',
//           id: '8B1E0A01114F4334AF07AC0D67D48804',
//           name: '权限',
//           path: '/resource',
//           sort: 13700,
//           type: '0',
//         },
//         {
//           children: [
//             {
//               children: null,
//               icon: null,
//               id: '427CCFE5D5084044A6E4FFFDBA118318',
//               name: '账户信息',
//               path: '/personal/accountInformation',
//               sort: 13910,
//               type: '0',
//             },
//             {
//               children: null,
//               icon: null,
//               id: '82FBD4F7526E4B138B349D11319E8574',
//               name: '修改密码',
//               path: '/personal/changePassword',
//               sort: 13920,
//               type: '0',
//             },
//           ],
//           icon: 'personalCenter',
//           id: '6B77A22E785141DE9C36EC447344E90A',
//           name: '个人中心',
//           path: '/personal',
//           sort: 13900,
//           type: '0',
//         },
//         {
//           children: [
//             {
//               children: null,
//               icon: null,
//               id: '160B71BEACB84A8480A618EDFAC00D3F',
//               name: '工单跟踪',
//               path: '/system/ticketTracking',
//               sort: 14820,
//               type: '0',
//             },
//             {
//               children: null,
//               icon: null,
//               id: '2A63D2D4E206497AA39CC7A426F556A0',
//               name: '系统通知',
//               path: '/system/infoNotice',
//               sort: 18420,
//               type: '0',
//             },
//           ],
//           icon: 'system',
//           id: 'B9A765F1517D4EDDA95852ADDFEB4F35',
//           name: '系统',
//           path: '/system',
//           sort: 14800,
//           type: '0',
//         },
//         {
//           children: [
//             {
//               children: null,
//               icon: null,
//               id: 'FAB0828F708E4C388D208ED0C996ED2A',
//               name: '工作台管理',
//               path: '/workbench/workbench',
//               sort: 14910,
//               type: '0',
//             },
//             {
//               children: null,
//               icon: null,
//               id: 'AFEAFF3C4DAB4CA0A20600293509A5D2',
//               name: '通道管理',
//               path: '/workbench/channel',
//               sort: 14920,
//               type: '0',
//             },
//           ],
//           icon: 'workBench',
//           id: '73128823462B470DBB0B65B8AE05FCBC',
//           name: '接种工作台',
//           path: '/workBench',
//           sort: 14900,
//           type: '0',
//         },
//       ],
//       icon: null,
//       id: 'E0D1E89DE95A4498BCFA1224C38AD234',
//       name: '系统设置',
//       path: null,
//       sort: 13000,
//       type: '0',
//     },
//   ];



//   function transTreeData(a){  
//     let r = [], hash = {},   i = 0, j = 0, len = a.length;  
//     for(; i < len; i++){  
//         hash[a[i]['id']] = a[i];  
//     }  
//     for(; j < len; j++){  
//         var aVal = a[j], hashVP = hash[aVal['pid']];  
//         if(hashVP){  
//             !hashVP['children'] && (hashVP['children'] = []);  
//             hashVP['children'].push(aVal);  
//         }else{  
//             r.push(aVal);  
//         }  
//     }  
//     return r;  
// }  
// //   filterTree(treeData, node => node.type === '0');

//   console.log(JSON.stringify(transTreeData(flatTree(treeData).filter(item => item.type === '0')), null, 2))

  let data = [
    {
      "title": "区域",
      "align": "left",
      "fixed": "left",
      "width": 300,
      "dataIndex": "region"
    },
    {
      "title": "卡介苗①",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "卡介苗②",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "乙肝疫苗①",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "乙肝疫苗②",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "乙肝疫苗③",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "脊灰疫苗①",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "脊灰疫苗②",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "脊灰疫苗③",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "脊灰疫苗④",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "百白破疫苗①",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "百白破疫苗②",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "百白破疫苗③",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "百白破疫苗④",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "白破疫苗①",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "麻腮风疫苗①",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "麻腮风疫苗②",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "麻风疫苗①",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "A群流脑疫苗①",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "A群流脑疫苗②",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "A+C流脑疫苗①",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "A+C流脑疫苗②",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "乙脑疫苗①",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "乙脑疫苗②",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "乙脑疫苗③",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "乙脑疫苗④",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "甲型肝炎①",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "甲型肝炎②",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "卡介苗①",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "卡介苗②",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "乙肝疫苗①",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "乙肝疫苗②",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "乙肝疫苗③",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "脊灰疫苗①",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "脊灰疫苗②",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "脊灰疫苗③",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "脊灰疫苗④",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "百白破疫苗①",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "百白破疫苗②",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "百白破疫苗③",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "百白破疫苗④",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "白破疫苗①",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "麻腮风疫苗①",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "麻腮风疫苗②",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "麻风疫苗①",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "A群流脑疫苗①",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "A群流脑疫苗②",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "A+C流脑疫苗①",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "A+C流脑疫苗②",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "乙脑疫苗①",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "乙脑疫苗②",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "乙脑疫苗③",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "乙脑疫苗④",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "甲型肝炎①",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    },
    {
      "title": "甲型肝炎②",
      "align": "center",
      "dataIndex": "vaccineMajorName",
      "children": [
        {
          "title": "应种数",
          "align": "center",
          "width": 100
        },
        {
          "title": "实种数",
          "align": "center",
          "width": 100
        }
      ]
    }
  ]

  let result = [];
  

  data.forEach(item => {let index = result.indexOf(it => it.title === item.title); if(index === -1){ result.push(item)}})

  console.log(result.length)