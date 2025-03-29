// const translations1 = {
//     en: {
//         title: "Geometric Calculations",
//         area_title: "Area Calculations",
//         select_shape: "Select Shape:",
//         select: "--Select--",
//         square: "Square",
//         rectangle: "Rectangle",
//         triangle: "Triangle",
//         circle: "Circle",
//         side_length: "Side Length:",
//         length: "Length:",
//         width: "Width:",
//         base: "Base:",
//         height: "Height:",
//         radius: "Radius:",
//         calculate: "Calculate Area",
//         reset: "Reset Values",
//         footer: "&copy; 2025 Geometric Calculations. All rights reserved by Eng-Ahmed Eltamimy.",
//         area_result: "Area:"
//     },
//     ar: {
//         title: "الحسابات الهندسية",
//         area_title: "حساب المساحة",
//         select_shape: "اختر الشكل:",
//         select: "--اختر--",
//         square: "مربع",
//         rectangle: "مستطيل",
//         triangle: "مثلث",
//         circle: "دائرة",
//         side_length: "طول الضلع:",
//         length: "الطول:",
//         width: "العرض:",
//         base: "القاعدة:",
//         height: "الارتفاع:",
//         radius: "نصف القطر:",
//         calculate: "احسب المساحة",
//         reset: "إعادة القيم",
//         footer: "&copy; 2025 الحسابات الهندسية. جميع الحقوق محفوظة للمهندس أحمد التميمي.",
//         area_result: "المساحة:" 
//     }
// };

// function changeLanguageall() {
//     const lang = document.getElementById("languageSelector").value;
//     document.documentElement.setAttribute('lang', lang);
//     document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

//     const elements = document.querySelectorAll("[data-translate]");
//     elements.forEach(element => {
//         const key = element.getAttribute("data-translate");
//         element.innerHTML = translations1[lang][key] || element.innerHTML;
//     });
// }

// function translateText(text) {
//     return translations1[document.documentElement.lang]?.[text] || text;
// }

// function showAreaInputs() {
//     const shape = document.getElementById("shape").value;
//     const areaInputs = document.getElementById("areaInputs");
//     areaInputs.innerHTML = "";

//     if (shape === "square") {
//         areaInputs.innerHTML = `<label>${translateText("side_length")}</label> <input type="number" id="sideArea" required>`;
//     } else if (shape === "rectangle") {
//         areaInputs.innerHTML = `<label>${translateText("length")}</label> <input type="number" id="lengthArea" required> <br>
//                                 <label>${translateText("width")}</label> <input type="number" id="widthArea" required>`;
//     } else if (shape === "triangle") {
//         areaInputs.innerHTML = `<label>${translateText("base")}</label> <input type="number" id="base" required> <br>
//                                 <label>${translateText("height")}</label> <input type="number" id="height" required>`;
//     } else if (shape === "circle") {
//         areaInputs.innerHTML = `<label>${translateText("radius")}</label> <input type="number" id="radius" required>`;
//     }
// }

// function calculateArea() {
//     const shape = document.getElementById("shape").value;
//     let area;

//     if (shape === "square") {
//         const side = parseFloat(document.getElementById("sideArea").value);
//         area = side * side;
//     } else if (shape === "rectangle") {
//         const length = parseFloat(document.getElementById("lengthArea").value);
//         const width = parseFloat(document.getElementById("widthArea").value);
//         area = length * width;
//     } else if (shape === "triangle") {
//         const base = parseFloat(document.getElementById("base").value);
//         const height = parseFloat(document.getElementById("height").value);
//         area = 0.5 * base * height;
//     } else if (shape === "circle") {
//         const radius = parseFloat(document.getElementById("radius").value);
//         area = Math.PI * Math.pow(radius, 2);
//     }

//     document.getElementById("areaResult").innerText = `${translateText("area_result")} ${area.toFixed(2)}`;
// }

// function resetForm(formId, inputsId, resultId) {
//     document.getElementById(formId).reset();
//     document.getElementById(inputsId).innerHTML = "";
//     document.getElementById(resultId).innerText = "";
// }

