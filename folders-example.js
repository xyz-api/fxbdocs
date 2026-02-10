// ========== 文件夹列表维护样例 ==========
// 
// 这个文件展示了如何维护 folders.js 中的文档列表
// 请参考此样例来添加、修改或删除文档条目
//

const categories = [
  {
    // 分类名称：显示在侧边栏的分类标题
    name: '两本手册PDF',
    
    // 分类下的文档列表
    items: [
      {
        // 文件路径：相对于项目根目录的完整路径
        name: '手册/两本手册PDF/飞行人员训练大纲',
        
        // 显示标题：在侧边栏显示的文档名称
        title: '飞行人员训练大纲',
        
        // 文档类型：pdf - PDF文档（会在 note.html 中用 iframe 展示）
        type: 'pdf'
      },
      {
        name: '手册/两本手册PDF/飞行技术管理手册',
        title: '飞行技术管理手册',
        type: 'pdf'
      },
    ]
  },
  
  {
    name: '两本手册重点摘录',
    items: [
      {
        name: '手册/两本手册重点摘录/技术管理手册摘录',
        title: '技术管理手册摘录',
        
        // 文档类型：md - Markdown文档（默认类型）
        // Markdown 文档会被解析并渲染为 HTML
        type: 'md'
      },
      {
        name: '手册/两本手册重点摘录/训练大纲摘录',
        title: '训练大纲摘录',
        type: 'md'
      },
    ]
  },
  
  {
    name: '其他',
    items: [
      {
        // Excel 文件：直接写文件名（包含扩展名）
        name: '副驾驶积分表20250116.xlsx',
        title: '副驾驶流转积分表',
        
        // 文档类型：excel - Excel表格文件（会在 excel.html 中展示）
        type: 'excel'
      },
    ]
  },
];

// ========== 文档类型说明 ==========
//
// type 字段支持以下类型：
//
// 1. 'md' (Markdown文档)
//    - 文件结构：文件夹/index.md + 图片文件
//    - 展示页面：note.html
//    - 功能：Markdown 渲染、图片显示、下载为 ZIP
//    - 示例：{ name: '手册/文档名', title: '显示名称', type: 'md' }
//
// 2. 'pdf' (PDF文档)
//    - 文件结构：文件夹/index.pdf
//    - 展示页面：note.html (iframe 模式)
//    - 功能：PDF 预览、下载原文件
//    - 示例：{ name: '手册/文档名', title: '显示名称', type: 'pdf' }
//
// 3. 'excel' (Excel表格)
//    - 文件结构：直接是 .xlsx 文件
//    - 展示页面：excel.html
//    - 功能：表格渲染、多工作表切换、下载原文件
//    - 示例：{ name: '文件名.xlsx', title: '显示名称', type: 'excel' }
//

// ========== 添加新文档的步骤 ==========
//
// 1. 准备文档文件：
//    - Markdown: 创建文件夹，放入 index.md 和相关图片
//    - PDF: 创建文件夹，放入 index.pdf
//    - Excel: 直接放置 .xlsx 文件到项目根目录或子文件夹
//
// 2. 在 folders.js 中添加条目：
//    - 选择合适的分类（或创建新分类）
//    - 在 items 数组中添加新对象
//    - 填写 name（文件路径）、title（显示名称）、type（文档类型）
//
// 3. 保存文件，刷新页面即可看到新文档
//

// ========== 创建新分类的步骤 ==========
//
// 在 categories 数组中添加新对象：
//
// {
//   name: '新分类名称',         // 显示名称，可用中文
//   items: [
//     // 在这里添加文档条目
//   ]
// }
//
// 注意：不需要填写 id 字段，系统会自动生成
//

// 自动生成ID（系统内部使用，维护时无需关注）
categories.forEach((cat, index) => {
  cat.id = 'cat-' + index;
});

// 扁平化文档列表（系统需要，用于搜索和标题显示）
const folders = categories.flatMap(cat => cat.items);
