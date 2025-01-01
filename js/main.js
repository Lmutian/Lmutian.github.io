// themes/landscape/source/js/main.js

function copyToClipboard(elementId) {
    // 获取代码元素
    var codeElement = document.getElementById(elementId);
    if (!codeElement) {
        console.error('未找到元素:', elementId);
        return;
    }

    // 获取代码文本
    var text = codeElement.innerText;

    // 创建临时 textarea 元素
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);

    // 选择文本
    textarea.select();
    textarea.setSelectionRange(0, 99999); // 针对移动设备

    // 执行复制命令
    try {
        var successful = document.execCommand('copy');
        var btn = document.querySelector(`button[data-id="${elementId}"]`);
        if (successful) {
            btn.classList.add('success');
            btn.innerHTML = '<i class="fas fa-check"></i> 复制成功';
            setTimeout(function() {
                btn.classList.remove('success');
                btn.innerHTML = '<i class="fas fa-copy"></i> 复制';
            }, 2000);
        } else {
            btn.classList.add('failure');
            btn.innerHTML = '<i class="fas fa-times"></i> 复制失败';
            setTimeout(function() {
                btn.classList.remove('failure');
                btn.innerHTML = '<i class="fas fa-copy"></i> 复制';
            }, 2000);
        }
    } catch (err) {
        console.error('复制失败:', err);
        alert('复制失败');
    }

    // 移除临时 textarea
    document.body.removeChild(textarea);
}

document.addEventListener('DOMContentLoaded', function () {
    // 可选：添加其他初始化代码
});