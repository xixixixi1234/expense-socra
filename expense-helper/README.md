# ExpenseHelper - AI Audit Experiment Platform (Gemini)

## 本地运行（3 步）

1. 安装 Node.js 18+（https://nodejs.org 下载安装）
2. 在这个文件夹里打开终端，运行：

   npm install

3. 启动：

   npm start

然后浏览器打开 http://localhost:3000

### 想让 AI 真正工作（可选）
不配 key 也能跑，AI 会返回占位内容。要真实审计/发票提取，先设置 Gemini key：

Mac/Linux:
   export GEMINI_API_KEY=你的key
   npm start

Windows (PowerShell):
   $env:GEMINI_API_KEY="你的key"
   npm start

免费 key 在 https://aistudio.google.com 领取。

## 三个页面
- http://localhost:3000/            被试登录（输入编号即进）
- http://localhost:3000/experiment  被试界面（登录后自动进入）
- http://localhost:3000/admin       后台（默认密码 admin123，可用 ADMIN_KEY 改）

## 后台能做什么
- 上传/编辑那张预置发票（图片 + 字段）
- 查看所有被试操作记录
- 一键导出 JSONL 数据

## 注意
数据写在本地 data/events.jsonl。本地跑不会丢；部署到 Railway 后重启会清空，记得及时导出。
