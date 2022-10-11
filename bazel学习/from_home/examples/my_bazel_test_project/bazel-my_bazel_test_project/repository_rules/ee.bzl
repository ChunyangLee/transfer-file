
_BUILD_FILE="""
exports_files(
    glob(["**"])
)
"""

def _repository_rule_a_impl(repository_ctx):
    print("repository_ctx.name = ", repository_ctx.name)
    environ = repository_ctx.os.environ
    router_path = environ["ROUTER_PATH"]
    relative_path = repository_ctx.attr.path
    print("relative_path.name = ", relative_path)
    repo_path = router_path + "/" + relative_path
    repository_ctx.symlink(repo_path, "")
    repository_ctx.file("WORKSPACE")
    repository_ctx.file("BUILD", _BUILD_FILE)


repository_a = repository_rule(
    implementation = _repository_rule_a_impl,
    attrs = {
        "path": attr.string()
    },
    local = True,
)

def _repository_rule_b_impl(ctx):
    print("repository_ctx.name = ", ctx.name)
    abc_tool_path = ctx.path(ctx.attr.abc_tool)
    print("abc_tool_path = ", abc_tool_path)
    ctx.file("WORKSPACE")
    ctx.file("BUILD",_BUILD_FILE)
    ctx.file("abc.txt", "abcc")
    exec_result = ctx.execute(["sh", abc_tool_path, "abdss"],quiet=True)
    print("exec_result", exec_result.stdout)

repository_b = repository_rule(
    implementation = _repository_rule_b_impl,
    attrs = {
        "abc_tool": attr.label()
    },
)