- Библиотека для генерации ключей элементов

  npm i uuid

  в компоненте: /
  import { v4 as uuidv4 } from 'uuid'; /
  uuidv4();

  без ключа выбивает предупреждение "each child in a list should have a unique 'key' prop".
