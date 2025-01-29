# Code.ru


<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ultimate Code Studio</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/codemirror.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #1e1e1e;
            color: white;
            margin: 0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .container {
            display: flex;
            width: 90%;
            max-width: 1400px;
            height: 700px;
            background: #2d2d2d;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0,0,0,0.5);
        }
        .sidebar {
            width: 250px;
            background: #333;
            padding: 10px;
            overflow-y: auto;
        }
        .file {
            cursor: pointer;
            padding: 8px;
            background: #444;
            margin: 5px 0;
            border-radius: 5px;
        }
        .file:hover {
            background: #555;
        }
        .editor-container {
            flex: 1;
            display: flex;
            flex-direction: column;
        }
        .toolbar {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            background: #444;
        }
        #editor {
            flex: 1;
            height: 100%;
        }
    </style>
</head>
<body>
    <h1>Ultimate Code Studio</h1>
    <div class="container">
        <div class="sidebar">
            <h3>Файлы проекта</h3>
            <input type="file" id="fileUpload" multiple />
            <div id="fileList"></div>
        </div>
        <div class="editor-container">
            <div class="toolbar">
                <button id="save"><i class="fa fa-save"></i> Сохранить</button>
            </div>
            <div id="editor"></div>
        </div>
    </div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/codemirror.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/mode/javascript/javascript.min.js"></script>
    <script>
        let files = {};
        const fileList = document.getElementById("fileList");
        const editor = CodeMirror(document.getElementById('editor'), {
            lineNumbers: true,
            mode: 'javascript',
            theme: 'dracula',
        });

        function updateFileList() {
            fileList.innerHTML = '';
            for (let fileName in files) {
                let fileElement = document.createElement("div");
                fileElement.classList.add("file");
                fileElement.textContent = fileName;
                fileElement.onclick = () => {
                    editor.setValue(files[fileName]);
                };
                fileList.appendChild(fileElement);
            }
        }

        document.getElementById('fileUpload').onchange = (event) => {
            Array.from(event.target.files).forEach(file => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    files[file.name] = e.target.result;
                    updateFileList();
                };
                reader.readAsText(file);
            });
        };

        document.getElementById('save').onclick = () => {
            if (!Object.keys(files).length) {
                alert('Нет файлов для сохранения!');
                return;
            }
            alert('Файлы сохранены!');
        };
    </script>
</body>
</html>
