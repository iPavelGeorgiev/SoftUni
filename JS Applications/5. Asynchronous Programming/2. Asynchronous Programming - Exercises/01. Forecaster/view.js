export const weatherSymbols = {
   Sunny: "☀",
   "Partly sunny": "⛅",
   Overcast: "☁",
   Rain: "☂",
   Degrees: "°"
}

export function createCurrentForecastDiv(obj) {
   const name = obj.name;
   const { condition, low, high } = obj.forecast;
   const temp = formTemp(low, high);

   const div = document.createElement("div");
   div.className = "forecast";

   const symbolSpan = createSpan("condition symbol", weatherSymbols[condition]);
   div.appendChild(symbolSpan);

   const mainSpan = createSpan("condition", undefined);

   const nameSpan = createSpan("forecast-data", name);
   const tempSpan = createSpan("forecast-data", temp);
   const conditionSpan = createSpan("forecast-data", condition);

   [nameSpan, tempSpan, conditionSpan].forEach(s => mainSpan.appendChild(s));
   div.appendChild(mainSpan);

   return div;
}

export function createUpcomingForecastDiv(obj) {
   const div = document.createElement("div");
   div.className = "forecast-info";

   obj.forecast
      .forEach(day => {
         const { condition, low, high } = day;
         const temp = formTemp(low, high);

         const mainSpan = createSpan("upcoming", undefined);

         const symbolSpan = createSpan("symbol", weatherSymbols[condition]);
         const tempSpan = createSpan("forecast-data", temp);
         const conditionSpan = createSpan("forecast-data", condition);

         [symbolSpan, tempSpan, conditionSpan].forEach(s => mainSpan.appendChild(s));
         div.appendChild(mainSpan);
      });

   return div;
}

function formTemp(low, high) {
   return `${low}${weatherSymbols.Degrees}/${high}${weatherSymbols.Degrees}`;
}

function createSpan(className, textContent) {
   const span = document.createElement("span");
   span.className = className;

   if (textContent) {
      span.textContent = textContent;
   }
   
   return span;
}