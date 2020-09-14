test('tree find a path', () => {
  const data = [
    { id: 1, parentId: null, name: '中国' },
    { id: 2, parentId: null, name: '美国' },
    { id: 3, parentId: null, name: '日本' },
    { id: 4, parentId: null, name: '印度' },
    { id: 5, parentId: 1, name: '江苏' },
    { id: 6, parentId: 5, name: '无锡' },
    { id: 7, parentId: 2, name: '加州' },
  ];

  function getPathById(resourceList, id) {
    if (!id) {
      return [];
    }
    const target = resourceList.find((item) => item.id === id);
    if (!target) {
      return [target];
    }
    return [target].concat(getPathById(resourceList, target.parentId));
  }

  let result = getPathById(data, 1);
  expect(result).toEqual([{ id: 1, parentId: null, name: '中国' }]);

  result = getPathById(data, 6);
  expect(result).toEqual([
    { id: 6, parentId: 5, name: '无锡' },
    { id: 5, parentId: 1, name: '江苏' },
    { id: 1, parentId: null, name: '中国' },
  ]);

  result = getPathById(data, 7);
  expect(result).toEqual([
    { id: 7, parentId: 2, name: '加州' },
    { id: 2, parentId: null, name: '美国' },
  ]);
});

test('generate tree', () => {
  const allNodes = [
    { id: 1, parentId: null, name: '中国' },
    { id: 2, parentId: null, name: '美国' },
    { id: 3, parentId: null, name: '日本' },
    { id: 4, parentId: null, name: '印度' },
    { id: 5, parentId: 1, name: '江苏' },
    { id: 6, parentId: 5, name: '无锡' },
    { id: 7, parentId: 2, name: '加州' },
  ];
  const selectedNodes = [
    { id: 6, parentId: 5, name: '无锡' },
    { id: 7, parentId: 2, name: '加州' },
  ];

  function getPathById(resourceList, id) {
    if (!id) {
      return [];
    }
    const target = resourceList.find((item) => item.id === id);
    if (!target) {
      return [target];
    }
    return [target].concat(getPathById(resourceList, target.parentId));
  }

  function arrayDeduplication(array, key) {
    const hash = new Map();
    for (const item of array) {
      if (!hash.has(item[key])) {
        hash.set(item[key], item);
      }
    }
    return [...hash.values()];
  }

  function generateTreeNode(allNodes, selectedNodes) {
    const result = [];
    selectedNodes.forEach((element) => {
      const path = getPathById(allNodes, element.id);
      result.push(...path);
    });
    return arrayDeduplication(result, 'id');
  }

  const duplicationArray = [
    { id: 1, parentId: null, name: '中国' },
    { id: 2, parentId: null, name: '美国' },
    { id: 3, parentId: null, name: '日本' },
    { id: 4, parentId: null, name: '印度' },
    { id: 5, parentId: 1, name: '江苏' },
    { id: 6, parentId: 5, name: '无锡' },
    { id: 7, parentId: 2, name: '加州' },
    { id: 1, parentId: null, name: '中国' },
    { id: 3, parentId: null, name: '日本' },
    { id: 4, parentId: null, name: '印度' },
  ];

  const result = arrayDeduplication(duplicationArray, 'id');
  expect(result).toEqual([
    { id: 1, parentId: null, name: '中国' },
    { id: 2, parentId: null, name: '美国' },
    { id: 3, parentId: null, name: '日本' },
    { id: 4, parentId: null, name: '印度' },
    { id: 5, parentId: 1, name: '江苏' },
    { id: 6, parentId: 5, name: '无锡' },
    { id: 7, parentId: 2, name: '加州' },
  ]);

  const treeNodes = generateTreeNode(allNodes, selectedNodes);
  console.log(JSON.stringify(treeNodes, null, 2));
  expect(treeNodes).toEqual([
    { id: 6, parentId: 5, name: '无锡' },
    { id: 5, parentId: 1, name: '江苏' },
    { id: 1, parentId: null, name: '中国' },
    { id: 7, parentId: 2, name: '加州' },
    { id: 2, parentId: null, name: '美国' },
  ]);
});
