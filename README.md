- Библиотека для генерации ключей элементов

  npm i uuid

  в компоненте: <br/>
  import { v4 as uuidv4 } from 'uuid'; <br/>
  uuidv4(); <br/>

  без ключа выбивает предупреждение "each child in a list should have a unique 'key' prop".
