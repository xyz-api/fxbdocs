// ========== 在这里维护文件夹列表 ==========
// 详细的维护说明和样例请查看 folders-example.js 文件
//
// 维护说明：
// 1. 每个分类只需要填写 name（分类名称）和 items（文档列表）
// 2. 每个文档需要填写：
//    - name: 文件路径（相对于项目根目录）
//    - title: 显示名称（在侧边栏显示的名字）
//    - type: 文档类型（md=Markdown文档, pdf=PDF文档, excel=Excel表格）
//
const categories = [
  {
    name: '两本手册PDF',
    items: [
            { name: '手册/两本手册PDF/飞行技术管理手册', title: '飞行技术管理手册', type: 'pdf' },
      { name: '手册/两本手册PDF/飞行人员训练大纲', title: '飞行人员训练大纲', type: 'pdf' },
    ]
  },
  {
    name: '两本手册重点摘录',
    items: [
      { name: '手册/两本手册重点摘录/技术管理手册摘录', title: '技术管理手册摘录', type: 'md' },
      { name: '手册/两本手册重点摘录/训练大纲摘录', title: '训练大纲摘录', type: 'md' },
      { name: '手册/两本手册重点摘录/资质速通', title: '资质速通', type: 'md' },
    ]
  },
  {
    name: '请教',
    items: [
      { name: '手册/请教/技术管理手册/副驾驶部分', title: '副驾驶部分', type: 'md' },
      { name: '手册/请教/技术管理手册/机长部分', title: '机长部分', type: 'md' },
      { name: '手册/请教/技术管理手册/教员部分', title: '教员部分', type: 'md' },
      { name: '手册/请教/技术管理手册/其他', title: '其他', type: 'md' },
    ]
  },
  {
    name: '其他',
    items: [
      { name: '手册/其他/如何统计当前有效EAMA资质人员', title: '如何统计当前有效EAMA资质人员', type: 'md' },
      { name: '手册/其他/如何统计技术等级变更信息', title: '如何统计技术等级变更信息', type: 'md' },
      { name: '副驾驶积分表20250116.xlsx', title: '副驾驶流转积分表', type: 'excel' },
    ]
  },
];

// 自动生成ID（系统内部使用，维护时无需关注）
categories.forEach((cat, index) => {
  cat.id = 'cat-' + index;
});

// 扁平化文档列表（系统需要，用于搜索和标题显示）
const folders = categories.flatMap(cat => cat.items);

