# python 多线程并发

协程、concurrent.futures、asyncio

## 为什么有GIL锁、多线程速度还很快？

GIL对处理IO密集型任务五任何影响，python标准库中人每个函数在等待IO时均会释放GIL锁、

## 为什么单线程中使用协程、asyncio包会很快？


