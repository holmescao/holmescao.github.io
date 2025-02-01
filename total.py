import os

def write_files_to_markdown(root_dir, output_file):
    with open(output_file, 'w', encoding='utf-8') as outfile:
        for dirpath, dirnames, filenames in os.walk(root_dir):
            # 排除脚本文件所在的目录和 .git 目录
            if os.path.abspath(dirpath) == os.path.abspath(os.path.dirname(__file__)) or '.git' in dirpath.split(os.sep):
                continue
            for filename in filenames:
                file_path = os.path.join(dirpath, filename)
                # 获取文件相对于根目录的相对路径
                relative_path = os.path.relpath(file_path, root_dir)
                # 写入文件路径
                outfile.write(f'### {relative_path}\n\n')
                try:
                    with open(file_path, 'r', encoding='utf-8') as infile:
                        content = infile.read()
                        # 写入文件内容
                        outfile.write(f'```\n{content}\n```\n\n')
                except Exception as e:
                    outfile.write(f'**无法读取文件：** {e}\n\n')

if __name__ == '__main__':
    root_directory = '.'  # 当前目录
    output_markdown = 'total.md'
    write_files_to_markdown(root_directory, output_markdown)
    print(f'所有文件内容已写入 {output_markdown}')
