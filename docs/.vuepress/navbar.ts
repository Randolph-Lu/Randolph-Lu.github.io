import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博客",
    icon: "blog",
    link: "blog.md"
  },
  {
    text: "技术笔记",
    children: [
      {
        text: "编程语言",
        icon: "code",
        prefix: "/language/",
        children: [{
          text: "Java",
          icon: "java",
          link: "java/"
        },
        {
          text: "Go",
          icon: "golang",
          link: "golang/",
        }]
      },
      {
        text: "后端",
        icon: "",
        prefix: "/backend/",
        children: [
          {
            text: "Spring",
            icon: "",
            link: "spring/"
          },
        ]
      },
      // {
      //   text: "前端",
      //   icon: "",
      //   children: []
      // },
      {
        text: "算法",
        prefix: "/algorithm/",
        children:["algo/","leetcode/"],
      }
    ],
  },
  {
    text: "杂乱无章",
    link: "/others"
  }
]);
