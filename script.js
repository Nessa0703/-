document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('noteForm');
      const notesList = document.getElementById('notesList');

      // Функционал отображения заметок
      function showNotes() {
          const storedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
          notesList.innerHTML = '';

          storedNotes.forEach((note, index) => {
              const li = document.createElement('li');
              li.className = 'note-item'; // присвоим класс для дальнейшей стилизации

              // Создадим текстовую часть заметки
              const span = document.createElement('span');
              span.textContent = `${note.title}: ${note.content}`;
              li.appendChild(span);

              // Создадим кнопку удаления
              const deleteBtn = document.createElement('button');
              deleteBtn.className = 'delete-btn';
              deleteBtn.textContent = 'Удалить';
              deleteBtn.onclick = () => removeNote(index); // привязываем индекс заметки к событию onclick
              li.appendChild(deleteBtn);

              notesList.appendChild(li);
          });
      }

      // Функция удаления заметки по её индексу
      function removeNote(index) {
          let existingNotes = JSON.parse(localStorage.getItem('notes')); // читаем существующие заметки
          existingNotes.splice(index, 1); // удаляем заметку по указанному индексу
          localStorage.setItem('notes', JSON.stringify(existingNotes)); // сохраняем обновлённый список назад в localStorage
          showNotes(); // перерисовываем список заметок
      }

      // Обработка отправки формы
      form.addEventListener('submit', (event) => {
          event.preventDefault(); // предотвращаем обычную отправку формы
          const title = document.getElementById('title').value;
          const content = document.getElementById('content').value;

          if (!title || !content) {
              alert('Заполните оба поля!');
              return;
          }

          let currentNotes = JSON.parse(localStorage.getItem('notes') || '[]');
          currentNotes.push({ title, content });
          localStorage.setItem('notes', JSON.stringify(currentNotes));
          showNotes();

          document.getElementById('title').value = '';
          document.getElementById('content').value = '';
      });

      // Показываем заметки изначально
      showNotes();
});