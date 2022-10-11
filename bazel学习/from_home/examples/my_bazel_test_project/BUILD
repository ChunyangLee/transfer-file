load("@rules_cc//cc:defs.bzl", "cc_binary", "cc_library")


cc_import(
    name = "imported_hello-time",
    shared_library = "@output_release//:libhello-time.so",
)

cc_binary(
    name = "hello-world",
    srcs = ["hello-world.cc","@output_release//:hello-time.h"],
    deps = [":imported_hello-time"],
    copts = ["-Iexternal/output_release/"],
    data = ["@repository_b//:abc.txt"],
)
