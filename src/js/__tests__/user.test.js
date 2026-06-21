import { loadUser, saveUser } from '../user';
import { httpGet, httpPost } from '../http';
import { healthCount, heroesSort } from '../app';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);
  expect(response).toEqual({});
  expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
});

test('Проверка функции httpPost', () => {
  httpPost.mockReturnValue(200);
  expect(httpPost('http://server:8080/users/1')).toBe(200)
})

test('Проверка функции saveUser', () => {
  const user = {id: 25, name: 'Ivan'};
  expect(saveUser(user)).toThrow('Unimplemented')
})

test('Считаем здоровье', () => {
  const pers1 = {name: 'Рыцарь', health: 28};
  const pers2 = {name: 'Маг', health: 99};
  const pers3 = {name: 'Хиллер', health: 1};
  expect(healthCount(pers1)).toBe('wounded');
  expect(healthCount(pers2)).toBe('healthy');
  expect(healthCount(pers3)).toBe('critical');
})

test('Проверяем сортировку', () => {
  const data = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];

  const expectedData = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ];
  
  expect(heroesSort(data)).toEqual(expectedData)
})