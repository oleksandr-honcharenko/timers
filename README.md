This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Timers task.

1. Реализуйте таймер обратного отсчёта. Формат — два знака после запятой. В конце работы таймер должен вызывать колбэк onFinish с параметром $endTime, куда будет передан new Date().
2. Попробуйте добавить 100 таймеров на страницу. Есть ли проблемы с производительностью таймеров? Если есть, то с чем они связаны и как их решить?
http://s.csssr.ru/U02D248T6/2017-06-22-1008-dim4b74bcn.mp4 
Приклад роботи.

Мой таймер в принципе работает как в примере.
- Добавил кнопку для добавления сразу 10 таймеров, ибо по 1 долго собирать 100 штук (так как каждый новый таймер отсчитывает небольшое количество секунд, от 6 до 12).
- При отмене таймера тоже решил выводить колбек.
- При завершении таймер автоматически убирается.