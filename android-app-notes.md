# Android 打包说明

当前项目已使用 Capacitor 接入 Android 外壳，并默认加载本地打包资源。

常用命令：

```powershell
npm run cap:sync
npm run cap:android
npm run cap:run:android
```

说明：

- `cap:sync` 用于同步 Capacitor 配置
- `cap:android` 用 Android Studio 打开工程
- `cap:run:android` 需要本机已安装 Android SDK / 模拟器或真机调试环境

## 当前状态

- Android 原生工程已生成在 `android/`
- App 包名：`com.wjj687.shijing`
- App 名称：`诗经`
- 默认加载本地导出的静态页面，不依赖线上站点

## 还差什么

要真正生成 APK，这台电脑还需要：

1. 安装 JDK
2. 配置 `JAVA_HOME`
3. 安装 Android Studio
4. 安装 Android SDK 和至少一个平台版本

## 环境就绪后怎么做

### 方式一：直接在 Android Studio 里打包

1. 运行：

```powershell
npm run android:build
npm run cap:android
```

2. 在 Android Studio 中等待 Gradle 同步完成
3. 选择：
   `Build > Build Bundle(s) / APK(s) > Build APK(s)`

### 方式二：命令行生成调试包

```powershell
npm run android:build
Set-Location android
.\gradlew.bat assembleDebug
```

生成后的 APK 通常会在：

```text
android\app\build\outputs\apk\debug\app-debug.apk
```

## 真机安装

1. 手机打开开发者选项和 USB 调试
2. 连接电脑
3. 如果本机有 `adb`，可以执行：

```powershell
adb install -r android\app\build\outputs\apk\debug\app-debug.apk
```
