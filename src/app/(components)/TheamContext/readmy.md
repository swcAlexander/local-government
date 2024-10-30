Для реалізації світлої і темної теми використав контекст React. Огорнув в rootlayout в ThemeProvider, в хедері використав useTheme, в global.css додав
змінні:

[data-theme='dark'] {
--background-color: #000000;
--text-color: #ffffff;
}