// const translations1 = {
//     en: {
//         title: "Geometric Calculations",
//         area_title: "Area Calculations",
//         perimeter_title: "Perimeter Calculations",
//         select_shape: "Select Shape:",
//         select: "--Select--",
//         square: "Square",
//         rectangle: "Rectangle",
//         triangle: "Triangle",
//         circle: "Circle",
//         side_length: "Side Length:",
//         length: "Length:",
//         width: "Width:",
//         base: "Base:",
//         height: "Height:",
//         radius: "Radius:",
//         calculate: "Calculate Area",
//         calculate_perimeter: "Calculate Perimeter",
//         reset: "Reset Values",
//         footer: "&copy; 2025 Geometric Calculations. All rights reserved by Eng-Ahmed Eltamimy.",
//         area_result: "Area:",
//         perimeter_result: "Perimeter:"
//     },
//     ar: {
//         title: "الحسابات الهندسية",
//         area_title: "حساب المساحة",
//         perimeter_title: "حساب المحيط",
//         select_shape: "اختر الشكل:",
//         select: "--اختر--",
//         square: "مربع",
//         rectangle: "مستطيل",
//         triangle: "مثلث",
//         circle: "دائرة",
//         side_length: "طول الضلع:",
//         length: "الطول:",
//         width: "العرض:",
//         base: "القاعدة:",
//         height: "الارتفاع:",
//         radius: "نصف القطر:",
//         calculate: "احسب المساحة",
//         calculate_perimeter: "احسب المحيط",
//         reset: "إعادة القيم",
//         footer: "&copy; 2025 الحسابات الهندسية. جميع الحقوق محفوظة للمهندس أحمد التميمي.",
//         area_result: "المساحة:",
//         perimeter_result: "المحيط:" 
//     }
// };

// function changeLanguageall() {
//     const lang = document.getElementById("languageSelector").value;
//     document.documentElement.setAttribute('lang', lang);
//     document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

//     const elements = document.querySelectorAll("[data-translate]");
//     elements.forEach(element => {
//         const key = element.getAttribute("data-translate");
//         element.innerHTML = translations1[lang][key] || element.innerHTML;
//     });
// }

// function translateText(text) {
//     return translations1[document.documentElement.lang]?.[text] || text;
// }

// function showPerimeterInputs() {
//     const shape = document.getElementById("perimeterShape").value;
//     const perimeterInputs = document.getElementById("perimeterInputs");
//     perimeterInputs.innerHTML = "";

//     if (shape === "square") {
//         perimeterInputs.innerHTML = `<label>${translateText("side_length")}</label> <input type="number" id="sidePerimeter" required>`;
//     } else if (shape === "rectangle") {
//         perimeterInputs.innerHTML = `<label>${translateText("length")}</label> <input type="number" id="lengthPerimeter" required> <br>
//                                      <label>${translateText("width")}</label> <input type="number" id="widthPerimeter" required>`;
//     } else if (shape === "triangle") {
//         perimeterInputs.innerHTML = `<label>${translateText("side_length")} 1</label> <input type="number" id="side1" required> <br>
//                                      <label>${translateText("side_length")} 2</label> <input type="number" id="side2" required> <br>
//                                      <label>${translateText("side_length")} 3</label> <input type="number" id="side3" required>`;
//     }
// }

// function calculatePerimeter() {
//     const shape = document.getElementById("perimeterShape").value;
//     let perimeter;

//     if (shape === "square") {
//         const side = parseFloat(document.getElementById("sidePerimeter").value);
//         perimeter = 4 * side;
//     } else if (shape === "rectangle") {
//         const length = parseFloat(document.getElementById("lengthPerimeter").value);
//         const width = parseFloat(document.getElementById("widthPerimeter").value);
//         perimeter = 2 * (length + width);
//     } else if (shape === "triangle") {
//         const side1 = parseFloat(document.getElementById("side1").value);
//         const side2 = parseFloat(document.getElementById("side2").value);
//         const side3 = parseFloat(document.getElementById("side3").value);
//         perimeter = side1 + side2 + side3;
//     }

