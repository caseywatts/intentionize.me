const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  setTitle: (title) => ipcRenderer.send("set-title", title),
  toggleWindow: () => ipcRenderer.send("toggle-window"),
  onAppBlurred: (callback) => ipcRenderer.on("app-blurred", callback),
});
