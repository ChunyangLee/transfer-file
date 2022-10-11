


def _impl_my_new_local_repository(repository_ctx):
    repository_ctx.symlink(repository_ctx.path(repository_ctx.attr.path), "")
    repository_ctx.file("WORKSPACE", "")
    build_file_path = repository_ctx.path(repository_ctx.attr.build_file)
    print("build_file_path: ", build_file_path)
    repository_ctx.file("BUILD", repository_ctx.read(build_file_path))



my_new_local_repository = repository_rule(
    implementation=_impl_my_new_local_repository,
    local=True,
    attrs={
        "path": attr.string(mandatory=True),
        "build_file" : attr.label()
    })
