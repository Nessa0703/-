# -[index.html](https://github.com/user-attachments/files/25230229/index.html)
<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <title>Simple Notes App</title>
      <link rel="stylesheet" href="styles.css">
</head>
<body>
      <div class="container">
          <h1>Заметки!</h1>
          <form id="noteForm">
              <label for="title">Заголовок:</label><br>
              <input type="text" id="title" name="title"><br>
              
              <label for="content">Мысли:</label><br>
              <textarea id="content" name="content"></textarea><br>
              
              <button type="submit">Сохранить</button>
          </form>
          
          <hr>
          
          <ul id="notesList"></ul>
      </div>

      <script src="script.js"></script>
</body>
</html>
