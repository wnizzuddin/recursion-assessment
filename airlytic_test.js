const children = [
  { id: 1, type: "div", children: [{ id: 6, type: "p" }] },
  { id: 2, type: "p" },
  { id: 3, type: "a" },
  { id: 4, type: "h1" },
  {
    id: 5,
    type: "h2",
    children: [{ id: 7, type: "h3", children: [{ id: 8, type: "span" }] }],
  },
];

const getAllChildren = (obj) => {
  let newArr = [];
  obj.map((item) => {
    newArr.push({ id: item.id, type: item.type });
    if (item.children) {
      newArr.push(...getAllChildren(item.children));
    }
  });
  return newArr;
};

/**
 *
 * @param {*} id
 * @returns
 *
 * id : 1 - Return div
 * id : 6 - Return p
 * id : 8 - Return span
 */

const getChildrenById = (id) => {
  let type;
  let allChildren = getAllChildren(children);
  allChildren.map((item) => {
    if (item.id === id) {
      type = item.type;
    }
  });
  return type;
};

// console.log(getAllChildren(children));
console.log(getChildrenById(8));
