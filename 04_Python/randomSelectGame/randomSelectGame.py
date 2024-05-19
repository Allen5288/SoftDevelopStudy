import random
import tkinter as tk
from tkinter import messagebox

def random_selector(contents):
    """
    从给定的内容列表中随机选择一个内容。
    
    参数：
    contents: 包含要选择的内容的列表。
    
    返回：
    选择的内容。
    """
    return random.choice(contents)

# 示例用法
if __name__ == "__main__":
    # 要选择的内容列表
    contents = [
        "XCOM2",
        "Batman",
        "Devil May Cry 5",
        "Borderlands 2",
        "HITMAN 3",
        "Metro 2033 Redux",
        "Resident Evil 2",
        "Titanfall 2",
        "Grand Theft Auto 2",
        "极品飞车 热力追踪",
        "PalWorld",
        'Red Dead Redemption 2'
    ]
    
    # 使用随机选择器选择内容
    selected_content = random_selector(contents)
    
    root = tk.Tk()
    root.withdraw()  # 隐藏主窗口

    messagebox.showinfo("当前的游戏列表为：", contents)
    messagebox.showinfo("随机选择的内容", selected_content)
