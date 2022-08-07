# 3. 闭包和装饰器

## 闭包中的内部函数修改外部的变量，加上nonlocal

类似于对象， 闭包和对象相似

## 函数装饰器

```python
https://blog.csdn.net/zhh763984017/article/details/120072425
```

当装饰器带参数时，即语法糖变成把装饰器带的参数作为装饰器的形参，否则不带参数的话，把被装饰的函数作为装饰器的形参。（即带参数的装饰器，为***返回值对被装饰的函数就行装饰***，非直接装饰, 这条适用于类装饰器带参数）

## 类作为装饰器

![](C:\Users\lichunyang\AppData\Roaming\marktext\images\2022-07-10-13-07-26-image.png)

# 4. 上下文管理器

可以自己定义一个类，实现__enter__和__exit__协议，但是这样比较复杂，python提供了一个装饰器，contextlib， 但是处理异常还要使用try,except

```python
https://www.cnblogs.com/wongbingming/p/10519553.html
```



# 5.元编程




