# 1. 如何加入二进制依赖

bazel如何实现增量下载二进制，？？

```python
https://docs.bazel.build/versions/main/external.html#support-for-ipv6
```

# 2. 工具链设置

```python
https://docs.bazel.build/versions/main/toolchains.html
```

# 3. 兼容全源码和非源码构建，

 本质是外部依赖的方式获取方式， 

源码构建直接使用构建出来的  

非源码构建是、使用下载来的二进制

# 4. cmake切bazel，google例子处理外部依赖

```python
Bazel dependency management 一篇博文
https://blog.envoyproxy.io/external-c-dependency-management-in-bazel-dd37477422f5
```

 Those dependencies that could be trivially converted to Bazel, e.g. a header only library such as [rapidjson](http://rapidjson.org/), have `BUILD` files maintained in the Envoy repository and injected via `new_git_repository` rules. We required a better approach for more complex dependencies, such as [c-ares](https://c-ares.haxx.se/) or [LuaJIT](http://luajit.org/).


