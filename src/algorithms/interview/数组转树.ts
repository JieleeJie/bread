interface Item {
  id: number;
  parentId: number;
  name: string;
  children?: Item[];
}

// 将数组转为树形结构
const source: Item[] = [
  { id: 12, parentId: 1, name: '朝阳区' },
  { id: 241, parentId: 24, name: '田林街道' },
  { id: 31, parentId: 3, name: '广州市' },
  { id: 13, parentId: 1, name: '昌平区' },
  { id: 2421, parentId: 242, name: '上海科技绿洲' },
  { id: 21, parentId: 2, name: '静安区' },
  { id: 242, parentId: 24, name: '漕河泾街道' },
  { id: 22, parentId: 2, name: '黄浦区' },
  { id: 11, parentId: 1, name: '顺义区' },
  { id: 2, parentId: 0, name: '上海市' },
  { id: 24, parentId: 2, name: '徐汇区' },
  { id: 1, parentId: 0, name: '北京市' },
  { id: 2422, parentId: 242, name: '漕河泾开发区' },
  { id: 32, parentId: 3, name: '深圳市' },
  { id: 33, parentId: 3, name: '东莞市' },
  { id: 3, parentId: 0, name: '广东省' },
];

const result = [
  {
    id: 2,
    parentId: 0,
    name: '上海市',
    children: [
      {
        id: 21,
        parentId: 2,
        name: '静安区',
        children: [],
      },
      {
        id: 22,
        parentId: 2,
        name: '黄浦区',
        children: [],
      },
      {
        id: 24,
        parentId: 2,
        name: '徐汇区',
        children: [
          {
            id: 241,
            parentId: 24,
            name: '田林街道',
            children: [],
          },
          {
            id: 242,
            parentId: 24,
            name: '漕河泾街道',
            children: [
              {
                id: 2421,
                parentId: 242,
                name: '上海科技绿洲',
                children: [],
              },
              {
                id: 2422,
                parentId: 242,
                name: '漕河泾开发区',
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 1,
    parentId: 0,
    name: '北京市',
    children: [
      {
        id: 12,
        parentId: 1,
        name: '朝阳区',
        children: [],
      },
      {
        id: 13,
        parentId: 1,
        name: '昌平区',
        children: [],
      },
      {
        id: 11,
        parentId: 1,
        name: '顺义区',
        children: [],
      },
    ],
  },
  {
    id: 3,
    parentId: 0,
    name: '广东省',
    children: [
      {
        id: 31,
        parentId: 3,
        name: '广州市',
        children: [],
      },
      {
        id: 32,
        parentId: 3,
        name: '深圳市',
        children: [],
      },
      {
        id: 33,
        parentId: 3,
        name: '东莞市',
        children: [],
      },
    ],
  },
];

const trans = (arr: Item[], root: number = 0) => {
  const level1 = arr.filter(item => item.parentId === root);
  level1.forEach(ele => {
    ele.children = trans(arr, ele.id);
  });
  return level1;
};

// console.log('result', trans(source));
