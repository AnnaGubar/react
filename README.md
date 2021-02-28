- Настраиваем линтинг перед коммитом \
   \
  npm install --save-dev prettier husky lint-staged \
   \
  создаем папки: .prettierrc.json .huskyrc .lintstagedrc \
   \
  в VSC => settings => опция codeActionsOnSave => edit... = > \
   \
  { "files.autoSave": "onFocusChange", \
  "editor.formatOnSave": true, \
  "editor.codeActionsOnSave": { \
  "source.fixAll.eslint": true } \
  }
- Нормализация \
   \
  npm install modern-normalize \
   \
  в файле index.js = > import 'modern-normalize/modern-normalize.css';

- Инлайн стили

<тег style={{ \
 width: 200, \
 border: '2px solid red', \
 backgroundColor: 'black', \
 }}>

- Ванильный CSS \
- Препроцессоры: SASS \
   \
  npm install node-sass --save \

- CSS-модули \
   \
  import styles from './Example.module.css';

<тег className={styles.селектор}> в .module.css обычный css

- CSS in JS
- Про библиотеки компонентов
