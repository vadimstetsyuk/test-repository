# Custom chart component based on ng2-nvd3 component

- Data displayed as a bar chart;
- bar-chart component match all proportions of the mockup (1369*774 => 435*285)
- The component will become responsive after refreshing the page when you tuning screen width in the browser because all calculates occur inside of component before rendering
- Y-axis contains number values, X-axis - time data (also implemented converting the data by using pipes);
- Each column display a tooltip when mouse hover it

Also, you can select the data you want when hovering over the setting component above chart


If you want to run the app:

1) npm install
2) npm start

If you want to pass all the test:

1) npm install
2) npm test