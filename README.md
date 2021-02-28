Настраиваем линтинг перед коммитом \
 \
npm install --save-dev prettier husky lint-staged \
 \
создаем папки: .prettierrc.json .huskyrc .lintstagedrc \
 \
в VSC => settings => опция codeActionsOnSave => edit... = > \
 \
{ "files.autoSave": "onFocusChange", \
"editor.formatOnSave": true, \
"editor.codeActionsOnSave":{ \
"source.fixAll.eslint": true } \
} \
 \
Нормализация \
 \
Инлайн стили \
Ванильный CSS \
Препроцессоры: SASS \
CSS-модули \
CSS in JS \
Про библиотеки компонентов