//     document.getElementById("perimeterResult").innerText = `${translateText("perimeter_result")} ${perimeter.toFixed(2)}`;
// }

// function resetForm(formId, inputsId, resultId) {
//     document.getElementById(formId).reset();
//     document.getElementById(inputsId).innerHTML = "";
//     document.getElementById(resultId).innerText = "";
// }
 
const translations1 = {
    en: {
        title: "Geometric Calculations",
        area_title: "Area Calculations",
        perimeter_title: "Perimeter Calculations",
        volume_title: "Volume Calculations",
        select_shape: "Select Shape:",
        select: "--Select--",
        square: "Square",
        rectangle: "Rectangle",
        triangle: "Triangle",
        circle: "Circle",
        cube: "Cube",
        side_length: "Side Length:",
        length: "Length:",
        width: "Width:",
        base: "Base:",
        height: "Height:",
        radius: "Radius:",
        calculate: "Calculate Area",
        calculate_perimeter: "Calculate Perimeter",
        calculate_volume: "Calculate Volume",
        reset: "Reset Values",
        footer: "&copy; 2025 Geometric Calculations. All rights reserved by Eng-Ahmed Eltamimy.",
        area_result: "Area:",
        perimeter_result: "Perimeter:",
        volume_result: "Volume:" 
    },
    ar: {
        title: "الحسابات الهندسية",
        area_title: "حساب المساحة",
        perimeter_title: "حساب المحيط",
        volume_title: "حساب الحجم",
        select_shape: "اختر الشكل:",
        select: "--اختر--",
        square: "مربع",
        rectangle: "مستطيل",
        triangle: "مثلث",
        circle: "دائرة",
        cube: "مكعب",
        side_length: "طول الضلع:",
        length: "الطول:",
        width: "العرض:",
        base: "القاعدة:",
        height: "الارتفاع:",
        radius: "نصف القطر:",
        calculate: "احسب المساحة",
        calculate_perimeter: "احسب المحيط",
        calculate_volume: "احسب الحجم",
        reset: "إعادة تعيين القيم",
        footer: "&copy; 2025 الحسابات الهندسية. جميع الحقوق محفوظة للمهندس أحمد التميمي.",
        area_result: "المساحة:",
        perimeter_result: "المحيط:",
        volume_result: "الحجم:" 
    }
};

function changeLanguageall() {
    const lang = document.getElementById("languageSelector").value;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(element => {
        const key = element.getAttribute("data-translate");
        element.innerHTML = translations1[lang][key] || element.innerHTML;
    });

    // إعادة ترجمة النتائج عند تبديل اللغة
    updateResults();
}

function translateText(text) {
    return translations1[document.documentElement.lang]?.[text] || text;
}

function showVolumeInputs() {
    const shape = document.getElementById("volumeShape").value;
    const volumeInputs = document.getElementById("volumeInputs");
    volumeInputs.innerHTML = "";

    if (shape === "cube") {
        volumeInputs.innerHTML = `<label data-translate="side_length">${translateText("side_length")}</label> <input type="number" id="sideVolume" required>`;
    }
}

function calculateVolume() {
    const shape = document.getElementById("volumeShape").value;
    let volume;

    if (shape === "cube") {
        const side = parseFloat(document.getElementById("sideVolume").value);
        volume = Math.pow(side, 3);
    }

    document.getElementById("volumeResult").innerText = `${translateText("volume_result")} ${volume.toFixed(2)}`;
}

function resetForm(formId, inputsId, resultId) {
    document.getElementById(formId).reset();
    document.getElementById(inputsId).innerHTML = "";
    document.getElementById(resultId).innerText = "";
}

function updateResults() {
    const volumeResult = document.getElementById("volumeResult").innerText;
    if (volumeResult) {
        const resultValue = volumeResult.split(' ')[1];
        document.getElementById("volumeResult").innerText = `${translateText("volume_result")} ${resultValue}`;
    }
}


