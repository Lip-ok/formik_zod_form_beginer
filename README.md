---

# 📄 React + Vite + Formik + Zod

Простое приложение на React, созданное с помощью Vite, с формой ввода и валидацией на основе **Formik** и **Zod**.

---

## 🚀 Стек технологий

* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* [Formik](https://formik.org/) — управление состоянием формы
* [Zod](https://zod.dev/) — схема валидации
* [zod-formik-adapter](https://github.com/robertcoopercode/zod-formik-adapter) — адаптер для интеграции Zod с Formik

---

## 📸 Интерфейс

Форма содержит два поля:

* `Имя` — минимум 2 символа
* `Email` — проверка на валидный email

При успешной отправке данные отображаются через `alert`.

---

## 📦 Установка и запуск

```bash
# Клонируем репозиторий
git clone https://github.com/yourusername/my-form-app.git
cd my-form-app

# Устанавливаем зависимости
npm install

# Запускаем локальный сервер
npm run dev
```

Открой [http://localhost:5173](http://localhost:5173) в браузере.

