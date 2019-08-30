import { h } from '../ionic.core.js';

import { b as createColorClasses, d as hostContext } from './chunk-7c632336.js';
import { f as debounceEvent, e as renderHiddenInput, d as findItemLabel } from './chunk-6d7d2f8c.js';

class Input {
    constructor() {
        this.inputId = `ion-input-${inputIds++}`;
        this.didBlurAfterEdit = false;
        this.hasFocus = false;
        this.autocapitalize = 'off';
        this.autocomplete = 'off';
        this.autocorrect = 'off';
        this.autofocus = false;
        this.clearInput = false;
        this.debounce = 0;
        this.disabled = false;
        this.name = this.inputId;
        this.readonly = false;
        this.required = false;
        this.spellcheck = false;
        this.type = 'text';
        this.value = '';
        this.onInput = (ev) => {
            const input = ev.target;
            if (input) {
                this.value = input.value || '';
            }
            this.ionInput.emit(ev);
        };
        this.onBlur = () => {
            this.hasFocus = false;
            this.focusChanged();
            this.emitStyle();
            this.ionBlur.emit();
        };
        this.onFocus = () => {
            this.hasFocus = true;
            this.focusChanged();
            this.emitStyle();
            this.ionFocus.emit();
        };
        this.onKeydown = () => {
            if (this.clearOnEdit) {
                if (this.didBlurAfterEdit && this.hasValue()) {
                    this.clearTextInput();
                }
                this.didBlurAfterEdit = false;
            }
        };
        this.clearTextInput = () => {
            this.value = '';
        };
    }
    debounceChanged() {
        this.ionChange = debounceEvent(this.ionChange, this.debounce);
    }
    disabledChanged() {
        this.emitStyle();
    }
    valueChanged() {
        this.emitStyle();
        this.ionChange.emit({ value: this.value });
    }
    componentWillLoad() {
        if (this.clearOnEdit === undefined && this.type === 'password') {
            this.clearOnEdit = true;
        }
        this.emitStyle();
    }
    componentDidLoad() {
        this.debounceChanged();
        this.ionInputDidLoad.emit();
    }
    componentDidUnload() {
        this.ionInputDidUnload.emit();
    }
    setFocus() {
        if (this.nativeInput) {
            this.nativeInput.focus();
        }
    }
    getValue() {
        return this.value || '';
    }
    emitStyle() {
        this.ionStyle.emit({
            'interactive': true,
            'input': true,
            'has-placeholder': this.placeholder != null,
            'has-value': this.hasValue(),
            'has-focus': this.hasFocus,
            'interactive-disabled': this.disabled,
        });
    }
    focusChanged() {
        if (this.clearOnEdit && !this.hasFocus && this.hasValue()) {
            this.didBlurAfterEdit = true;
        }
    }
    hasValue() {
        return this.getValue().length > 0;
    }
    hostData() {
        return {
            'aria-disabled': this.disabled ? 'true' : null,
            class: Object.assign({}, createColorClasses(this.color), { 'in-item': hostContext('ion-item', this.el), 'has-value': this.hasValue(), 'has-focus': this.hasFocus })
        };
    }
    render() {
        const value = this.getValue();
        renderHiddenInput(false, this.el, this.name, value, this.disabled);
        const labelId = this.inputId + '-lbl';
        const label = findItemLabel(this.el);
        if (label) {
            label.id = labelId;
        }
        return [
            h("input", { class: "native-input", ref: input => this.nativeInput = input, "aria-labelledby": labelId, disabled: this.disabled, accept: this.accept, autoCapitalize: this.autocapitalize, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, autoFocus: this.autofocus, inputMode: this.inputmode, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, multiple: this.multiple, name: this.name, pattern: this.pattern, placeholder: this.placeholder || '', readOnly: this.readonly, required: this.required, spellCheck: this.spellcheck, step: this.step, size: this.size, type: this.type, value: value, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeydown }),
            (this.clearInput && !this.readonly && !this.disabled) && h("button", { type: "button", class: "input-clear-icon", tabindex: "-1", onTouchStart: this.clearTextInput, onMouseDown: this.clearTextInput })
        ];
    }
    static get is() { return "ion-input"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "accept": {
            "type": String,
            "attr": "accept"
        },
        "autocapitalize": {
            "type": String,
            "attr": "autocapitalize"
        },
        "autocomplete": {
            "type": String,
            "attr": "autocomplete"
        },
        "autocorrect": {
            "type": String,
            "attr": "autocorrect"
        },
        "autofocus": {
            "type": Boolean,
            "attr": "autofocus"
        },
        "clearInput": {
            "type": Boolean,
            "attr": "clear-input"
        },
        "clearOnEdit": {
            "type": Boolean,
            "attr": "clear-on-edit",
            "mutable": true
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "debounce": {
            "type": Number,
            "attr": "debounce",
            "watchCallbacks": ["debounceChanged"]
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "watchCallbacks": ["disabledChanged"]
        },
        "el": {
            "elementRef": true
        },
        "hasFocus": {
            "state": true
        },
        "inputmode": {
            "type": String,
            "attr": "inputmode"
        },
        "max": {
            "type": String,
            "attr": "max"
        },
        "maxlength": {
            "type": Number,
            "attr": "maxlength"
        },
        "min": {
            "type": String,
            "attr": "min"
        },
        "minlength": {
            "type": Number,
            "attr": "minlength"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "multiple": {
            "type": Boolean,
            "attr": "multiple"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "pattern": {
            "type": String,
            "attr": "pattern"
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder"
        },
        "readonly": {
            "type": Boolean,
            "attr": "readonly"
        },
        "required": {
            "type": Boolean,
            "attr": "required"
        },
        "setFocus": {
            "method": true
        },
        "size": {
            "type": Number,
            "attr": "size"
        },
        "spellcheck": {
            "type": Boolean,
            "attr": "spellcheck"
        },
        "step": {
            "type": String,
            "attr": "step"
        },
        "type": {
            "type": String,
            "attr": "type"
        },
        "value": {
            "type": String,
            "attr": "value",
            "mutable": true,
            "watchCallbacks": ["valueChanged"]
        }
    }; }
    static get events() { return [{
            "name": "ionInput",
            "method": "ionInput",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionChange",
            "method": "ionChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionBlur",
            "method": "ionBlur",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionFocus",
            "method": "ionFocus",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionInputDidLoad",
            "method": "ionInputDidLoad",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionInputDidUnload",
            "method": "ionInputDidUnload",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionStyle",
            "method": "ionStyle",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".sc-ion-input-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-bottom:0;--padding-start:0;--background:transparent;--color:initial;display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:100%;padding:0!important;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);z-index:2}.ion-color.sc-ion-input-md-h{color:var(--ion-color-base)}.native-input.sc-ion-input-md{border-radius:var(--border-radius);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;-ms-flex:1;flex:1;width:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.native-input.sc-ion-input-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-md:invalid{-webkit-box-shadow:none;box-shadow:none}.native-input.sc-ion-input-md::-ms-clear{display:none}.native-input[disabled].sc-ion-input-md{opacity:.4}.cloned-input.sc-ion-input-md{left:0;top:0;position:absolute;pointer-events:none}.input-clear-icon.sc-ion-input-md{margin:0;padding:0;background-position:50%;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.has-focus.has-value.sc-ion-input-md-h   .input-clear-icon.sc-ion-input-md{visibility:visible}.has-focus.sc-ion-input-md-h{pointer-events:none}.has-focus.sc-ion-input-md-h   a.sc-ion-input-md, .has-focus.sc-ion-input-md-h   button.sc-ion-input-md, .has-focus.sc-ion-input-md-h   input.sc-ion-input-md{pointer-events:auto}.sc-ion-input-md-h{--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:8px;font-size:inherit}.input-clear-icon.sc-ion-input-md{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><polygon%20fill='var(--ion-color-step-600,%20%23666666)'%20points='405,136.798%20375.202,107%20256,226.202%20136.798,107%20107,136.798%20226.202,256%20107,375.202%20136.798,405%20256,285.798%20375.202,405%20405,375.202%20285.798,256'/></svg>\");width:30px;height:30px;background-size:22px}"; }
    static get styleMode() { return "md"; }
}
let inputIds = 0;

export { Input as IonInput };
