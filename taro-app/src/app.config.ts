export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/note/index",
    "pages/my/index",
    "pages/login/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#1296db",
    navigationBarTitleText: "NoteApp",
    navigationBarTextStyle: "white",
  },
  tabBar: {
    color: "#333",
    selectedColor: "#1296db",
    backgroundColor: "#fff",
    borderStyle: "white",
    list: [
      {
        text: "首页",
        pagePath: "pages/index/index",
        iconPath: "static/tabs/home_default.png",
        selectedIconPath: "static/tabs/home_selected.png",
      },
      {
        text: "笔记",
        pagePath: "pages/note/index",
        iconPath: "static/tabs/note_default.png",
        selectedIconPath: "static/tabs/note_selected.png",
      },
      {
        text: "我的",
        pagePath: "pages/my/index",
        iconPath: "static/tabs/my_default.png",
        selectedIconPath: "static/tabs/my_selected.png",
      },
    ],
  },
});
