import * as React from 'react';
var hiragana = [
    ["あ", "い", "う", "え", "お"],
    ["か", "き", "く", "け", "こ"],
    ["さ", "し", "す", "せ", "そ"],
    ["た", "ち", "つ", "て", "と"],
    ["な", "に", "ぬ", "ね", "の"],
    ["は", "ひ", "ふ", "へ", "ほ"],
    ["ま", "み", "む", "め", "も"],
    ["や", "", "ゆ", "", "よ"],
    ["ら", "り", "る", "れ", "ろ"],
    ["わ", "", "を", "", "ん"]
];
var useState = React.useState, useEffect = React.useEffect, useRef = React.useRef;
var isDescendant = function (parent, child) {
    var node = child.parentNode;
    while (node !== null) {
        if (node === parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
};
export default (function (props) {
    var _a = useState(props.value), value = _a[0], setValue = _a[1];
    var _b = useState(false), open = _b[0], setOpen = _b[1];
    var picker = useRef(null);
    useEffect(function () {
        var listener = function (e) {
            if (e.target !== picker.current && !isDescendant(picker.current, e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('click', listener);
        return function () {
            document.removeEventListener('click', listener);
        };
    });
    return (React.createElement("div", { className: "hiragana-picker", ref: picker },
        React.createElement("button", { type: "button", className: "hiragana-picker__btn", onClick: function () {
                setOpen(!open);
            } }, value),
        open && React.createElement("div", { className: "hiragana-picker__list-wrap" },
            React.createElement("ul", { className: "hiragana-picker__list" }, hiragana.map(function (item) {
                return (React.createElement("li", { className: "hiragana-picker__item" }, item.map(function (child) {
                    return (React.createElement("button", { className: "hiragana-picker__list-btn", type: "button", onClick: function () {
                            setValue(child);
                            props.onChange(child);
                            setOpen(false);
                        } }, child));
                })));
            })))));
});
//# sourceMappingURL=index.js.map