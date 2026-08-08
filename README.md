# QIQI447 · Personal Website

这是 [QIQI447](https://github.com/QIQI447) 的个人主页与博客，基于 Jekyll 构建，并通过 GitHub Actions 自动部署到 GitHub Pages。

## 已实现

- 个人主页、项目展示、文章归档、标签页和关于页
- 桌面端与移动端响应式布局
- 浅色 / 深色主题切换，并记住用户偏好
- Jekyll 文章、代码高亮、MathJax 公式和文章目录
- GitHub Pages 项目站点路径适配
- 推送 `main` 分支后自动构建部署

## 本地预览

需要 Ruby 3.2 与 Bundler：

```bash
bundle install
bundle exec jekyll serve --config _config.yml,_config.github-pages.yml
```

打开：

```text
http://127.0.0.1:4000/qq.github.io/
```

## 发布到 GitHub Pages

1. 打开仓库的 `Settings → Pages`。
2. 在 `Build and deployment` 中选择 `GitHub Actions`。
3. 将本地改动提交并推送到 `main` 分支。
4. 等待 `deploy_static_pages` 工作流完成。

当前仓库名是 `qq.github.io`，因此站点地址为：

```text
https://qiqi447.github.io/qq.github.io/
```

如果以后把仓库重命名为 `QIQI447.github.io`，请同时将 `_config.yml` 和 `_config.github-pages.yml` 中的 `baseurl` 改为 `""`。

## 个性化配置

站点身份、导航和社交链接集中在 `_config.yml`：

```yaml
title: QIQI447
description: 记录学习、项目与持续发生的想法。
url: "https://qiqi447.github.io"
baseurl: "/qq.github.io"

social:
  github: QIQI447
```

GitHub 头像保存在 `images/avatar-profile.png`。替换同名文件即可更新全站头像与分享缩略图。

## 写文章

在 `_posts/` 根目录新增 Markdown 文件，文件名格式：

```text
YYYY-MM-DD-title.md
```

文章示例：

```yaml
---
layout: post
title: "文章标题"
date: 2026-08-08 18:00:00 +0800
description: "文章摘要"
tags:
  - 学习
  - 项目
math: false
---
```

fork 中原作者的示例文章仍保存在分类子目录中，但已经通过 `_config.yml` 的 `defaults` 设置为不发布，避免在个人站点中错误署名。确认不再需要后，可以自行删除这些目录与对应图片。

